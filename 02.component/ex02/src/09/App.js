import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    library.add(farBell, faBell, fab);

    return (
        <Fragment>
            <h2>React Awesome Font Examples</h2>

            {/* regular */}
            <FontAwesomeIcon icon={ farBell } style={ {color: 'yellow'} } />
            <FontAwesomeIcon icon={ ["far", "bell"] } style={ {color: 'yellow'} } />

            {/* solid */}
            <FontAwesomeIcon icon={ faBell } style={ {color: 'yellow'} } />
            <FontAwesomeIcon icon={ ["fas", "bell"] } style={ {color: 'yellow'} } />

            {/* brands */}
            <FontAwesomeIcon icon={ ["fab", "github"] } style={ {color: 'green'} } />
            <FontAwesomeIcon icon={ ["fab", "apple"] } style={ {color: 'green'} } />
            <FontAwesomeIcon icon={ ["fab", "google"] } style={ {color: 'green'} } />

            {/* size */}
            <FontAwesomeIcon icon={ faBell } size='xs' style={ {color: 'violet'} } />
            <FontAwesomeIcon icon={ faBell } size='lg' style={ {color: 'violet'} } />
            <FontAwesomeIcon icon={ faBell } size='2x' style={ {color: 'violet'} } />
            <FontAwesomeIcon icon={ faBell } size='3x' style={ {color: 'violet'} } />
            <FontAwesomeIcon icon={ faBell } size='4x' style={ {color: 'violet'} } />

            {/* etc */}
            <FontAwesomeIcon icon={ faCheckCircle } style={ {color: 'blue'} } />
            <FontAwesomeIcon icon={ faTimesCircle } style={ {color: 'red'} } />

        </Fragment>
    );

}