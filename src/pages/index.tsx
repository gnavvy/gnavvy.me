import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const Avatar = require('@site/static/img/undraw_docusaurus_react.svg').default;

function Feature() {
  return (
    <div className={clsx('col col--7')}>
      <div className="text--left">
        <Avatar className={styles.avatar} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>Yang Wang</h3>
        <p>Yang now supports the Instagram Ads Ranking & Optimization team with a focus on the personalization of creatives and formats. Given raw assets (product image, text descriptions), we leverage ML to automate the creative generation process, bringing the best experience to the end users and most values for the advertisers.</p>

        <p>Prior to Meta, Yang supported the Uber AI Platform (Michelangelo) and Visualization teams, building ML infra, publishing & tech-transferring research papers, and working across business units to help scientists, analysts, engineers, and operation experts accelerate their modeling & decision-making processes.</p>

        <p>Besides day job, Yang also provides advising services to Startup in the AI-assisted product domain, and academic services to multiple venues in the Visualization, HCI, and Machine Learning domains. Yang's research interests lie in Human-Computer Interaction and High-Performance Computing. Specifically, methodologies and systems to facilitate ML operations and the creative process.</p>
      </div>
    </div>
  );
}

function Homepage(): JSX.Element {
  return (
    <section className={styles.content}>
      <div className="container">
        <Feature />
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
