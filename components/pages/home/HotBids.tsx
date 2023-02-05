import React from "react";
import Link from "next/link";
import Bid from "../../cards/Bid";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[45%] left-[-.8em] z-20 shadow-lg p-[10px]"
    >
      <ChevronLeftIcon className="w-5" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[45%] right-[-.8em] z-20 shadow-lg p-[10px]"
    >
      <ChevronRightIcon className="w-5" />
    </div>
  );
}

function HotBids({}: Props) {
  const sliderItems = [1, 2, 3, 4, 5];
  const sliderConfig = {
    dots: false,
    infinite: sliderItems.length > 3,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 540,
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
    <div className="mx-auto p-4 sm:p-12 flex flex-col max-w-[992px]">
      <h1 className="text-center font-bold text-2xl mb-8 ">
        <span className="mr-1">{"\uD83D\uDD25"}</span>
        HotBids
      </h1>

      <Slider {...sliderConfig}>
        {sliderItems.map((item) => (
          <Link key={item} href="/nft">
            <Bid />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default HotBids;
