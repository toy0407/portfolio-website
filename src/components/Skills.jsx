import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

function GetSkills() {
  const skills = [
    { name: "Java", logo: FaJava },
    { name: "Android", logo: FaAndroid },
    { name: "Dart", logo: SiDart },
    { name: "Flutter", logo: SiFlutter },
    { name: "HTML", logo: FaHtml5 },
    { name: "CSS", logo: FaCss3Alt },
    { name: "Javascript", logo: SiJavascript },
    { name: "React", logo: FaReact },
    { name: "Node", logo: FaNodeJs },
    { name: "MongoDB", logo: SiMongodb },
    { name: "Next.js", logo: SiNextdotjs },
    { name: "Tailwind", logo: SiTailwindcss },
    { name: "Github", logo: FaGithub },
    { name: "Firebase", logo: SiFirebase },
    { name: "AWS", logo: FaAws },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const listItems = skills.map((element) => {
    const Icon = element.logo;
    return (
      <motion.div
        key={element.name}
        // initial={{ scale: 0.6, opacity: 0.5 }}
        // whileInView={{ scale: 1, opacity: 1 }}
        // transition={{ type: "tween", duration: 0.4 }}
        // viewport={{ once: false }}
        variants={listItemVariants}
        className="p-6 col-span-1 rounded-xl ease-in duration-300 bg-transparent"
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 justify-center items-center hover:scale-125 ease-in duration-300">
          <div className="m-auto">
            <Icon size={70} />
          </div>
          <div className="flex flex-col items-center justify-start">
            <p className="font-medium text-base text-center">{element.name}</p>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-4 grid-cols-3 gap-8"
    >
      {listItems}
    </motion.div>
  );
}

const Skills = () => {
  return (
    <div className="w-auto h:auto md:h-screen p-4">
      <div className="mx-auto max-w-[1240px] flex flex-col justify-center h-auto">
        <p className="text-xl tracking-[10px] pb-12 text-center uppercase text-[#F2A2E8]">
          Skills
        </p>
        {/* <h2 className="hidden lg:flex px-8">What I can do</h2> */}
        <div className="px-8 m-auto md:mx-0">{<GetSkills />}</div>
      </div>
    </div>
  );
};

export default Skills;
