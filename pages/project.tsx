import React from "react";
import Image from "next/image";
import ProjectData from "../data/DataProject";
import Link from "next/link";

export default function index() {
  return (
    <div className="max-w-screen-xl px-4 py-10  mx-auto">
      <h1 className="text-3xl text-red-600 font-bold">Project</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 ">
        {ProjectData.map((project) => {
          return (
            <div
              className="max-w-sm border border-gray-200 rounded-xl bg-red-600 mt-8 "
              key={project.id}
            >
              <div className="p-5">
                <Image
                  src={project.image}
                  alt="project image"
                  width={400}
                  height={400}
                  priority={true}
                />
                <h1 className="text-white font-bold mt-2 text-2xl">
                  {project.title}
                </h1>
                <figcaption className="text-white mb-5 ">
                  <cite title="Source Title">{project.hastag}</cite>
                </figcaption>
                <p className="mb-3  text-white">
                  {project.description.substring(0, 101) + "..."}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-600 bg-white rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
