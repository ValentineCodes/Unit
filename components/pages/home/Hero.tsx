import React from "react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex items-center justify-between max-w-5xl shrink-0 py-12 px-6 sm:px-12 max-w-[992px] mx-auto">
      <div>
        <h1 className="font-bold text-5xl leading-[3.5rem]">
          Buy, sell and <br /> collect NFTs
        </h1>
        <p className="text-gray-500 mt-[1rem] max-w-[70%]">
          The world's largest digital marketplace for crypto collectibles and
          non-fungible tokens
        </p>

        <div className="space-x-3 mt-[2rem]">
          <button className="btn btn-primary w-[6.5rem]">Upload</button>
          <button className="btn btn-secondary w-[6.5rem]">Explore</button>
        </div>
      </div>

      <img
        src="/images/nft_1.webp"
        alt=""
        className="rounded-[7rem] hidden md:flex max-w-[42%] rotate-12 mt-12"
      />
    </div>
  );
}

export default Hero;
