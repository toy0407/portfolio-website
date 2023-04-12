import React from "react";

function FillButton({ child, href, px, py }) {
  return (
    <a
      className={`px-${px} py-${py} cursor-pointer mx-auto bg-transparent border-[#F2A2E8] border-2 rounded-lg hover:bg-[#F2A2E8] hover:text-[#0a192f] transition ease-in duration-150`}
      href={href}
    >
      {child}
    </a>
  );
}

export default FillButton;
