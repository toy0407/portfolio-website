import React from "react";

const FillButton = ({ child, href, padX, padY }) => {
  return (
    <a
      className={`cursor-pointer bg-transparent border-[#F2A2E8] border-2 rounded-lg hover:bg-[#F2A2E8] hover:text-[#0a192f] transition ease-in duration-150`}
      style={{
        paddingLeft: `${padX}rem`,
        paddingTop: `${padY}rem`,
        paddingRight: `${padX}rem`,
        paddingBottom: `${padY}rem`,
      }}
      href={href}
    >
      {child}
    </a>
  );
};

export default FillButton;
