import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Job = () => {
  return (
    <section className="bg-white p-4 rounded-lg mb-2">
      <section className=" flex justify-between mb-4">
        <Image
          src={"/images/facebook.png"}
          height={40}
          width={40}
          alt="logo of a company"
        />
        <FontAwesomeIcon
          icon={faBookmark}
          style={{ color: "#524B6B" }}
          className="w-[24px] h-[24px]"
        />
      </section>
      <section className="mb-4">
        <h2 className="text-sm text-deep-purple font-bold">UI/UX Designer</h2>
        <p className="text-xs text-deep-purple">Google inc . California, USA</p>
      </section>
      <section className="grid  grid-cols-3 gap-2 mb-4">
        <p className="inline-block bg-gray-light rounded-lg px-4 py-1 text-[10px] text-center text-deep-purple">
          Design
        </p>
        <p className="inline-block bg-gray-light rounded-lg px-4 py-1 text-[10px] text-center text-deep-purple">
          Full time
        </p>
        <p className="inline-block bg-gray-light rounded-lg px-2 py-1 text-[10px] text-center text-deep-purple">
          Senior designer
        </p>
      </section>

      <section className="flex justify-between">
        <p className="text-[10px] text-deep-purple">25 minutes ago</p>
        <p className="font-bold text-sm">
          $15k<span className="text-xs text-deep-purple">/Mo</span>
        </p>
      </section>
    </section>
  );
};

export default Job;
