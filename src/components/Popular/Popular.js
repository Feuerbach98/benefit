import React from 'react';
import { Card } from '../Card/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../../images/products/1.png';
import img2 from '../../images/products/2.png';
import img3 from '../../images/products/3.png';
import img4 from '../../images/products/4.png';
import img5 from '../../images/products/5.png';
import img6 from '../../images/products/6.png';
import './Popular.scss';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;

  return <button id="hello" className="carousel__right-arrow" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;

  return <button id="hello" className="carousel__left-arrow" onClick={() => onClick()} />;
};

const responsive = {
  '1920': {
    breakpoint: { max: 3000, min: 1920 },
    items: 6,
  },
  '1527': {
    breakpoint: { max: 1919, min: 1527 },
    items: 5,
  },
  '1134': {
    breakpoint: { max: 1526, min: 1134 },
    items: 4,
  }
};

export const Popular = () => {
  return (
    <section className="popular" id="popular">
      <h2 className="popular__title">Самое популярное</h2>
      <div className="popular__card-box-desktop">
        <Carousel
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          responsive={responsive}
        >
          <Card
            category="Макияж"
            title="Givenchy Le Rouge* Помада для губ"
            img={img}
            price="1100"
            salePrice="900"
          />
          <Card
            category="Тело и ванна"
            title={`Натуральное масло "Манго"`}
            img={img2}
            price="97"
          />
          <Card
            category="Волосы"
            title="Аюрведический шампунь из индийских трав «Comex»"
            img={img3}
            price="62"
          />
          <Card
            category="Ногти"
            title="Лак для ногтей"
            img={img4}
            price="132"
          />
          <Card
            category="Лицо"
            title={`Маска для лица "3 глины и морские водоросли"`}
            img={img5}
            price="150"
          />
          <Card
            category="Мужчинам"
            title="Geparlys Karen Low Pure Vibe"
            img={img6}
            price="266"
          />
          <Card
            category="Макияж"
            title="Givenchy Le Rouge* Помада для губ"
            img={img}
            price="1100"
            salePrice="900"
          />
        </Carousel>
      </div>
      <div className="popular__card-box-mobile">
        <Card
          category="Макияж"
          title="Givenchy Le Rouge* Помада для губ"
          img={img}
          price="1100"
          salePrice="900"
        />
        <Card
          category="Тело и ванна"
          title={`Натуральное масло "Манго"`}
          img={img2}
          price="97"
        />
        <Card
          category="Волосы"
          title="Аюрведический шампунь из индийских трав «Comex»"
          img={img3}
          price="62"
        />
        <Card category="Ногти" title="Лак для ногтей" img={img4} price="132" />
      </div>
    </section>
  );
};
