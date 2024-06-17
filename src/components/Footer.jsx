import React from "react";
import Image from "next/image";
import copyright from "../../public/images/copyright.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" mt-[7rem] pb-10">
      <ul className="flex justify-between gap-20 items-center">
        <li>About us</li>
        <li>Community</li>
        <li>Media</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions </li>
      </ul>
      <div className="mt-[10rem] flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          {" "}
          <Image src={copyright} alt="copyright" />
          All rights reserved. REDMUR 2024
        </h2>
        <div className="flex items-center gap-5">
          <FaInstagram size={20} />
          <FaXTwitter size={20} />
          <CiLinkedin size={20} />
          <RiFacebookBoxLine size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
