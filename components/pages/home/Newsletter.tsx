import React from "react";
import {
  HeartIcon,
  WalletIcon,
  TagIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const sale_procedure = [
  {
    id: 1,
    title: "1. Set up your wallet",
    description:
      "Once you've set up your wallet, connect it by clicking the NFTMarketplace in the top right corner.",
    icon: <WalletIcon className="w-4 text-white" />,
    icon_color: "#8357FC",
  },
  {
    id: 2,
    title: "2. Create Your Collection",
    description:
      "Click create and set up your collection. Add social links, a description, profile & banner images, and set up a secondary sales fee.",
    icon: <HeartIcon className="w-4 text-white" />,
    icon_color: "#5CBA84",
  },

  {
    id: 3,
    title: "3. Add Your NFTs",
    description:
      "Upload your work(image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties.",
    icon: <PhotoIcon className="w-4 text-white" />,
    icon_color: "#428AF8",
  },
  {
    id: 4,
    title: "4. List Them For Sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.",
    icon: <TagIcon className="w-4 text-white" />,
    icon_color: "#E94243",
  },
];

function Newsletter({}: Props) {
  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 max-w-[992px] mx-auto">
      <h1 className="text-center font-bold text-2xl max-w-[70%] mb-[2em]">
        Create and sell your NFTs
      </h1>

      <div className="flex flex-wrap xl:flex-nowrap items-start justify-center gap-2">
        {sale_procedure.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[15em] mt-4"
          >
            <div
              className={`bg-[${item.icon_color}] p-3 outline outline-8 outline-[${item.icon_color}]/40 rounded-full`}
            >
              {item.icon}
            </div>

            <h2 className="font-semibold text-md mt-5 mb-3">{item.title}</h2>
            <p className="text-gray-500 text-xs text-center leading-5 max-w-[200px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 text-sm text-center w-[60%] mt-16">
        Join our mailing list to stay in the loop with out newest feature
        releases, NFT drops, and tips and tricks for navigating Unit
      </p>

      <div className="flex items-center px-3 py-2 rounded-[4em] bg-white border border-gray-300 mt-5 w-[70%] sm:w-[400px]">
        <input
          type="email"
          placeholder="Email address"
          className="outline-none border-none text-xs w-[100%] placeholder-gray-500 pr-2"
        />

        <button className="btn bg-[#8258FC] text-white transition-colors duration-500 px-4 py-1 rounded-[20px] text-xs">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
