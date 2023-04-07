import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Main = () => {
  const [text, count] = useTypewriter({
    words: [
      "A Full Stack Developer",
      "Guy-who-likes-coffee.jsx",
      "<But Loves Coding More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-[10px] text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi! I'm <span className="text-[#5651e5]">Suvro</span>
          </h1>
          <h1 className="py-4 text-gray-500">{text}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full stack developer specializing in Web and Mobile
            Application Development
          </p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
            <a href="https://www.linkedin.com/in/toy0407/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/toy0407">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:bose.suvro@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
