import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" w-full h-auto md:h-screen">
      <div className="uppercase text-xl text-center font-medium tracking-[10px] text-[#F2A2E8]">
        About
      </div>
      <div className="flex items-center">
        <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8 py-2">
          <motion.div
            initial={{ translateX: -100 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="col-span-2 px-8"
          >
            <h2 className="py-2 text-gray-400">Who I am?</h2>
            <p className="py-2 text-[#77DD77]">
              {"</"}Not Your Average Developer{">"}
            </p>
            <p className="py-2 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus tortor eu pharetra convallis. Praesent cursus dolor vitae
              urna placerat, rhoncus porta magna cursus. Donec efficitur, velit
              vel varius aliquam, diam eros scelerisque turpis, at cursus quam
              elit eu felis. Vestibulum suscipit mauris vitae nibh blandit
              sollicitudin. Morbi sagittis, odio et gravida ullamcorper, nulla
              leo efficitur ex, eu sagittis nunc libero ac odio. Vestibulum
              lacinia placerat euismod. Maecenas eleifend scelerisque vehicula.
              Sed sed blandit ipsum.
            </p>
            <p className="py-2 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus tortor eu pharetra convallis. Praesent cursus dolor vitae
              urna placerat, rhoncus porta magna cursus. Donec efficitur, velit
              vel varius aliquam, diam eros scelerisque turpis, at cursus quam
              elit eu felis. Vestibulum suscipit mauris vitae nibh blandit
              sollicitudin. Morbi sagittis, odio et gravida ullamcorper, nulla
              leo efficitur ex, eu sagittis nunc libero ac odio. Vestibulum
              lacinia placerat euismod. Maecenas eleifend scelerisque vehicula.
              Sed sed blandit ipsum.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className=" h-fit w-fit px-8 my-16 xl:my-8 m-auto shadow-xl rounded-3xl flex items-center justify-center hover:scale-105 ease-in duration-300"
          >
            <Image
              className="rounded-3xl"
              src="/assets/profile.jpg"
              alt="/"
              width="400"
              height="400"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
