"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import blogs from "../components/BlogItem";
import FullBlog from "../components/FullBlog"; // Import FullBlog component

// Define the truncateText function
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const Page = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {!selectedBlog ? (
        <>
          <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4 md:h-[30rem]">
            <h1 className="w-[60%] md:w-[30%] text-gray-50  text-center text-[50px] font-[600]">
              Blog
            </h1>
          </div>

          <div className="container py-8 mx-auto">
            <div className="grid-cols-3 gap-8 md:grid">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="p-4 bg-white shadow-md cursor-pointer"
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="w-full bg-gray-300 h-[250px] rounded-[7px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      height={100}
                      width={100}
                      quality={30}
                      unoptimized={true}
                      className="object-cover w-full h-full rounded-[7px]"
                    />
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-[#0C4E86] md:font-[500] md:text-[20px] md:leading-[32px] md:mt-[1.5rem]">{blog.title}</h3>
                  <h5 className="mt-1 text-base text-[#0C4E86] font-[300] md:leading-[26px]">
                    {truncateText(blog.info, 200)}
                  </h5>
                  <div className="flex items-center justify-between mt-1 text-xs">
                    <h6 className="text-gray-500">{blog.postDate}</h6>
                    <h6 className="text-gray-500">{blog.postTime}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg bg-[#0C4E86]">
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </>
      ) : (
        <FullBlog blog={selectedBlog} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default Page;
