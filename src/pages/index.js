import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Refract"
      description="Stream your ideas into UI">
      <main style={{padding: '4rem 2rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Refract</h1>
        <p style={{fontSize: '1.25rem', color: '#555'}}>
          Stream your ideas into UI
        </p>

        <div style={{marginTop: '2rem'}}>
          <a className="button button--primary button--lg" href="/docs/getting-started">
            Get Started
          </a>
        </div>
      </main>
    </Layout>
  );
}
