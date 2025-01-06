"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CompanyNav = () => {
  const pathname = usePathname();

  return (
    <section className="flex justify-between">
      <Link
        href="/company"
        className={`inline-block font-semibold text-[14px] m-2 py-2 text-center w-1/2 rounded-md ${
          pathname === "/company" ? "bg-orange-deep text-white" : "bg-white"
        }`}
      >
        About us
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
    </section>
  );
};

export default CompanyNav;
