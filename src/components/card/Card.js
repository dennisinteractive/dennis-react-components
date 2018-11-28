import React from "react";
import Link from '../link/Link'

const Card = ({
  title,
  path,
  image
}) => (
  <Link href={`/${path}`} className='card'>
    <h2>{title}</h2>
    <img src={image}/>
  </Link>
)

export default Card