import React from 'react';
import './Nav.scss';
import cn from "classnames";

export const Nav = ({columns, menuToggler}) => {
  const links = [
    'макияж',
    'ногти',
    'волосы',
    'парфюмерия',
    'лицо',
    'тело и ванна',
    'мужчинам',
    'аксессуары',
    'health and care',
    'подарки',
    'бренды',
  ];

  return (
    <nav className={cn("navigation", { "navigation--columns": columns })}>
      {links.map((link, index) => (
        <a
          key={index}
          className={cn("navigation__link", {
            "navigation__link--columns": columns,
          })}
          onClick={menuToggler || null}
          href="#popular"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
