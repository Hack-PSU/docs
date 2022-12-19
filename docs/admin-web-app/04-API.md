---
sidebar_position: 4
id: api
---

# API

Another operation the admin web app relies heavily on is data fetching from multiple api. Currently, in API V2, 
the data api, notification api, and WebSocket api are separated as they have conflicting requirements. 

## Authorization

To make sure that all requests are made with the correct authorization, every request made to each api will always be 
sent using a Firebase Auth token. To abstract this logic, we use Axios interceptors and perform a token refresh
whenever a request fails.

We can build an api integration like the following:
```ts
const api = axios.create({
  baseURL: "https://api-base-url.com"  // insert baseURL
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    const isRefreshNeeded =
      shouldRefreshToken(request) &&
      error.response.status === 401 && 
      !request._retried;
    
    if (isRefreshNeeded) {
      request._retried = true;
      await refreshToken(request, api, true);
    }
    return Promise.reject(error);
  }
);
```

The full implementation of each function in the snippet can be found 
[here](https://github.com/Hack-PSU/admin-web-app/blob/main/common/api/axios.ts). In order to fully integrate the api
into the Firebase Auth lifecycle, we need to watch for user refreshes and token revokes.

The following can be found in the 
[`FirebaseProvider`](https://github.com/Hack-PSU/admin-web-app/blob/main/components/context/FirebaseProvider.tsx):
```ts
// in api integration file
const initApi = async (user: User) => {
  if (user) {
    instance.defaults.headers.common["idtoken"] = await getIdToken(user);
  }
};

const resetApi = () => {
  delete instance.defaults.headers.common["idtoken"];
  delete instance.defaults.headers.common["exp"];
};

// in FirebaseProvider
useEffect(() => {
  return onIdTokenChanged(auth, async (user) => {
    if (user) {
      await initApi(user);
    } else {
      resetApi();
    }
  })
}, [auth]);
```

The `initApi` and `resetApi` initializes and destroys an instance of the api integration. The former is to inject
the user token into the api headers and the latter is to remove it.

## Endpoints

API endpoints define the separation of caching for data fetches. To create a more robust integration with caching,
we use [React Query](https://tanstack.com/query/v4/docs/react/overview), which will allow us to invalidate
queries declaratively and react to data changes across multiple pages.

React Query uses a concept called `QueryKeys` to generate _keys_ that will be used to identify cached data. The way
we define a `QueryKey` is flexible, but to maintain consistency across all `QueryKeys` we use the following format 
to integrate a new API endpoint.

```
common
└── api
    └── <endpoint entity>
        ├── entity.ts
        ├── index.ts 
        └── queries.ts 
```

The `index.ts` file exports all entities from `entity.ts` and all queries and query keys from `queries.ts`. 
This is known as a *barrel* file.

### Entities

The `entity.ts` contains all type interfaces that all endpoint queries will use. This can include any request or
response objects.

### Queries

The `queries.ts` file can be broken up into 2 sections, the endpoint definitions and the query key definitions.

#### Endpoint Definitions

There are a number of abstractions created to easily create endpoint definitions. This ensures:

1. Type consistency when used in pages
2. Type inference when using React Query
3. Consistency across interfaces used to fetch data

To create a query or a `GET` request, we use:
```ts
export const getEndpoint: CreateQueryReturn<
  IResponseObject,
  Params
> = createQuery<IResponseObject>("/get/endpoint");
```

The `CreateQueryReturn` type generic ensures easy integration with the `fetch` function explained [below](#fetching).
```ts
type ApiResponse<TData> = {
  api_response: string;
  status: number;
  body: {
    status: string;
    data: TData;
  };
};

type QueryReturn<TResponse> = AxiosResponse<ApiResponse<TResponse>>;

type CreateQueryReturn<TResponse, TParam = {}> = (
  params?: TParam,
  token?: string,
) => Promise<QueryReturn<TResponse>>;
```

The `createQuery` function is a closure that takes in a string for the endpoint to query and returns another
function that allows customization of query params when fetching using React Query. 
```ts
type createQuery = <TResponse, TParam = {}>(
  url: string,
  instance: ApiAxiosInstance = api
) => CreateQueryReturn<TResponse, TParam>
```

To create a mutation, such as a `POST` or a `PATCH` request:
```ts
export const postEndpoint: CreateMutationReturn<
  IRequestEntity,
  IResponseEntity
> = createMutation("/post/endpoint");
```

The `CreateMutationReturn` type generic ensures the same integration as `CreateQueryReturn`.
```ts
type CreateMutationReturn<TEntity, TResponse = TEntity, TParam = {}> = (
  entity: TEntity,
  params?: TParam,
  token?: string
) => Promise<QueryReturn<TResponse>>
```

The `createMutation` function is a closure that takes in the url endpoint and an optional method.
```ts
type createMutation = <TEntity, TResponse, TParam = {}>(
  url: string,
  method: Method = "POST",
  instance: ApiAxiosInstance = api
) => CreateMutationReturn<TEntity, TResponse, TParam>
```

#### Query Keys

`QueryKeys` control the keys used to manage cache and invalidate them. To manage `QueryKeys` in a more deterministic
approach, we use the following `QueryKey` factory. We will use the `Event` endpoint entity as an example:

```ts
// in queries.ts
export const EventKeys = {
  all: [{ entity: "event" }] as const,
  findAll: () =>
    [
      {
        ...EventKeys.all[0], action: QueryAction.query, scope: QueryScope.ALL
      }
    ] as const,
  findById: (id: string | number) => 
    [{ ...EventKeys.all[0], action: QueryACtion.query, scope: id }] as const,
  update: (id: string | number) =>
    [{ ...EventKeys.all[0], action: QueryAction.update, scope: id }] as const,
  delete: (id: string | number) =>
    [{ ...EventKeys.all[0], action: QueryAction.delete, scope: id }] as const,
};
```

We can then export the query keys for this endpoint together with other `QueryKeys` of other endpoints. We define
this in `common/api/index.ts`:

```ts
// in common/api/index.ts
import { EventKeys } from "./event"

export const QueryKeys = {
  //...insert other query keys
  event: EventKeys,
};

export * from './event';
```

## Fetching

We can use `QueryKeys` and the endpoints defined above to integrate with React Query.

To compensate for the structure of the api response, we use the `fetch` function to extract the response. This makes
type inferencing easier for TypeScript and reduce the need to pass in type generics into the `useQuery` or `useMutation`
hooks.

```ts
type fetch = <TResponse>(
  queryFn: () => Promise<QueryReturn<TResponse>>
) => Promise<TResponse | undefined>
```

To perform a `GET` request, we can use the 
[`useQuery`](https://tanstack.com/query/v4/docs/react/reference/useQuery) 
hook:
```ts
const { data } = useQuery(
  QueryKeys.event.findOne(),
  () => fetch(getEndpoint),
);
```

To perform a `POST` request, we can use the
[`useMutation`](https://tanstack.com/query/v4/docs/react/reference/useMutation)
hook:
```ts
const { mutateAsync } = useMutation(
  ({ entity }) => fetch(() => postEndpoint(entity))
);
```

## Caching

Using React Query we can manage caching by invalidating caches after performing any request that can change the data.
For example, we can invalidate the cache corresponding to all event endpoints when we add a new event to refresh
the event table:

```ts
const queryClient = useQueryClient();

const { mutateAsync } = useMutation(
  ({ entity }) => fetch(() => postEndpoint(entity)),
  {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryKeys.event.all);
    }
  }
);
```
