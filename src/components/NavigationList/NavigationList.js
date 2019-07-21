import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink/NavigationLink'
import './NavigationList.scss';

const NavigationList = props => {
    const { links } = props;
    return (
        <div className="navigation-list">
            {links.map((link, idx) => (
                <NavigationLink key={idx} to={link.to} text={link.text} />
            ))}
        </div>
    )
}

NavigationList.propTypes = {
    links: PropTypes.array.isRequired
}

export default NavigationList;