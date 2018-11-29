import React from "react";
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const Image = ({ src, alt, height, width }) => {
  return (
    <LazyLoad 
      offset={100}
      height={height}
    >
      <img
        src={src}
        alt={alt}
      />
    </LazyLoad>
  )
}

Image.defaultProps = {
  alt: 'Image',
  height: null,
  width: null,
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Image;
