import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

const Link = ({ href, children, ...props }) => {
  if (href) {
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
