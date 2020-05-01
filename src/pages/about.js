import React from 'react';
import Layout from '../components/Layout/Layout';
import resume from '../downloads/resume.pdf';
import styles from './about.module.scss';

export default () => {
    return (
        <Layout>
            <main>
                <div className={styles.aboutContainer}>
                    <span className={styles.bodyTag}>&lt;body&gt;</span>
                    <div className={styles.text}>
                        <h1 className={styles.header}>
                            <br />
                            About Me
                        </h1>
                        <p className={styles.description}>
                            <br />I am a web developer that can create a
                            front-end web presence for a brand as well as
                            maintain the back end to keep everything efficient.
                            I am driven by my love of technology and creating
                            something new. I stand out from others, because of
                            my drive and determination to see a project through,
                            making sure it exceeds industry standards.
                        </p>
                        <a className={styles.resume} href={resume} download>
                            My Resume
                        </a>
                    </div>
                    <canvas className={styles.skills}>
                        <ul>
                            <li>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <p>ReactJS</p>
                            </li>
                            <li>
                                <p>Node.js</p>
                            </li>
                            <li>
                                <p>CSS</p>
                            </li>
                            <li>
                                <p>Python</p>
                            </li>
                        </ul>
                    </canvas>
                    <span className={styles.bodyTag}>&lt;/body&gt;</span>
                    <br />
                    <span>&lt;/html&gt;</span>
                </div>
            </main>
        </Layout>
    );
};
