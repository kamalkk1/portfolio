import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="As a Full Stack Developer, I specialize in crafting responsive and dynamic web applications. From frontend interfaces that captivate users to robust backend systems that power your online presence, I've got you covered. I leverage cutting-edge technologies and best practices to deliver websites and web apps that are not just visually appealing but also highly functional and performant."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Good design is at the heart of every successful digital product. I bring a keen eye for aesthetics and user-centric design principles to create engaging and intuitive user interfaces. Whether you need a website makeover or a brand-new design, I ensure that your web presence reflects your unique identity and resonates with your audience."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="In today's mobile-driven world, having a strong mobile presence is essential. I specialize in developing cross-platform mobile applications that work seamlessly on both iOS and Android. From concept to deployment, I handle every aspect of mobile app development, ensuring that your app reaches a wide audience and provides an exceptional user experience."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Getting noticed in the vast online landscape is a challenge. That's where SEO comes in. I optimize your web content and structure to improve your search engine rankings. By leveraging SEO best practices, I help drive organic traffic to your website, increase visibility, and ultimately boost your online presence. With my SEO expertise, your business can rise above the competition."
      />
    </div>
  );
};

export default MyServices;