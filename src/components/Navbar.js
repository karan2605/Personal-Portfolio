/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Karan Patel
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#MoreAbout" className="text-xl mr-5 hover:text-white">
            A Bit More About Me
          </a>
          <a href="#projects" className="text-xl mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="text-xl mr-5 hover:text-white">
            Skills
          </a>
          <a href="#blog" className="text-xl mr-5 hover:text-white">
            Blog
          </a>
          
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-xl mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}