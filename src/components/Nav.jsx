import React from "react";
import { navLinks } from "../constants";
import logo from "../assets/images/logo.svg";
import user from "../assets/icons/user.png";
import circle from "../assets/icons/circle.png";
import Button from "./Button";

export const Nav = ({isScrolled}) => {
  return (
    <header className={`flex  ${isScrolled ? "scrolled bg-black sticky top-0 transition ease-in-out delay-150":"bg-transparentgit"}  justify-between items-center z-10 px-4 lg:px-8 absolute top-0 w-full h-[6rem] `}>
      {/* Logo Section */}
      <a href="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          width={120}
          height={40}
          className="mt-1"
        />
      </a>

      {/* Navigation Links */}
      <nav className="hidden lg:flex flex-1 items-center justify-center">
        <ul className="flex gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="capitalize hover:text-green-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
