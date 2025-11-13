"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { ResponsiveModal } from "../custom/responsive_modal.custom";
import { portfolioData } from "@/data/portfolio.data";

export default function CustomNavBar() {
  const menuItems = portfolioData.navbar.menuItems;

  // State to handle active nav item and drawer/dialog open state
  const [activeItem, setActiveItem] = useState(null);
  // State to change theme (dark/light)
  const { theme, setTheme } = useTheme();
  // State to open/close menu (in smaller screens)
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((val) => !val, false);

  const handleNavItemClick = (item: any) => setActiveItem(item);

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left - Brand */}
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">Suvro Bose</p>
        </Link>
      </NavbarBrand>

      {/* Center */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item} isActive={activeItem === item}>
            <Link
              color="foreground"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* End - Resume */}
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex"
        />
        {/* <NavbarItem className="md:flex hidden">
          <Button
            isIconOnly
            variant="bordered"
            radius="full"
            onClick={toggleTheme}
          >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <ResponsiveModal
            title="View Resume"
            description="Please provide your mail to view resume"
            openButtonText="Resume"
            showTextBox={true}
            textBoxPlaceholder="Enter your email"
            onCancel={() => {}}
            // TODO: Add actual submit handler
            onSubmit={() => {}}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="max-h-dvh bg-blue-500 items-center justify-around opacity-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={activeItem === item}
          >
            <Link
              className="w-full"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              size="lg"
              onClick={() => {
                handleNavItemClick(item);
                setIsMenuOpen();
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
