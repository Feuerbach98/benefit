import React from 'react';
import logo from '../../logo.png';
import './Logo.scss';

export const Logo = ({ alignStart }) => {
  return (
    <a
      href="http://feuerbach98.github.io/benefit"
    >
      <img className="logo" alt="logo" src={logo} />
    </a>
  );
}
