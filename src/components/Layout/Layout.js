import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import styles from './layout.module.scss';
import '../../../static/reset.scss';

export default props => {
    return (
        <div className={styles.outerContainer}>
            <Navbar />
            <div className={styles.innerContainer}>{props.children}</div>
            <Footer />
        </div>
    );
};
