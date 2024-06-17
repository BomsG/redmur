"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import redmur from "../../public/images/redmur.png";

const Nav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return (
    <div className="text-white absolute z-0 bg-opacity-5 w-full flex justify-center gap-[18rem] items-center p-10">
      <Link href="/Home">
        <Image src={redmur} alt="logo" className="w-[75px]" />
      </Link>

      <ul className="flex items-center gap-5 font-bold tracking-[2px] ">
        <li className="text-[15px]">campaigns</li>
        <Link href="/Brand">
          <li className="text-[15px]">brands</li>
        </Link>
        <Link href="/About">
          <li className="text-[15px]">about us</li>
        </Link>
        <li className="text-[15px]">media</li>
      </ul>
      <div className="flex items-center gap-3 font-bold tracking-widest text-[15px]">
        <h2>NGN</h2>
        <h3>
          {hours}:{minutes}:{seconds}
        </h3>
      </div>
    </div>
  );
};

export default Nav;
