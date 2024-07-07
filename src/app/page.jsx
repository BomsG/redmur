import React from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../public/images/home.png";
import Logo from "../../public/images/REDMLogo.png";

const page = () => {
  return (
    <div className="text-white">
      <Image
        src={Home}
        alt="success"
        quality={100}
        className="-z-10 object-fit  bg-gradient-to-r from-black  to-[#000000]"
        fill
      />
      <div className="flex justify-center h-[100vh] items-center text-center">
        <div>
          <Image src={Logo} alt="logo" className="w-[500px]" />
          <p className="my-10 text-[10px] md:text-sm">
            Creating digital experiences that drive brand community engagement.
          </p>
          <button className="text-lg text-gray-400 font-[800] border border-gray-700 tracking-widest rounded-3xl py-3 px-20 bg-[#00000073]">
            <Link href="/Home">EXPLORE</Link>
          </button>
          {/* <div className="text-lg text-gray-400 font-bold border border-gray-700 font-mono tracking-widest rounded-3xl bg-black px-10 py-3">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
