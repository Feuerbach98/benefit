import React from 'react';
import basket from '../../images/buy_icon.svg';
import cn from "classnames";
import './Card.scss';


export const Card = ({ img, title, category, price ,salePrice}) => {
  return (
    <div className="card">
      <p className="card__category">{category}</p>
      <img className="card__image" alt="" src={img}></img>
      <p className="card__title">{title}</p>
      <div className="card__bottom">
        <div className={cn("card__price", { "card__price--sale": salePrice })}>
          {salePrice && <p className="card__through-price">{price} грн</p>}
          {salePrice || price}грн
        </div>
        <button className="card__button">
          <img className="card__button-img" alt="" src={basket}></img>
          <div className="card__button-text">В корзину</div>
        </button>
      </div>
    </div>
  );
}
