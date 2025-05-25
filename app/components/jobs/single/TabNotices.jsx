"use client";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { HomeIcon, PaperClipIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpLeftIcon,
  CalendarIcon,
  DocumentArrowDownIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";

export default function TabNotices({
  jobDetails,
  adjoiningProperties,
  notices,
}) {
  const [startDate, setStartDate] = useState("");
  const [currentnotices, setCurrentnotices] = useState();

  // Check adjoining notices exists before rendering
  if (!adjoiningProperties || adjoiningProperties.length === 0) {
    return (
      <p className="text-sm text-gray-500">No adjoining properties found.</p>
    );
  }

  return (
    <>
      <div className="flex w-full pt-5">
        {/* Left sidebar - Adjoining Properties List */}
        <aside className="hidden w-80 shrink-0 border-r border-gray-200 sm:block">
          <ul role="list" className="divide-y divide-gray-100">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="relative flex justify-between gap-x-6 py-5 px-2 hover:bg-gray-50"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      <a href={notice.href}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {notice.address1}: Section {notice.section}
                      </a>
                    </p>
                    <p className="flex items-center text-xs/6 text-gray-500">
                      <CalendarIcon className="w-3.5 h-3.5 mr-1 fill-gray-300" />
                      {notice.date_served}
                      <UserIcon className="ml-2 w-3.5 h-3.5 mr-1 fill-gray-300" />
                      Michael Sharp
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">{notices.role}</p>
                    {notices.lastSeen ? (
                      <p className="mt-1 text-xs/5 text-gray-500">
                        Last seen{" "}
                        <time dateTime={notices.lastSeenDateTime}>
                          {notices.lastSeen}
                        </time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="size-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs/5 text-gray-500">Online</p>
                      </div>
                    )}
                  </div> */}
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-2 rounded-full bg-indigo-600 p-1 text-xs flex items-center gap-1 pr-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon aria-hidden="true" className="size-5" /> Add
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className=" border-gray-200 pb-2 sm:flex sm:items-center sm:justify-between">
              {/* <div className="flex flex-col">
          <h3 className="text-base font-semibold text-gray-900">
            Adjoining Properties
          </h3>
          <p className="text-sm/6 text-gray-400">
            View and manage adjoining properties and owners.
          </p>
        </div> */}
              <div className="rounded-md sm:mt-0 flex items-center gap-2 bg-indigo-50 border border-indigo-100 w-full">
                <div className="py-4 px-3 bg-indigo-100">
                  <h3 className="text-xs font-bold text-gray-600">Actions:</h3>
                </div>
                <div className="py-2 flex gap-2">
                  <button
                    type="button"
                    className="rounded inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <PencilIcon aria-hidden="true" className="-ml-0.5 size-4" />
                    Edit Notice
                  </button>
                  <button
                    type="button"
                    className="rounded inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <DocumentArrowDownIcon
                      aria-hidden="true"
                      className="-ml-0.5 size-4"
                    />
                    Download Word
                  </button>
                  <button
                    type="button"
                    className="rounded inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <ArrowUpLeftIcon
                      aria-hidden="true"
                      className="-ml-0.5 size-4"
                    />
                    Record Response
                  </button>
                </div>
              </div>
            </div>
            {/* Main area */}

            <div>
              <div className="border-b border-gray-200 pt-5 pb-5">
                <h3 className="text-base font-semibold text-gray-900">
                  Recipient
                </h3>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                <div className=" px-4 py-6 col-span-full sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">To</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    {adjoiningProperties[0].owner_name}
                  </dd>
                </div>
                <div className="px-4 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Of</dt>
                  <div className="whitespace-pre-line text-sm/6 text-gray-700">
                    {[
                      adjoiningProperties[0].owner_address1,
                      adjoiningProperties[0].owner_address2,
                      adjoiningProperties[0].owner_town,
                      adjoiningProperties[0].owner_county,
                      adjoiningProperties[0].owner_postcode,
                      adjoiningProperties[0].owner_country,
                    ]
                      .filter((part) => part && part.trim() !== "")
                      .join("\n")}
                  </div>
                </div>
                <div className="px-4 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Adjoining property
                  </dt>
                  <div className="whitespace-pre-line text-sm/6 text-gray-700">
                    {[
                      adjoiningProperties[0].addressLine1,
                      adjoiningProperties[0].addressLine2,
                      adjoiningProperties[0].town,
                      adjoiningProperties[0].county,
                      adjoiningProperties[0].postcode,
                    ]
                      .filter((part) => part && part.trim() !== "")
                      .join("\n")}
                  </div>
                </div>
              </dl>

              <div className="border-b border-gray-200 pt-6 pb-5">
                <h3 className="text-base font-semibold text-gray-900">Works</h3>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2">
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Notice Sections
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Section 3 & 6
                  </dd>
                </div>
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Date of notice
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    22nd May 2025
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-cols-1 sm:grid-cols-2">
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    10 Letter sent on
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">-</dd>
                </div>
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Response received on
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    <input
                      type="date"
                      id="noticeResponseDate"
                      name="noticeResponseDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min="2018-01-01"
                      placeholder="Select a date"
                    />
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-cols-1 sm:grid-cols-2">
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Notice Response
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Dissented
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Appointed Surveyor
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Chris Belton MRICS - Archway Party Wall Surveyors
                  </dd>
                </div>
                <div className="px-4 py-6 sm:col-span-1 sm:px-0 mb-6">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Third Surveyor
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Simon Price MRICS - The Price Partnership
                  </dd>
                </div>
              </dl>
              <div className="px-4 pb-10 sm:col-span-2 sm:px-0">
                <dd className="text-sm text-gray-900">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Section 3 Notice
                          </span>
                          <span className="shrink-0 text-gray-400">
                            Served: 22/05/2025 | Expires 01/06/2025
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Section 6 Notice
                          </span>
                          <span className="shrink-0 text-gray-400">
                            Served: 22/05/2025 | Expires 01/06/2025
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="border-b border-gray-200 pt-6 pb-5">
                <h3 className="text-base font-semibold text-gray-900">SOC</h3>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    SOC Date
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    <input
                      type="date"
                      id="socDate"
                      name="socDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min="2018-01-01"
                      placeholder="Select a date"
                    />
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    SOC Status
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Not yet complete
                  </dd>
                </div>
              </dl>

              <div className="border-b border-gray-200 pt-6 pb-5">
                <h3 className="text-base font-semibold text-gray-900">Award</h3>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2">
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Award Status
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Draft sent
                  </dd>
                </div>

                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Award Service Date
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    <input
                      type="date"
                      id="awardServiceDate"
                      name="awardServiceDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min="2018-01-01"
                      placeholder="Select a date"
                    />
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Awards</dt>
                <dd className="mt-2 text-sm text-gray-900">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Section 3 Notice
                          </span>
                          <span className="shrink-0 text-gray-400">
                            Served: 22/05/2025 | Expires 01/06/2025
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Section 6 Notice
                          </span>
                          <span className="shrink-0 text-gray-400">
                            Served: 22/05/2025 | Expires 01/06/2025
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
