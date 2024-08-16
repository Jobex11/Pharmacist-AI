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
    <div className="w-full overflow-hidden flex flex-col">
      {!selectedBlog ? (
        <>
          <div className="flex justify-center items-center bg-custom-bg-1 h-[300px] w-full p-4">
            <h1 className="font-semibold w-[60%] md:w-[30%] text-gray-50 text-xl md:text-2xl text-center">
              Blog
            </h1>
          </div>

          <div className="container mx-auto py-8">
            <div className="md:grid grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md cursor-pointer"
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="w-full bg-gray-300 h-[250px] rounded-lg md:rounded-none">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      height={100}
                      width={100}
                      quality={30}
                      unoptimized={true}
                      className="h-full w-full object-cover rounded-lg md:rounded-none"
                    />
                  </div>
                  <h3 className="font-semibold text-base mt-2">{blog.title}</h3>
                  <h5 className="text-gray-600 mt-1 text-base">
                    {truncateText(blog.info, 200)}
                  </h5>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <h6 className="text-gray-500">{blog.postDate}</h6>
                    <h6 className="text-gray-500">{blog.postTime}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-primary text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2">
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
