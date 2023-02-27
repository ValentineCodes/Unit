import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import MobileHeaderMenu from "./MobileHeaderMenu";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-[12vh]">
      <div className="hidden sm:flex justify-between items-center px-12 py-4">
        <Logo />

        <div>
          <nav>
            <ul className="flex items-center space-x-5">
              <li className="text-link">
                <Link href="/">Contact Us</Link>
              </li>
              <li className="text-link">
                <Link href="/">Login</Link>
              </li>
              <li>
                <button className="bg-[#D3542D] text-white hover:bg-white hover:outline outline-1 hover:outline-[#D3542D] hover:text-[#D3542D] transition-colors duration-500 text-[12px] px-6 py-2 rounded-[5px]">
                  Create an account
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden p-4 flex justify-between items-center">
        <Logo />

        <MobileHeaderMenu />
      </div>
    </header>
  );
}

export default Header;
