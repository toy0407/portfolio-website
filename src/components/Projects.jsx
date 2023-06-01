import React from "react";
import ProjectCard from "@/components/micro/ProjectCard";

const Projects = () => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-[1240px] px-10 justify-evenly mx-auto items-center z-0">
      <p className="absolute top-24 uppercase tracking-[10px] text-[#F2A2E8] text-xl">
        Projects
      </p>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
