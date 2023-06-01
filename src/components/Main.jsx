import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Main = () => {
  const [text, count] = useTypewriter({
    words: [
      "A Student at Jadavpur University",
      "someone-who-likes-motorsports.jsx",
      "<But Loves Coding More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-[10px] text-gray-400 animate-fade-up">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-200 animate-fade-up delay-200">
            Hi! I'm{" "}
            <span className="text-[25] text-[#F2A2E8] font-cursive">
              Suvro Bose
            </span>
          </h1>
          <h2 className="py-4 text-gray-200 font-thin animate-fade-up delay-400">
            {text}
          </h2>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto font-medium animate-fade-up delay-600">
            Full-Stack Web and Mobile App Developer
          </p>

          {/* <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
            <a href="https://www.linkedin.com/in/toy0407/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#5651e5]">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/toy0407">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#5651e5]">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:bose.suvro@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#5651e5]">
                <AiOutlineMail />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#5651e5]">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
