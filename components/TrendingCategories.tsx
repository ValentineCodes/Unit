import React from "react";

type Props = {};

function TrendingCategories({}: Props) {
  return (
    <div className="flex flex-col items-center mt-20 space-y-7 py-10 bg-[#D1EEFC]/10">
      <h1 className="text-center font-bold text-2xl my-5 max-w-[70%]">
        <span className="mr-1">{"\u26A1"}</span>Trending categories
      </h1>
    </div>
  );
}

export default TrendingCategories;
