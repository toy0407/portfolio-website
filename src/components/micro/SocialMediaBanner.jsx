import React, {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SocialMediaIconsBanner = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Perform any other click-related actions here
  };

  const handleBlur = () => {
    setClicked(false);
  };

  return (
    <div className="fixed left-1/2 md:left-6 transform -translate-x-1/2 bottom-4 md:bottom-0 md:w-fit md:inset-x-4 md:flex md:flex-col flex-row">
  <div className="flex flex-row md:flex-col p-4 space-x-6 md:space-x-0 space-y-0 md:space-y-6 md:bg-transparent bg-slate-600 bg-opacity-20 backdrop-filter backdrop-blur-md backdrop-saturate-150 md:backdrop-saturate-100 rounded-lg text-white animate-fade-up delay-1000">
    <a href="https://www.linkedin.com/in/toy0407/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faLinkedin}
        size="lg"
        height="20px"
        width="20px"
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
      />
    </a>
    <a href="https://leetcode.com/toy0407" target="_blank" rel="noopener noreferrer" onClick={handleClick}
      onBlur={handleBlur}>
      <FontAwesomeIcon
        icon={faCode}
        size="lg"
        height="20px"
        width="20px"
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
      />
    </a>
    <a href="https://github.com/toy0407" target="_blank" rel="noopener noreferrer" onClick={handleClick}
      onBlur={handleBlur}>
      <FontAwesomeIcon
        icon={faGithub}
        size="lg"
        height="20px"
        width="20px"
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
      />
    </a>
    <a href="https://twitter.com/toy_0407" target="_blank" rel="noopener noreferrer" onClick={handleClick}
      onBlur={handleBlur}>
      <FontAwesomeIcon
        icon={faTwitter}
        size="lg"
        height="20px"
        width="20px"
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
      />
    </a>
    <a href="https://www.instagram.com/toy0407" target="_blank" rel="noopener noreferrer" onClick={handleClick}
      onBlur={handleBlur}>
      <FontAwesomeIcon
        icon={faInstagram}
        size="lg"
        height="20px"
        width="20px"
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
      />
    </a>
  </div>
</div>
);
};

export default SocialMediaIconsBanner;
