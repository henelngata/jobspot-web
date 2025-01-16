import Image from "next/image";
import React from "react";

import {
  faClock,
  faHeart,
  faMessage,

} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";


const Post = () => {
  return (
    <section className="bg-white rounded-lg mb-6">
      <section className="flex items-center p-4">
        <Image
          className="mr-4"
          src="/images/Avatar.svg"
          alt="Profile pic"
          width={50}
          height={50}
        />
        <section>
          <p className="font-bold text-sm mb-1 text-dark-blue ">
            Arnold Leonardo
          </p>
          <section className="flex ">
            <FontAwesomeIcon
              className="mr-2"
              icon={faClock}
              style={{ color: "#AAA6B9", width: "15", stroke: "100" }}
            />
            <p className="text-[10px] text-lavender-gray">21 minutes ago</p>
          </section>
        </section>
      </section>
      <p className="font-bold text-sm  text-dark-blue p-4">
        What are the characteristics of a fake job call form?
      </p>
      <p className="text-sm mb-3 text-deep-purple px-4">
        Because I always find fake job calls so I\&aposm confused which job to
        take can you share your knowledge here? thank you
      </p>
      <section className="bg-lavender-blush flex justify-between p-4 rounded-b-md">
        <section className=" flex  justify-between w-[40%] ">
          <section>
            <FontAwesomeIcon
              className="inline-block"
              icon={faHeart}
              style={{ color: "slate-purple", width: "20" }}
            />
            <span className="text-xs ml-2">12</span>
          </section>
          <section>
            <FontAwesomeIcon
              className="inline-block"
              icon={faMessage}
              style={{ color: "slate-purple", width: "18" }}
            />
            <span className="text-xs ml-2">12</span>
          </section>
        </section>
        <section>
          <FontAwesomeIcon
            className="inline-block"
            icon={faShare}
            style={{ color: "slate-purple", width: "20" }}
          />
          <span className="text-xs ml-2">12</span>
        </section>
      </section>
    </section>
  );
};

export default Post;
