import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {

  const points = ["Suvro Bose, dynamic developer specializing in mobile app and full stack web development", "Passionate about creating innovative and user-friendly applications",
    "Expertise in Flutter for building visually appealing and seamless cross-platform mobile applications", "Utilizes Flutter's flexibility and widget library to create captivating user interfaces",
    "Proficient in full stack MERN web development (MongoDB, Express.js, React.js, Node.js)"];

  return (
    <div className="flex flex-col text-left xl:flex-col max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center">
      <p className={`uppercase text-center pb-3 text-sm tracking-[6px] text-gray-400 animate-fade-up`}>What I have accomplished</p>
      <h2 className="text-center font-thin tracking-[4px] text-[#F2A2E8]">About</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 p-10">
        <motion.div className="flex flex-col max-w-[800px] items-center col-span-1 2xl:col-span-2 p-10" initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}>
          <ul className="list-disc">
            {points.map((point, index) => (
              <li className="mb-2">{point}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.2, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
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
      </div>
    </div>
  )
};

export default About;
