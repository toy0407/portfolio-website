import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import AnimatedUnderline from "./micro/AnimatedUnderline";
import FillButton from "./micro/FillButton";

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

  return (
    <nav
      className={`w-full h-20 flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-[#112240]" : "bg-transparent"
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
          <p className="text-white text-[24px] font-serif cursor-pointer flex ">
            {/* <span className="hidden sm:block">| Suvro Bose</span> */}
          </p>
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
          <li className="delay-1000 animate-fade-up mr-5">
            <FillButton child="Resume" href={resumeLink} padX={1} padY={0.5} />
          </li>
        </ul>
        


        {/* Mobile NavBar */}
        {/* <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : "/assets/logo.png"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-serif font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
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
        </div> */}
        <div className="md:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? "/assets/close.png" : "/assets/logo.png"}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          toggle ? "translate-x-0" : "translate-x-full"
        } p-6 bg-gradient-to-b from-gray-900 to-black absolute top-0 right-0 h-screen w-[80%] z-10 rounded-xl transform transition-transform duration-300`}
      >
        <ul className="list-none flex flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-serif font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(false);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
