---
sidebar_position: 3
id: counter-app
---

# Counter App

In this tutorial, you’ll build your first Refract component: a **simple counter**.

---

## Step 1: Set up the component

Use [`createComponent`](/docs/api/createComponent.md) as your starting point. From there, you can use [`useRefraction`](/docs/api/useRefraction.md) to manage [**state**](/docs/concepts/state.md) and render your UI:

```js
import { createComponent, useRefraction } from 'refract';

const Counter = createComponent(() => {
  const [count, setCount] = useRefraction(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
});
```

## Step 2: Add to your application

Render your component as part of your UI:

```js
function App() {
  return <Counter />;
}
```

:::tip Pro Tip
Components in Refract are reusable, so you could add `<Counter />` multiple times in the same application. Each one keeps its own state.
:::

## What you learned

- How to define a component with `createComponent`.
- How to manage state with `useRefraction`.
- How state updates trigger UI changes.

Congratulations! 🥳  You now have a working interactive counter!
