import React, { useRef } from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  WalletIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

type Props = {};

function HomeHeader({}: Props) {
  const searchbarRef1 = useRef(null);
  const searchbarRef2 = useRef(null);

  const focusSearchbar1 = () => {
    searchbarRef1.current?.focus();
  };

  const focusSearchbar2 = () => {
    searchbarRef2.current?.focus();
  };

  return (
    <header className="hidden sm:flex flex-col px-12 py-4">
      <div className="flex items-center">
        <div className="row-layout w-[50%]">
          {/* Logo */}
          <h1 className="text-2xl">Unit</h1>

          {/* Search bar */}
          <div
            className="hidden min-[992px]:flex flex-row items-center px-3 py-2 w-[50%] rounded-xl bg-gray-300 mr-[7rem]"
            onClick={focusSearchbar1}
          >
            <MagnifyingGlassIcon className="w-4 mr-3" />

            <input
              ref={searchbarRef1}
              placeholder="Search"
              className="outline-none border-none text-xs w-[100%] bg-transparent placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-end items-center w-[50%]">
          {/* Nav bar */}
          <nav className="mr-14">
            <ul className="flex items-center space-x-10 font-semibold">
              <li className="hover:text-[#D262D1] cursor-pointer transition-colors duration-300 text-xs">
                Explore
              </li>
              <li className="hover:text-[#D262D1] cursor-pointer transition-colors duration-300 text-xs">
                Stats
              </li>
              <li className="hover:text-[#D262D1] cursor-pointer transition-colors duration-300 text-xs">
                Resources
              </li>
              <li className="hover:text-[#D262D1] cursor-pointer transition-colors duration-300 text-xs">
                Create
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Actions */}
            <div className="bg-white shadow-lg rounded-full p-2 border border-gray-300 cursor-pointer hover:shadow-[#D262D1] hover:bg-[#d262d1] transition-shadow duration-300 group">
              <WalletIcon className="w-3 group-hover:text-white" />
            </div>

            <div className="bg-white shadow-lg rounded-full p-2 border border-gray-300 cursor-pointer hover:shadow-[#D262D1] hover:bg-[#d262d1] transition-shadow duration-300 group">
              <UserIcon className="w-3 group-hover:text-white" />
            </div>

            <div className="bg-white shadow-lg rounded-full p-2 border border-gray-300 cursor-pointer hover:shadow-[#D262D1] hover:bg-[#d262d1] transition-shadow duration-300 group">
              <MoonIcon className="w-3 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div
        className="hidden max-[992px]:flex flex-row items-center px-3 py-2 my-4 w-[100%] rounded-xl bg-gray-300"
        onClick={focusSearchbar2}
      >
        <MagnifyingGlassIcon className="w-4 mr-3" />

        <input
          ref={searchbarRef2}
          placeholder="Search"
          className="outline-none border-none text-xs bg-transparent placeholder-gray-500"
        />
      </div>
    </header>
  );
}

export default HomeHeader;
