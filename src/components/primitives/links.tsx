import React from 'react';

interface ILinksProps {
  to: string;
}

export const NavLink: React.FC<ILinksProps> = ({ children, to }) => (
  <a
    href={to}
    className="mx-3 p-2 hover:text-primary-skobeloff transition-colors blur-lg"
  >
    {children}
  </a>
);
