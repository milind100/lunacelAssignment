import React, { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import rectangleImg from "../../assets/rectangleImg.png";
import Slider from "react-slick";

const SliderButton = ({ children, ...props }) => (
  <button
    className="imageNav-button w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] flex justify-center items-center bg-black rounded-full hover:bg-gray-200"
    {...props}
  >
    {children}
  </button>
);

const PhotoGallary = () => {
  const [slides, setSlides] = useState([1, 2, 3, 4]);

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleAddSlide = () => {
    setSlides((prev) => [...prev, prev.length + 1]);
    sliderRef.slickGoTo(slides.length + 1);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <div className="w-full h-full flex flex-col pr-[10px] xl:pr-[37px]">
      <div className="flex justify-between ">
        <div>
          <h1 className="bg-deepBlack py-2 ssm:py-4 px-2 ssm:px-5 md:px-10 rounded-[20px] text-sm ssm:text-base lg:text-xl">
            Gallary
          </h1>
        </div>
        <div className="flex  ssm:flex-row  items-center gap-2 md:gap-2 lmg:gap-5 lg:gap-9">
          <div>
            <button
              onClick={handleAddSlide}
              className="addImages-button text-[8px] ssm:text-[10px] lg:text-xs py-[10px] lg:py-[14px] px-[5px] ssm:px-[15px] xl:px-[20px] rounded-[104px]"
            >
              + Add image
            </button>
          </div>
          <div className="flex gap-[8px]  lg:gap-[18px]">
            <SliderButton onClick={previous}>
              <img src={leftArrow} alt="questionIcon logo" />
            </SliderButton>
            <SliderButton onClick={next}>
              <img src={rightArrow} alt="rightArrow logo" />
            </SliderButton>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-10 ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {slides.map((slide) => (
            <div key={slide} className="w-full h-full">
              <img
                src={rectangleImg}
                alt="rightArrow logo"
                className="h-[100px] md:h-full w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallary;
