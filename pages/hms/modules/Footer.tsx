import React from "react";
import { CiMail } from "react-icons/ci";

type Props = {};

function Footer({}: Props) {
  const handleEmail = async (e) => {
    const email = e.target.value;
    console.log(email);
  };

  return (
    <footer className="text-white bg-gradient-to-r from-[#032D68] to-[#144A7B]">
      <div className="md:flex justify-between items-center p-4 sm:p-12 max-w-[992px] mx-auto">
        <div className="space-y-2">
          <img
            src="/images/unizik_logo.png"
            alt="unizik logo"
            className="rounded-full w-20 sm:w-40"
          />
          <p>Nnamdi Azikiwe University, Awka(NAU)</p>
          <p>@Copyright 2023</p>
          <p>All Rights Reserved</p>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-2xl">Get latest updates!</h3>
          <form className="my-5">
            <input
              placeholder="Email address"
              type="email"
              onChange={handleEmail}
              className="p-2 rounded-md outline-none border-none placeholder-gray text-black"
            />
            <button
              type="submit"
              className="bg-[#D3542D] text-md p-2 rounded-md ml-3"
            >
              Subscribe
            </button>
          </form>
          <CiMail color="white" className="inline-block mr-1" />
          <span>support@unizikhostels.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
