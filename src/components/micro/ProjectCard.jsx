import React from "react";
import { motion } from "framer-motion";

const projectCard = ({
  projectName,
  duration,
  techStack,
  projDescription,
  image,
}) => {
  return (
    <article className="flex flex-col rounded-3xl items-center space-y-7 p-10 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#112240] opacity-40 hover:opacity-100 cursor-pointer transition ease-in duration-150 overflow-hidden">
      <motion.img className="w-32 h-32 rounded-sm xl:w-[200px] xl:h-[200px] object-cover object-center" />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{projectName}</h4>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
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
