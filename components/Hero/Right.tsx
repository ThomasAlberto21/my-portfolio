import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/hero-img.jpg";

export default function Right() {
  const styles = {
    width: "350px",
    heigh: "350px",
  };

  return (
    <div className="right mb-7">
      <Image
        src={HeroImg}
        alt="hero-img"
        className="rounded-full"
        style={styles}
        priority={true}
      />
    </div>
  );
}
