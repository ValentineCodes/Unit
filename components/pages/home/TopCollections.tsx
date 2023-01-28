import React, { useState } from "react";
import NFTCollection from "../../cards/NFTCollection";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {};

const timestamps = ["last 7 days", "last 30 days", "last 60 days"];
const TopCollections = (props: Props) => {
  const [selectedTimestamp, setSelectedTimestamp] = useState("last 7 days");

  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 max-w-[992px] mx-auto">
      <h1 className="text-center font-bold text-2xl max-w-[70%] mb-8">
        <span className="mr-1">{"\u26A1"}</span>Top collections over{" "}
        <Menu as="div" className="inline-block">
          <Menu.Button className="text-[#D262D1]">
            {selectedTimestamp}{" "}
            <ChevronDownIcon className="w-5 h-5 inline-block" />
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute bg-white border shadow-lg rounded-md text-sm flex flex-col items-start"
          >
            {timestamps.map((timestamp) => (
              <Menu.Item
                as="li"
                className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
                onClick={() => setSelectedTimestamp(timestamp)}
              >
                {timestamp}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
          <NFTCollection key={_} />
        ))}
      </div>

      <button className="btn btn-primary mt-10">Go To Rankings</button>
    </div>
  );
};

export default TopCollections;
