/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AtSymbolIcon } from "@heroicons/react/outline";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AtSymbolIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Contact Me
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Contact me through one of the methods below
          </p>
          <div className="bg-gray-900 relative flex flex-wrap py-6 ">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                8 Canada Square, Canary Wharf <br />
                London, E14 5HQ
              </p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                karan2605@hotmail.co.uk
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+44 7752 443461</p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <a href="https://www.linkedin.com/in/karan-patel-s/" className="fa fa-linkedin"> </a>
              <a href="https://github.com/karan2605" className="fa fa-github"> </a>
              <div className="leetBox"><a href="https://leetcode.com/karan2605/" className="leet"> </a></div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
}