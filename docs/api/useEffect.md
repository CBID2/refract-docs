---
id: useEffect
---
# useEffect

The `useEffect` hook runs side effects when your component’s state or props change. It’s inspired by [React’s useEffect](https://react.dev/reference/react/useEffect), but integrates directly with refractions.

## Parameters

`useEffect(effect: () => void, dependencies?: Array<any>): void`

The `useEffect` hook accepts two parameters:

1. `effect (() => void)`: The function that contains your side-effect logic. This function will run after the component renders and whenever the dependencies change.

1. `dependencies (Array<any>)`: An optional array of values (typically refractions) that the effect depends on. The effect will re-run only when a value in this array changes. If you omit this array, the effect will run after every render.

## Returns

`void`

The `useEffect` hook does not return a value.

## Example

```js
import { createComponent, useRefraction, useEffect } from 'refract';

const Logger = createComponent(() => {
  const [count, setCount] = useRefraction(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
});
```

This example shows how `useEffect` can be used to run a side effect, such as logging a message to the console, whenever the count refraction changes.
