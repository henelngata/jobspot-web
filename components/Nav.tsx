"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Connection, Chat, Add,Save } from "@/utils/icons";

const tabs = [
  { name: "Home", href: "/", icon: Home },
  { name: "Connection", href: "/connections/connect/posts", icon: Connection },
  { name: "Add", href: "/calendar", icon: Add },
  { name: " Chat", href: "/settings", icon: Chat },
  { name: "Save", href: "/help", icon: Save },
];

export default function IconTabs() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`inline-flex flex-col items-center justify-center px-5 group ${
              pathname === tab.href
                ? "bg-gray-50 dark:bg-gray-800"
                : "hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <img src={ tab.icon} />
            {/* <span
              className={`text-xs ${
                pathname === tab.href
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500"
              }`}
            >
              {tab.name}
            </span> */}
          </Link>
        ))}
      </div>
    </nav>
  );
}
