import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="flex flex-col pt-20 p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-9 px-4">
        <h1 className="text-sm font-medium text-purple mb-4 sm:mb-0">Our Blog</h1>
        <button className="hidden sm:block text-white bg-purple rounded-lg p-2 text-sm hover:bg-mediumPurple transition duration-500 ease-in-out">
          View all posts
        </button>
      </div>
      <div className="px-4">
        <h1 className="font-semibold text-2xl text-start">Latest blog posts</h1>
      </div>
      <div className="px-4 pt-4">
        <p className="text-sm text-grey">
          Tools and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-4 pt-8 space-y-8 sm:space-y-0 sm:space-x-4">
        <BlogCard
          img={"blog1.png"}
          title={"UX review presentations"}
          smText={"Design"}
          author={"Olivia Rhye"}
          date={"20 Jan 2024"}
          aimg={"avatar.png"}
          txt1={"How do you create compelling presentations that"}
          txt2={"wow your colleagues and impress your managers?"}
        />
        <BlogCard
          img={"blog2.png"}
          title={"Migrating to Linear 101"}
          smText={"Product"}
          author={"Phoenix Baker"}
          date={"19 Jan 2024"}
          aimg={"avatar3.png"}
          txt1={"Linear helps streamline software projects, sprints,"}
          txt2={"tasks, and bug tracking. Here's how to get started."}
        />
        <BlogCard
          img={"blog3.png"}
          title={"Building your API stack"}
          smText={"Software Engineering"}
          author={"Lana Steiner"}
          date={"18 Jan 2024"}
          aimg={"avatar4.png"}
          txt1={"The rise of RESTful APIs has been met by a rise in"}
          txt2={"tools for creating, testing, and managing them."}
        />
      </div>
      <div className="px-4 pt-8 sm:hidden">
        <button className="w-full text-white bg-purple rounded-lg p-2 text-sm hover:bg-mediumPurple transition duration-500 ease-in-out">
          View all posts
        </button>
      </div>
    </div>
  );
}

export default Blog;