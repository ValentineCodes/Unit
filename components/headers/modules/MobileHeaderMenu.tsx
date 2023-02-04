import React, { Fragment } from "react";
import {
  UserIcon,
  WalletIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

type Props = {};

function MobileHeaderMenu({}: Props) {
  return (
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

          <Transition
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items
              as="ul"
              className="absolute bg-[#f8fcff] shadow-lg rounded-md text-sm flex flex-col items-start w-[100vw] left-0 top-[8%] pb-5"
            >
              <Menu.Item
                as="li"
                className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 p-5 w-full"
              >
                Explore
              </Menu.Item>
              <Menu.Item
                as="li"
                className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 p-5 w-full"
              >
                Stats
              </Menu.Item>
              <Menu.Item
                as="li"
                className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 p-5 w-full"
              >
                Resources
              </Menu.Item>
              <Menu.Item
                as="li"
                className="hover:bg-[#8258FC] hover:text-white transition-colors duration-500 p-5 w-full"
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
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default MobileHeaderMenu;
