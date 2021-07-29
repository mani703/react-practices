import React from 'react';
import GuestbookItem from './GuestbookItem'
import guests from './data.json';
//import styles from '../public/styles.css';

export default function GuestbookList() {
    return (
        <ul className="Guestbook__List">
            { guests.map(guest => <GuestbookItem 
                                        key={ guest.no } 
                                        name={ guest.name } 
                                        message={ guest.message }
                                        regDate={ guest.regDate }
                                        />) }
        </ul>
    );
}