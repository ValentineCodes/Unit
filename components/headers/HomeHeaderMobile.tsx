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
    </header>
  );
}

export default HomeHeaderMobile;
