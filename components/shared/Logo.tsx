import React from "react";
import Image from "next/image";

type Props = {};

function Logo({}: Props) {
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/images/unizik_logo.png"
          alt="Unizik logo"
          width={60}
          height={60}
          className="bg-white"
        />
        <div className="ml-1">
          <h1 className="text-[0.65rem] font-bold text-[#D3542D]">
            NNAMDI AZIKIWE <br />
            UNIVERSITY
          </h1>
          <h2 className="text-xs font-bold text-[#D3542D]/60">Awka</h2>
        </div>
      </div>
    </>
  );
}

export default Logo;
