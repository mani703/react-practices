import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Main from './components/Main'
import Guestbook from './components/Guestbook';
import Gallery from './components/Gallery';
import './assets/scss/App.scss'

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/gallery' component={Gallery} />
        </HashRouter>
    )
}