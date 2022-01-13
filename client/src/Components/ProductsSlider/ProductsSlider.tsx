import React from 'react';
import './ProductSlider.css'
import Slider from "react-slick";
import ProductCard from '../ProductCards/ProductCard';
import { IProductCardProps } from '../ProductCards/ProductCard';


interface IProductsSlider {
  items: IProductCardProps[];
  initialCount? : Number
}


const ProductsSlider = ({ items, initialCount = 4 }: IProductsSlider) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: initialCount,
    slidesToScroll: initialCount,
    initialSlide: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  console.log(items)
  return (
    <div className="ProductSlider">

      <Slider {...settings as any} >


        {
          items.map((i: IProductCardProps, index: any) => {

            return (
              <div className='SlideItem' key={index}>
                <ProductCard name={i.name} company={i.company} price={i.price} picture={i.picture}/>
              </div>
            )
          })
        }
        
      </Slider>
    </div>
  )
};

export default ProductsSlider;