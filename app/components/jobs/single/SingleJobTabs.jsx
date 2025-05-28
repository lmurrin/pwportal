"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const tabs = [
  { name: "Job Details", value: "" },
  { name: "Adjoining Owners", value: "adjoining-owners" },
  { name: "Notice Stage", value: "notices" },
  { name: "Notices New", value: "notices-new" },
  { name: "SOCs", value: "soc" },
  { name: "Awards", value: "awards" },
  { name: "Letters", value: "letters" },
  { name: "Emails", value: "emails" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleJobTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "";

  const handleTabClick = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("tab", value);
    } else {
      newParams.delete("tab");
    }
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div>
      {/* Mobile dropdown */}
      <div className="grid grid-cols-1 sm:hidden">
        <select
          value={currentTab}
          onChange={(e) => handleTabClick(e.target.value)}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.value}>
              {tab.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.value;
              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.value)}
                  className={classNames(
                    isActive
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                  )}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
