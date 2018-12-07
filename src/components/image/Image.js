import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import classNames from 'classnames';

import './image.scss';

// Placeholder creates a padded div based on image ratio
// Contains noscript image as fallback
const Placeholder = ({
  src,
  alt,
  height,
  width,
  ratio,
}) => {
  const classes = classNames(
    'img',
    'img--placeholder',
    { 'img--placeholder-nopadding': !ratio },
  );

  return (
    <div
      className={classes}
      style={{
        paddingBottom: ratio ? `${ratio}%` : null,
      }}
    >
      <noscript className="img--noscript">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          ratio={ratio}
        />
      </noscript>
    </div>
  );
};

Placeholder.propTypes = {
  ratio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

const Image = ({
  src,
  alt,
  width,
  height,
  ratio,
}) => {
  // If ratio available render as background image for smoother lazyloading
  if (ratio) {
    return (
      <div
        title={alt}
        className="img img--bgCover"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          paddingBottom: `${ratio}%`,
          position: 'relative',
        }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="img"
    />
  );
};

Image.propTypes = {
  ratio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

const ImageWrapper = ({
  src,
  alt,
  height,
  width,
}) => {
  const ratio = height && width ? height / width * 100 : null;

  return (
    <LazyLoad
      offset={100}
      resize
      placeholder={(
        <Placeholder
          src={src}
          alt={alt}
          width={width}
          height={height}
          ratio={ratio}
        />
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        ratio={ratio}
      />
    </LazyLoad>
  );
};

ImageWrapper.defaultProps = {
  alt: 'Image',
  height: null,
  width: null,
};

ImageWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default ImageWrapper;
