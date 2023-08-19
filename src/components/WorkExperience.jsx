import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";



const WorkExperience = () => {


  const experiences = [
    {
      title: "Technology Consultant",
      company_name: "Pricewaterhouse Coopers LLP",
      icon: "../assets/pwc.png",
      iconBg: "#FFFFFF",
      date: "June 2022 - August 2022",
      points: [
        "Developed and contributed to the successful implementation of the Data Lake for the client database, resulting in enhanced data accessibility and streamlined operations.",
        "Utilized AWS Glue to perform efficient and reliable data transformations, harnessed the power of Athena for in-depth data analysis, and leveraged AWS S3 to establish a persistent catalog of diverse organizational datasets, empowering data-driven decision-making and fostering a scalable and resilient infrastructure for the organization’s analytical endeavors.",
        "Provided in-depth insights and rectified bugs in the project, thereby reducing resource utilization by 80%, leading to enhanced system performance and operational efficiencies.",
      ],
    },
  ]


  return <div className="min-h-screen mx-auto md:px-10 flex justify-center items-center flex-col">
    <motion.div>
      <p className={`uppercase text-center text-sm tracking-[6px] text-gray-400 animate-fade-up`}>What I have done so far</p>
      <h2 className="text-center font-thin tracking-[4px] text-[#F2A2E8]">Work Experience</h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline lineColor="#F2A2E8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </div>;
};


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#112240",
        color: "#fff",
        borderRadius: "15px"
      }}
      contentArrowStyle={{ borderRight: "12px solid #112240" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-fill'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#F2A2E8] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-gray-300 text-[14px] font-extralight font-serif pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default WorkExperience;
