import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Right() {
  return (
    <div className="right ">
      <p className="text-white font-medium text-justify ">
        Saya adalah seorang lulusan SMA Negeri 1 Putussibau yang tertarik dengan
        bidang Web Programming Mempunyai keahlian dalam menggunakan berbagai
        bahasa seperti HTML, CSS, JavaScript, dan menggunakan framework Vue JS ,
        React JS untuk menciptakan pengalaman pengguna yang menarik dan
        interaktif. Berpengalaman dalam mengembangkan aplikasi web responsif dan
        intuitif, serta memiliki pemahaman dasar tentang desain UI/UX. Selalu
        bersemangat untuk terus belajar dan mengikuti perkembangan terbaru dalam
        industri teknologi web.
      </p>

      <div className="flex  items-center mt-5 gap-6">
        <Link href="https://www.instagram.com/thomasalberto21/">
          <AiFillInstagram className="text-white text-5xl hover:opacity-70" />
        </Link>

        <Link href="www.linkedin.com/in/thomasalberto21">
          <BsLinkedin className="text-white text-4xl  hover:opacity-70" />
        </Link>

        <Link href="https://www.tiktok.com/@thomasalberto21">
          <FaTiktok className="text-white text-4xl hover:opacity-70" />
        </Link>

        <Link href="https://github.com/ThomasAlberto21">
          <AiFillGithub className="text-white text-5xl hover:opacity-70" />
        </Link>
      </div>
    </div>
  );
}
