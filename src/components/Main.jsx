import React from "react";
import Typewriter from "typewriter-effect";

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
    "Swiping Screens && Steering Wheels",
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
    "Born to Code, Driven to Excel",
  ];

  return (
    <div
      id="main"
      className="w-full h-screen text-center max-w-[1240px] mx-auto px-4 flex flex-col justify-center items-center"
    >
      <p className="uppercase lg:text-xl text-sm tracking-[10px] text-gray-400 animate-fade-up">
        Let's build something together
      </p>
      <h1 className="py-4 text-gray-200 lg:text-7xl text-5xl animate-fade-up delay-200">
        Hi! I'm{" "}
        <span className="text-[25] text-[#F2A2E8] font-cursive">
          Suvro Bose
        </span>
      </h1>
      <h2 className="py-4 text-gray-200 lg:text-3xl text-2xl font-thin animate-fade-up delay-400">
        <Typewriter
          options={{
            strings: words,
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="py-4 text-gray-400 lg:text-2xl text-xl max-w-[70%] font-medium animate-fade-up delay-600">
        Full-Stack Mobile App Developer
      </p>
    </div>
  );
};

export default Main;
