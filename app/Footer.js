import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="mt-10 p-10 w-full text-gray-500 text-xs">
        <hr className="border-[#0B3D7929] my-6 h-1 w-full"></hr>
        <div className="flex w-full">
          <div className="flex-1 flex flex-col space-y-4">
            <Link href="/">
              <div className="">
                <Image
                  src="/Image[tw-app-store-badge__image].png"
                  height={100}
                  width={100}
                  unoptimized={true}
                />
              </div>
            </Link>

            <Link href="/">
              <div>
                <Image
                  src="/Image[tw-google-play-store-badge__image].png"
                  height={100}
                  width={100}
                  unoptimized={true}
                />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1">
              <h5 className="font-bold space-y-3">QUICK LINKS</h5>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="font-bold space-y-3">SOLUTIONS</h5>
              <ul className="space-y-2">
                <li>Consult Pharmacist</li>
                <li>Request Medication</li>
                <li>SECCAP Program</li>
                <li>Emergency Medicine</li>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="font-bold space-y-3">LEGAL</h5>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Acceptable Use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-5 px-10">
        {/* this is for footer*/}
        <div className="flex-1 text-gray-500">
          Copyright © 2024 Florix Healthcare Ltd. All rights reserved.
        </div>
        <div className="text-gray-500 flex justify-center items-center text-2xl space-x-2 font-bold">
          <Link href="/">
            <FaWhatsapp />
          </Link>
          <div>/</div>
          <Link href="/">
            <FaFacebook />
          </Link>
          <div>/</div>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
