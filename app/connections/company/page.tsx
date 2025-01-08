import CompanyNav from "@/components/CompanyNav";
import { faPlus, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className=" bg-gray-100">
      <section className="mb-4 p-3">
        <Image
          className="inline-block relative ml-[40%] mb-4"
          src={"/images/facebook.png"}
          width={50}
          height={50}
          alt="company logo"
        />
        <section className="flex  justify-between">
          <p>Google</p>
          <p>California</p>
          <p>1 day ago</p>
        </section>
      </section>
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
