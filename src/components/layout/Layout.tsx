import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className="mx-5 md:container md:mx-auto">
        <header className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex">Landswap</div>
          <div className="flex">
            <a
              href="https://github.com/landswapio"
              className="text-blue-500 hover:text-blue-800"
            >
              github
            </a>
          </div>
        </header>
        <div>{children}</div>
      </div>
      <footer className="bg-gray-800 text-white p-8 mt-4">
        <div className="md:container md:mx-auto">
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
};
