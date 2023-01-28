import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";

type Props = {};

function Bid({}: Props) {
  return (
    <div className="border rounded-2xl p-3 text-sm w-[15em] bg-white">
      <Image
        src="/images/nft_1.webp"
        alt=""
        width={200}
        height={200}
        className="rounded-lg w-full"
      />

      <div className="flex justify-between items-center mt-2 mb-1">
        <strong>ValentineCodes</strong>

        <div className="flex justify-between items-center border border-gray-200 rounded-md px-1 space-x-1">
          <HeartIcon className="w-2 sm:w-3 sm:h-3" />
          <span className="text-[#5c5] text-[10px] sm:text-sm">155 ETH</span>
        </div>
      </div>

      <p className="text-[0.65rem] text-gray-500">Current Bid 1.3 ETH</p>

      <div className="flex items-center justify-between mt-5">
        <strong className="text-[#E763D8] text-xs">Buy now</strong>
        <div className="flex justify-between items-center space-x-1">
          <HeartIcon className="w-3 h-3 " />
          <span className="text-xs text-gray-500">148</span>
        </div>
      </div>
    </div>
  );
}

export default Bid;
