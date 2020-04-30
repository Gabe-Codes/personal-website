import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import styles from './index.module.scss';
import dallas from '../assets/img/dallas.jpg';

export default () => {
    return (
        <Layout>
            <main>
                <div className={styles.container}>
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
                        <Link className={styles.contact} to="/contact">
                            CONTACT ME
                        </Link>
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
