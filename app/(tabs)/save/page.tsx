import { NoJob } from "@/components/SaveJobs";
import React from "react";

const page = () => {
  let jobs: [] = [];

  return <main>{jobs.length > 0 ? <div>list jobs</div> : <NoJob/>}</main>;
};

export default page;
