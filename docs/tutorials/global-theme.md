---
sidebar_position: 2
id: global-theme
---

# Build a Global Theme Toggle

In this tutorial, you’ll create a **theme switcher** that toggles between light and dark mode.

---

## Step 1: Set up state

Just like in the counter example, use `useRefraction` inside your component to store the theme.

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

## Step 2: Apply the theme globally

You can pass the `theme` value down to style your whole app.

```js
function App() {
  return (
    <div className={theme}>
      <ThemeToggle />
    </div>
  );
}
```

:::tip Pro Tip
Global state like theme can affect the entire app.
By sharing one piece of state, you avoid duplicating logic in every component.
:::

## What you learned

- How to use `useRefraction` for global state.
- How to build a reusable ThemeToggle component.
- How one state value can update multiple parts of your UI.

Congratulations! 🥳 You now have a global theme switcher!
