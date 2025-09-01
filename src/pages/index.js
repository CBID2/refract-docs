import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import Logo from '@site/static/img/refract-logo.png'; // Adjust path if needed

export default function Home() {
  return (
    <Layout
      title="Refract"
      description="Fresh UIs, Made Simple"
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            <img src={Logo} alt="Refract Logo - Progressive UI Framework" className={styles.heroLogo} />
            <h1 className={styles.heroTitle}>The Progressive UI Framework</h1>
            <p className={styles.heroSubtitle}>
              Fresh UIs, Made Simple
            </p>
            <div className={styles.buttons}>
              <a
                className={clsx('button button--primary button--lg', styles.getStartedButton)}
                href="/docs/getting-started"
                role="button"
                aria-label="Get Started with Refract documentation"
              >
                Get Started →
              </a>
              <a
                className={clsx('button button--secondary button--lg', styles.seeExamplesButton)}
                href="/docs/examples"
                role="button"
                aria-label="See Examples of Refract usage"
                style={{ marginLeft: '1rem' }}
              >
                See Examples →
              </a>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}