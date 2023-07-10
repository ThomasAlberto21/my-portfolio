import React , {useState} from "react";
import Image from "next/image";
import ProjectData from "../data/DataProject";
import { useRouter } from "next/router";

export default function DetailProject() {
  const router = useRouter();
  const { id } = router.query;

  const project = ProjectData.find(
    (project) => project.id === parseInt(id as string)
  );

  if (!project) {
    return <div>loading .....</div>;
  }

  const { image, title, hastag, description, thumbnail } = project;

  return (
    <div className="max-w-screen-xl px-4 py-10  mx-auto">
      <h1 className="font-bold text-red-600 text-2xl mb-5">Project {id}</h1>
      <Image
        src={image}
        alt={title}
        className="w-full rounded-md border border-gray-700"
        width={1000}
        height={1000}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-3 gap-2 justify-between ">
        {thumbnail.map((thumb, index) => (
          <Image
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            width={300}
            height={300}
            className="rounded-md  border-gray-700 border w-full"
          />
        ))}
      </div>
      <h2 className="mt-5 text-red-600 font-bold text-2xl">{title}</h2>
      <figcaption className="text-gray-700 mb-5 ">
        <cite title="Source Title">{hastag}</cite>
      </figcaption>
      <p className="font-semibold text-gray-700">{description}</p>
    </div>
  );
}
