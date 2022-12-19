---
sidebar_position: 2
id: use-column-def
---

# useColumnDef

The `useColumnDef` hook provides a typed format to defining columns and customizing the cells shown in the `Table`. 
The `Table` component provides defaults for cells showing an input field and text field, but a custom cell can be
created using the hook in which the `Table` will respect given a user-defined cell component. 

The hook returns an object of metadata information for the `Table` and should all be included in the `useTable` hook.

```ts
type useColumnDef = <TData extends RowData>(
  options: UseColumnDefOptions<TData>
) => UseColumnDefReturn<TData>
```

## Options

### `columns`

```ts
type TableColumnDef<TData extends RowData> = ColumnDef<TData> & {
  type: "input" | "text" | "custom";
  format?: (value: unknown) => string;
  inputName?: string;
  placeholder?: string;
}

columns: TableColumnDef<TData>[];
```

The `columns` option extends the [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) type from 
React Table by providing an interface for default cell components. The `format` field in a column definition sets
the column's [formatter](/docs/admin-web-app/hooks/use-table#formatter). `inputName` and `placeholder` is only required
when the `type` field is set to `input`.

Using the `input` type also requires a `FormProvider` to work properly 
(see [form handling](/docs/admin-web-app/form-handling)).

### `useRowSelection`

```ts
useRowSelection?: boolean
```

Toggles whether row selection should be used. By default, a row selection action will be available on all default 
row configurations. This flag does not differentiate between different pages -- row selections will span across multiple
table pages. Defaults to `true`.

### `usePageRowSelection`

```ts
usePageRowSelection?: boolean
```

Toggles whether the header row selection action should select rows per table page. Defaults to `false`.

:::caution

There is a bug when using this in which the header row checkbox is not able to deselect selected rows when all rows
are selected. This is why `useRowSelection` is set as the default.

:::

