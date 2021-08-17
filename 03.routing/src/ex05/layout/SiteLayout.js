import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import styles from '../assets/scss/layout/Content.scss';

export default function SiteLayout({children}) {
    return (
        <Fragment>
            <div>
                <Header/>
                <div className={styles.Content}>
                    {children}
                </div>
                <Navigation/>
                <Footer/>
            </div>
        </Fragment>
    );
}