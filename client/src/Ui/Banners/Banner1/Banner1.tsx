import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import AutoPlaySlider from "../Banner2/AutoPlaySlider";

import "./Banner1.css";

interface ICarouselItemProps {
  children: JSX.Element | JSX.Element[];

}

export const CarouselItem = ({ children }: ICarouselItemProps) => {
  return (
    <div className="carousel-item"  >
      {children}
    </div>
  );
};

interface IBanner1Props {
  children: JSX.Element | JSX.Element[];

}

const Banner1 = ({ children }: IBanner1Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };


  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="PrevArrow"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="NextArrow"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>


      <div>
      <AutoPlaySlider />
      </div>
      <div className="Dots">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner1;
