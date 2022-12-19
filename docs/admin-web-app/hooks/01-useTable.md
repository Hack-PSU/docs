---
sidebar_position: 1
id: use-table
---

# useTable

The `useTable` provides core API integration with the React Table framework. It ensures some defaults that every table
component should have and consolidates these options into a single interface to customize the table.

```ts
type useTable = <TData extends RowData>(
  options: UseTableOptions<TData>
) => UseTableReturn<TData>
```

The `UseTableOptions` type extends `TableOptions` from React Table 
(see [here](https://tanstack.com/table/v8/docs/api/core/table#data) for more info).

## Options

The following options are the additions made to configure the generic [Table](/docs/admin-web-app/components/table) 
component.

### `usePagination`

```ts
usePagination?: boolean
```

Toggles whether a [pagination model](https://tanstack.com/table/v8/docs/api/features/pagination#getpaginationrowmodel) 
will be used. Defaults to `true`.

### `useExpanded`

```ts
useExpanded?: boolean
```

Toggles whether an [expanded model](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandedrowmodel)
will be used. The functionality itself does not come from React Table, but is instead configured together with
[`renderSubRows`](#renderSubRows). Defaults to `false`.

### `useFilter`

```ts
useFilter?: boolean
```

Toggles whether a [filter model](https://tanstack.com/table/v8/docs/api/features/filters#getfilteredrowmodel)
will be used. This functionality allows global filters through the search bar. Defaults to `true`.

### `useSorted`

```ts
useSorted?: boolean
```

Toggles whether a [sorted model](https://tanstack.com/table/v8/docs/api/features/sorting#getsortedrowmodel)
will be used. This functionality will allow column-wise sorting. Defaults to `true`.

### `useDraggable`

```ts
useDraggable?: boolean
```

Toggles whether rows should be draggable using `react-beautiful-dnd`. Defaults to `false`.

### `formatter`

```ts
type ColumnFormatterMeta = {
  [key: string]: (value: unknown) => string
}

formatter?: ColumnFormattterMeta
```

`formatter` allows arbitrary cell values from the data object to be formatted. This can either be set through this hook
or by using the [useColumnDef](/docs/admin-web-app/hooks/use-column-def) hook.

### `columnType`

```ts
type ColumnTypeMeta = {
  [key: string]: 
    | {
        type: "text" | "custom";
      }
    | {
        type: "input";
        inputName: string;
        placeholder: string;
      }  
}

columnType?: ColumnTypeMeta
```

`columnType` is an object specifying each column's type and how it should be rendered. This will be used when rendering
rows to either display a text, input, or custom cell. When using [useColumnDef](/docs/admin-web-app/hooks/use-column-def)
this configuration is automatically generated from the column definition.

### `renderSubRows`

```ts
renderSubRows?: <TData extends RowData>(
  row: TData
) => React.ReactNode
```

`renderSubRows` receives the current row that has a nested structure for rendering expanded rows (see the judging table).
It returns a React node that will be used as the hidden row given that `useExpanded` is set to `true`.

### `onDragEnd`

An extraction of the `onDragEnd` method provided in `react-beautiful-dnd`. 
See [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/types.md#responders) 
for documentation.

### `getDraggableOrder`

```ts
getDraggableOrder?: (item: TData) => number
```

`getDraggableOrder` extracts the order of the row from a data object.
