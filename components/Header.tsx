import React from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  WalletIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-white/90">
      <div className="flex items-center space-x-20">
        <h1 className="font-bold text-3xl">Unit</h1>
        <div className="flex  items-center space-x-5 border rounded-[10px] p-1 pl-2">
          <MagnifyingGlassIcon className="w-4 h-4" />

          <input placeholder="Search" className="outline-none border-none" />
        </div>
      </div>

      <div className="flex items-center space-x-20">
        <nav>
          <ul className="flex items-center space-x-5 font-semibold">
            <li className="hover:text-[red] cursor-pointer transition-colors duration-300">
              Explore
            </li>
            <li className="hover:text-[red] cursor-pointer transition-colors duration-300">
              Stats
            </li>
            <li className="hover:text-[red] cursor-pointer transition-colors duration-300">
              Resources
            </li>
            <li className="hover:text-[red] cursor-pointer transition-colors duration-300">
              Create
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="bg-[red] rounded-full p-2">
            <WalletIcon className="w-5 h-5" color="white" />
          </div>

          <div className="bg-[red] rounded-full p-2">
            <UserIcon className="w-5 h-5" color="white" />
          </div>

          <div className="bg-[red] rounded-full p-2">
            <MoonIcon className="w-5 h-5" color="white" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
