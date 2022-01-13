import React from "react";
import './AutoPlaySlider.css';

import Slider from "react-slick";
import GoogleLogo from '../../../assets/BrendLogos/Google.png';
import FacebookLogo from '../../../assets/BrendLogos/Facebook.png';
import TrustpilotLogo from '../../../assets/BrendLogos/Trustpilot.png';


interface IAutoPlaySliderItem{
  LOGO: any;
  point: String;
  reviews: Number;
}

const AutoPlaySliderItem = ({LOGO, point,reviews}: IAutoPlaySliderItem) => {
  return(
    <div className="AutoPlaySliderItem">
      <img src={LOGO} alt="GoogleLogo" />
      <div>
        <p>Excelent</p>
        <div className="Stars">
          <span>{point}</span>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <span className="reviews">{reviews} reviews</span>
    </div>
  )
}


const AutoPlaySlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1431,
            settings: {
              dots: false,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2000,
              arrows: false,
              cssEase: "linear",
            }
          },
          {
            breakpoint: 855,
            settings: {
              dots: false,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2000,
              arrows: false,
              cssEase: "linear",
            }
          },
          {
            breakpoint: 550,
            settings: {
              dots: false,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2000,
              arrows: false,
              cssEase: "linear",
            }
          },
          {
            breakpoint: 400,
            settings: {
              dots: false,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              centerMode:true,
              speed: 2000,
              arrows: false,
              cssEase: "linear",
            }
          }
        ]
      };

    return(
        <div >

        <Slider {...settings}>
          <AutoPlaySliderItem point={"4.0"} reviews={11} LOGO={GoogleLogo}/>
          <AutoPlaySliderItem point={"4.2"} reviews={12} LOGO={FacebookLogo}/>
          <AutoPlaySliderItem point={"4.3"} reviews={13} LOGO={TrustpilotLogo}/>
          <AutoPlaySliderItem point={"4.4"} reviews={14} LOGO={GoogleLogo}/>
          <AutoPlaySliderItem point={"4.5"} reviews={15} LOGO={FacebookLogo}/>
          <AutoPlaySliderItem point={"4.6"} reviews={16} LOGO={TrustpilotLogo}/>
          <AutoPlaySliderItem point={"4.7"} reviews={17} LOGO={GoogleLogo}/>
          <AutoPlaySliderItem point={"4.8"} reviews={18} LOGO={FacebookLogo}/>
          <AutoPlaySliderItem point={"4.9"} reviews={19} LOGO={TrustpilotLogo}/>
          
         
        </Slider>
      </div>
    )
};

export default AutoPlaySlider;