import React from "react";
import Image from "next/image";
import ProjectData from "./Data";
import Link from "next/link";

export default function Project() {
  return (
    <main className="bg-red-600">
      <div className="max-w-screen-xl px-4 py-10  mx-auto">
        <h1 className="text-3xl text-white font-bold">Project</h1>

        <div class="max-w-sm border border-gray-200 rounded-xl bg-white mt-10 ">
          {ProjectData.map((project) => (
            <div class="p-5" key={project.id}>
              <Image src={project.image} alt="project image" />
              <h1 className="text-red-600 font-bold mt-2 text-2xl">
                {project.title}
              </h1>
              <figcaption class="text-gray-700 mb-5 ">
                <cite title="Source Title">{project.hastag}</cite>
              </figcaption>
              <p class="mb-3  text-gray-700">
                {project.description.substring(0, 100) + "..."}
              </p>
              <Link
                href={project.link}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-700 cursor-pointer"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
