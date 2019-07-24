import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss'

const Image = props => {
    const { src, alt, caption, ...rest } = props;
    return (
        <div className="image-wrapper">
            <img src={src} alt={alt} {...rest} />
            {caption &&
                <p className="image-caption">{caption}</p>
            }
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string
}

export default Image;