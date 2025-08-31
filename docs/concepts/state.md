---
id: state
---

# State

## What is State?

**State** is the data your UI needs to “remember” so it can show the right thing at the right time.

---

## Example

Think of state like the **scoreboard at a sports game**:

- The number on the board is the **state**.
- Each time a team scores, the number changes.
- The scoreboard updates immediately so the audience sees the latest score.

Your app works the same way: when state changes, the UI updates.

---

## In Refract

In Refract, state is represented by the [`useRefraction`](/docs/api/useRefraction.md) hook. It works like React’s [`useState`](https://react.dev/reference/react/useState) hook but uses Refract’s model of state as refractions.

```js
const [count, setCount] = useRefraction(0);
```
