import React, { useState } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Nav } from '../Nav/Nav';
import visa from '../../images/pay/1.png';
import master from '../../images/pay/2.png';
import arrow from '../../images/Vector.png';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

export const Footer = () => {
  const [visibilityAdditional, setVisibilityAdditional] = useState(true);

  const additionalLinks = [
    "О компании",
    "Бренды",
    "Оплата и доставка",
    "Возврат и обмен",
    "Шоурум",
    "Контакты",
  ];

  const toggleAdditional = () => {
    setVisibilityAdditional(!visibilityAdditional);
  }
  return (
    <footer className="footer">
      <div className="footer__top">
        <button className="footer__button" type="button" onClick={toggleAdditional}>
          Разделы сайта
          <img alt="" src={arrow}></img>
        </button>
        <div className="footer__navigation">
          <Nav columns={true} />
        </div>
        <div className="footer__additional footer__additional--mobile"  hidden={visibilityAdditional}>
          {additionalLinks.map((link, index) => (
            <a key={index} className="footer__additional-link" href="https://google.com">
              {link}
            </a>
          ))}
        </div>
        <div className="footer__additional footer__additional--desktop">
          {additionalLinks.map((link, index) => (
            <a key={index} className="footer__additional-link" href="https://google.com">
              {link}
            </a>
          ))}
        </div>
        <div className="footer__contacts">
          <Contacts column={true} />
        </div>
        <div className="footer__pay pay">
          <p className="pay__title">Мы принимаем любой способ оплаты</p>
          <div className="pay__images">
            <img className="pay__image" alt="visa" src={visa}></img>
            <img className="pay__image" alt="mastercard" src={master}></img>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">
          <Logo alignStart={true}/>
        </div>
        <p className="footer__bottom-text">
          © 2013-2017 «Benefit» — интернет-магазин косметики email: 
          <a className="footer__link" href="mailto:zakaz@benefit.ru">
            {` zakaz@benefit.ru`}
          </a>
        </p>
      </div>
    </footer>
  );
}
