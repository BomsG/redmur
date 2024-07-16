"use client";
import React from "react";
import SecondNav from "../../components/SecondNav";
import Image from "next/image";
import moji from "../../../public/images/mojirade.png";
import moji2 from "../../../public/images/mojirade2.png";
import moji3 from "../../../public/images/mojirade3.png";
import moji4 from "../../../public/images/mojirade4.png";
import moji5 from "../../../public/images/mojirade5.png";
import moji7 from "../../../public/images/mojirade6.png";
import moji6 from "../../../public/images/moji6.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

function page() {
  // const item = ["INSTAGRAM", "TIK TOK", "FACEBOOK", "TWITTER"];
  const item = [
    {
      id: 1,
      name: "INSTAGRAM",
    },
    {
      id: 2,
      name: "TIK TOK",
    },
    {
      id: 3,
      name: "FACEBOOK",
    },
    {
      id: 4,
      name: "TWITTER",
    },
  ];
  return (
    <div className="text-white">
      <SecondNav />
      <div className=" mx-[10rem] mt-[10rem]">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <h1 className="text-[50px] font-bold tracking-wider mb-10">
              MOJIRADE <br />
              IFELEWA
            </h1>
            {item.map((item) => (
              <div key={item.id}>
                <button className=" w-[80%] border border-[#7F7F7F] px-10 py-3 rounded-3xl my-10 text-xl tracking-wide">
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Image src={moji} alt="mojirade" />
          </div>
        </div>
        <div className="text-center  my-20 ">
          <p className="text-xl tracking-widest leading-9">
            Mojirade was created as Nigerias first virtual influencer to help
            brands showcase their products and promote the beauty and diversity
            of modern day Africa on a global scale. She is identified by her
            signature cornrow hair looks, and the vibrant and colorful culture
            depicted in her content. This hyper-realistic creation has rapidly
            gained attention within the fashion industry, creating ripples of
            impact and setting new standards in the realm of virtual personas.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-20 mb-5">
            <Image src={moji2} alt="mojirade" />
            <Image src={moji3} alt="mojirade" />
            <Image src={moji4} alt="mojirade" />
            <Image src={moji5} alt="mojirade" />
          </div>
          <Image src={moji6} alt="mojirade" />
          <div className="grid grid-cols-2 gap-3 mt-5 mb-5">
            <Image src={moji7} alt="mojirade" />
            <Image src={moji3} alt="mojirade" />
          </div>
          <div className="mt-[12rem]">
            <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
