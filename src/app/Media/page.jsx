"use client";
import React, { useState } from "react";
import SecondNav from "../../components/SecondNav";
import Image from "next/image";
import media1 from "../../../public/images/media1.png";
import media2 from "../../../public/images/media2.png";
import media3 from "../../../public/images/media3.png";
import media4 from "../../../public/images/media4.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

function page() {
  return (
    <div className="text-white">
      <SecondNav />
      <div className="mx-[10rem] mt-[10rem]">
        <div className="text-center mb-20">
          <h1 className="text-2xl font-bold mb-1">ARCHIVE</h1>
          <h3 className=" font-bold">Published by REDMUR</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Image src={media1} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={media2} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={media3} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={media4} alt="Coming Soon" className="" />
          </div>
        </div>
        <div className="mt-[12rem]">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default page;
