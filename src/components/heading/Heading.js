import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ size, text }) => {
  const Tag = `h${size}`;
  return <Tag>{text}</Tag>;
};

Title.defaultProps = {
  size: 1
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default Title;
