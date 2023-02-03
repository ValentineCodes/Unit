import React from "react";
import CategoryMenu from "./CategoryMenu";
import NFT from "./modules/NFT";
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

function TrendingCategories({}: Props) {
  const sliderItems = [1, 2, 3, 4, 5, 6, 7, 8];
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
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 max-w-[992px] mx-auto">
      <h1 className="font-bold text-2xl my-5 max-w-[70%]">
        <span className="mr-1">{"\u26A1"}</span>Trending&nbsp;categories
      </h1>

      <CategoryMenu
        onSelectCategory={(category: string) => {
          console.log(category);
        }}
      />

      <div className="grid max-md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {sliderItems.map((_) => (
          <NFT key={_} />
        ))}
      </div>

      <Slider {...sliderConfig} className="w-full md:hidden mt-8">
        {sliderItems.map((_) => (
          <NFT key={_} />
        ))}
      </Slider>
    </div>
  );
}

export default TrendingCategories;
