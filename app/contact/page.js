import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaArrowRight } from "react-icons/fa";
const page = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4 md:h-[30rem]">
        <h1 className="md:w-[30%] text-gray-50 text-[50px] font-[600] text-center w-[100%]">
          Contact Us
        </h1>
      </div>
      <div className="px-5 my-5 md:my-16 md:px-0 md:mx-[8rem] text-primary">
        <div>
          <div className="flex items-stretch justify-between w-full ">
            <div className="">
              <div className="my-3">
                <h4 className="text-xl font-semibold md:text-[30px] md:leading-[38px] md:font-[600]">Get in touch with us.</h4>
                <h4 className="text-xl font-semibold md:text-[30px] md:leading-[38px] md:font-[600]">
                  We're here to assist you.
                </h4>
              </div>
              <div className="font-[400] md:text-[15px] md:leading-[23px] md:w-[55%] w-[75%]">
                <h5>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</h5>
              </div>
            </div>
            <div className="flex flex-col justify-around text-xl text-[#6B7589]">
              <Link href="https://wa.me/2349055645316">
                <div>
                  <FaWhatsapp  />
                </div>
              </Link>
              <Link href="https://www.instagram.com/flologpharma.co" passHref>
                <div>
                  <FaInstagram />
                </div>
              </Link>
              <Link href="/">
                <div>
                  <FaFacebook />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* use this form to get request from clients */}
        <form className="contact-form md:mt-[4rem] text-[#6B7589]">
          <div className="w-full pt-10 text-sm md:flex md:space-x-6 md:justify-between flex flex-col gap-[1rem] md:pt-[1rem]">
          <div className="flex flex-col border-b-2">
              <label className="py-2 ">Your Name</label>
              <input
                type="text"
                placeholder=""
                className="text-center "
              />
            </div>
            <div className="flex flex-col border-b-2 md:ml-0 margin-none">
              <label className="py-2">Email Address</label>
              <input
                type="email"
                placeholder=""
                className="text-center "
              />
            </div>
            <div className="flex flex-col border-b-2 md:ml-0 margin-none">
              <label className="py-2 ">Phone Number (optional)</label>
              <input
                type="text"
                placeholder=""
                className="text-center "
              />
            </div>
          </div>

          <div className="py-8">
          <div className="flex flex-col border-b-2">
              <label className="py-2 text-lg md:mb-[4rem]">Message</label>
              <input
                type="text"
                placeholder=""
                className="text-left"
              />
            </div>
          </div>
          <div className="py-3">
            <button className="py-3 flex flex-row items-center gap-[.5rem] px-5 text-sm text-gray-200 bg-primary hover:bg-[#0c63af] hover:transition-all rounded-xl md:pt-[0.8rem] md:pb-[0.8rem] md:pl-[1.5rem] md:pr-[1.5rem] md:rounded-[8px]">
              Leave us a Message
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
      <hr className="mx-5 my-5 md:mx-20 md:my-10" />
      <div className="mx-5 my-2 md:flex md:mx-20 md:space-x-10 md:my-10 text-primary">
        <div className="flex-[1_1_0%]  text-xl font-semibold">
          <h2 className="md:font-[600] md:text-[30px] md:leading-[38px] mb-[2rem]">
            Our top priority is delivering outstanding service and support
          </h2>
        </div>
        <div className="flex-[3_3_0%] flex justify-between md:justify-around text-[#6B7589]">
          <div className="space-y-3 w-[150px]">
            <h5 className="font-semibold text-[#6B7589]">Email Address</h5>
            <div className="w-6 h-[3px] bg-[#6B7589]"></div>
            <div className="w-4 bg bg-primary"></div>
            <h4 className="font-semibold text-[#6B7589]">info@FlologPharma.co</h4>
            <h4 className="py-1 md:leading-[32px]">
              <h4>Assistance hours:</h4>
              <h4>Monday - Friday 8 am to 6 pm WAT</h4>
            </h4>
          </div>
          <div className="space-y-3 w-[150px]">
            <h5 className="font-semibold text-[#6B7589]">Number</h5>
            <div className="w-6 h-[3px] bg-[#6B7589]"></div>
            <div className="w-4 bg bg-primary"></div>
            <h4 className="font-semibold text-[#6B7589]">+234 905564 5316</h4>
            <h4 className="py-1 md:leading-[32px]">
              <h4>Assistance hours:</h4>
              <h4>Monday - Friday 8 am to 6 pm WAT</h4>
            </h4>
          </div>
        </div>
      </div>
      <hr className="mx-5 my-4 md:mx-20 md:my-10" />
    </div>
  );
};

export default page;
