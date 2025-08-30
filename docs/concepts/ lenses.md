---
id: lenses
---
# Lenses

## What are Lenses?

*Lenses* help you “zoom in” on a specific part of a bigger structure, without disturbing the rest.

## Benefits of Lenses

- **Reusability:** Lenses make manipulating nested state (like user profiles) feel simple, no need to rewrite the whole state object.
- **Modularity:** Lenses help you modularize access to deeply nested data, making code cleaner and more scalable.

---

## Example: Lens in Action

```js
const user = { profile: { name: "Alex", age: 25 }, active: true };

const nameLens = {
  get: obj => obj.profile.name,
  set: (obj, val) => ({
    ...obj,
    profile: { ...obj.profile, name: val },
  }),
};

console.log(nameLens.get(user)); // Alex
console.log(nameLens.set(user, "Jordan"));
// { profile: { name: "Jordan", age: 25 }, active: true }
```

In the above example, the function `nameLens` returns the name of the user's profile and sets the name of the user's profile.

---

## How it connects to Refract

In Refract, lenses are the tool needed to manage nested component state cleanly. They let help you focus on what needs to be fixed, making the components simpler to build and maintain.
