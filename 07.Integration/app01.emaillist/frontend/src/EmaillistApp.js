import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function EmaillistApp() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',
                header: {
                    'Content-Type': 'application/json'
                },
                body: null
            })

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
        } catch (err) {
            console.err(err);
        }
    }, []);

    const notifyKeywordChanges = function (keyword) {
        setKeyword(keyword);
    }

    return (
        <div className={'EmaillistApp'}>
            <SearchBar
                callback={notifyKeywordChanges}
                keyword={keyword} />
            <Emaillist
                emails={emails}
                keyword={keyword} />
        </div>
    );
}