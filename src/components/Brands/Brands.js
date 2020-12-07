import React from 'react';
import './Brands.scss';
import img1 from '../../images/logos/1.png';
import img2 from '../../images/logos/2.png';
import img3 from '../../images/logos/3.png';
import img4 from '../../images/logos/4.png';
import img5 from '../../images/logos/5.png';
import img6 from '../../images/logos/6.png';


export const Brands = () => {
  const brands = [
    {
      src: img1,
      link: 'https://www.nyxcosmetics.com/'
    }, 
    {
      src: img2,
      link: 'https://www.sephora.com/'
    }, 
    {
      src: img3,
      link: 'https://www.smashbox.com/'
    }, 
    {
      src: img4,
      link: 'https://www.chanel.com/'
    }, 
    {
      src: img5,
      link: 'https://www.rimmellondon.com/'
    }, 
    {
      src: img6,
      link: 'https://www.simpleskincare.com/au'
    }
  ];

  return (
    <section className="brands">
      <h2 className="brands__title">Бренды нашего магазина</h2>
      <div className="brands__brands-box">
        {brands.map((brand, index) => (
          <a key={index} href={brand.link} target="_blank" rel="noreferrer">
            <img alt="" className="brands__brand" src={brand.src}></img>
          </a>
        ))}
      </div>
    </section>
  );
};
