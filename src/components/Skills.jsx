import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const Skills = () => {
  const [iconSize, setIconSize] = useState(70); // Initial icon size

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Adjust the icon size based on the screen width
      // You can customize this logic according to your requirements
      const newSize = screenWidth < 600 ? 50 : 70;
      setIconSize(newSize);
    };

    handleResize(); // Call once to set initial icon size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <Icon size={iconSize} />
          </div>
          <div className="flex flex-col items-center justify-start">
            <p className="font-medium text-base text-center">{element.name}</p>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <div className="flex flex-col max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center">
      <p
        className={`uppercase text-center pb-3 text-sm tracking-[6px] text-gray-400 animate-fade-up`}
      >
        What I have learned
      </p>
      <h2 className="text-center font-thin tracking-[4px] text-[#F2A2E8]">
        Skills
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-y-5 xl:gap-x-48 md:gap-x-16 pt-10"
      >
        {listItems}
      </motion.div>
    </div>
  );
};

export default Skills;
