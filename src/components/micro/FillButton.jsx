import React, { useEffect, useState } from "react";


const FillButton = ({ child, href, padX, padY }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Perform any other click-related actions here
  };

  const handleBlur = () => {
    setClicked(false);
  };


  return (
    <a
      className={`cursor-pointer tracking-wider bg-transparent border-[#F2A2E8] border-2 rounded-lg hover:bg-[#F2A2E8] hover:text-[#0a192f] font-thin transition ease-in duration-150`}
      style={{
        paddingLeft: `${padX}rem`,
        paddingTop: `${padY}rem`,
        paddingRight: `${padX}rem`,
        paddingBottom: `${padY}rem`,
      }}
      href={href}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {child}
    </a>
  );
};

export default FillButton;
