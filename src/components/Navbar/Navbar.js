import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.scss';
import logo from '../../assets/img/GC.svg';
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
} from '@fortawesome/free-brands-svg-icons';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: <FontAwesomeIcon size="lg" icon={faHome} />,
            about: <FontAwesomeIcon size="lg" icon={faUser} />,
            projects: <FontAwesomeIcon size="lg" icon={faFolder} />,
            contact: <FontAwesomeIcon size="lg" icon={faEnvelope} />,
        };
    }

    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.imgWrapper}>
                    <img src={logo} alt="" />
                </div>
                <input type="checkbox" id="nav-toggle" className={styles.check} />
                <div className={styles.pages}>
                    <Link
                        to="/"
                        onMouseEnter={() => this.setState({ home: 'HOME' })}
                        onMouseLeave={() =>
                            this.setState({
                                home: (
                                    <FontAwesomeIcon size="lg" icon={faHome} />
                                ),
                            })
                        }
                    >
                        {this.state.home}
                    </Link>
                    <Link
                        to="/about"
                        onMouseEnter={() => this.setState({ about: 'ABOUT' })}
                        onMouseLeave={() =>
                            this.setState({
                                about: (
                                    <FontAwesomeIcon size="lg" icon={faUser} />
                                ),
                            })
                        }
                    >
                        {this.state.about}
                    </Link>
                    <Link
                        to="/projects"
                        onMouseEnter={() => this.setState({ projects: 'WORK' })}
                        onMouseLeave={() =>
                            this.setState({
                                projects: (
                                    <FontAwesomeIcon
                                        size="lg"
                                        icon={faFolder}
                                    />
                                ),
                            })
                        }
                    >
                        {this.state.projects}
                    </Link>
                    <a
                        href="mailto:gabrielarussell99@gmail.com?subject=Business Inquiry"
                        onMouseEnter={() => this.setState({ contact: 'EMAIL' })}
                        onMouseLeave={() =>
                            this.setState({
                                contact: (
                                    <FontAwesomeIcon
                                        size="lg"
                                        icon={faEnvelope}
                                    />
                                ),
                            })
                        }
                    >
                        {this.state.contact}
                    </a>
                </div>
                {/* <label for="nav-toggle" className={styles.toggle}>
                    <a>
                        <FontAwesomeIcon size="lg" icon={faBars} />
                    </a>
                </label> */}
                <section>
                    <a
                        className={styles.linkedin}
                        href="https://linkedin.com/in/gabrielrussell/"
                        target="blank"
                    >
                        <FontAwesomeIcon size="lg" icon={faLinkedin} />
                    </a>
                    <a
                        className={styles.insta}
                        href="https://instagram.com/Gabe_Codes/"
                        target="blank"
                    >
                        <FontAwesomeIcon size="lg" icon={faInstagram} />
                    </a>
                    <a
                        className={styles.github}
                        href="https://github.com/gar0085"
                        target="blank"
                    >
                        <FontAwesomeIcon size="lg" icon={faGithub} />
                    </a>
                </section>
            </nav>
        );
    }
}

export default Navbar;
