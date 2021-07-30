import React from 'react';
import GuestbookItem from './GuestbookItem'
import guests from './assets/json/data.json';
import styles from './assets/scss/GuestbookList.scss';

export default function GuestbookList() {
    return (
        <ul className={ styles.Guestbook__List }>
            { guests.map(guest => <GuestbookItem 
                                        key={ guest.no } 
                                        name={ guest.name } 
                                        message={ guest.message }
                                        regDate={ guest.regDate }
                                        />) }
        </ul>
    );
}