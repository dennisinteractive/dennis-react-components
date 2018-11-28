import React from "react";

const Card = ({
  title,
  path,
  image
}) => (
  <a href={`/${path}`} className='card'>
    <h2>{title}</h2>
    <img src={image}/>
  </a>
)

export default Card