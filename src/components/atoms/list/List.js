/* eslint react/destructuring-assignment: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

const List = (props) => {
  const content = props.items.map((item, index) => (
    <li key={index}>
      { item }
    </li>
  ));
  const Tag = props.type;
  return <Tag className={props.className}>{content}</Tag>;
};

List.defaultProps = {
  type: 'ul',
  className: null,
};

List.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.node.isRequired,
  ).isRequired,
};

export default List;
