import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  const [show, setShow] = useState(-1);

  const onClickHandle = (i) => {
    setShow(show === i ? -1 : i);
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Listed below are all the projects I have worked on over the past few
            years at university and outside. Click on a box to view more about a
            project.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, i) => (
            <a
              href={project.link}
              key={project.key}
              onClick={() => onClickHandle(i)}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900  hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">
                    {show === i && project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
