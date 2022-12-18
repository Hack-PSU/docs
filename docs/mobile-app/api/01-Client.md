---
sidebar_position: 1
id: client
---

# API Client

The API Client is an abstraction of the `http` library that includes some configurations to craft a request and extract
the response. 

To create a client instance with a token attached to the request:
```dart
final client = Client.withToken(idToken);
```

To extract the body from the response we can use the `ApiResponse` class to extract the JSON body:
```dart
final apiResponse = ApiResponse.fromJson(json.decode(response.body));
```

To craft a `POST` request with a JSON body, we need to encode the body as JSON to successfully send the request. The
`Client` class ensures that all `POST` requests adhere to the JSON body data type.
```dart
await client.post(
  Uri.parse($_endpoint),
  body: jsonEncode({
    //...insert body here
  }),
);
```
