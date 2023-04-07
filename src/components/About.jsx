import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <p className="py-4 uppercase text-xl tracking-[10px] text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am?</h2>
          <p className="py-2 text-gray-600">// Not Your Average Developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
            tortor eu pharetra convallis. Praesent cursus dolor vitae urna
            placerat, rhoncus porta magna cursus. Donec efficitur, velit vel
            varius aliquam, diam eros scelerisque turpis, at cursus quam elit eu
            felis. Vestibulum suscipit mauris vitae nibh blandit sollicitudin.
            Morbi sagittis, odio et gravida ullamcorper, nulla leo efficitur ex,
            eu sagittis nunc libero ac odio. Vestibulum lacinia placerat
            euismod. Maecenas eleifend scelerisque vehicula. Sed sed blandit
            ipsum.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
            tortor eu pharetra convallis. Praesent cursus dolor vitae urna
            placerat, rhoncus porta magna cursus. Donec efficitur, velit vel
            varius aliquam, diam eros scelerisque turpis, at cursus quam elit eu
            felis. Vestibulum suscipit mauris vitae nibh blandit sollicitudin.
            Morbi sagittis, odio et gravida ullamcorper, nulla leo efficitur ex,
            eu sagittis nunc libero ac odio. Vestibulum lacinia placerat
            euismod. Maecenas eleifend scelerisque vehicula. Sed sed blandit
            ipsum.
          </p>
          <p className="py-2 text-gray-600 cursor-pointer underline">
            <a href="/#projects">Check out some of my latest projects</a>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-auto w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            className="rounded-xl"
            src="/../public/assets/profile.jpg"
            alt="/"
            width="900"
            height="1500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
