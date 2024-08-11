import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex absolute top-0 left-0  justify-between items-center py-6 px-14 w-full z-100">
      <div className="flex space-x-4">
        <Link href="/">
          <div className="mr-6">
            <Image width={100} height={100} src="/images/Logo.svg" />
          </div>
        </Link>

        <ul className="flex space-x-6 text-gray-300 text-basic">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About Us</li>
          </Link>

          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>

      <div className="bg-gray-300 p-1 text-sm cursor-pointer">Download App</div>
    </nav>
  );
};

export default Navbar;
