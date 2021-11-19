import React from 'react';
import { NavLink } from '../primitives';

interface INavProps {}

export const Navigation: React.FC<INavProps> = ({}) => (
  <nav className="p-2">
    <NavLink to="/">EVIL coin</NavLink>
    <NavLink to="/">Community</NavLink>
  </nav>
);
