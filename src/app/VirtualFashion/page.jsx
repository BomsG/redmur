"use client";
import React, { useState } from "react";
import SecondNav from "../../components/SecondNav";
import Image from "next/image";
import drops from "../../../public/images/drops.png";
import collections from "../../../public/images/collections.png";
import capsules from "../../../public/images/capsule.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <div className="text-white">
      <SecondNav />
      <div className="mx-[10rem] mt-[10rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Image src={drops} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={capsules} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={collections} alt="Coming Soon" className="" />
          </div>
        </div>
        <div className="mt-[12rem]">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
