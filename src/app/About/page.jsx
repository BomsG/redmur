import SecondNav from "@/components/SecondNav";
import React from "react";
import Image from "next/image";
import flare from "../../../public/images/Ellipse.svg";
import display from "../../../public/images/display.png";
import display2 from "../../../public/images/display2.png";

const page = () => {
  const Items = ["  VIRTUAL HUMAN", "FASHION", " VIRTUAL ENTERTAIMENT"];
  const li = [
    "  CREATIVITY",
    "INNOVATION",
    " COLLABORATION",
    "COMMUNITY",
    "CLIENT-FOCUS",
  ];
  const backgroundColor =
    "bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b]";
  return (
    <div className="bg-[#000] text-white">
      <SecondNav />

      <div className="mx-[10rem]">
        <div className="flex justify-center">
          <div className="relative">
            <Image src={flare} alt="eclipse" className="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold leading-[80px] text-center ">
                EMPOWERING CREATIVITY, CONNECTING COMMUNITIES.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div className="relative ">
            <Image src={display} alt="display" className="" />
            <div className="absolute inset-0 flex items-center mt-[9rem]">
              <div>
                <h2 className="text-2xl font-bold mb-20">OUR STORY</h2>
                <p className="leading-10 tracking-wider text-xl">
                  REDMUR is a media tech company committed to exploring new
                  horizons in digital engagement. Our journey began in 2022 with
                  a vision to redefine storytelling through technology. Today,
                  we stand at the forefront of the industry, connecting brands
                  and their audiences in authentic ways. We hope to continuously
                  advance digital engagement and create unforgettable brand
                  experiences for our brands and communities.
                </p>
                <div className="border border-[#555454] rounded-2xl px-20 py-[1.5rem] mt-20 ">
                  <ul className="flex justify-between items-center">
                    {Items.map((item, index) => (
                      <li
                        key={index}
                        className={`px-10 py-3 rounded-3xl ${
                          index === 0 ? backgroundColor : " "
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-20 mx-20">
        <div className="relative w-full">
          <div className="flex justify-center">
            <Image src={display2} alt="display" className="w-[500px] " />
            <div className="absolute inset-0 flex justify-between items-center ">
              {li.map((item, index) => (
                <button className="bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-5 py-4 rounded-3xl">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
