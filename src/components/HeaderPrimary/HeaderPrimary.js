import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './HeaderPrimary.scss';
import logo from '../../images/logo-white.svg';
import menu from '../../images/icon-menu.svg';
import close from '../../images/icon-close.svg';

const HeaderPrimary = props => {
    const { isMenuVisible, onClickMenu } = props;
    return (
        <header className="header-primary">
            <div className="header-primary__left">
                <Link to="/" className="header-primary__logo-link">
                    <img src={logo} alt="WestUrb logo" />
                </Link>
                <nav className="header-primary__navigation">
                    <Link to="/" className="header-primary__nav-link">WestUrb</Link>
                    <Link to="/about" className="header-primary__nav-link">About WestUrb</Link>
                    <Link to="/service-areas" className="header-primary__nav-link">Service Areas</Link>
                    <Link to="/presentations" className="header-primary__nav-link">Presentations</Link>
                    <Link to="/rates" className="header-primary__nav-link">Rates</Link>
                </nav>
            </div>
            <div className="header-primary__right">
                <a className="header-primary__mailto-link" href="mailto:info@westurb.com">info@westurb.com</a>
                <button className="header-primary__menu-btn" onClick={onClickMenu}>
                    <span className="header-primary__menu-btn-inner">
                        <img src={isMenuVisible ? close : menu} alt="open menu" />
                    </span>
                </button>
            </div>
        </header>
    )
}

HeaderPrimary.propTypes = {
    isMenuVisible: PropTypes.bool,
    onClickMenu: PropTypes.func.isRequired
}

HeaderPrimary.defaultProps = {
    isMenuVisible: false
}

export default HeaderPrimary;