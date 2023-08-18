import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SocialMediaIconsBanner = () => {
  return (
    <div className="fixed md:bottom-0 left-0 p-4 flex flex-col space-y-6 bg-transperant text-white animate-fade-up delay-1000">
      <a href="https://www.linkedin.com/in/toy0407/">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="lg"
          height="20px"
          width="20px"
          className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
        />
      </a>
      <a href="https://leetcode.com/toy0407">
        <FontAwesomeIcon
          icon={faCode}
          size="lg"
          height="20px"
          width="20px"
          className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
        />
      </a>
      <a href="https://github.com/toy0407">
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          height="20px"
          width="20px"
          className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
        />
      </a>
      <a href="https://twitter.com/toy_0407">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
          icon={faTwitter}
          size="lg"
          height="20px"
          width="20px"
        />
      </a>
      <a href="https://www.instagram.com/toy0407">
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          height="20px"
          width="20px"
          className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
        />
      </a>
    </div>
  );
};

export default SocialMediaIconsBanner;
