import React, { Component } from "react"
import PropTypes from "prop-types"
import HeaderPrimary from '../HeaderPrimary/HeaderPrimary'
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

  render() {
    const { children } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <>
        <HeaderPrimary isMenuVisible={isMenuVisible} onClickMenu={this.toggleMenu} />
        <main className="main">{children}</main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

