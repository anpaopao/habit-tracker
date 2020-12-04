// import React from 'react';
// import Layout from './src/components/Layout';
// import { OrderProvider } from './src/components/OrderContext.js';
import { wrapPageElement, wrapRootElement } from './gatsby-browser.js'

// export function wrapPageElement({ element, props }) {
//   return <Layout {...props}>{element}</Layout>;
// }
// export function wrapRootElement({ element }) {
//   return <OrderProvider>{element}</OrderProvider>;
// }

// wrapPageElement(); //use this if you want to add an element to every page e..g like a header or footer
wrapRootElement()
