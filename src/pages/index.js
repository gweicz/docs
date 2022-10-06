import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Gwei.cz - Česko/Slovenská Ethereum komunita</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/*<div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://forum.gwei.cz">
            Přejít na fórum
          </Link>
        </div>*/}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`CZ/SK Ethereum Komunita`}
      description="Jsme komunita příznivců DeFi, Web3 a platformy Ethereum.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
