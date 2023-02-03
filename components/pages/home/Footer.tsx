import React from "react";
import Link from "next/link";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-12 max-w-[992px] mx-auto">
      <div className="w-full sm:flex items-start">
        <div className="sm:w-[50%]">
          <h1 className="text-2xl">Unit</h1>
          <p className="text-gray-500 text-xs leading-5 mt-3">
            Create, sell, and collect rare digital artworks.
            <br />
            Powered by blockchain technology.
          </p>

          <div className="flex items-center space-x-7 mt-10 text-xl text-gray-400">
            <Link href="https://www.facebook.com/orga.valentine.77">
              <BsFacebook />
            </Link>

            <BsTwitter />

            <Link href="https://www.linkedin.com/in/valentineorga">
              <FaLinkedinIn />
            </Link>
            <BsInstagram />
            <FaTiktok />
          </div>
        </div>

        <div className="sm:flex justify-between items-start sm:w-[50%]">
          <div className="text-[.75rem] mt-10 sm:mt-0">
            <h4 className="text-[1em] font-bold mb-4">Marketplace</h4>
            <ul className="text-[.85em] text-gray-500 space-y-1">
              <li>
                <Link href="#">All NFTs</Link>
              </li>
              <li>
                <Link href="#">Art</Link>
              </li>
              <li>
                <Link href="#">Music</Link>
              </li>{" "}
              <li>
                <Link href="#">Domain Names</Link>
              </li>{" "}
              <li>
                <Link href="#">Virtual World</Link>
              </li>{" "}
              <li>
                <Link href="#">Collectibles</Link>
              </li>
            </ul>
          </div>

          <div className="text-[.75rem] mt-10 sm:mt-0">
            <h4 className="text-[1em] font-bold mb-4">Company</h4>
            <ul className="text-[.85em] text-gray-500 space-y-1">
              <li>
                <Link href="#">Explore</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>{" "}
              <li>
                <Link href="#">Our Blog</Link>
              </li>{" "}
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="text-[.75rem] mt-10 sm:mt-0">
            <h4 className="text-[1em] font-bold mb-4">My Account</h4>
            <ul className="text-[.85em] text-gray-500 space-y-1">
              <li>
                <Link href="#">Authors</Link>
              </li>
              <li>
                <Link href="#">Collection</Link>
              </li>
              <li>
                <Link href="#">Author Profile</Link>
              </li>{" "}
              <li>
                <Link href="#">Create Item</Link>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:flex justify-between items-center w-full text-gray-500 text-xs mt-10 sm:mt-20 space-y-10 sm:space-y-0">
        <p>{`\u00A9`}2022 Unit - Made by Valentine Orga</p>
        <p>Terms and conditions Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
