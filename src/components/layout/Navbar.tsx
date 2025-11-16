"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React from "react";
import { portfolioData } from "@/data/portfolio.data";
import Image from "next/image";
import {
  collectUserAnalytics,
  sendAnalyticsToServer,
} from "@/utils/analytics.utils";
import { RainbowButton } from "../ui/rainbow-button";

export default function CustomNavBar() {
  const menuItems = portfolioData.navbar.menuItems;

  // State to handle active nav item and drawer/dialog open state
  const [activeItem, setActiveItem] = useState<string | null>(null);
  // const { theme, setTheme } = useTheme();
  // State to open/close menu (in smaller screens)
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((val) => !val, false);
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (item: string) => setActiveItem(item);

  // const toggleTheme = () =>
  //     theme === "dark" ? setTheme("light") : setTheme("dark");
  const handleResumeClick = async () => {
    // Collect analytics data for resume click
    const analytics = await collectUserAnalytics("resume_click");
    // Send to server (non-blocking)
    sendAnalyticsToServer(analytics);
    // Open resume in new tab
    window.open(portfolioData.personal.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={`fixed transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-apple bg-background/80 border-b border-border/40 shadow-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
      classNames={{
        wrapper: "px-4 sm:px-6",
        item: "data-[active=true]:font-semibold",
        menu: "transition-all duration-500 ease-out",
      }}
    >
      {/* Left - Brand */}
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={portfolioData.personal.logo}
            alt="Logo"
            width={96}
            height={96}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </NavbarBrand>

      {/* Center - Desktop Menu */}
      <NavbarContent className="hidden md:flex gap-1" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item} isActive={activeItem === item}>
            <Link
              color="foreground"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleNavItemClick(item)}
              className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-muted/50 data-[active=true]:text-primary"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* End - Actions */}
      <NavbarContent justify="end" className="gap-2">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex px-5 text-foreground transition-colors duration-200"
        />
        <NavbarItem className="flex">
          {/* Resume Button */}
          <RainbowButton
            color="primary"
            // variant="shadow"
            onClick={handleResumeClick}
            className="font-normal text-black"
          >
            Resume
          </RainbowButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 pb-8 px-4 gap-4 backdrop-blur-xl bg-background/95 border-t border-border/40 transition-all duration-700 ease-out">
        <div className="min-h-[80vh] flex flex-col items-center justify-evenly gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={activeItem === item}
              // TODO: Fix and Add animation back
              // className={
              //   isMenuOpen
              //     ? "animate-in fade-in slide-in-from-top-3 duration-700"
              //     : "opacity-0"
              // }
              // style={{
              //   animationDelay: `${300 + index * 100}ms`,
              //   animationFillMode: "forwards",
              //   animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              // }}
            >
              <Link
                className={`w-full px-4 py-3 rounded-xl font-extralight text-2xl transition-all duration-200 hover:bg-muted/80 active:scale-[0.98] ${
                  activeItem === item
                    ? "bg-primary/10 text-primary"
                    : "text-foreground"
                }`}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => {
                  handleNavItemClick(item);
                  setIsMenuOpen();
                }}
              >
                {item.toUpperCase()}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
