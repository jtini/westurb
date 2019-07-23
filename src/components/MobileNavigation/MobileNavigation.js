import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationList from '../NavigationList/NavigationList';
import './MobileNavigation.scss';

const MobileNavigation = props => {
    const { links, isVisible } = props
    return (
        <div className={cx("mobile-nav", { "mobile-nav--is-visible": isVisible })}>
            <NavigationList links={links} />
        </div>
    )
}

MobileNavigation.propTypes = {
    links: PropTypes.array.isRequired,
    isVisible: PropTypes.bool.isRequired
}

export default MobileNavigation;