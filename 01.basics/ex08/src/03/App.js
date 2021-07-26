import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';

export default function() {
    return (
        <Fragment>
            <Header name='App03' />
            <Content />
        </Fragment>
    );
}

/*
    createElement( 태그(String,Object), 속성(property), 자식태그 )

    createElement(
        Fragment,
        null,
        createElement(Header, {name:'Application03', height:10}, null),
        createElement(Content, null, null)
    );
*/