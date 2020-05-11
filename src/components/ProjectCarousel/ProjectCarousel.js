import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import styles from '../../pages/projects.module.scss';
import coronaChasers from '../../assets/img/corona-chasers.png'
import blackjack from '../../assets/img/blackjack.png'
import petRater from '../../assets/img/pet-rater.png'

export default class ProjectCarousel extends Component {
    state = {
        direction: '',
        panelNum: 1,
        img: coronaChasers,
    };

    handleClick = e => {
        if (this.state.direction === 'right') {
            if (this.state.panelNum === 2) {
                this.setState({ img: blackjack });
                this.setState({ panelNum: 0 });
            } else if (this.state.panelNum === 0) {
                this.setState({
                    img: coronaChasers,
                });
                this.setState({ panelNum: 1 });
            } else {
                this.setState({ img: petRater });
                this.setState({ panelNum: 2 });
            }
        }
        if (this.state.direction === 'left') {
            if (this.state.panelNum === 0) {
                this.setState({ img: petRater });
                this.setState({ panelNum: 2 });
            } else if (this.state.panelNum === 2) {
                this.setState({
                    img: coronaChasers,
                });
                this.setState({ panelNum: 1 });
            } else {
                this.setState({ img: blackjack });
                this.setState({ panelNum: 0 });
            }
        }
        this.setState({ direction: '' });
    };

    panel = () => {
        if (this.state.panelNum === 0) {
            return (
                <>
                    <div className={styles.projectPaneTitle}>Blackjack</div>
                    <div className={styles.projectPaneDescription}>
                        A seven player local blackjack game.
                    </div>
                    <div className={styles.projectSelector}>
                        <a
                            className={styles.projectIcon}
                            href="https://gar0085.github.io/blackjack-game/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="lg" icon={faShare} />
                        </a>
                    </div>
                </>
            );
        }
        if (this.state.panelNum === 1) {
            return (
                <>
                    <div className={styles.projectPaneTitle}>
                        Corona Chasers
                    </div>
                    <div className={styles.projectPaneDescription}>
                        Corona Chasers is a web app that tracks the Covid-19
                        virus cases around the world. It updates its stats daily
                        at 2:00am CST.
                    </div>
                    <div className={styles.projectSelector}>
                        <a
                            className={styles.projectIcon}
                            href="http://corona-chasers.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="lg" icon={faShare} />
                        </a>
                    </div>
                </>
            );
        }
        if (this.state.panelNum === 2) {
            return (
                <>
                    <div className={styles.projectPaneTitle}>Pet Rater</div>
                    <div className={styles.projectPaneDescription}>
                        A Node.js and MongoDB full-stack application that allows
                        users to sign in with Google Oauth and create a pet post
                        for other users to rate and comment on.
                    </div>
                    <div className={styles.projectSelector}>
                        <a
                            className={styles.projectIcon}
                            href="https://pet-rater.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="lg" icon={faShare} />
                        </a>
                    </div>
                </>
            );
        }
    };

    render() {
        console.log(this.state.img)
        return (
            <div className={styles.projectsPageCarousel}>
                <button
                    className={styles.leftSelector}
                    onClick={async () => {
                        await this.setState({ direction: 'left' });
                        this.handleClick();
                    }}
                ></button>
                <button
                    className={styles.rightSelector}
                    onClick={async () => {
                        await this.setState({ direction: 'right' });
                        this.handleClick();
                    }}
                ></button>
                <div
                    className={styles.projectPane}
                    style={{
                        backgroundImage: 'url(' + this.state.img + ')',
                    }}
                >
                    <div className={styles.paneDarken}></div>
                    {this.panel()}
                </div>
            </div>
        );
    }
}
