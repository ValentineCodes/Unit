import React from "react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto shrink-0 py-10 px-5">
      <div className="space-y-5 sm:max-w-[40%]">
        <h1 className="font-bold text-5xl leading-[3.5rem]">
          Buy, sell and collect NFTs
        </h1>
        <p className="text-gray-500">
          The world's largest digital marketplace for crypto collectibles and
          non-fungible tokens
        </p>

        <div className="space-x-3">
          <button className="btn btn-primary">Upload</button>
          <button className="btn btn-secondary">Explore</button>
        </div>
      </div>

      <img
        src="/images/nft_1.webp"
        alt=""
        className="rounded-2xl hidden sm:flex w-5/12"
      />
    </div>
  );
}

export default Hero;
