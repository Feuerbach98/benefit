import React, { useEffect, useState } from 'react';
import './Slider.scss';
import bannerMobile from '../../images/banner-mobile.png';
import banner from '../../images/banner.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;

  return <button className="carousel__right-arrow" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;

  return <button className="carousel__left-arrow" onClick={() => onClick()} />;
};

const responsive = {
  'slide': {
    breakpoint: { max: 4000, min: 320 },
    items: 1,
  },
};


export const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsDesktop(false)
    }
  }, []);

  return (
    <Carousel
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={5000}
      responsive={responsive}
      className="slider"
    >
      <img className="slider__slide" src={isDesktop ? banner : bannerMobile} alt=""></img>
    </Carousel>
  );
}
