---
id: useRefraction
---
# useRefraction

The `useRefraction` hook manages reactive state inside a Refract component. It’s similar to [`useState` in React](https://react.dev/reference/react/useState), but follows Refract’s model of state as refractions.

## Parameters

`useRefraction<T>(initialValue: T): [T, (value: T) => void]`

The `useRefraction` hook accepts a single parameter:

- `initialValue` (`T`): The initial value for the refraction. This can be any serializable data type.

## Returns

An array with two elements:

1. The current value of the refraction (`T`).

1. A setter function that updates the refraction's value.

## Example

```js
import { createComponent, useRefraction } from 'refract';

const ThemeToggle = createComponent(() => {
  const [theme, setTheme] = useRefraction("light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
});
```

This example demonstrates how to use `useRefraction` to manage a component's state, in this case, toggling between a "light" and "dark" theme on a button click.
