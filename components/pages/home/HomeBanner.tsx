import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Slider from "react-slick";

interface Hostel {
  name: string;
  image: string;
}

const hostels: Hostel[] = [
  { name: "Elmada Hostel", image: "/images/wallpaper_1.jpeg" },
  { name: "Block A", image: "/images/wallpaper_2.jpeg" },
];

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="outline outline-1 text-white inline-block rounded-md absolute top-[45%] left-5 z-20 shadow-lg p-[10px] cursor-pointer hover:bg-[#D3542D] hover:outline-none transition-all duration-300"
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
      className="outline outline-1 text-white inline-block rounded-md absolute top-[45%] right-5 z-20 shadow-lg p-[10px] cursor-pointer hover:bg-[#D3542D] hover:outline-none transition-all duration-300"
    >
      <ChevronRightIcon className="w-5" />
    </div>
  );
}

type Props = {};

export default function HomeBanner({}: Props) {
  const carouselSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full">
      <Slider autoplaySpeed={3000} {...carouselSetting}>
        {hostels.map((hostel) => (
          <div className="w-full h-[40vh] sm:h-[50vh] md:h-[88vh] relative">
            <img
              src={hostel.image}
              alt="school image"
              className="w-full h-full"
            />

            <div className="absolute bg-blue-300/10 top-0 left-0 w-full h-full flex justify-center items-center flex-col">
              <h1 className="text-white text-[1rem] sm:text-[2rem] lg:text-[3rem] text-center max-w-[75%]">
                {hostel.name}
              </h1>
              <button className="outline outline-1 text-white hover:bg-[#D3542D] hover:outline-[#D3542D] transition-colors duration-500 text-sm sm:text-lg px-6 sm:px-12 py-2 sm:py-3 mt-5 rounded-[5px]">
                See More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
