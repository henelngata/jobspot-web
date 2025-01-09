import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h2 className="font-bold relative left-[80%]">Jobspot</h2>
      <section className="mt-6">
        <Image
          src={"/images/hero-jobspot.svg"}
          height={301}
          width={311}
          alt="Hero image"
        ></Image>
      </section>
      <p className="text-4xl font-bold mt-4">
        Find Your <span className="block text-bright-orange underline">Dream Job</span> Here!
      </p>
      <p className="text-sm text-deep-purple">
        Explore all the most exciting job roles based on your interest and study
        major.
      </p>
      <Link
        href="/login"
        className=" block bg-dark-blue w-[60px] h-[60px] rounded-full place-items-center place-content-center relative left-[80%]"
      >
        <FontAwesomeIcon icon={faArrowRightLong} style={{color: "white"}} className="w-[23.16px] h-[25.94px] " />
      </Link>
    </main>
  );
}
