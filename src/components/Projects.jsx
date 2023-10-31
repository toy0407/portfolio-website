import React from "react";
import ProjectCard from "@/components/micro/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col text-left xl:flex-col max-w-[1200px] md:px-10 px-4 min-h-screen justify-center mx-auto items-center">
      <p
        className={`uppercase text-center pb-3 text-sm tracking-[6px] text-gray-400 animate-fade-up`}
      >
        What I have created
      </p>
      <h2 className="text-center font-thin tracking-[4px] text-[#F2A2E8]">
        Projects
      </h2>

      <div className="w-full mx-auto flex space-x-5 overflow-x-scroll overflow-scroll p-10 snap-x snap-mandatory">
        <ProjectCard
          projectName="LesChat"
          techStack={["Flutter", "Bloc", "Node.js", "Express.js", "MongoDB"]}
          image="assets/leschat_project_logo.png"
        />
      </div>
    </div>
  );
};

export default Projects;
