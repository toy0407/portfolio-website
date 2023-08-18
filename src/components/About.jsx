import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {

  const points = ["Specialized in crafting exceptional mobile apps for both iOS and Android platforms", "Technology Consultant intern at PwC, India", "B.E. 2023 Grad @ Jadavpur University, Kolkata, India",
    "Leetcode: Top 5% (Rating: 1840)", "Codechef: 4 Star (Rating; 1858)",];

  return (
    <div className="flex flex-col text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center">
      <p className={`uppercase text-center pb-3 text-sm tracking-[6px] text-gray-400 animate-fade-up`}>What I have accomplished</p>
      <h2 className="text-center font-thin tracking-[4px] text-[#F2A2E8]">About</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-evenly p-10">
        <motion.div
          initial={{ opacity: 0.2, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex items-center justify-center p-10 col-span-1"
        >
          <Image
            className="rounded-3xl hover:scale-105 shadow-xl ease-in duration-300"
            src="/assets/profile.jpg"
            alt="/"
            width="400"
            height="400"
          />
        </motion.div>
        <motion.div className="flex flex-col max-w-[800px] items-start justify-evenly col-span-1 pt-2 pb-2" 
          initial={{ translateY: 100, opacity: 0.2 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}>
          {/* <ul className="list-disc"> */}
            {points.map((point, index) => (
              <li className="mb-8 text-2xl font-serif font-light text-gray-300">{point}</li>
            ))}
          {/* </ul> */}
        </motion.div>
      </div>
    </div>
  )
};

export default About;
