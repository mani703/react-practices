import React from 'react';
import GalleryItem from './GalleryItem';
import styles from '../src/assets/scss/GalleryList.scss';

export default function GalleryList({ gallerys }) {
    return (
        <ul className={ styles.gallerylist }>
            { gallerys.map( (item) => <GalleryItem key={ item.no }
                                                    no={ item.no }
                                                    comment={ item.comment }
                                                    url={ item.url } /> ) }
        </ul>
    );
}