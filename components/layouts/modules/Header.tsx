import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../shared/Logo";
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
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">
                  <button className="btn-primary">Create an account</button>
                </Link>
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
