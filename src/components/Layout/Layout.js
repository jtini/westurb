import React, { Component } from "react"
import PropTypes from "prop-types"
import cx from 'classnames';
import HeaderPrimary from '../HeaderPrimary/HeaderPrimary'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import './layout.scss'

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }))
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
        <MobileNavigation
          isVisible={isMenuVisible}
          links={[
            {
              to: '/about',
              text: 'About WestUrb'
            }, {
              to: '/service-areas',
              text: 'Service Areas'
            }, {
              to: '/presentations',
              text: 'Presentations'
            }, {
              to: '/rates',
              text: 'Rates'
            }
          ]} />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

