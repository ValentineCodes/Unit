import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

type Props = {};

function NFTCollection({}: Props) {
  return (
    <div className="flex items-center border rounded-2xl p-2 bg-white w-[12em]">
      <div className="relative">
        <img src="/images/nft_1.webp" alt="" className="rounded-lg w-10" />

        <div className="absolute bottom-[5.5px] -left-[7.5px] border-2 border-white rounded-full w-[17px] h-[17px] bg-[#3b53e0] text-white text-[8px] flex justify-center items-center">
          91
        </div>
        <div className="absolute -bottom-[5.5px] -left-[7.5px] border-2 border-white rounded-full w-[17px] h-[17px] bg-[rgb(88,232,5)] flex justify-center items-center">
          <CheckIcon className="w-3 h-3" color="white" />
        </div>
      </div>

      <div className="ml-3">
        <h3 className="font-bold text-xs">Cryptopunk</h3>
        <p className="text-[0.65rem] text-gray-500 mt-1">6,833 ETH</p>
      </div>
    </div>
  );
}

export default NFTCollection;
