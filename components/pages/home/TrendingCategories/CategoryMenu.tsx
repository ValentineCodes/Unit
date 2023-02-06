import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  categories: any[];
  onSelectCategory: () => void;
};

function CategoryMenu({ categories, onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="md:flex justify-between items-start w-full">
      {/* Categories list */}
      <div id="categories-web" className="flex flex-wrap gap-x-2">
        {categories.map((category) => (
          <span
            className={`px-3 py-1 border rounded-md text-[.65rem] transition-colors duration-300 cursor-pointer hover:bg-gray-300 flex items-center ${
              selectedCategory === category.name ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => handleCategorySelection(category.name)}
            key={category.name}
          >
            {category.icon}&nbsp;{category.name}
          </span>
        ))}
      </div>

      <Menu as="div">
        <Menu.Button className="border rounded-md bg-white px-3 py-1 text-[0.65em] flex justify-between items-center w-[15em]">
          <span>Recently&nbsp;Added</span>
          <ChevronDownIcon className="w-3 inline-block" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className="absolute bg-white shadow-lg rounded-md text-[10px] flex flex-col items-start z-20"
        >
          {categories.map((category) => (
            <Menu.Item
              key={category.name}
              as="p"
              className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
            >
              {category.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default CategoryMenu;
