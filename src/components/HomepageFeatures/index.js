import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fórum Gwei.cz',
    buttonText: 'Přejít na fórum',
    buttonHref: 'https://forum.gwei.cz',
    Svg: require('@site/static/img/forum.svg').default,
    description: (
      <>
        Základní komunikační nástroj, zde řešíme to nejpodstatnější.
      </>
    ),
  },
  {
    title: 'Matrix chat',
    buttonText: 'Přejít na Matrix',
    buttonHref: 'https://matrix.gwei.cz',
    Svg: require('@site/static/img/matrix.svg').default,
    description: (
      <>
        Prostor pro rychlou debatu, diskuze aktuálního dění v reálném čase.
      </>
    ),
  },
  {
    title: 'Twitter',
    buttonText: 'Přejít na Twitter',
    buttonHref: 'https://twitter.com/gweicz',
    Svg: require('@site/static/img/twitter.svg').default,
    description: (
      <>
        Sledujte nás na našem Twitteru, ať vám neunikne žádná novinka z Etherea.
      </>
    ),
  },
];

function Feature({Svg, title, description, href, buttonText, buttonHref}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonText && buttonHref &&
          <Link
            className="button button--primary button--outline button--lg"
            href={buttonHref}>
            {buttonText}
          </Link>
        }
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
