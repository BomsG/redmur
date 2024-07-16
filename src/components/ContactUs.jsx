import React from "react";
import Image from "next/image";
import Partners from "./Partners";

const ContactUs = () => {
  return (
    <div className=" text-center">
      <div>
        <div className=" my-20  border-y-2 border-[#555454] py-5 w-full">
          <div className="">
            <h1 className="text-[14px] sm:text-[4.5rem] font-bold tracking-widest">
              CONTACT US
            </h1>
            <button className="border border-[#555454] rounded-3xl buttonx-10 py-4 px-5 my-5 text-sm tracking-widest ">
              We welcome collaboration and partnership. Lets connect!
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="py-10 tracking-widest font-bold">
            OUR TRUSTED PARTNERS
          </h2>
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
