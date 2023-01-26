import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  EllipsisHorizontalIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

import { Menu } from "@headlessui/react";

type Props = {};

function NFT({}: Props) {
  return (
    <div className="border border-[red] rounded-2xl p-3 space-y-2 bg-white z-10 w-full">
      {/* <div className="relative">
        <Image
          src="/images/nft_1.webp"
          alt=""
          width={200}
          height={200}
          className="rounded-xl w-full"
        />

        <div className="absolute flex justify-between items-center border border-gray-200 rounded-md px-1 space-x-1 top-2 right-2 bg-white">
          <HeartIcon className="w-2 h-2 sm:w-3 sm:h-3" />
          <span className="text-[10px] sm:text-sm">155</span>
        </div>

        <div className="absolute -bottom-[10px] left-[12px] rounded-full border-2 border-white z-10">
          <Image
            src="/images/nft_1.webp"
            alt=""
            width={20}
            height={20}
            className="rounded-xl"
          />
        </div>
        <div className="absolute -bottom-[10px] left-[30px] rounded-full border-2 border-white">
          <Image
            src="/images/nft_1.webp"
            alt=""
            width={20}
            height={20}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <strong>ValentineCodes</strong>

        <Menu as="div">
          <Menu.Button>
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </Menu.Button>

          <Menu.Items
            as="div"
            className="absolute bg-white shadow-lg rounded-md text-[10px] flex flex-col items-start"
          >
            <Menu.Item
              as="p"
              className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
            >
              Menu 1
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <p className="text-[12px] text-gray-500">Current bid 1.3 ETH</p>

      <div className="flex items-center justify-between">
        <span className="text-[#E763D8]">Buy now</span>
        <div className="flex justify-between items-center space-x-1 text-[12px] font-semibold text-gray-700">
          <ClockIcon className="w-3 h-3 " />
          <span>View History</span>
        </div>
      </div> */}
    </div>
  );
}

export default NFT;
