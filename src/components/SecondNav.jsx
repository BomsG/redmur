"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SecondNav = () => {
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
    <div className="text-white  w-full flex justify-center gap-[18rem] items-center pt-10">
      <Link href="/Home">
        <h1 className="font-bold text-xl">REDMUR</h1>
      </Link>

      <ul className="flex items-center gap-5 font-bold">
        <li className="text-sm">campaigns</li>
        <Link href="/Brand">
          <li className="text-sm">brands</li>
        </Link>
        <Link href="/About">
          <li className="text-sm">about us</li>
        </Link>
        <li className="text-sm">media</li>
      </ul>
      <div className="flex items-center gap-3">
        <h2>NGN</h2>
        <h3>
          {hours}:{minutes}:{seconds}
        </h3>
      </div>
    </div>
  );
};

export default SecondNav;
