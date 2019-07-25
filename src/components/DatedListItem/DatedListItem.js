import React from 'react'
import PropTypes from 'prop-types'
import './DatedListItem.scss'

const DatedListItem = props => {
    const { date, title, subtitle } = props;
    return (
        <li className="dated-list-item">
            <span className="dated-list-item__date">{date}</span>
            <span>
                <p className="dated-list-item__title">{title}</p>
                <p className="dated-list-item__subtitle">{subtitle}</p>
            </span>
        </li>
    )
}

DatedListItem.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default DatedListItem