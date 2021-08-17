import React from 'react'
import styles from './assets/scss/App.scss';
import Gallery from './Gallery';

export default function App() {
    return (
        <div className={ styles.App }>
            <Gallery />
        </div>
    );
}