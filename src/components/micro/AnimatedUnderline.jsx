import { useState } from "react";

function AnimatedUnderline({ href, child }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    
    <a
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group text-bg-gray-600 hover:text-[#F2A2E8] transition duration-300"
    >
      {/* Text */}
      <span className="pb-1 uppercase border-b-2 border-transparent">
        {child}
      </span>
      {/* <span
        className={`absolute left-0 w-full h-0.5  transition-all duration-300 ${
          isHovering ? "bottom-0 bg-[#5651e5]" : "-bottom-2 bg-gray-600"
        }`}
      ></span> */}
      {/* Underline */}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#F2A2E8]"></span>
    </a>
  );
}

export default AnimatedUnderline;
