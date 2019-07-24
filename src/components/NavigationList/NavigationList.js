import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink/NavigationLink'
import './NavigationList.scss';

const NavigationList = props => {
    const { links } = props;
    return (
        <div className="navigation-list">
            {links.map((link, idx) => {
                const { to, text, ...rest } = link
                return (
                    <NavigationLink key={idx} to={to} text={text} {...rest} />
                )
            })}
        </div>
    )
}

NavigationList.propTypes = {
    links: PropTypes.array.isRequired
}

export default NavigationList;