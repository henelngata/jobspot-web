import Post from "@/components/Post";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="p-4 bg-[#f9f9f9]">
      <Post />
      <Post />
      <Post />
      <section>
        <Link href="/"></Link>
      </section>
    </main>
  );
}

export default page;
