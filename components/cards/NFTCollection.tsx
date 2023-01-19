import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

type Props = {};

function NFTCollection({}: Props) {
  return (
    <div className="flex items-center w-[150px] sm:w-[200px] border rounded-lg p-2 sm:p-5 bg-white">
      <div className="relative">
        <Image
          src="/images/nft_1.webp"
          alt=""
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div className="absolute bottom-[5.5px] -left-[7.5px] border-2 border-white rounded-full w-[17px] h-[17px] bg-[#3b53e0] text-white text-[8px] flex justify-center items-center">
          91
        </div>
        <div className="absolute -bottom-[5.5px] -left-[7.5px] border-2 border-white rounded-full w-[17px] h-[17px] bg-[rgb(88,232,5)] flex justify-center items-center">
          <CheckIcon className="w-3 h-3" color="white" />
        </div>
      </div>

      <div className="ml-5">
        <h3 className="font-bold text-sm sm:text-md">Cryptopunk</h3>
        <p className="text-sm text-gray-500">6,833 ETH</p>
      </div>
    </div>
  );
}

export default NFTCollection;
