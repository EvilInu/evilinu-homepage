import React from 'react';

interface HeadlineProps extends HTMLElement {}

const h1 = ({ children }: HeadlineProps) => (
  <h1 className="text-4xl sm:text-7xl lg:text-8xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h1>
);

const h2 = ({ children }: HeadlineProps) => (
  <h2 className="text-3xl sm:text-6xl lg:text-7xl leading-none font-normal tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h2>
);

const h3 = ({ children }: HeadlineProps) => (
  <h3 className="text-2xl sm:text-4xl lg:text-5xl leading-none tracking-tight text-gray-400 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h3>
);

const h4 = ({ children }: HeadlineProps) => (
  <h4 className="text-xl sm:text-2xl lg:text-3xl leading-none font-normal tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h4>
);

const h5 = ({ children }: HeadlineProps) => (
  <h5 className="text-xl leading-none tracking-tight font-extrabold text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h5>
);

const h6 = ({ children }: HeadlineProps) => (
  <h6 className="text-xl leading-none tracking-tight font-extrabold text-white bg-gray-800 p-3 mt-10 mb-8 sm:mt-14 sm:mb-10">
    {children}
  </h6>
);

export { h1, h2, h3, h4, h5, h6 };
