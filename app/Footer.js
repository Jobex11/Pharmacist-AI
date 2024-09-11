import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiLinkedinLogoDuotone, PiInstagramLogoDuotone   } from "react-icons/pi";
const Footer = () => {
  return (
    
    <div className="text-primary">
      <hr className="border-[#0B3D7929] my-1 md:my-6 h-1 w-full"></hr>
      <div className="flex-col items-center justify-center w-full md:flex">
        <div className="subscribe-section text-[#3F4654] px-3 md:flex md:mx-auto justify-center  md:w-[70%]  md:gap-5 my-4 md:my-12 text-sm">
          <div className="flex flex-col py-1 md:flex-1 md:py-0">
            <div className="text-[16px] font-semibold md:text-[18px] pb-[.5rem] leading-[30px]">
              Subscribe to our newsletter
            </div>
            <h6>
              Receive exclusive updates on new products and services before
              anyone else does
            </h6>
          </div>
          <div className="flex flex-col gap-[1rem] flex-1">
            <div className="flex w-full mb-2 space-x-2 space-y-2 md:space-y-0 mt-[.5rem]">
              <input
                type="text"
                placeholder="youremailhere@email.com"
                className="md:w-[60%] p-2 bg-gray-300 rounded-lg"
              ></input>
              <button className="p-2 px-7 text-sm mt-[0rem] subscribe-btn text-gray-200 bg-[#3F4654] rounded-lg w-inherit">
                Subscribe
              </button>
            </div>
            <h6 className="leading-[30px]">
              By providing your email address, you consent to receive Flolog's
              monthly newsletter, which includes updates, insights, and industry
              news. Please review our Privacy Policy for details on how we
              protect and manage your data. You may revoke your consent and
              unsubscribe at any time.
            </h6>
          </div>
        </div>
      </div>

      <div className="w-full p-2 mt-10 text-base md:p-10 md:text-xs">
        {/* <hr className="border-[#0B3D7929] my-1 md:my-6 h-1 w-full"></hr> */}
        <div className="w-full md:flex">
          <div className="flex flex-col items-center flex-1 p-2 space-y-4 md:p-0 md:items-start">
            <Link href="https://apps.apple.com/ng/app/flolog/id6443549274" >
              <div>
                <Image
                  className=""
                  src="/app-store.svg"
                  height={49}
                  width={149}
                  unoptimized={true}
                />
              </div>
            </Link>

            <Link href="https://play.google.com/store/apps/details?id=co.flolog.flolog" className="">
              <div>
                <Image
                  className=""
                  src="/playstore.svg"
                  height={49}
                  width={149}
                  unoptimized={true}
                />
              </div>
            </Link>
          </div>
          <div className="text-[#3F4654] flex-1 px-0  md:space-x-0 md:flex text-[15px]">
            <div className="flex flex-col w-1/3 gap-2 my-3 md:my-0 mb-[2rem]">
              <h5 className="space-y-3 font-semibold md:space-y-3">
                QUICK LINKS
              </h5>
              <ul className="flex flex-col space-y-1 md:space-y-2">
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
            <div className="flex justify-between w-full md:w-2/3 md:flex md:justify-start md:gap-[9rem]">
              <div className="flex flex-col gap-2">
                <h5 className="space-y-2 font-semibold md:space-y-3">
                  SOLUTIONS
                </h5>
                <ul className="flex flex-col space-y-3 md:space-y-2 ">
                  <Link href="/">
                    <li>Consult Pharmacist</li>
                  </Link>
                  <Link href="/">
                    <li>Request Medication</li>
                  </Link>
                  <Link href="/">
                    <li>SECCAP Program</li>
                  </Link>
                  {/* <Link href="/">
                    <li>Emergency Medicines</li>
                  </Link> */}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="space-y-2 font-semibold md:space-y-3">LEGAL</h5>
                <ul className="flex flex-col space-y-1 md:space-y-2">
                  <Link href="/privacy-policy">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link href="/deletion-policy">
                    <li>Account Deletion Policy</li>
                  </Link>
                  <Link href="/terms-and-conditions">
                    <li>Terms & Conditions</li>
                  </Link>
                  {/* <Link href="/privacy-policy">
                    <li>Acceptable Use</li>
                  </Link> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[14px] text-[#6B7589] items-center justify-center w-full p-2 text-xs md:flex md:p-5 md:px-10 md:text-base">
        {/* this is for footer*/}
        <div className="flex-1 text-[14px] ">
          Copyright © 2024 Flolog Pharmacy Ltd. All rights reserved.
        </div>
        <div className="text-[18px] flex items-center justify-center space-x-2 gap-[10px] mt-[.5rem]">
          <Link href="https://wa.me/2349055645316" passHref>
            <FaWhatsapp size={18} />
          </Link>
          <div className="">/</div>
          <Link className="text-[#6B7589]" href="https://www.instagram.com/flologpharma.co" passHref>
            <PiInstagramLogoDuotone  size={18}/>
          </Link>
          <div className="">/</div>
          <Link href="/">
            <PiLinkedinLogoDuotone  className="text-[#6B7589]" size={18}  />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
