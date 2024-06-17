import React from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import SecondNav from "@/components/SecondNav";
import oasis from "../../../public/images/oasis2.png";
import text from "../../../public/images/text.png";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#050816]  to-[#0C091E] text-white">
        <SecondNav />
        <div className="mx-[10rem] mt-20">
          <h3 className="mb-5 font-bold text-2xl">2024</h3>
          <div className="relative">
            <Image src={oasis} alt="image" className="" />
          </div>
          <div className="flex justify-center my-[7rem]">
            <Image src={text} alt="image" className="w-[600px]" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
