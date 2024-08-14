import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
const page = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4">
        <h1 className="font-bold w-[60%] md:w-[30%] text-gray-50 text-xl md:text-2xl text-center">
          Contact
        </h1>
      </div>
      <div className="my-5  md:my-16 px-5 md:px-0  md:mx-20 text-primary">
        <div>
          <div className=" w-full flex justify-between items-stretch">
            <div className="">
              <div className="my-3">
                <h4 className="text-xl font-bold">Get in touch with us.</h4>
                <h4 className="text-xl font-bold">We're here to assist you.</h4>
              </div>
              <div className="text-sm font-semibold">
                <h5>Questions, comments, or suggestions?</h5>
                <h5>Simply fill in the form</h5>
                <h5>we’ll be in touch shortly.</h5>
              </div>
            </div>
            <div className="justify-around flex flex-col text-xl">
              <Link href="/">
                <div>
                  <FaWhatsapp />
                </div>
              </Link>
              <Link href="/">
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
        <form>
          <div className="md:flex w-full md:space-x-6 pt-10 text-sm">
            <div className="flex border-b-2">
              <label className=" py-2">Your Name</label>
              <input
                type="text"
                placeholder="enter your name"
                className=" text-center"
              />
            </div>
            <div className="flex border-b-2">
              <label className="py-2">Email Address</label>
              <input
                type="email"
                placeholder="enter email address"
                className=" text-center"
              />
            </div>
            <div className="flex border-b-2">
              <label className=" py-2">Phone Number(optional)</label>
              <input
                type="text"
                placeholder="enter phone number"
                className=" text-center"
              />
            </div>
          </div>

          <div className="py-8">
            <div className="flex  border-b-2">
              <label className=" py-2 text-lg">Message</label>
              <input
                type="text"
                placeholder="write your messages"
                className=" text-center"
              />
            </div>
          </div>
          <div className="py-3">
            <button className="py-4 px-5 text-sm text-gray-200 bg-primary hover:bg-[#0c63af] hover:transition-all rounded-xl">
              Leave us a Message
            </button>
          </div>
        </form>
      </div>
      <hr className="mx-5 md:mx-20 my-5 md:my-10" />
      <div className="md:flex mx-5 md:mx-20 md:space-x-10 my-2 md:my-10 text-primary">
        <div className="flex-[1_1_0%]  text-xl font-bold">
          <h2>
            Our top priority is delivering outstanding service and support
          </h2>
        </div>
        <div className="flex-[3_3_0%] flex justify-between md:justify-around">
          <div className="space-y-3 w-[150px]">
            <h5 className=" font-bold text-sm ">Email Address</h5>
            <div className="w-6 h-[2px] bg-[#0C4E86]"></div>
            <div className="bg bg-primary w-4"></div>
            <h4 className="font-bold text-xs">info@FloglogPharma.co</h4>
            <h4 className="text-xs py-1">
              <h4>Assistance hours:</h4>
              <h4>Monday - Friday 8 am to 6 pm WAT</h4>
            </h4>
          </div>
          <div className="space-y-3 w-[150px]">
            <h5 className=" font-bold text-sm ">Number</h5>
            <div className="w-6 h-[2px] bg-[#0C4E86]"></div>
            <div className="bg bg-primary w-4"></div>
            <h4 className="font-bold text-xs">+234 703749 5356</h4>
            <h4 className="text-xs py-1">
              <h4>Assistance hours:</h4>
              <h4>Monday - Friday 8 am to 6 pm WAT</h4>
            </h4>
          </div>
        </div>
      </div>
      <hr className="mx-5 md:mx-20 my-4 md:my-10" />
    </div>
  );
};

export default page;
