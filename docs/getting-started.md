---
sidebar_position: 2
id: getting-started
---

# Getting Started

This guide will walk you through setting up your first Refract project and creating a simple "Hello, World!" application.

:::note

Before you get started, make sure you have the latest version of [Node and npm](https://nodejs.org/en)

:::

## Installation

To install Refract, use the following command:

```bash
npm install refract-js
```

## Your First Refraction

Every Refract application starts with a component. Here's how you can create a simple one:

**1. Create a File**

First, create a new file named `app.js` and add the following code:

```js
import { createComponent } from 'refract';

// Create your first Refract component
const App = createComponent({
  // This is the component's state. It's a simple object that holds your data.
  state: {
    message: 'Hello, World!',
  },

  // The render function defines the structure of your component.
  render() {
    return `<h1>${this.state.message}</h1>`;
  }
});

export default App;
```

**2. Mount the Component**

Finally, create an `index.html` file to display your component. Make sure you import the app.js file and mount your component to a DOM element.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Refract App</title>
</head>
<body>

  <div id="root"></div>

  <script type="module">
    import App from './app.js';
    import { mount } from 'refract';

    mount(App, '#root');
  </script>

</body>
</html>
```

After creating these two files, you can open `index.html` in your browser to see your first Refract component in action!
