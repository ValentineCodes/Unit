import React, { useState } from "react";
import NFTCollection from "../../cards/NFTCollection";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import Slider from "react-slick";

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

const timestamps = ["last 7 days", "last 30 days", "last 60 days"];
const TopCollections = (props: Props) => {
  const [selectedTimestamp, setSelectedTimestamp] = useState("last 7 days");

  const sliderItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const sliderConfig = {
    dots: false,
    infinite: sliderItems.length > 3,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 435,
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
      <h1 className="text-center font-bold text-2xl max-w-[70%] mb-8">
        <span className="mr-1">{"\u26A1"}</span>
        &nbsp;Top&nbsp;collections&nbsp;over&nbsp;
        <Menu as="span" className="inline-block">
          <Menu.Button className="text-[#8258FC]">
            {selectedTimestamp}{" "}
            <ChevronDownIcon className="w-5 h-5 inline-block" />
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute bg-white border shadow-lg rounded-md text-sm flex flex-col items-start"
          >
            {timestamps.map((timestamp) => (
              <Menu.Item
                as="li"
                className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
                onClick={() => setSelectedTimestamp(timestamp)}
              >
                {timestamp}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </h1>

      <div className="grid max-md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <NFTCollection key={_} />
        ))}
      </div>

      <Slider {...sliderConfig} className="w-full md:hidden mt-8">
        {sliderItems.map((_) => (
          <NFTCollection key={_} />
        ))}
      </Slider>

      <button className="btn btn-primary mt-10">Go To Rankings</button>
    </div>
  );
};

export default TopCollections;
