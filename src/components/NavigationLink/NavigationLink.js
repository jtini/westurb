import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './NavigationLink.scss'

const NavigationLink = props => {
    const { to, text } = props;

    return (
        <p className="nav-link">
            <Link className="nav-link__inner" to={to}>{text}</Link>
        </p>
    )
}

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NavigationLink;