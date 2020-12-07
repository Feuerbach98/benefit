import React from 'react';
import './Main.scss';

export const Main = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
      <div className="under-line"></div>
    </>
  );
};
