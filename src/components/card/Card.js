import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/Heading';
import Image from '../image/Image';
import Link from '../link/Link';

import './card.scss';

const Card = ({
  title,
  path,
  image,
  children,
}) => (
  <Link href={`${path}`} className="card">
    { title
      && (
      <Heading
        className="title"
        text={title}
        size={3}
      />
      )
    }
    { image
      && (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      )
    }
    {children}
  </Link>
);

Card.defaultProps = {
  title: null,
  path: null,
  image: null,
  children: null,
};

Card.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default Card;
