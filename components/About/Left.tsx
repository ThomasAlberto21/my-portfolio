import React from "react";
import AboutImg from "../../public/assets/about-us.png";
import Image from "next/image";

export default function Left() {
  const styles = {
    width: "auto",
    heigh: "auto",
    marginBottom: "10px",
  };

  return (
    <div className="left">
      <Image src={AboutImg} alt="About Img" style={styles} />
    </div>
  );
}
