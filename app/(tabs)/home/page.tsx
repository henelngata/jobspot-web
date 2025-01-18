import JobCard from "@/components/JobCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const jobs = [
    {
      id: 1,
      companyLogo: "/images/facebook.png", 
      jobTitle: "Product Designer",
      company: "Google inc",
      location: "California, USA",
      salary: 15000,
      skills: ["Senior designer"],
    },
    {
      id: 2,
      companyLogo: "/images/amazon.png", 
      jobTitle: "Frontend Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      salary: "$18K",
      skills: ["React", "JavaScript", "Node.js"],
    },
    // Add more job objects here 
  ];

  return (
    <main className="p-3 bg-[#F4F5F7]">
      <section className="flex justify-between mb-10">
     
      <h2 className="font-semibold text-xl mb-6">
        Hello
        <br />
        Orlando Diggs.
      </h2>
      <Image
        src="/images/Avatar.svg"
        width={40}
        height={40}
        alt="profile pic"
      />
      </section>
     
      <section className="bg-dark-blue text-white rounded-sm">
        <section className="py-10 px-3">
          <p className="mb-3 text-lg">
            50% off
            <br />
            take any courses
          </p>
          <Link
            className="inline-block  bg-bright-orange py-2 px-4 text-xs rounded-sm"
            href="#"
          >
            join now
          </Link>
        </section>

        <Image
          className="absolute  left-[9em] top-[4.5em] inline-block "
          src="/images/model.svg"
          width={216}
          height={193}
          alt="image of a model"
        />
      </section>
      <h2 className="my-6 font-extrabold ">Find Your Job</h2>
      <section className=" flex justify-between">
        <section className="bg-blue-purple rounded-[6px] w-[45%] p-4 inline-block text-center">
          <Image
          className="mb-3 ml-10 mt-4"
          src={"/images/headhunting.svg"}
          alt="headhunting icon"
          height={34}
          width={34}
          />
          <p className="font-bold text-base ">44.5k</p>
          <p className="text-sm mb-4">Remote Job</p>
        </section>
        <section className="w-1/2">
        <section className="bg-purple-light  rounded-[6px] mb-3 text-center py-4">
          <p className="font-bold text-base  ">66.8k</p>
          <p className="text-sm">Remote Job</p>
        </section>
        <section className="bg-yellow-light  rounded-[6px]  text-center py-4">
          <p className="font-bold text-base ">38.9k</p>
          <p className="text-sm">Remote Job</p>
        </section>
        </section>
      </section>
      <section>
      <h2 className="my-6 font-extrabold ">Recent Job List</h2>
      
      
      <section className="mb-[4em]">
      {jobs.map((job) => (
        <Link  key={job.id} href={`/job/${job.company}`} >
          <JobCard 
          companyLogo={job.companyLogo} 
          jobTitle={job.jobTitle} 
          company={job.company} 
          location={job.location} 
          salary={job.salary} 
          skills={job.skills} 
        />
        </Link>
        
      ))}
      </section>
      
      </section>  

    </main>
  );
}
