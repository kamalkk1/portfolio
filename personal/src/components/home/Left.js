import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Kamal Kishore</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://github.com/kamalkk1">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            </a>
           <a href="https://www.linkedin.com/in/kamal-kishore-104882244/">
           <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
           </a>
           <a href="https://www.youtube.com/channel/UCAEl8vZOZwknl0XV5sjZLyg"
           ><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutubemusic />
            </span>
            </a>
            <a href="https://www.facebook.com/kamal.kashyap.566">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
            </a>
            <a href="https://www.instagram.com/k_kay8055/?igshid=MzRlODBiNWFlZA%3D%3D">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            </a>
            <a href="https://twitter.com/KamalKayk">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            </a>
            <a href="mailto: kamalk2620@gmail.com">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
            </a>
           
          </div>
        </div>
        <div className="flex h-14">
          <a
            href="https://drive.google.com/file/d/136noae9T6B6zOShXEKo9VgfoUL9AZNui/view?usp=sharing"
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
        <a href="mailto: kamalk2620@gmail.com"
        className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
        rel="noreferrer">
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm m-4 tracking-wide uppercase flex justify-center items-center  hover:text-designColor duration-300">
            Contact Me <FiSend />
          </button>
        </a>
          
     
         
        </div>
      </div>
    </div>
  );
};

export default Left;