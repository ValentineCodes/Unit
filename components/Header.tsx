import React from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  WalletIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Popover } from "@headlessui/react";

type Props = {};

function Header({}: Props) {
  return (
    <Popover>
      {({ open }) => (
        <header className="flex flex-col items-center">
          <div className="top-0 p-5 w-full flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center bg-white/90">
            <div className="flex items-center space-x-20">
              <h1 className="font-bold text-3xl">Unit</h1>

              {/* Web view */}
              <div className="hidden sm:flex items-center space-x-5 border rounded-[10px] p-1 pl-2">
                <MagnifyingGlassIcon className="w-4 h-4" />

                <input
                  placeholder="Search"
                  className="outline-none border-none"
                />
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-20">
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

              <div className="hidden sm:flex items-center space-x-3">
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

            <Popover.Button className="flex sm:hidden">
              {open ? (
                <XMarkIcon className="w-7 h-7" color="black" />
              ) : (
                <Bars3Icon className="w-7 h-7" color="black" />
              )}
            </Popover.Button>
          </div>

          <div className="flex sm:hidden items-center space-x-5 border rounded-[10px] p-1 pl-2 w-[90%]">
            <MagnifyingGlassIcon className="w-4 h-4" />

            <input placeholder="Search" className="outline-none border-none" />
          </div>

          <Popover.Panel className="absolute top-20 inset-x-0 space-y-5 origin-top-right transform p-5 transition md:hidden bg-white py-5 ">
            <nav>
              <ul>
                <li className="hover:text-[red] cursor-pointer transition-colors duration-300 text-bold py-5">
                  Explore
                </li>
                <li className="hover:text-[red] cursor-pointer transition-colors duration-300 text-bold py-5">
                  Stats
                </li>
                <li className="hover:text-[red] cursor-pointer transition-colors duration-300 text-bold py-5">
                  Resources
                </li>
                <li className="hover:text-[red] cursor-pointer transition-colors duration-300 text-bold py-5">
                  Create
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-5">
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
          </Popover.Panel>
        </header>
      )}
    </Popover>
  );
}

export default Header;
