import React, { useEffect, useState } from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    const [messages, setMessages] = useState([]);

    useEffect( async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                headers: {'Content-Type': 'application/json'},
                mode: 'same-origin',
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.messages}`);
            }
            
            setMessages(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <GuestbookForm />
            <GuestbookList messages={ messages }/>
        </div>
    );
}