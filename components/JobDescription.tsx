import React, { useEffect, useState } from 'react';  
import Image from 'next/image'; // Ensure this import aligns with your setup  
import Link from 'next/link';   // Ensure this import aligns with your setup  

export default function JobDescription({ /*jobId: number*/ }) {  
  const jobData = {  
    "title": "Senior Designer",  
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem ...",  
    "requirements": [  
        "Proficient in Adobe Creative Suite",  
        "Strong portfolio showcasing design skills", 
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
        "Excellent communication skills"  
    ],  
    "location": "Overlook Avenue, Belleville, NJ, USA",  
    "information": {  
        "position": "Senior Designer",  
        "qualification": "Bachelor’s Degree",  
        "experience": "3 years",  
        "jobType": "Full time",  
        "specialization": "Design"  
    },  
    "facilities": [  
        "On-site gym",  
        "Cafeteria",  
        "Flexible working hours"  
    ]  
}     

  return (  
    <section className="mb-3">  
      <h2 className="text-dark-blue font-semibold mb-1">Job Description</h2>  
      <p className="text-xs text-deep-purple mb-3">{jobData.description}</p>  

      <section className="mb-3">  
        <h2 className="text-dark-blue font-semibold mb-1">Requirements</h2>  
        <ul>  
          {jobData.requirements.map((req, index) => (  
            <li key={index} className="text-xs text-deep-purple list-disc mb-1">{req}</li>  
          ))}  
        </ul>  
      </section>  

      <section>  
        <h2 className="text-dark-blue font-semibold mb-1">Location</h2>  
        <p className="text-xs text-deep-purple">{jobData.location}</p>  
      </section>  

      <section className="mb-3">  
        <h2 className="text-dark-blue font-semibold mb-1">Information</h2>  
        <div>  
          <h3 className="text-dark-blue font-semibold">Position</h3>  
          <p className="text-xs text-deep-purple">{jobData.information.position}</p>  
          <h3 className="text-dark-blue font-semibold">Qualification</h3>  
          <p className="text-xs text-deep-purple">{jobData.information.qualification}</p>  
          <h3 className="text-dark-blue font-semibold">Experience</h3>  
          <p className="text-xs text-deep-purple">{jobData.information.experience}</p>  
          <h3 className="text-dark-blue font-semibold">Job Type</h3>  
          <p className="text-xs text-deep-purple">{jobData.information.jobType}</p>  
          <h3 className="text-dark-blue font-semibold">Specialization</h3>  
          <p className="text-xs text-deep-purple">{jobData.information.specialization}</p>  
        </div>  
      </section>  

      <section className="mb-3">  
        <h2 className="text-dark-blue font-semibold mb-1">Facilities</h2>  
        <ul>  
          {jobData.facilities.map((facility, index) => (  
            <li key={index} className="text-xs text-deep-purple">{facility}</li>  
          ))}  
        </ul>  
      </section>       
    </section>  
  );  
}