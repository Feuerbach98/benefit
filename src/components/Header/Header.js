import React, { useState } from 'react';
import search from '../../images/search-icon.svg';
import libra from '../../images/libra_icon.svg';
import basket from '../../images/basket_icon.svg';
import './Header.scss';
import { Nav } from '../Nav/Nav';
import { Contacts } from '../Contacts/Contacts';
import { Logo } from '../Logo/Logo';
import cn from 'classnames';

export const Header = () => {
  const [region, setRegion] = useState('Днепр');

  const [menuVisibility, setMenuVisibility] = useState(true);

  const menuToggle = () => {
    setMenuVisibility(!menuVisibility);
  }

  const handleChange = (event) => {
    setRegion(event.target.value);
  }

  return (
    <header className="header">
      <div className="black-line"></div>
      <div className="header__top">
        <div className="header__region">
          <label className="header__region-label" htmlFor="region">
            Ваш регион:
          </label>
          <select
            value={region}
            className="header__region"
            id="region"
            name="region"
            onChange={handleChange}
          >
            <option className="header__region-option" value="Днепр">
              Днепр
            </option>
            <option className="header__region-option" value="Киев">
              Киев
            </option>
            <option className="header__region-option" value="Львов">
              Львов
            </option>
            <option className="header__region-option" value="Одесса">
              Одесса
            </option>
          </select>
        </div>
        <div className="header__links">
          <a className="header__link" href="https://www.google.com/">
            Шоурум
          </a>
          <a className="header__link" href="https://www.google.com/">
            Контакты
          </a>
        </div>
      </div>
      <div className="header__main header-main">
        <button
          type="button"
          className={cn("menu-toggler", {
            "menu-toggler--opened": !menuVisibility,
          })}
          onClick={menuToggle}
        ></button>
        <div className="mobile-menu" hidden={menuVisibility}>
          <Nav menuToggler={menuToggle} />
        </div>
        <div className="header-main__contacts">
          <Contacts />
        </div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header-main__buttons">
          <button className="header-main__button header-button" type="button">
            <div className="header-button__icon-wrapper header-button__icon-wrapper--transparent">
              <img className="header-button__search" alt="" src={search} />
            </div>
            <div className="header-button__text">Поиск</div>
          </button>
          <button className="header-main__button header-button" type="button">
            <div className="header-button__icon-wrapper">
              <img alt="" src={libra} />
            </div>
            <div className="header-button__text">Сравнение</div>
          </button>
          <button className="header-main__button header-button" type="button">
            <div className="header-button__icon-wrapper">
              <img alt="" src={basket} />
            </div>
            <div className="header-button__text">Корзина</div>
          </button>
        </div>
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
}
