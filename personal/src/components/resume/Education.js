import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Crio.Do"
          des="Crio Fellowship in Software Development"
        />
        <ResumeCard
          badge="Mar-Aug23"
          title="Full stack Developer"
          subTitle="ParentOf Solutions Pvt Ltd"
          des="Leveraged PHP and MySQL expertise to optimize data management and integration, driving seamless operations and supporting substantial company growth"
        />
        <ResumeCard
          badge="2021 - 2022"
          title="Digital Marketing"
          subTitle="Freelance Digital Marketer"
          des="Managed social media marketing campaigns for XYZ Company.
               Developed and executed SEO strategies for ABC Client"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2013 - 2015"
          title="Shivalik Public School, Sec-41B"
          subTitle="Chandigarh"
          des="Higher Secondary (10+2)
          Board: Central Board of Secondary Education (CBSE)
          Aggregate Score: 71%"
        />
        <ResumeCard
          badge="2015 - 2018"
          title="Bachelors"
          subTitle="Panjab University"
          des="Aggregate Score: 52.54%"
        />
        <ResumeCard
          badge="2018 - 2021"
          title="Certifed Fitness Professional From K11 Sports and Fitness Sciences"
          subTitle="Karol Bagh , Delhi"
          des="Diploma in Personal Training"
        />
      </div>
    </div>
  );
};

export default Education;