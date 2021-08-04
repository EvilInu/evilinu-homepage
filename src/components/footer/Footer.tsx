import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-4">
      <div className="md:container md:mx-auto">
        <nav className="text-center">
          <ul className="flex flex-row space-x-8 justify-center">
            <li>
              <a href="" className="hover:text-green-300">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-green-300">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:text-green-300">
                Contribute
              </a>
            </li>
            <li>
              <a href="" className="hover:text-green-300">
                Press
              </a>
            </li>
            <li>
              <a href="" className="hover:text-green-300">
                Partners
              </a>
            </li>
          </ul>
        </nav>
        <div></div>
        <div className="text-center my-8">
          <h2>&copy; Landswap. Forever open!</h2>
        </div>
      </div>
    </footer>
  );
};
