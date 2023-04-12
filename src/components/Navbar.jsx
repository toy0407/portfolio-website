import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import AnimatedUnderline from "./micro/AnimatedUnderline";
import FillButton from "./micro/FillButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#00000000");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#112240");
      } else {
        setShadow(false);
        setNavBg("#00000000");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div
        style={{ backgroundColor: `${navBg}` }}
        className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ease-in duration-300"
      >
        <a href="/">
          <Image src="/assets/logo.png" alt="/" width="80" height="80" />
        </a>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase animate-fade-up">
              <AnimatedUnderline child="about" href="/#about" />
            </li>
            <li className="ml-10 text-sm uppercase animate-fade-up delay-200">
              <AnimatedUnderline child="skills" href="/#skills" />
            </li>
            <li className="ml-10 text-sm uppercase animate-fade-up delay-400">
              <AnimatedUnderline child="contact" href="/#contact" />
            </li>
            {/* TODO: Add resume link */}
            <li className="ml-10 text-sm animate-fade-up delay-400">
              <FillButton child="Resume" href="" padX={1} padY={0.5} />
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 transition ease-in duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? `md:hidden fixed left-0 top-0 w-[80%] h-screen sm:w-[60%] md:w-[45%] bg-[#0a192f] p-10 ease-in duration-300`
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/" onClick={() => setNav(false)}>
                <Image src="/assets/logo.png" alt="/" width="90" height="90" />
              </a>
              <div
                onClick={handleNav}
                className="rounded-full py-3 px-3 shadow-sm shadow-[#F2A2E8] cursor-pointer hover:scale-125 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] text-gray-400 py-4">
                Let's Go Building!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {/* <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#F2A2E8] transition ease-in duration-150"
                >
                  Home
                </li>
              </Link> */}
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#F2A2E8] transition ease-in duration-150"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#F2A2E8] transition ease-in duration-150"
                >
                  Skills
                </li>
              </Link>
              {/* <Link href="/projects">
                <li className="py-4 text-sm">Project</li>
              </Link> */}
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#F2A2E8] transition ease-in duration-150"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-max text-[#F2A2E8]">
                Let's Connect
              </p>
              <div className="flex items-start justify-between my-4 flex-col sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/toy0407/"
                  onClick={() => setNav(false)}
                  className="mb-4 w-[80%]"
                >
                  <div
                    className="w-full rounded-full shadow-sm shadow-[#F2A2E8] p-3 cursor-pointer hover:bg-[#F2A2E8] hover:text-[#0a192f] ease-in duration-150"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaLinkedinIn
                      className="h-[20px] w-[20px]"
                      style={{ marginRight: "8px" }}
                    />
                    <p>LinkedIn</p>
                  </div>
                </a>

                <a
                  href="https://github.com/toy0407/"
                  onClick={() => setNav(false)}
                  className="mb-4 w-[80%]"
                >
                  <div
                    className="rounded-full shadow-sm shadow-[#F2A2E8] p-3 cursor-pointer hover:bg-[#F2A2E8] hover:text-[#0a192f] ease-in duration-150"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaGithub
                      className="h-[20px] w-[20px]"
                      style={{ marginRight: "8px" }}
                    />
                    <p>Github</p>
                  </div>
                </a>
                <a
                  href="https://twitter.com/toy_0407"
                  onClick={() => setNav(false)}
                  className="mb-4 w-[80%]"
                >
                  <div
                    className="rounded-full shadow-sm shadow-[#F2A2E8] p-3 cursor-pointer hover:bg-[#F2A2E8] hover:text-[#0a192f] ease-in duration-150"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaTwitter
                      className="h-[20px] w-[20px]"
                      style={{ marginRight: "8px" }}
                    />
                    <p>Twitter</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/toy0407/"
                  onClick={() => setNav(false)}
                  className="mb-4 w-[80%]"
                >
                  <div
                    className="rounded-full shadow-sm shadow-[#F2A2E8] p-3 cursor-pointer hover:bg-[#F2A2E8] hover:text-[#0a192f] ease-in duration-150"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaInstagram
                      className="h-[20px] w-[20px]"
                      style={{ marginRight: "8px" }}
                    />
                    <p>Instagram</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
