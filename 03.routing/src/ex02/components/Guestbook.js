import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Guestbook() {
    const selectedStlye = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div>
            <h1>Guestbook</h1>
            {
                /*
                <ul>
                    <li><Link to={'/'}>[Main]</Link></li>
                    <li><Link to={'/guestbook'}>[Guestbook]</Link></li>
                    <li><Link to={'/gallery'}>[Gallery]</Link></li>
                </ul>
                /*/
            }
            {
                <ul>
                    <li><NavLink to={'/'} activeStyle={selectedStlye}>[Main]</NavLink></li>
                    <li><NavLink to={'/guestbook'} activeStyle={selectedStlye}>[Guestbook]</NavLink></li>
                    <li><NavLink to={'/gallery'} activeStyle={selectedStlye}>[Gallery]</NavLink></li>
                </ul>
                //*/
            }
        </div>
    );
}