import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import styles from '../assets/scss/component/Main.scss';

export default function Main() {
    return (
        <Fragment>
            <div>
                <Header/>
                <div className={styles.Main}>
                    <h2>Main</h2>
                </div>
                <Navigation/>
                <Footer/>
            </div>
        </Fragment>
    );
}