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
    <div className="border-2 border-red-800">
      <div className="border-2 border-green-400">
        <nav className="flex space-x-4 mb-6 p-3 border-2 border-red-800 ">
          {tabOptions.map((tab) => (
            <button
              key={tab.name}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
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
        <div className="mt-4">
          {tabOptions.map(
            (tab) => activeTab === tab.name && <tab.component key={tab.name} />
          )}
        </div>
      </div>
    </div>
  );
}
