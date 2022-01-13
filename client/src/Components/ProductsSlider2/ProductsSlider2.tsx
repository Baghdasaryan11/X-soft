import React from 'react';
import './ProductsSlider2.css'
import Slider from "react-slick";
import CustomerReviewCard from '../CustomerReviews/CustomerReviewCard/CustomerReviewCard';
import { ICustomerReviewCardProps } from '../CustomerReviews/CustomerReviewCard/CustomerReviewCard';


interface IProductsSlider {
  items: ICustomerReviewCardProps[]
}


const ProductsSlider2 = ({ items }: IProductsSlider) => {
  const settings = {
    dots: true,
    infinite: true ,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  return (
    <div className="ProductsSlider2">

      <Slider {...settings}>


        {
          items.map((i: ICustomerReviewCardProps, index: any) => {

            return (
              <div className='SlideItem' key={index}>
                <CustomerReviewCard 
                  title={i.title}
                  author={i.author}
                  post={i.post}
                  company={i.company}
                  videoLink={i.videoLink}/>
              </div>
            )
          })
        }
        
      </Slider>
    </div>
  )
};

export default ProductsSlider2;