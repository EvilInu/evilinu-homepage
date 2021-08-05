import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';
import { h1, h2, h3, h4, h5, h6 } from './primitive/headline';
import { p } from './primitive/paragraph';

const components: MDXProviderComponentsProp = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
};

export default function MDX({ children }: any) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
