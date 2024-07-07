"use client";
import React, { useState } from "react";
import SecondNav from "../../components/SecondNav";
import Image from "next/image";
import moji from "../../../public/images/MojiMain.png";
import winnie from "../../../public/images/Winnie.png";
import ComingSoon from "../../../public/images/ComingSoon.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <div className="text-white">
      <SecondNav />
      <div className="mx-[10rem] mt-[10rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Image src={moji} alt="Mojirade" className="" />
            <h2 className="text-sm md:text-3xl mb-5 mt-3">Moji</h2>
          </div>
          <div>
            <Image src={winnie} alt="Winnie" className="" />
            <h2 className="text-sm md:text-3xl mb-5 mt-3">Winnie</h2>
          </div>
          <div>
            <Image src={ComingSoon} alt="Khadija" className="" />
            <h2 className="text-sm md:text-3xl mb-5 mt-3">Khadija</h2>
          </div>
          <div>
            <Image src={ComingSoon} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={ComingSoon} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={ComingSoon} alt="Coming Soon" className="" />
          </div>
        </div>
        <div className="mt-20">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
