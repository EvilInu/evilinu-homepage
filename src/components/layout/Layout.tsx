import React, { ReactNode } from 'react';
import { Footer } from '../footer/Footer';
import MDX from '../mdx/mdx';
import { Navigation } from '../nav/navigation';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <div className="bg-gradient-to-r from-primary-prussian-blue to-primary-space-cadet text-white">
      <div className="mx-5 md:container md:mx-auto">
        <header className="py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex">
            <a href="/">Evil Inu</a>
          </div>
          <div>
            <Navigation />
          </div>
        </header>
        <div className="h-screen">
          <MDX>{children}</MDX>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
