import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'Fórum Gwei.cz',
    buttonText: 'Přejít na fórum',
    buttonHref: 'https://forum.gwei.cz',
    Svg: require('@site/static/img/forum.svg').default,
    inversible: false,
    description: (
      <>
        Základní komunitní komunikační nástroj, zde řešíme to nejpodstatnější.
      </>
    ),
  },
  {
    title: 'Matrix chat',
    buttonText: 'Přejít na Matrix',
    buttonHref: 'https://matrix.gwei.cz',
    Svg: require('@site/static/img/matrix.svg').default,
    inversible: true,
    description: (
      <>
        Diskuze aktuálního dění v reálném čase <br />(<a href="/komunita/komunikacni-kanaly/matrix">Co je to Matrix?</a>)
      </>
    ),
  },
  {
    title: 'Twitter',
    buttonText: 'Přejít na Twitter',
    buttonHref: 'https://twitter.com/gweicz',
    Svg: require('@site/static/img/twitter.svg').default,
    inversible: false,
    description: (
      <>
        Sledujte nás na Twitteru, ať vám neunikne žádná novinka z Etherea.
      </>
    ),
  },
  {
    title: 'Bluesky',
    buttonText: 'Přejít na Bluesky',
    buttonHref: 'https://bsky.app/profile/gwei.cz',
    Svg: require('@site/static/img/atproto.svg').default,
    inversible: false,
    description: (
      <>
        Sledujte nás také na nové otevřené sociální síti Bluesky. <br />(<a href="/komunita/komunikacni-kanaly/bluesky">Co je to Bluesky?</a>)
      </>
    ),
  },
];

function Feature({Svg, title, description, href, buttonText, buttonHref, inversible}) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center" style={{paddingTop: '3em'}}>
        <Link href={buttonHref}>
          {inversible
              ? <Svg className={styles.featureSvg} role="img" style={colorMode === 'dark' ? { filter: 'invert(100%)' } : {}} />
              : <Svg className={styles.featureSvg} role="img" />
          }
        </Link>
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
