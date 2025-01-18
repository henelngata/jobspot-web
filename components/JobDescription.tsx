import Image from "next/image";
import Link from "next/link";

export default function jobDescription() {
  return (
    <section className="mb-3">
      <h2 className="text-dark-blue font-semibold mb-1">About Company</h2>
      <p className="text-xs text-deep-purple">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
        <br />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas .
      </p>

      <section className="mb-3">
        <h2 className="text-dark-blue font-semibold mb-1">Website</h2>
        <Link
          className="text-xs text-bright-orange"
          href={"https://www.google.com"}
        >
          https://www.google.com
        </Link>
      </section>
      <section>
        <h2 className="text-dark-blue font-semibold mb-1">Industry</h2>
        <p className="text-xs text-deep-purple">Internet product</p>
      </section>
      <section className="mb-3">
        <h2 className="text-dark-blue font-semibold mb-1">Employee size</h2>
        <p className="text-xs text-deep-purple">132,121 Employees</p>
      </section>
      <section className="mb-3">
        <h2 className="text-dark-blue font-semibold mb-1">Company Gallery</h2>
        <section>
          <Image
            src={"/images/gallery.png"}
            width={200}
            height={200}
            alt="pic"
          ></Image>
        </section>
      </section>
    </section>
  );
}
