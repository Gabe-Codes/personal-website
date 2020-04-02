import React from 'react';
import styles from './footer.module.scss';

export default () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Gabriel Russell {new Date().getFullYear()}</p>
            <section></section>
        </footer>
    );
};
