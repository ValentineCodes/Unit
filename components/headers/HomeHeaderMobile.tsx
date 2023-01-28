import React from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  WalletIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";

type Props = {};

function HomeHeaderMobile({}: Props) {
  return (
    <header className="flex items-center px-12 py-4">
      <div>
        <Menu as="nav" className="flex sm:hidden">
          {({ open }) => (
            <>
              <Menu.Button>
                {open ? (
                  <XMarkIcon className="w-7 h-7" color="black" />
                ) : (
                  <Bars3Icon className="w-7 h-7" color="black" />
                )}
              </Menu.Button>

              <Menu.Items
                as="ul"
                className="absolute bg-white shadow-lg rounded-md text-md flex flex-col items-start w-[100vw] left-0 top-[8%] pb-5"
              >
                <Menu.Item
                  as="li"
                  className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 p-5 w-full"
                >
                  Explore
                </Menu.Item>
                <Menu.Item
                  as="li"
                  className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 p-5 w-full"
                >
                  Stats
                </Menu.Item>
                <Menu.Item
                  as="li"
                  className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 p-5 w-full"
                >
                  Resources
                </Menu.Item>
                <Menu.Item
                  as="li"
                  className="hover:bg-[#D262D1] hover:text-white transition-colors duration-500 p-5 w-full"
                >
                  Create
                </Menu.Item>
                <Menu.Item as="li" className="flex items-center space-x-5 pl-5">
                  <div className="bg-white shadow-lg rounded-full p-2">
                    <WalletIcon className="w-5 h-5" color="black" />
                  </div>

                  <div className="bg-white shadow-lg rounded-full p-2">
                    <UserIcon className="w-5 h-5" color="black" />
                  </div>

                  <div className="bg-white shadow-lg rounded-full p-2">
                    <MoonIcon className="w-5 h-5" color="black" />
                  </div>
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>

        {/* <Popover.Button className="flex sm:hidden">
              {open ? (
                <XMarkIcon className="w-7 h-7" color="black" />
              ) : (
                <Bars3Icon className="w-7 h-7" color="black" />
              )}
            </Popover.Button> */}
      </div>

      <div className="flex sm:hidden items-center space-x-5 border rounded-[10px] p-1 pl-2 w-[90%]">
        <MagnifyingGlassIcon className="w-4 h-4" />

        <input placeholder="Search" className="outline-none border-none" />
      </div>
    </header>
  );
}

export default HomeHeaderMobile;