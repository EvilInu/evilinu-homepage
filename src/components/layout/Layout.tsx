import React, { ReactNode } from 'react';
import { Footer } from '../footer/Footer';
import MDX from '../mdx/mdx';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className="mx-5 md:container md:mx-auto">
        <header className="hidden border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex">
            <a href="/">Evil Inu</a>
          </div>
        </header>
        <div className="h-screen">
          <MDX>{children}</MDX>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
