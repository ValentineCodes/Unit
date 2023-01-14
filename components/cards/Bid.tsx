import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";

type Props = {};

function Bid({}: Props) {
  return (
    <div className="border rounded-2xl p-3 space-y-2 text-sm shadow-2xl w-[200px] bg-white">
      <Image
        src="/images/nft_1.webp"
        alt=""
        width={200}
        height={200}
        className="rounded-xl w-full"
      />

      <div className="flex justify-between items-center">
        <strong>ValentineCodes</strong>

        <div className="flex justify-between items-center border border-gray-200 rounded-md p-1 space-x-1">
          <HeartIcon className="w-3 h-3 " />
          <strong className="text-[#5c5]">155 ETH</strong>
        </div>
      </div>

      <p className="text-sm text-gray-500">Current bid 1.3 ETH</p>

      <div className="flex items-center justify-between">
        <span className="text-[#E763D8]">Buy now</span>
        <div className="flex justify-between items-center space-x-1">
          <HeartIcon className="w-3 h-3 " />
          <strong>148</strong>
        </div>
      </div>
    </div>
  );
}

export default Bid;
