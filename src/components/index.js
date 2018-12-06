require('@babel/register');

// non js files arent ignored by default when using babel/register
// https://stackoverflow.com/a/33329356
// require.extensions['.scss'] = () => { };
// require.extensions['.css'] = () => { };

// import loadable from '@loadable/component';

// export const Card = loadable(() => import('./Card'));
// export const Heading = loadable(() => import('./heading/Heading'));
// export const Image = loadable(() => import('./image/Image'));
// export const Link = loadable(() => import('./link/Link'));
export { default as Card } from './card/Card';
// export { default as Heading } from './heading/Heading';
// export { default as Image } from './image/Image';
// export { default as Link } from './link/Link';