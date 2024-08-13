"use client";
import React from "react";
import Image from "next/image";
const FullBlog = ({ blog, onBack }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <div className="flex flex-col justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4">
        <button
          onClick={onBack}
          className="bg-primary text-white py-2 px-4 rounded-lg mb-4"
        >
          Back to Blog List
        </button>

        <h1 className="font-bold text-xl md:text-3xl text-gray-200 md:mt-5">
          {blog.title}
        </h1>
      </div>
      <div className="mx-5 my-8 md:mx-32 md:my-16 my flex flex-col">
        <div className="w-full rounded-xl h-[250px]  md:h-[500px]">
          <Image
            src={blog.image}
            alt={blog.title}
            width={100}
            height={100}
            unoptimized={true}
            className="rounded-xl object-cover h-full w-full"
          />
        </div>
        <div className="flex justify-between items-center py-1 md:py-3 text-base md:text-lg ">
          <h6 className="text-gray-500">{blog.postDate}</h6>
          <h6 className="text-gray-500">{blog.postTime}</h6>
        </div>
        <div>
          <p className="mt-4 text-lg md:text-xl">{blog.info}</p>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
