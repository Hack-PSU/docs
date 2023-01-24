---
sidebar_position: 5
id: page-layout
---

# Page Layout

NextJS allows pages to have nested layouts that will wrap around the page when it is rendered.

## Default Layout

The most common layout that each page should use except those without a logged-in state, is the Default Layout.
An _HOC_ is used to render the required components and integrate it within the page.

```ts
type withDefaultLayout = <TProps>(page: NextPageLayout<TProps>) => NextPageLayout<TProps>
```

`withDefaultLayout` takes a page component and renders out the required layout components.

### Usage

```tsx
const Page: NextPage<Props> = () => {
  return (
    <PageContent />
  );
};

export default withDefaultLayout(Page);
```

