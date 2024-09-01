"use client";
import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
const FullBlog = ({ blog, onBack }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
        <div className="flex flex-col justify-center items-center bg-custom-bg-1 h-[40rem] w-full p-4 md:h-[40rem]">
        <button
          onClick={onBack}
          className="flex flex-row px-4 py-2 mb-4 text-white rounded-lg bg-primary items-center gap-[.5rem]"
        >
          <FaArrowLeft className="text-white" /> Back to Blog List
        </button>
        <h1 className="mt-[2rem] md:w-[50%] text-gray-50  text-center text-[50px] font-[600] w-[100%]">
          {blog.title}
        </h1>

      </div>
            
      <div className="flex flex-col mx-5 my-8 md:mx-32 md:my-16 my md:mt-[6rem] mt-[3rem]">
        <div className="w-full rounded-xl h-[250px]  md:h-[500px]">
          <Image
            src={blog.image}
            alt={blog.title}
            width={100}
            height={100}
            unoptimized={true}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="flex items-center justify-between py-2 text-base md:py-3 md:text-lg text-[#0C4E86]">
          <h6 className="text-[#0C4E86]">{blog.postDate}</h6>
          <h6 className="text-[#0C4E86]">{blog.postTime}</h6>
        </div>
        <div>
          <p className="mt-4 text-lg md:text-xl text-[#0C4E86]">{blog.info}</p>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
