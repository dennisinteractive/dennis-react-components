import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ size, text, className }) => {
  const Tag = `h${size}`;
  return <Tag className={className}>{text}</Tag>;
};

Title.defaultProps = {
  size: 1,
  className: null,
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default Title;
