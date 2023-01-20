import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  onSelectCategory: () => void;
};

const categories = [
  "All",
  "Music",
  "Virtual World",
  "Art",
  "Photography",
  "Domain",
  "Collectibles",
];
function CategoryMenu({ onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex justify-between items-center">
      <div id="categories-web" className="space-x-2 hidden sm:flex">
        {categories.map((category) => (
          <span
            className={`px-4 py-2 border rounded-md text-[10px] ${
              selectedCategory === category ? "bg-gray-300" : "bg-white"
            } transition-colors duration-300 cursor-pointer hover:bg-gray-300`}
            onClick={() => handleCategorySelection(category)}
            key={category}
          >
            {category}
          </span>
        ))}
      </div>

      <Menu id="categories-mobile" as="div" className="flex sm:hidden">
        <Menu.Button className="border rounded-md bg-white px-4 py-2 text-[10px]">
          {selectedCategory}{" "}
          <ChevronDownIcon className="w-3 h-3 inline-block" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className="absolute bg-white shadow-lg rounded-md text-[10px] flex flex-col items-start"
        >
          {categories.map((category) => (
            <Menu.Item
              key={category}
              as="p"
              className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      <Menu as="div">
        <Menu.Button className="border rounded-md bg-white px-4 py-2 text-[10px]">
          Recently Added <ChevronDownIcon className="w-3 h-3 inline-block" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className="absolute bg-white shadow-lg rounded-md text-[10px] flex flex-col items-start"
        >
          {categories.map((category) => (
            <Menu.Item
              key={category}
              as="p"
              className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
            >
              {category}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default CategoryMenu;
