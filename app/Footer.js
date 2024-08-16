import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#f3f3fc] text-primary">
      <div className="w-full md:flex flex-col justify-center items-center">
        <div className="px-3 md:flex justify-center items-center md:w-[70%]  md:gap-5 my-4 md:my-12 text-primary text-sm">
          <div className="md:flex-1 py-1 md:py-0">
            <div className="font-bold text-primary text-sm">
              Subscribe to our newsletter
            </div>
            <h6>
              Receive exclusive updates on new products and services before
              anyone else does
            </h6>
          </div>
          <div className="flex-1">
            <div className="w-full space-x-2 mb-2">
              <input
                type="text"
                placeholder="youremail.com"
                className="md:w-[60%] p-2 bg-gray-300 rounded-lg"
              ></input>{" "}
              <button className="p-2 text-sm bg-gray-800 text-gray-200 rounded-lg w-inherit">
                Subscribe
              </button>
            </div>
            <h6 className="text-xs">
              By providing your email address, you consent to receive Flolog's
              monthly newsletter, which includes updates, insights, and industry
              news. Please review our Privacy Policy for details on how we
              protect and manage your data. You may revoke your consent and
              unsubscribe at any time.
            </h6>
          </div>
        </div>
      </div>

      <div className=" mt-10 p-2 md:p-10 w-full text-base md:text-xs">
        <hr className="border-[#0B3D7929] my-1 md:my-6 h-1 w-full"></hr>
        <div className="md:flex w-full">
          <div className="items-center p-2 md:p-0 md:items-start flex-1 flex flex-col space-y-4">
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
          <div className=" flex-1 px-0 md:space-x-0 md:flex">
            <div className="my-3  md:my-0 w-1/3">
              <h5 className=" font-semibold space-y-3  md:space-y-3">
                QUICK LINKS
              </h5>
              <ul className="space-y-1 md:space-y-2">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/about">
                  <li>About Us</li>
                </Link>
                <Link href="/blog">
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            <div className="flex w-full md:w-2/3 justify-between">
              <div className="">
                <h5 className="font-semibold space-y-2  md:space-y-3">
                  SOLUTIONS
                </h5>
                <ul className="space-y-3 md:space-y-2 ">
                  <Link href="/">
                    <li>Consult Pharmacist</li>
                  </Link>
                  <Link href="/">
                    <li>Request Medication</li>
                  </Link>
                  <Link href="/">
                    <li>SECCAP Program</li>
                  </Link>
                  <Link href="/">
                    <li>Emergency Medicines</li>
                  </Link>
                </ul>
              </div>

              <div className="">
                <h5 className="font-semibold space-y-2  md:space-y-3">LEGAL</h5>
                <ul className="space-y-1 md:space-y-2">
                  <Link href="/privacypolicy">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link href="/privacypolicy">
                    <li>Terms & Conditions</li>
                  </Link>
                  <Link href="/privacypolicy">
                    <li>Acceptable Use</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex w-full justify-center items-center p-2 md:p-5 md:px-10 text-xs md:text-base">
        {/* this is for footer*/}
        <div className="flex-1 ">
          Copyright © 2024 Florix Healthcare Ltd. All rights reserved.
        </div>
        <div className=" flex justify-center items-center text-xl md:text-2xl space-x-2 font-bold">
          <Link href="https://wa.me/2349055645316" passHref>
            <FaWhatsapp />
          </Link>
          <div className="font-normal">/</div>
          <Link href="/">
            <FaFacebook />
          </Link>
          <div className="font-normal">/</div>
          <Link href="https://www.instagram.com/flologpharma.co" passHref>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
