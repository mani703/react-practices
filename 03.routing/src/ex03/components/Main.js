import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../layout/Header';

export default function Main() {
    return (
        <Fragment>
            <div>
                <Header/>

                <div id='content'>
                    <h2>Main</h2>
                </div>

                <div id='navigation'>
                    <ul>
                        <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
                        <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                    </ul>
                </div>

                <div id='footer'>
                    <p>(c)opyright 2021</p>
                </div>
            </div>
        </Fragment>
    );
}