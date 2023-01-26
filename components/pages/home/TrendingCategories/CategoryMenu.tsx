import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { IoIosExpand } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";

type Props = {
  onSelectCategory: () => void;
};

const categories = [
  {
    name: "All",
    icon: null,
  },
  {
    name: "Music",
    icon: <MusicalNoteIcon className="w-3 h-3 inline-block mr-1" />,
  },
  {
    name: "Virtual World",
    icon: <GlobeAltIcon className="w-3 h-3 inline-block mr-1" />,
  },
  {
    name: "Art",
    icon: <VscSymbolColor className="w-3 h-3 inline-block mr-1" />,
  },
  {
    name: "Photography",
    icon: <AiOutlineCamera className="w-3 h-3 inline-block mr-1" />,
  },
  {
    name: "Domain",
    icon: <IoIosExpand className="w-3 h-3 inline-block mr-1" />,
  },
  {
    name: "Collectibles",
    icon: <BsJournalBookmark className="w-3 h-3 inline-block mr-1" />,
  },
];

function CategoryMenu({ onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex justify-between items-center max-sm:w-full px-5">
      <div id="categories-web" className="space-x-2 hidden sm:flex">
        {categories.map((category) => (
          <span
            className={`px-4 py-2 border rounded-md text-[10px] ${
              selectedCategory === category.name ? "bg-gray-300" : "bg-white"
            } transition-colors duration-300 cursor-pointer hover:bg-gray-300`}
            onClick={() => handleCategorySelection(category.name)}
            key={category.name}
          >
            {category.icon}
            {category.name}
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
              key={category.name}
              as="p"
              className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
              onClick={() => handleCategorySelection(category.name)}
            >
              {category.icon}
              {category.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      <Menu as="div" className="sm:ml-20">
        <Menu.Button className="border rounded-md bg-white px-4 py-2 text-[10px]">
          Recently Added <ChevronDownIcon className="w-3 h-3 inline-block" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className="absolute bg-white shadow-lg rounded-md text-[10px] flex flex-col items-start z-20"
        >
          {categories.map((category) => (
            <Menu.Item
              key={category.name}
              as="p"
              className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 px-5 py-2 w-full"
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
