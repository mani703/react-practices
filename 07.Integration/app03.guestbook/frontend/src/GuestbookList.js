import React from 'react';
import GuestbookItem from './GuestbookItem'
import styles from './assets/scss/GuestbookList.scss';
import PropTypes from 'prop-types';

export default function GuestbookList({ messages }) {
    return (
        <ul className={ styles.Guestbook__List }>
            { messages.map(message => <GuestbookItem 
                                        key={ `guestbook_message_${message.no}` } 
                                        no={ message.no }
                                        name={ message.name } 
                                        message={ message.message }
                                        />) }
        </ul>
    );
}

GuestbookList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(GuestbookItem.propTypes))
}