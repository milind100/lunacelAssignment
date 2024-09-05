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
  const [images, setImages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdMMDF1lSj4pxrNeB3xFPfewV5Ki5_8R47A&s",
    "https://wallpapers.com/images/featured/skyscraper-8scefc1q0icwddbz.jpg",
    "https://e0.pxfuel.com/wallpapers/722/404/desktop-wallpaper-city-skyline-skyscrapers-night-buildings.jpg",
    "https://wallpaper.forfun.com/fetch/02/025f165ab54fbef0c6f520ba048857da.jpeg",
  ]);

  let sliderRef = useRef(null);
  const fileInputRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
      sliderRef.slickGoTo(images.length + 1);
    }
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
              onClick={() => fileInputRef.current.click()}
              className="addImages-button text-[8px] ssm:text-[10px] lg:text-xs py-[10px] lg:py-[14px] px-[5px] ssm:px-[15px] xl:px-[20px] rounded-[104px]"
            >
              + Add image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
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
          {images.map((image) => (
            <div key={image} className="w-full h-full">
              <img
                src={image}
                alt="rightArrow logo"
                className="h-[100px] w-full md:h-[150px] md:w-[170px] rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGallary;
