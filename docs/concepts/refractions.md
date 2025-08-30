---
id: refractions
---
# Refractions

## What are Refractions?

A *refraction* is how light bends when passing through different materials. In Refract, it represents how **state shifts direction** into UI output in a smooth, predictable way.

## Benefits of Refractions

- **Simplicity:** Refractions show how simple state changes—like toggling themes—become visible UI responses in an intuitive, step-by-step way.
- **Scalability:** Refractions standardize component behavior, making state transitions easier to reason about in scalable applications.

---

## Example: Refraction in Action

```js
let state = { theme: "light" };

function refract(state) {
  return state.theme === "light" ? "🌞" : "🌙";
}

console.log(refract(state)); // 🌞
```

In the above example, the `refract` function is a simple refraction that returns the opposite of the current theme

---

## How it connects to Refract

Refract replaces manual functions with the `useRefraction()` hook. Think of it as the official “state bending” tool: predictable, reactive, and cleanly integrated into components.
