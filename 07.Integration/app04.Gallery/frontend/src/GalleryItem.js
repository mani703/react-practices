import React from 'react';
import styles from '../src/assets/scss/GalleryItem.scss'

export default function GalleryItem({ no, comment, url }) {

    return (
        <li className={ styles.galleryitem }>
            <span style={{ backgroundImage: `url(${url})` }}></span>
            <a href={no}>삭제</a>
        </li>
    );
}