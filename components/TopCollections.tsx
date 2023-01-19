import React from "react";
import NFTCollection from "./cards/NFTCollection";

type Props = {};

const TopCollections = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-20 space-y-5">
      <h1 className="text-center font-bold text-2xl my-5 max-w-[70%]">
        Top collections over <span className="text-[#D262D1]">last 7 days</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <NFTCollection />
        ))}
      </div>

      <button className="btn-primary">Go To Rankings</button>
    </div>
  );
};

export default TopCollections;
