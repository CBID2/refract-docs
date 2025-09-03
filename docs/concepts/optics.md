---
id: optics
---
# Optics

## What are Optics?

*Optics* help you “zoom in” on a specific part of a bigger structure, without disturbing the rest.

## Benefits of Optics

- **Efficiency:** Optics make manipulating nested state (like user profiles) simple, meaning that there's no need to rewrite the whole state object.
- **Modularity:** Optics help you modularize access to deeply nested data, making code cleaner and more scalable.

---

## Example: Optic in Action

```js
const ageLens = {
  get: obj => obj.profile.age,
  set: (obj, val) => ({
    ...obj,
    profile: { ...obj.profile, age: val },
  }),
};

const user = { profile: { name: "Alex", age: 25 }, active: true };
const updated = ageLens.set(user, 26);
console.log(updated.profile.age); // 26
```

In the above example, the `ageLens` function is an optic that returns the age of a user, making it easier to access and modify the age property.

---

## How it Connects to Refract

Optics form the backbone of Refract’s reactive state management. Build and combine them to shape how your UI responds, making it smoothly composable and perfectly maintainable.
