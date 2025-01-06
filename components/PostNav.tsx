"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PostNav = () => {
  const pathname = usePathname();

  return (
    <main className="flex justify-between">
      <Link
        href="/connections/connect/posts"
        className={`inline-block font-semibold text-[14px] m-2 py-2 text-center w-1/2 rounded-md ${
          pathname === "/connections/connect/posts"
            ? "bg-brand-purple text-black"
            : "bg-dark-blue text-white"
        }`}
      >
        Posting
      </Link>
      <Link
        href="/connections/connect/companies"
        className={`inline-block font-semibold text-[14px] m-2 py-2 text-center w-1/2 rounded-md ${
          pathname === "/connections/connect/companies"
            ? "bg-brand-purple text-black"
            : "bg-dark-blue text-white"
        }`}
      >
        My connection
      </Link>
    </main>
  );
};

export default PostNav;
