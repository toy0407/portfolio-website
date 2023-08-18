import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Main = () => {
  const words = [
    "Juggling Code and Coffee Cups",
    "From Flutter to Racetracks",
    "<Debugging in Pajamas/>",
    "Stacking Functions and Cakes",
    "Master of Code && Conqueror of Track Records",
    "Racing Against Bugs, Sprinting Towards Solutions",
    "UI/UX Wizard by Day, Motorsport Enthusiast by Night",
    "Fuelled by Java, Driven by Adrenaline",
    "Turning Coffee into Code && Speed",
    "Swiping Screens && Steering Wheels" ,
    "Revving Up Functions, Revving Around Tracks",
    "Full Stack in the Streets, Full Throttle on the Tracks",
    "404: Sleep Not Found",
    "Fueling Up on JavaScript && High-Octane",
    "Merging Code Branches && Racing Lines",
    "Racing Pixels, Crafting Code - Living the Full Stack Dream",
    "Stacking Code Blocks && Finish Line Cheers",
    "Taming Code && Taming Horsepower",
    "Life's a Race, Make Every Code Line Count",
    "Switching Gears && Switching Frameworks",
    "Chasing 200 OK && 200 MPH Simultaneously",
    "Born to Code, Driven to Excel"
  ];

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
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
              }}
              />
          </h2>
          <p className="py-4 text-gray-400 text-xl max-w-[70%] m-auto font-medium animate-fade-up delay-600">
            Full-Stack Mobile App Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
