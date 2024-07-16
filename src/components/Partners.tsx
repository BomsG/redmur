"use client";
import React from "react";
import Image from "next/image";
import FinalForm from "../../public/images/FinalForm.png";
import partner2 from "../../public/images/partner2.png";
import partner3 from "../../public/images/partner3.png";
import partner4 from "../../public/images/partner4.png";
import shortSide from "../../public/images/shortSide.png";
import { motion } from "framer-motion";

const logos = [FinalForm, partner2, partner3, partner4, shortSide];
const Partners = () => {
  return (
    <div className="w-full overflow-hidden flex justify-between items-center bg-gradient-to-r from-[#050816] to-[#18123D] px-5 my-10">
      <motion.div
        className="flex items-center justify-between gap-20"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {logos.concat(logos).map((src, index) => (
          <div key={index} className="flex-none px-2">
            <Image src={src} alt={`partner-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
