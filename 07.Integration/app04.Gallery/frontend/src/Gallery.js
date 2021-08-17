import React, { useEffect, useState } from 'react'
import styles from './assets/scss/Gallery.scss';
import GalleryList from './GalleryList';
import Header from './Header';
import update from 'react-addons-update';

export default function Gallery() {

    const [gallerys, setGallery] = useState([]);

    useEffect( async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                headers: {'Content-Type': 'application/json'},
                body: null,
                mode: 'same-origin'
            });

            if(!response.ok) {
                throw new Error(`${response.state} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.message}`);
            }

            setGallery(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const modifyed = {
        add: async function(comment, selectedFile) {
            console.log(comment);
            console.log(selectedFile);

            const postGallery = new FormData();

            
            postGallery.append(comment);
            postGallery.append(selectedFile);

            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json'
                },
                body: postGallery,
                mode: 'same-origin'
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result != 'success') {
                console.log(`${json.result} ${json.message}`);
            }
            
            const newGallery = update[json.data, {...gallerys}];
            setGallery(newGallery);
        }
    }

    return (
        <div className={ styles.gallery }>
            <Header modifyed={ modifyed }/>
            <GalleryList gallerys={ gallerys } />
        </div>
    );
}