"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation"; // use this instead of useRouter

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="flex absolute top-0 left-0 justify-between items-center py-6 px-14 w-full z-100">
      <div className="flex space-x-4">
        <Link href="/">
          <div className="mr-6">
            <Image
              width={100}
              height={100}
              unoptimized={true}
              src="/Logo.png"
              alt="Logo"
            />
          </div>
        </Link>

        <ul className="flex space-x-6 text-gray-300 text-basic">
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

      <div className="bg-gray-300 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-1 p-2 text-gray-700 hover:bg-gray-200 hover:transition-all">
        Download App
        <FaArrowRight className="text-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;
