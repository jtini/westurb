import React from 'react'
import PropTypes from 'prop-types'
import './Highlight.scss'

const Highlight = props => {
    const { title, text } = props;
    return (
        <div className="highlight">
            <p className="highlight__title">{title}</p>
            <p className="highlight__text">{text}</p>
        </div>
    )
}

Highlight.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Highlight