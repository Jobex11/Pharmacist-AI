"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
    // { href: "/privacy-policy", label: "Privacy Poilcy" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 flex items-center justify-between w-full py-6 overflow-hidden navbar px-7 z-100">
      <div className="flex items-center justify-center space-x-4">
        <Link href="/">
          <div className="mr-6 ">
            <Image
              width={150}
              height={150}
              unoptimized={true}
              src="/Logo.svg"
              alt="Logo"
            />
          </div>
        </Link>

        <ul className="hidden space-x-6 text-gray-300 md:flex md:ml-[5rem] text-basic">
          {links.map((link) => (
            <li
              key={link.href}
              className={`relative cursor-pointer ${
                pathname === link.href
                  ? "text-gray-200"
                  : "hover:text-gray-200 transition-colors"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-200 transform scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="text-3xl text-gray-200 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <FaAlignRight />
      </div>

      <div className="px-[1rem] py-[.5rem] items-center justify-center hidden gap-1 p-2 text-sm text-gray-700 bg-white rounded-lg cursor-pointer md:flex hover:bg-gray-200 hover:transition-all">
        Download App
        <FaArrowRight className="text-gray-500" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 flex justify-center items-center left-0 w-screen h-screen bg-gray-900 text-gray-100 transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-20 flex flex-col items-center justify-start p-8`}
      >
        <div className="flex justify-end w-full mb-6">
          <button
            onClick={toggleMenu}
            className="absolute top-0 px-5 text-3xl text-gray-200 py-7"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col absolute top-[20%]  items-start space-y-6 text-gray-300 text-3xl text-[24px]">
          <Link href="/" className="">
            <div className="relative bottom-6">
              <Image
                width={180}
                height={180}
                unoptimized={true}
                src="/Logo.svg"
                alt="Logo"
              />
            </div>
          </Link>
          {links.map((link) => (
            <li
              key={link.href}
              className={`relative cursor-pointer ${
                pathname === link.href
                  ? "text-gray-200"
                  : "hover:text-gray-200 transition-colors"
              }`}
            >
              <Link href={link.href} onClick={toggleMenu}>
                {link.label}
              </Link>
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-200 transform scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
