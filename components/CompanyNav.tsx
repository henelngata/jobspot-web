"use client";

import { useState } from "react";
import AboutUs from "../components/AboutUs";
import Posts from "../components/Posts";
import Jobs from "../components/Jobs";

const tabOptions = [
  { name: "About Us", component: AboutUs },
  { name: "Posts", component: Posts },
  { name: "Jobs", component: Jobs },
];

export default function DynamicComponentSwitcher() {
  const [activeTab, setActiveTab] = useState(tabOptions[0].name);

  return (
    <>
      <section className="bg-white" >
        <nav className="flex justify-between p-1 mb-6 mx-4 ">
          {tabOptions.map((tab) => (
            <button
              key={tab.name}
              className={`px-3 py-2 w-[33%]  rounded-md text-sm font-bold transition ${
                activeTab === tab.name
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <section className="m-4">
          {tabOptions.map(
            (tab) => activeTab === tab.name && <tab.component key={tab.name} />
          )}
        </section>
      </section>
    </>
  );
}
