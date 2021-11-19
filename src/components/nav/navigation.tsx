import React from 'react';
import { DisableButton, NavLink } from '../primitives';

interface INavProps {}

export const Navigation: React.FC<INavProps> = ({}) => (
  <nav className="p-2">
    <NavLink to="/">EVIL coin</NavLink>
    <NavLink to="/">Community</NavLink>
    <DisableButton>Use App</DisableButton>
  </nav>
);
