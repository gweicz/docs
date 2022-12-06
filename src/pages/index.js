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
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div class="row">
        <div class="col col--3">
          <div class="col-demo" style={{flexShrink: 0}}>
            <img src="/img/logo.png" style={{height:'300px', width: '300px', maxWidth: '300px'}}></img>
          </div>
        </div>
        <div class="col col--9" style={{display: 'flex', alignItems: 'center'}}>
          <div class="col-demo container">
            <h1 className="hero__title">Gwei.cz - Česko-Slovenská Ethereum komunita</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons} style={{display:'grid', gridAutoFlow: 'column', gridColumnGap: '2em'}}>
                <Link
                  className="button button--secondary button--lg"
                  href="/komunita">
                  Kdo jsme?
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="/komunita/co-delame">
                  Co děláme?
                </Link>
            </div>
          </div>
          </div>
        </div>
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
