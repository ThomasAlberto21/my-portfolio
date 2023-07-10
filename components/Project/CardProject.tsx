import React from "react";
import Image from "next/image";
import ProjectData from "../../data/DataProject";
import Link from "next/link";

export default function CardProject() {
  const limitedProject = ProjectData.slice(0, 3);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 ">
      {limitedProject.map((project) => {
        return (
          <div
            className="max-w-sm border border-gray-200 rounded-xl bg-white mt-8 "
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
              <h1 className="text-red-600 font-bold mt-2 text-2xl">
                {project.title}
              </h1>
              <figcaption className="text-gray-700 mb-5 ">
                <cite title="Source Title">{project.hastag}</cite>
              </figcaption>
              <p className="mb-3  text-gray-700">
                {project.description.substring(0, 101) + "..."}
              </p>
              <Link
                href={`/detailProject?id=${project.id}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-700 cursor-pointer"
              >
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
