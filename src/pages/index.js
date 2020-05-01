import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from './index.module.scss';
import dallas from '../assets/img/dallas.jpg';

export default () => {
    return (
        <Layout>
            <main>
                <div className={styles.indexContainer}>
                    <span className={styles.bodyTag}>&lt;body&gt;</span>
                    <div className={styles.text}>
                        <h1 className={styles.header}>
                            <br />
                            Gabriel Russell,
                            <br />
                            Software Developer.
                        </h1>
                        <p className={styles.description}>
                            Full-Stack Web Developer / Freelancer
                        </p>
                        <a className={styles.contact} href="mailto:gabrielarussell99@gmail.com?subject=Business Inquiry">
                            CONTACT ME
                        </a>
                    </div>
                    <img src={dallas} alt="" />
                    <span className={styles.bodyTag}>&lt;/body&gt;</span>
                    <br />
                    <span>&lt;/html&gt;</span>
                </div>
            </main>
        </Layout>
    );
};
