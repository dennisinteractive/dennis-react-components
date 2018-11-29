const ExecutionEnvironment = require('exenv');
const isExternal = require('is-url-external');

const isLinkExternal = (href) => {
  if (href.startsWith('/')) {
    return false;
  }
  if (ExecutionEnvironment.canUseDOM) {
    if (isExternal(href)) {
      return true;
    }
    return false;
  }
  return true;
}

export default isLinkExternal