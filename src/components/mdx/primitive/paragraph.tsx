import React from 'react';

const p = ({ children }: HTMLElement) => {
  return <p className="text-xl  sm:text-2xl text-gray-700">{children}</p>;
};

export { p };
