import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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

const projectCard = ({
  projectName,
  duration,
  techStack,
  projDescription,
  image,
  liveLink,
  repositoryLink,
}) => {
  return (
    <article className="flex flex-col rounded-3xl items-start space-y-7 p-10 flex-shrink-0 w-[400px] md:w-[500px] snap-center bg-[#112240] opacity-80 hover:opacity-100 cursor-pointer transition ease-in duration-150 overflow-hidden">
      <div className="flex flex-row items-center justify-evenly">
        <motion.img
          className="w-32 h-32 rounded-3xl xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={image}
        />
        <div className="flex flex-col p-4 items-start justify-center">
          <h4 className="text-4xl font-light pb-4">{projectName}</h4>
          <div className="w-full flex flex-row justify-evenly">
            <a
              href="https://github.com/toy0407"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                height="20px"
                width="20px"
                className="hover:text-[#F2A2E8] transition ease-in duration-150"
              />
            </a>
            <a
              href="https://github.com/toy0407"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                height="20px"
                width="20px"
                className="hover:text-[#F2A2E8] transition ease-in duration-150"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="px-0 md:px-10 flex flex-row justify-between items-center">
          Tech Stack:
          <div className="flex space-x-2 my-2">
            {techStack[0]},{techStack[1]},{techStack[2]},{techStack[3]},
          </div>
        </div>

        <p className="uppercase py-5 text-gray-200">{duration}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Project description 1</li>
          <li>Project description 2</li>
          <li>Project description 3</li>
          <li>Project description 4</li>
        </ul>
      </div>
    </article>
  );
};

export default projectCard;
