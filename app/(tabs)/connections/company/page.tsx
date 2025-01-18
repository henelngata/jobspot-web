import CompanyHeader from "@/components/CompanyHeader";
import CompanyNav from "@/components/CompanyNav";
import { faPlus, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className=" bg-gray-100">
     <CompanyHeader/>
     <section className="flex justify-between  m-4">
    <Link
      className=" flex w-[45%] py-3 rounded-lg  bg-lavender-light items-center place-content-center"
      href="#"
    >
      <FontAwesomeIcon
        icon={faPlus}
        style={{ color: "#fc4646" }}
        className="w-[10px] h-[10px] mr-1"
      />
      <p className="inline-block text-red-deep text-xs">Follow</p>
    </Link>
    <Link
      className=" flex w-[45%] py-3 rounded-lg  bg-lavender-light items-center place-content-center"
      href="#"
    >
      <FontAwesomeIcon
        icon={faUpRightFromSquare}
        style={{ color: "#fc4646" }}
        className="w-[10px] h-[10px] mr-1"
      />
      <p className="inline-block text-red-deep text-xs">Vist website</p>
    </Link>
  </section>
      <CompanyNav />
    </main>
  );
};



export default page;
