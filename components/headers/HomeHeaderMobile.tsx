import React, { useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MobileHeaderMenu from "./modules/MobileHeaderMenu";

type Props = {};

function HomeHeaderMobile({}: Props) {
  const searchbarRef = useRef(null);

  const focusSearchbar = () => {
    searchbarRef.current?.focus();
  };

  return (
    <header className="sm:hidden p-4">
      <div className="row-layout">
        <h1 className="text-2xl">Unit</h1>

        <MobileHeaderMenu />
      </div>
      {/* Search bar */}
      <div
        className="hidden max-[992px]:flex flex-row items-center px-3 py-2 my-4 w-[100%] rounded-xl bg-white border border-gray-100"
        onClick={focusSearchbar}
      >
        <MagnifyingGlassIcon className="w-4 mr-3" />

        <input
          ref={searchbarRef}
          placeholder="Search"
          className="outline-none border-none text-xs bg-transparent placeholder-gray-500"
        />
      </div>
      {/* <div>
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
            </>
          )}
        </Menu> */}

      {/* <Popover.Button className="flex sm:hidden">
              {open ? (
                <XMarkIcon className="w-7 h-7" color="black" />
              ) : (
                <Bars3Icon className="w-7 h-7" color="black" />
              )}
            </Popover.Button> */}
      {/* </div>

      <div className="flex sm:hidden items-center space-x-5 border rounded-[10px] p-1 pl-2 w-[90%]">
        <MagnifyingGlassIcon className="w-4 h-4" />

        <input placeholder="Search" className="outline-none border-none" />
      </div> */}
    </header>
  );
}

export default HomeHeaderMobile;
