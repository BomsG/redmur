"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import redmur from "../../public/images/redmur.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SecondNav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const path = usePathname();
  const li = [
    {
      id: 1,
      name: "Campaigns",
      link: "/Campaign",
    },
    {
      id: 2,
      name: "Brands",
      link: "/Brand",
    },
    {
      id: 3,
      name: "About Us",
      link: "/About",
    },
    {
      id: 4,
      name: "Media",
      link: "/Media",
    },
  ];

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  return (
    <div className="text-white  w-full flex justify-center gap-[18rem] items-center pt-10">
      <Link href="/Home">
        <div className="font-bold flex items-center gap-1">
          <Image src={redmur} width={100} height={50} alt="logo" />
        </div>
      </Link>

      <ul className="hidden sm:flex items-center gap-5 text-[15px]">
        {li.map((li) => (
          <li key={li.id}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ delay: 0.2 }}>
              <Link
                className={`${li.link === path ? "text-gray-500" : ""}`}
                href={li.link}
              >
                {li.name}
              </Link>
            </motion.div>
          </li>
        ))}
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
