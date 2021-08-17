import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import styles from '../assets/scss/component/Guestbook.scss';

export default function Guestbook() {
    return (
        <Fragment>
            <div>
                <Header/>
                <div className={styles.Guestbook}>
                    <h2>Guestbook</h2>
                </div>
                <Navigation/>
                <Footer/>
            </div>
        </Fragment>
    );
}