import React from "react";
import Image from "next/image";

type Props = {};

function NFTCollection({}: Props) {
  return (
    <div className="flex items-center w-[150px] sm:w-[200px] border rounded-lg p-2 sm:p-5 bg-white">
      <div>
        <Image
          src="/images/nft_1.webp"
          alt=""
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>

      <div className="ml-5">
        <h3 className="font-bold text-sm sm:text-md">Cryptopunk</h3>
        <p className="text-sm text-gray-500">6,833 ETH</p>
      </div>
    </div>
  );
}

export default NFTCollection;
