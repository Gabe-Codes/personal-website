import React from 'react';
import Layout from '../components/Layout/Layout';

export default () => {
    return (
        <Layout>
            <main>
                <h1>Projects Page</h1>
                <a href='http://corona-chasers.herokuapp.com/' target='_blank' rel="noopener noreferrer">Corona Chasers</a>
                <br/>
                <a href='https://pet-rater.herokuapp.com/' target='_blank' rel="noopener noreferrer">Pet Rater</a>
                <br/>
                <a href='https://gar0085.github.io/blackjack-game/' target='_blank' rel="noopener noreferrer">Blackjack</a>
            </main>
        </Layout>
    );
};
