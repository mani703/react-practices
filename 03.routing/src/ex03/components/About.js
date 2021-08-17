import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import styles from '../assets/scss/component/About.scss';

export default function About() {
    return (
        <Fragment>
            <div>
                <Header/>
                <div className={styles.About}>
                    <h2>About</h2>
                </div>
                <Navigation/>
                <Footer/>
            </div>
        </Fragment>
    );
}