import React from "react";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto shrink-0 py-10">
      <div className="space-y-5 max-w-[40%]">
        <h1 className="font-bold text-5xl leading-[3.5rem]">
          Buy, sell and collect NFTs
        </h1>
        <p className="text-gray-500">
          The world's largest digital marketplace for crypto collectibles and
          non-fungible tokens
        </p>

        <div className="space-x-3">
          <button className="bg-[red] text-white text-[12px] px-6 py-2 rounded-[20px] shadow-xl">
            Upload
          </button>
          <button className="bg-white text-[red] text-[12px] px-6 py-2 rounded-[20px] shadow-xl">
            Explore
          </button>
        </div>
      </div>

      <Image
        src="/images/nft_1.webp"
        alt=""
        width={400}
        height={400}
        className="rounded-2xl"
      />
    </div>
  );
}

export default Hero;
