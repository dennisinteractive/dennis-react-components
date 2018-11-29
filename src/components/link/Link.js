import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { isLinkExternal } from '../../helpers'

const Link = ({ href, children, ...props }) => {
  console.log(href, children)
  if (href) {
    if (isLinkExternal(href)) {
      return (
        <a
          href={href}
          target='_blank'
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <RouterLink 
        to={{
          pathname: href
        }}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
  // if no url is passed render a div instead (this allows us to to conditional wrapping of elements e.g. Card)
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Link
