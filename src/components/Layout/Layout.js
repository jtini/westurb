import React, { Component } from "react"
import PropTypes from "prop-types"
import HeaderPrimary from '../HeaderPrimary/HeaderPrimary'
import FooterPrimary from '../FooterPrimary/FooterPrimary'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import './layout.scss'

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: false
    }
  }

  showMenu = () => {
    this.setState({
      isMenuVisible: true
    })

    if (typeof document !== 'undefined' && document.body && document.body.classList) {
      document.body.classList.add('nav--is-visible')
    }
  }

  hideMenu = () => {
    this.setState({
      isMenuVisible: false
    })

    if (typeof document !== 'undefined' && document.body && document.body.classList) {
      document.body.classList.remove('nav--is-visible')
    }
  }

  render() {
    const { children } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <>
        <HeaderPrimary isMenuVisible={isMenuVisible} showMenu={this.showMenu} hideMenu={this.hideMenu} />
        <main className="main">{children}</main>
        <FooterPrimary />
        <MobileNavigation
          isVisible={isMenuVisible}
          links={[
            {
              to: '/about',
              text: 'About WestUrb',
              onClick: this.hideMenu
            }, {
              to: '/service-areas',
              text: 'Service Areas',
              onClick: this.hideMenu
            }, {
              to: '/presentations',
              text: 'Presentations',
              onClick: this.hideMenu
            }, {
              to: '/rates',
              text: 'Rates',
              onClick: this.hideMenu
            }
          ]} />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

