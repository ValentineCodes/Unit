import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  EllipsisHorizontalIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default () => {
  return (
    <div className="bg-[#F4F8FC] pb-12">
      <Image
        src="/images/wallpaper_2.jpeg"
        alt=""
        width={200}
        height={200}
        className="w-full h-60"
      />

      <div className="flex flex-col items-center">
        <div className="border-[4px] border-white w-[7em] aspect-square rounded-lg relative -mt-14">
          <Image
            src="/images/nft_1.webp"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="absolute -bottom-[5.5px] -right-[7.5px] border-2 border-white rounded-full w-[17px] h-[17px] bg-[rgb(88,232,5)] flex justify-center items-center">
            <CheckIcon className="w-3 h-3" color="white" />
          </div>
        </div>

        <h1 className="text-2xl mt-7">NFT Funny Cat</h1>

        <p className="text-[.75rem] text-gray-500 mt-3">
          Created by{" "}
          <Link href="/" className="text-[#3b53e0]">
            Valentine Orga
          </Link>
        </p>

        <div className="flex items-center mt-7 px-4">
          <div className="text-center py-2 w-20 sm:w-24 bg-white border border-gray-200 rounded-l-lg">
            <strong className="text-sm">7.2</strong>
            <p className="text-[.65rem] text-gray-500">Items</p>
          </div>
          <div className="text-center py-2 w-20 sm:w-24 bg-white border border-gray-200">
            <strong className="text-sm">5.3</strong>
            <p className="text-[.65rem] text-gray-500">Owners</p>
          </div>
          <div className="text-center py-2 w-20 sm:w-24 bg-white border border-gray-200">
            <strong className="text-sm">
              <HeartIcon className="w-3 inline" /> 2.55
            </strong>
            <p className="text-[.65rem] text-gray-500">Floor Price</p>
          </div>
          <div className="text-center py-2 w-20 sm:w-24 bg-white border border-gray-200 rounded-r-lg">
            <strong className="text-sm">
              <HeartIcon className="w-3 inline" /> 17.2k
            </strong>
            <p className="text-[.65rem] text-gray-500">Volume Traded</p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-md mt-7">
          Unique, fully 3D and built to unite the design multiverse.
          <br />
          Designed and styled by Valentine Orga
        </p>

        <div className="flex items-center mt-7 space-x-2">
          <div className="bg-white p-2 rounded-md">
            <HeartIcon className="w-3" />
          </div>
          <div className="bg-white p-2 rounded-md">
            <ShareIcon className="w-3" />
          </div>
          <div className="bg-white p-2 rounded-md">
            <EllipsisHorizontalIcon className="w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
