import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default function MyComponent({ props01, props02, props03, props04, props05, props06 }) {
    return (
        <Fragment>
            <h2>Propoerty Validation</h2>
            <span>props01: { props01 ? props01 : '---not set---'}</span>
            <br/>

            <span>props02: { props02 ? props02 : '---not set---'}</span>
            <br/>

            <span>props03: { props03 ? `${props03}` : '---not set---'}</span>
            <br/>

            <span>props04: { props04 ? props04.no : '---not set---'}</span>
            <br/>

            <span>props05: { props05 ? props05.map((e, i) => <b key={i}>{e}{ ' ' }</b>) : '---not set---'}</span>
            <br/>

            <span>props06: { props06 ? props06() : '---not set---'}</span>
            <br/>
        </Fragment>
    );
}

MyComponent.propTypes = {
    // [Built-in propTypes Validator: primitives]
    props01: PropTypes.string,
    props02: propTypes.number.isRequired,
    props03: propTypes.bool.isRequired,
    props04: propTypes.object.isRequired,
    props05: propTypes.array.isRequired,
    props06: propTypes.func.isRequired,
}

// Default Value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: true,
    props04: {},
    props05: [],
    props06: () => {}, // dummy function
}