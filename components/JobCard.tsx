import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

// companyLogo={job.companyLogo} 
//           jobTitle={job.jobTitle} 
//           company={job.company} 
//           location={job.location} 
//           salary={job.salary} 
//           skills={job.skills} 

interface JobProps{
  companyLogo:string
  jobTitle: any
  company: string
  location: string
  salary: number | string
  skills: string[]
}
 const JobCard: React.FC<JobProps> = ({companyLogo, jobTitle, company, location, salary, skills}) => {
  return (
    <section className="p-4 rounded-[20px] bg-white mb-4">
        <section className="flex justify-between mb-6">
            <Image
            src={companyLogo}
            alt="company logo"
            height={40}
            width={40}
            />
            <section>
              <p className="text-sm font-extrabold">{jobTitle}</p>
              <p className="text-xs text-deep-purple">{`${company} . ${location}`}</p>
            </section>
            <section>
            <FontAwesomeIcon icon={faBookmark} style={{color:"#524B6B"}} className="w-[18px]"/>
            </section>
        </section>
        <p className="text-sm font-bold mb-2">${salary}k<span className="text-xs text-deep-purple font-light">/Mo</span></p>
        <section className="grid grid-cols-3 gap-1">
          {skills.map((skill , index) => (
              <p key={index} className=" text-[10px] p-1 text-center rounded-sm capitalize bg-gray-light text-gray-dark">{skill} </p>
          ))}
        </section>
    </section>
  );
}

export default JobCard