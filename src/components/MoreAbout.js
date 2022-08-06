import React from "react";
import { UserIcon } from "@heroicons/react/outline";

export default function MoreAbout() {
    return(
      <section id="MoreAbout">
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
            <UserIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                A Bit More About Me
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                possimus est.
            </p>
            </div>
          </div>
        </section>
    );
}