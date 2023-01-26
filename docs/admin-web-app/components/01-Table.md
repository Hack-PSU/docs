---
sidebar_position: 1
id: table
--- 

# Table

The `Table` component is a flexible, data-generic, and customizable table component that maintains the consistency
of design and API. The `Table` component is a wrapper over the 
[React Table](https://tanstack.com/table/v8/docs/guide/introduction) library and abstracts the configuration 
required to create a stable and data-generic component. 

The `Table` component uses a nested component pattern to access certain features of the table. Most of its features
are optional and can be easily opted out by building a different skeleton. Some structures however, are required
for the table component to render correctly.

## Skeleton

Below is the full-featured skeleton of the `Table` component integrated with
[useColumnDef](/docs/admin-web-app/hooks/use-column-def) and [useTable](/docs/admin-web-app/hooks/use-table):
```tsx
const defs = useColumnDef({
  columns: [
    //...insert column defs
  ]
});

const table = useTable({
  ...defs,
  data
});

<Table {...table}>
  <Table.GlobalActions>
    <Table.GlobalRefresh onRefresh={onRefresh} />
    <Table.GlobalPageSize />
  </Table.GlobalActions>
  <Table.Container>
    <Table.Actions
      center={<Table.PaginationAction />}
      right={<Table.DeleteAction onDelete={onDelete} />}
    />
    <Table.Content>
      <Table.Header />
      <Table.Body />
    </Table.Content>
  </Table.Container>
</Table>
```

## Table Root

The table root component is the `Table` component itself. Without the `Table` component, none of the functionality
and states extracted from the `useTable` hook (see [useTable](/docs/admin-web-app/hooks/use-table)) will be inherited
by other components. The `Table` component holds a React context that will pass down states into respective components.

## GlobalActions

Global actions are a subset of the table actions available. They manage the table states as a whole, for example to
filter specific fields in the data through a search bar, control the page size, or refresh the data. By default, the 
search bar is always included as it is the only way to filter through the data. 

## GlobalRefresh

The `Table.GlobalRefresh` component is a refresh button that can be binded to an external refresh logic.

### Props

#### `onRefresh`

```ts
onRefresh: () => void
```

The refresh function to be binded to the table refresh button.

## GlobalPageSize

The `Table.GlobalPageSize` controls the page size for which the table will be paginated. The default value is 8.

## Container

The `Table.Container` is a required component that draws the boundaries of the table and applies the correct styles.

## Actions

The `Table.Actions` is the first row of the table and shows controls to display rows of the table. Some existing actions
are to paginate through the table and delete selected entries. However, it is possible to create a new action and 
insert them as a JSX node within the `Table.Actions` component.

### Props

#### `left`

```ts
left?: React.ReactNode
```

A React Node that will be used to render the left side of the table actions row.

#### `center`

```ts
center?: React.ReactNode
```

A React Node that will be used to render the center of the table actions row.

#### `right`

```ts
right?: React.ReactNode
```

A React Node that will be used to render the right side of the table actions row.

## PaginationAction

The `Table.PaginationAction` maintains the state of a paginated table and reacts to changes in page sizes.

## DeleteAction

The `Table.DeleteAction` is a delete button that shows a confirmation modal and performs the delete callback function 
on a successful confirmation.

### Props

#### `onDelete`

```ts
onDelete: () => void
```

The `onDelete` callback function is called after a successful confirmation modal.

## Content

The `Table.Content` component applies styles to properly display the header and body of the table.

## Header

The `Table.Header` component renders the headers accumulated from customizing the columns in 
[useColumnDef](/docs/admin-web-app/hooks/use-column-def).

## Body

The `Table.Body` component renders all the rows depending on the selected values from each data object.
