import React, { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/outline";
import { blogSummary } from "../data";
import BlogPost from "./BlogPost";

export default function Blog() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("blog1");

  const onClickHandle = (link) => {
    setOpen(true);
    setPost(link);
  };

  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Blog
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Check out my blog posts below:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogSummary.map((post) => (
            <div
              key={post.key}
              onClick={() => onClickHandle(post.key)}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="p-8">
            <BlogPost open={open} blog={post} />
          </div>
        </div>
      </div>
    </section>
  );
}
