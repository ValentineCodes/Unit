import React from "react";
import Bid from "./cards/Bid";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[50%] -left-[10px] z-20 shadow-lg p-[10px]"
    >
      <ChevronLeftIcon className="w-[20px] h-[20px]" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[50%] -right-[10px] z-20 shadow-lg p-[10px]"
    >
      <ChevronRightIcon className="w-[20px] h-[20px]" />
    </div>
  );
}

function HotBids({}: Props) {
  const bidsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="w-[70%] mx-auto space-y-7">
      <h1 className="text-center font-bold text-2xl">
        <span className="mr-1">{"\uD83D\uDD25"}</span>
        HotBids
      </h1>
      <Slider {...bidsSliderSettings}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Bid key={item} />
        ))}
      </Slider>
    </div>
  );
}

export default HotBids;
