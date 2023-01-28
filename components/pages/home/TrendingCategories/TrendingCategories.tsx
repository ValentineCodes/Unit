import React from "react";
import CategoryMenu from "./CategoryMenu";
import NFT from "./modules/NFT";

type Props = {};

function TrendingCategories({}: Props) {
  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 max-w-[992px] mx-auto">
      <h1 className="font-bold text-2xl my-5 max-w-[70%]">
        <span className="mr-1">{"\u26A1"}</span>Trending&nbsp;categories
      </h1>

      <CategoryMenu
        onSelectCategory={(category: string) => {
          console.log(category);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <NFT key={_} />
        ))}
      </div>
    </div>
  );
}

export default TrendingCategories;
