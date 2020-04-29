import React from 'react';
import Layout from '../components/Layout/Layout';
import resume from '../downloads/resume.pdf';

export default () => {
    return (
        <Layout>
            <main>
                <h1>About Page</h1>
                <a href={resume} download>
                    My Resume
                </a>
            </main>
        </Layout>
    );
};
