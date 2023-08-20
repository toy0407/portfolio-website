import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import AnimatedUnderline from "./micro/AnimatedUnderline";
import FillButton from "./micro/FillButton";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1hDOMcp-VGcHkfSmU2ilNbZGE9ZWxOaoR/view?usp=share_link";
  const navLinks = [
    {
      id: "about",
      title: "About",
      duration: "200",
    },
    {
      id: "skills",
      title: "Skills",
      duration: "400",
    },
    {
      id: "projects",
      title: "Projects",
      duration: "600",
    },
    {
      id: "work",
      title: "Work",
      duration: "800",
    },
    {
      id: "contact",
      title: "Contact",
      duration: "1000",
    },
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggle]);

  return (
    <nav
      className={`w-full h-20 flex items-center fixed top-0 z-20 ${
        scrolled? "bg-[#112240]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src="/assets/logo.png" alt="/" width="80" height="80" />
        </a>

        <ul className="list-none hidden md:flex flex-row items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white font-thin cursor-pointer text-md animate-fade-up delay-${
                nav.duration
              }`}
              onClick={() => setActive(nav.title)}
            >
              <AnimatedUnderline child={nav.title} href={"#" + nav.id} />
            </li>
          ))}
        </ul>

      
          
        


        {/* Mobile NavBar */}
            <div className="md:hidden px-4 flex flex-1 justify-end items-center">  

              <Hamburger alt='menu' toggled={toggle} toggle={()=>{
                setToggle(!toggle);
              }}/>

                  <div
                    className={`${
                      toggle ? "translate-y-0" : "translate-y-full"
                    } p-6 bg-gradient-to-b ${scrolled?"from-[#112240]":"from-[#0a192f]"} to-black absolute top-[80px] right-0 h-screen w-[100%] z-10 transform transition-transform duration-300`}
                  >
                    <ul className="flex flex-col h-[80%] gap-4 items-center justify-evenly">
                      {navLinks.map((nav) => (
                        <li
                          key={nav.id}
                          className={`font-mono font-semibold cursor-pointer text-3xl ${
                            active === nav.title ? "text-white" : "text-gray-300"
                          } ${toggle ? `animate-fade-up delay-${nav.duration}` : ""}`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
            </div>
            <div className="delay-1000 md:animate-fade-up mr-5">
                  <FillButton child="Resume" href={resumeLink} padX={1} padY={0.5} />
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
