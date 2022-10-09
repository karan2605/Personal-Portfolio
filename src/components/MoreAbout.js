import React from "react";
import { UserIcon } from "@heroicons/react/outline";

export default function MoreAbout() {
  return (
    <section id="MoreAbout">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            A Bit More About Me
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A recent Computer Science graduate from the University of Warwick,
            embarking on the new journey of work as a Software Engineer at HSBC.
            I'm naturally a keen problem solver who enjoys being challenged to
            always search for more innovative and efficient approaches.<br></br>
            <br></br>I have great interest in Blockchain technology and wish to
            persue a career as a Blockchain developer in the future. My interest
            in this began while researching and developing my final year project
            at university.<br></br>
            <br></br>
            In my free time I enjoy weightlifting in the gym and watching
            sports. Specifically, watching football, cricket and Formula One.
            Recently, I have also delved into Leetcode programming to improve my
            problem solving skills and to apply my knowledge of data structures
            and algorithms.
          </p>
        </div>
      </div>
    </section>
  );
}
