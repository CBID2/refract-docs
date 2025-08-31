---
id: createComponent
---
# createComponent

The `createComponent` function is the starting point for building Refract components.  
It works like React’s `function Component()` but adds Refract’s [**refractions** system](/docs/concepts/refractions.md) for handling state flows.

---

## Parameters

`createComponent(component: (hooks: Hooks) => React.Element): React.Component`

The `createComponent` function accepts a single parameter: a function that defines your component. This function is similar to a standard functional component but receives a hooks object as its only argument.

The hooks object contains all the Refract-specific hooks you'll need, such as:

- `useRefraction`: The primary hook for creating and interacting with refractions.

## Returns

`React.Component`

The function returns a standard React component that you can use in your application's JSX.

## Example

```js
import { createComponent } from 'refract';

const Counter = createComponent(({ useRefraction }) => {
  const [count, setCount] = useRefraction(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
});
```

In the above example, the counter app uses `createComponent` to manage the count and updates the value on each button click.
