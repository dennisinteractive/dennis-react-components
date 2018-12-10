import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { isLinkExternal } from 'Helpers';

const Link = ({ href, children, ...props }) => {
  if (href) {
    if (isLinkExternal(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <RouterLink
        to={{
          pathname: href,
        }}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
  // if no url is passed render a div instead
  // (this allows us to to conditionally wrap elements e.g. Card)
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Link;
