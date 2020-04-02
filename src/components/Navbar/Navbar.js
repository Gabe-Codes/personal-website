import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faFolder,
    faEnvelope,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faInstagram,
    faGithub,
    faSlack,
} from '@fortawesome/free-brands-svg-icons';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        return (
            <nav className={styles.navbar}>
                <h1>G C</h1>
                <input type="checkbox" id="nav-toggle" class={styles.check} />
                <div className={styles.pages}>
                    <a href="/" rel="noopener noreferrer">
                        <FontAwesomeIcon size="lg" icon={faHome} />
                    </a>
                    <a href="/about" rel="noopener noreferrer">
                        <FontAwesomeIcon size="lg" icon={faUser} />
                    </a>
                    <a href="/projects" rel="noopener noreferrer">
                        <FontAwesomeIcon size="lg" icon={faFolder} />
                    </a>
                    <a href="/contact" rel="noopener noreferrer">
                        <FontAwesomeIcon size="lg" icon={faEnvelope} />
                    </a>
                </div>
                <label for="nav-toggle" className={styles.toggle}>
                    <a>
                        <FontAwesomeIcon size="lg" icon={faBars} />
                    </a>
                </label>
                <section>
                    <a
                        className={styles.linkedin}
                        href="https://linkedin.com/in/gabrielrussell/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size="lg" icon={faLinkedin} />
                    </a>
                    <a
                        className={styles.insta}
                        href="https://instagram.com/Gabe_Codes/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size="lg" icon={faInstagram} />
                    </a>
                    <a
                        className={styles.github}
                        href="https://github.com/gar0085"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size="lg" icon={faGithub} />
                    </a>
                    <a
                        className={styles.slack}
                        href="https://app.slack.com/client/T0351JZQ0/CT45EG8LV/user_profile/UQLU2R7BK"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon size="lg" icon={faSlack} />
                    </a>
                </section>
            </nav>
        );
    }
}

export default Navbar;
