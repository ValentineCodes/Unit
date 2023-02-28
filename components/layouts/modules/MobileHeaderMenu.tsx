import React, { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

type Props = {};

function MobileHeaderMenu({}: Props) {
  return (
    <Menu as="nav" className="flex sm:hidden z-50">
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
              className="absolute bg-white shadow-lg rounded-md text-sm flex flex-col items-start w-[200px] right-5 top-[8%] pb-1"
            >
              <Menu.Item
                as="li"
                className="hover:bg-[#D3542D] hover:text-white transition-colors duration-500 p-3 w-full"
              >
                Contact Us
              </Menu.Item>
              <Menu.Item
                as="li"
                className="hover:bg-[#D3542D] hover:text-white transition-colors duration-500 p-3 w-full"
              >
                Login
              </Menu.Item>
              <Menu.Item as="li">
                <button className="w-[200px] bg-[#D3542D] text-white hover:bg-white hover:outline outline-1 hover:outline-[#D3542D] hover:text-[#D3542D] transition-colors duration-500 text-[12px] px-6 py-2 mt-1">
                  Create an account
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default MobileHeaderMenu;
