/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectData from "../data/DataProject";
import { useRouter } from "next/router";
import { BiLeftArrowAlt } from "react-icons/bi";

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
  const [selectedImage, setSelectedImage] = useState(image);

  const handleThumbnailClick = (thumbnailImage: any) => {
    setSelectedImage(thumbnailImage);
  };

  return (
    <div className="max-w-screen-xl px-4 py-10  mx-auto">
      <Link
        href="/project"
        className="rounded-md bg-red-600 text-white p-2.5 w-20  mb-10 flex items-center"
      >
        <BiLeftArrowAlt className="text-2xl" />
        <h1>Back</h1>
      </Link>

      <div className="lg:flex">
        <Image
          src={selectedImage}
          alt={title}
          className="w-full h-auto rounded-md border border-gray-700"
          width={700}
          height={700}
        />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:ms-3 gap-2 lg:mt-0 mt-3 w-full justify-between ">
          {thumbnail.map((thumb, index) => (
            <Image
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              width={300}
              height={300}
              className={`rounded-md border-gray-700 border cursor-pointer w-full  ${
                selectedImage === thumb ? "border-red-600" : ""
              }`}
              onClick={() => handleThumbnailClick(thumb)}
            />
          ))}
        </div>
      </div>
      <h2 className="mt-5 text-red-600 font-bold text-2xl">{title}</h2>
      <figcaption className="text-gray-700 mb-5 ">
        <cite title="Source Title">{hastag}</cite>
      </figcaption>
      <p className="font-semibold text-gray-700">{description}</p>
    </div>
  );
}
