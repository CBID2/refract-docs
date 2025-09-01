---
id: examples
---

# Use Cases

Welcome to the Examples section! Here, you can explore different ways to use Refract.

## Secure Login Component

This example creates a secure login interface for your docs site, featuring email/password fields, a CAPTCHA, and language selection.

```jsx
import { Form, Input, Button, Select } from 'refract-ui';

function SecureLogin() {
  const languages = [
    { value: 'en', label: 'English (United States)' },
    { value: 'es', label: 'Español (Latinoamérica)' },
    { value: 'fr', label: 'Français (France)' },
  ];

  return (
    <Form style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Sign in to Continue</h2>
      <p>Secure access to your docs with HTTPS encryption.</p>
      <Input
        type="email"
        placeholder="Email"
        required
        style={{ marginBottom: '1rem' }}
      />
      <Input
        type="password"
        placeholder="Password"
        required
        style={{ marginBottom: '1rem' }}
      />
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <div style={{ marginTop: '1rem' }}>
        <p>Verify you're not a robot:</p>
        <Button variant="secondary" onClick={() => alert('CAPTCHA triggered!')}>
          Verify with CAPTCHA
        </Button>
      </div>
      <Select
        options={languages}
        placeholder="Select Language"
        style={{ marginTop: '1rem', width: '100%' }}
      />
      <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
        Not your computer? Use Guest mode for private access.
      </p>
    </Form>
  );
}

export default SecureLogin;
```

## Responsive Documentation Layout

This is a responsive grid layout to organize your docs content effectively.

```jsx
import { Grid, Box, Card, Text } from 'refract-ui';

function DocLayout() {
  const docs = [
    { title: 'Getting Started', content: 'Begin your Refract journey!' },
    { title: 'Examples', content: 'Explore practical use cases.' },
    { title: 'API Reference', content: 'Dive into the docs!' },
  ];

  return (
    <Grid columns={3} gap={2} style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {docs.map((doc, index) => (
        <Card key={index} style={{ padding: '1rem', textAlign: 'center' }}>
          <Text variant="h3">{doc.title}</Text>
          <Text>{doc.content}</Text>
        </Card>
      ))}
    </Grid>
  );
}

export default DocLayout;
```

## Privacy Notice Banner

This example adds a banner to inform users about privacy practices, ensuring transparency.

```jsx
import { Banner, Button } from 'refract-ui';

function PrivacyBanner() {
  return (
    <Banner variant="warning" style={{ padding: '1rem', textAlign: 'center' }}>
      <p>
        Your data is encrypted with HTTPS. Note: Legal requests may allow access to history. Learn more!
      </p>
      <Button variant="link" onClick={() => alert('Privacy policy opened!')}>
        Privacy Details
      </Button>
    </Banner>
  );
}

export default PrivacyBanner;
```

Want to give these examples a try?, check out the [Getting Started](/docs/getting-started) page or the Getting Started guide to set up Refract in your project.
Stay tuned for more examples as the documentation evolves!
