import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // return (
  //   <div className=" w-full h-auto md:h-screen">
  //     <div className="flex items-center">
  //       <div className="uppercase text-xl text-center font-medium tracking-[10px] text-[#F2A2E8]">
  //         About
  //       </div>
  //       <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8 py-2">
  //         <motion.div
  //           initial={{ translateX: -100 }}
  //           whileInView={{ translateX: 0 }}
  //           transition={{ duration: 0.5 }}
  //           viewport={{ once: false }}
  //           className="col-span-2 px-8"
  //         >
  //           <h2 className="py-2 text-gray-400">Who I am?</h2>
  //           <p className="py-2 text-[#77DD77]">
  //             {"</"}Not Your Average Developer{">"}
  //           </p>
  //           <p className="py-2 text-gray-200">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  //             tempus tortor eu pharetra convallis. Praesent cursus dolor vitae
  //             urna placerat, rhoncus porta magna cursus. Donec efficitur, velit
  //             vel varius aliquam, diam eros scelerisque turpis, at cursus quam
  //             elit eu felis. Vestibulum suscipit mauris vitae nibh blandit
  //             sollicitudin. Morbi sagittis, odio et gravida ullamcorper, nulla
  //             leo efficitur ex, eu sagittis nunc libero ac odio. Vestibulum
  //             lacinia placerat euismod. Maecenas eleifend scelerisque vehicula.
  //             Sed sed blandit ipsum.
  //           </p>
  //           <p className="py-2 text-gray-200">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  //             tempus tortor eu pharetra convallis. Praesent cursus dolor vitae
  //             urna placerat, rhoncus porta magna cursus. Donec efficitur, velit
  //             vel varius aliquam, diam eros scelerisque turpis, at cursus quam
  //             elit eu felis. Vestibulum suscipit mauris vitae nibh blandit
  //             sollicitudin. Morbi sagittis, odio et gravida ullamcorper, nulla
  //             leo efficitur ex, eu sagittis nunc libero ac odio. Vestibulum
  //             lacinia placerat euismod. Maecenas eleifend scelerisque vehicula.
  //             Sed sed blandit ipsum.
  //           </p>
  //         </motion.div>
  //         <motion.div
  //           initial={{ opacity: 0.2 }}
  //           whileInView={{ opacity: 1 }}
  //           transition={{ duration: 1 }}
  //           viewport={{ once: false }}
  //           className=" h-fit w-fit px-8 my-16 xl:my-8 m-auto shadow-xl rounded-3xl flex items-center justify-center hover:scale-105 ease-in duration-300"
  //         >
  //           <Image
  //             className="rounded-3xl"
  //             src="/assets/profile.jpg"
  //             alt="/"
  //             width="400"
  //             height="400"
  //           />
  //         </motion.div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col text-left xl:flex-col max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center">
      <div className="uppercase text-xl text-center font-medium tracking-[10px] text-[#F2A2E8]">About</div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 p-10">
        <motion.div className="flex flex-col max-w-[800px] items-center col-span-1 2xl:col-span-2 p-10" initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}>
          <ul className="list-disc">
            <li className="mb-2">Suvro Bose, dynamic developer specializing in mobile app and full stack web development</li>
            <li className="mb-2">Passionate about creating innovative and user-friendly applications</li>
            <li className="mb-2">Expertise in Flutter for building visually appealing and seamless cross-platform mobile applications</li>
            <li className="mb-2">Utilizes Flutter's flexibility and widget library to create captivating user interfaces</li>
            <li className="mb-2">Attention to detail and problem-solving abilities ensure intuitive and efficient mobile applications</li>
            <li className="mb-2">Proficient in full stack MERN web development (MongoDB, Express.js, React.js, Node.js)</li>
            <li className="mb-2">Designs and implements robust back-end systems using Node.js and Express.js</li>
            <li className="mb-2">Excels in creating dynamic and interactive user interfaces with React.js</li>
            <li className="mb-2">Builds scalable and efficient web applications for exceptional user experiences</li>
            <li className="mb-2">Committed to continuous learning and staying up-to-date with industry trends and technologies</li>
            <li className="mb-2">Strong foundation in computer science and a natural inclination for problem-solving</li>
            <li className="mb-2">Focus on delivering cutting-edge solutions that meet the evolving demands of the digital landscape</li>
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
