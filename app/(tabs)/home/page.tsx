import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-3">
      <Image
        className="relative left-[85%]"
        src="/images/Avatar.svg"
        width={40}
        height={40}
        alt="profile pic"
      />
      <h2 className="font-semibold text-xl mb-6">
        Hello
        <br />
        Orlando Diggs.
      </h2>
      <section className="bg-darkBlue text-white rounded-sm p-4 flex border-2 border-red-400 h-fit">
        <section className="border-2 border-red-400">
          <p className="mb-3">
            50% off
            <br />
            take any courses
          </p>
          <Link
            className="inline-block  bg-brightOrange py-1 px-4 text-xs rounded-sm"
            href="#"
          >
            join now
          </Link>
        </section>

        <Image
          className="relative top-[-4em] inline-block border-2 border-red"
          src="/images/model.svg"
          width={216}
          height={1}
          alt="image of a model"
        />
      </section>
    </main>
  );
}
