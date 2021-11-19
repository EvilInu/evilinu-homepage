import React from 'react';

interface IBaseButtonsProps {}

export const Button: React.FC<IBaseButtonsProps> = ({ children }) => (
  <button className="">{children}</button>
);

export const DisableButton: React.FC<IBaseButtonsProps> = ({ children }) => (
  <button className="cursor-not-allowed p-3 bg-primary-prussian-blue border-primary-prussian-blue border-2 text-white line-through">
    {children}
  </button>
);

export const DownloadButton: React.FC<IBaseButtonsProps> = ({ children }) => {
  return (
    <button className="hover:bg-primary-russian-violet p-4 bg-primary-dark-purple text-white ">
      {children}
    </button>
  );
};
