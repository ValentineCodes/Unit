import React from "react";
import CategoryMenu from "./CategoryMenu";

type Props = {};

function TrendingCategories({}: Props) {
  return (
    <div className="flex flex-col items-center mt-20 space-y-7 py-10">
      <h1 className="text-center font-bold text-2xl my-5 max-w-[70%]">
        <span className="mr-1">{"\u26A1"}</span>Trending categories
      </h1>

      <CategoryMenu
        onSelectCategory={(category: string) => console.log(category)}
      />
    </div>
  );
}

export default TrendingCategories;
