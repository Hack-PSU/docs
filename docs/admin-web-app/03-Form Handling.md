---
sidebar_position: 3
id: form-handling
---

# Form Handling

The admin web app relies heavily on form handling and managing form states. To simplify this, there are some 
abstractions built into designing handling a complex form that can multiple pages, conditionally showing form fields,
and building simple forms quickly.

Every form type (text fields, select fields, checkboxes, etc.) has three variants. These three variants have specific
type generics to provide easy integration to building new form types.

## Variants

### Base Input

The base input variant is the basis of the form type. This is an implementation of an input element that applies 
the default styles and functionalities; it should be generic and extensible. For this documentation we will assume
the `BaseInputProps` is the type used for the input element props and `BaseInput` is the name of the component.

### Labelled Input

The labelled input variant is built with the addition of an input label. Labelled inputs show custom error messages
surrounding the input element.

#### Generating Types
```ts
type LabelledBaseInputProps = WithLabelledProps<BaseInputProps>
```

The `WithLabelledProps` type generic will include default props for a labelled input.

#### Building a Labelled Input

```tsx
const LabelledBaseInput: FC<LabelledBaseInputProps> = ({ id, label, showError, error, ...props }) => {
  return (
    <>
      <InputLabel id={id} showError={showError} label={label} error={error} />
      <Box mt={0.6}>
        <BaseInput error={error} {...props} />
      </Box>
    </>
  );
}
```

The `InputLabel` component is a generic component to display an error and a label for a given input element. 

### Controlled Input

The controlled input is a variant that uses `react-hook-form` to manage states of form input into a single source
of truth. It exposes a React context that provides the ability to watch for values, react to changes, and 
render input elements deep within an element tree.

#### Generating Types

```ts
type ControlledBaseInputProps = WithControllerProps<
  BaseInputProps & Partial<InputLabelProps>
>;
```

The `ControlledBaseInputProps` combines the functionalities of a `BaseInput` and a `LabelledBaseInput`.

#### Building a Controlled Input

```tsx
const ControlledBaseInput: FC<ControlledBaseInputProps> = ({  
  as: Component,
  name,
  rules,
  defaultValue,
  ...props
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({ name, rules, defaultValue });
  
  if (Component) {
    return (
      <Component 
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error?.message ?? ""}
        {...props}
      />
    );
  } 
  
  return (
    <BaseInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={error?.message ?? ""}
      {...props}
    />
  );
}
```

The `ControlledBaseInput` uses a `useController` hook from `react-hook-form` to attach itself into the global form 
handling context.

#### Polymorphic Components

In addition to the context approach of managing states, a controlled input can also accept the styles or functionality
of other similar input elements. This approach is called **Polymorphic** components and is done through the 
`as` prop in the `ControlledBaseInput` component.

If we have a component called `StyledInput` that is implemented using `BaseInput`, we can render `ControlledBaseInput`
using `StyledInput` instead of `BaseInput`.

```tsx
const StyledInput: FC<BaseInputProps> = (props) => {
  return (
    <BaseInput
      {/* other styling props */}
      {...props}
    />
  );
}

// In main form page
<ControlledBaseInput
  as={StyledInput}
  {...props}
/>
```

#### Using Controlled Forms

To use a controlled form, there needs to be a [`FormProvider`](https://react-hook-form.com/api/formprovider) present
within the form page. 

:::tip

When creating forms that span multiple pages, for example a stepper or multistep form designs, use separate
`FormProvider` and opt for a global state management -- we use `zustand` in this project.

:::

Set up the `FormProvider` integration using the `useForm` hook from `react-hook-form`.

```tsx
const methods = useForm({
  defaultValues: {
    //...insert default fields and their values
    //...make sure default fields match their controlled input names
  }
});

<FormProvider {...methods}>
  {/* insert controlled form components */}
</FormProvider>
```

:::info

Like any other React context, we can wrap `FormProvider` around the entire page and not only the controlled form 
components.

:::
