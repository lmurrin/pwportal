"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CreateNoticeForm from "../../forms/CreateNoticeForm";
import Overlay from "../../ui/Overlay";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { HomeIcon, PaperClipIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpLeftIcon,
  CalendarIcon,
  ChevronDownIcon,
  DocumentArrowDownIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { select } from "@heroui/theme";

export default function TabNotices({ jobDetails, adjoiningProperties }) {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const searchParams = useSearchParams();
  const showNewNoticeForm = searchParams.get("new-notice") === "true";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Fetch notices
  useEffect(() => {
    if (!jobDetails?.id) return;

    async function fetchNotices() {
      try {
        const res = await fetch(`/api/notices/by-job/${jobDetails.id}`);
        const data = await res.json();
        setNotices(data);
        if (data.length > 0) setSelectedNotice(data[0]);
      } catch (err) {
        console.error("Failed to fetch notices", err);
      }
    }

    fetchNotices();
  }, [jobDetails?.id]);

  // Check adjoining notices exists before rendering
  if (!adjoiningProperties || adjoiningProperties.length === 0) {
    return (
      <p className="text-sm text-gray-500">No adjoining properties found.</p>
    );
  }

  /*===================================
  Handle notice generation & download
  ===================================*/
  const handleDownload = async () => {
    if (!selectedNotice?.id) return;

    const res = await fetch(`/api/notices/${selectedNotice.id}/generate`);
    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);

    const dateObj = new Date(selectedNotice.startDate);
    const formattedDate = `${String(dateObj.getDate()).padStart(
      2,
      "0"
    )}/${String(dateObj.getMonth() + 1).padStart(2, "0")}/${String(
      dateObj.getFullYear()
    ).slice(-2)}`;

    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedNotice.sections.join(", ")} Notice: ${
      selectedNotice.adjoiningProperty.addressLine1
    } ${formattedDate}.docx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  /*=================================
  Handle notice deletion
  =================================*/
  const handleDelete = async () => {
    if (!selectedNotice?.id) return;

    const confirmDelete = confirm(
      `Are you sure you want to delete the notice served on ${selectedNotice.ownerName}? This cannot be undone.`
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/notices/${selectedNotice.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete notice");

      // Optionally refresh or update local state
      alert("Notice deleted.");
      setSelectedNotice(null);
      setNotices((prev) => prev.filter((n) => n.id !== selectedNotice.id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting the notice.");
    }
  };

  return (
    <div className="mt-6">
      <div className=" bg-indigo-50 p-3 rounded-lg sm:flex sm:items-center sm:justify-between px-3">
        <h3 className="text-base font-semibold text-gray-900">Notices</h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create New
          </button>
        </div>
      </div>
      <div className="flex w-full mt-8 pl-3">
        {/* Left sidebar - Adjoining Properties List */}
        <aside className="hidden w-80 shrink-0 border-r border-gray-200 sm:block overflow-y-auto">
          {Object.entries(
            notices.reduce((acc, notice) => {
              const address =
                notice.adjoiningProperty?.addressLine1 || "Unknown Address";
              if (!acc[address]) acc[address] = [];
              acc[address].push(notice);
              return acc;
            }, {})
          ).map(([address, groupNotices]) => (
            <div key={address} className="border-b border-gray-200">
              <h4 className="bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                {address}
              </h4>
              <ul role="list" className="">
                {groupNotices.map((notice) => (
                  <li
                    key={notice.id}
                    onClick={() => setSelectedNotice(notice)}
                    className={`relative flex justify-between gap-x-6 py-1 px-2 border-l-4 cursor-pointer
                    ${
                      selectedNotice?.id === notice.id
                        ? "bg-indigo-50 border-indigo-600"
                        : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">
                          {notice.sections.join(", ")} Notice
                        </p>
                        <p className="flex items-center text-xs/6 text-gray-500">
                          <CalendarIcon className="w-3.5 h-3.5 mr-1 fill-gray-300" />
                          {new Date(notice.startDate).toLocaleDateString()}
                          <UserIcon className="ml-2 w-3.5 h-3.5 mr-1 fill-gray-300" />
                          {notice.ownerName}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                      <ChevronRightIcon className="size-5 flex-none text-gray-400" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(true);
              if (selectedNotice) setSelectedNotice(null);
            }}
            className="mt-2 rounded-full bg-indigo-600 p-1 text-xs flex items-center gap-1 pr-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon aria-hidden="true" className="size-5" /> Add
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-3">
          {showNewNoticeForm ? (
            <CreateNoticeForm
              jobDetails={jobDetails}
              adjoiningProperties={adjoiningProperties}
              notice={selectedNotice}
            />
          ) : selectedNotice ? (
            <>
              <div className=" border-gray-200 pb-2 sm:flex sm:items-center sm:justify-between">
                <div className="rounded-md sm:mt-0 flex items-center gap-2 bg-indigo-50 border border-indigo-100 w-full">
                  <div className="py-4 px-3 bg-indigo-100">
                    <h3 className="text-xs font-bold text-gray-600">
                      Actions:
                    </h3>
                  </div>
                  <div className="py-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="rounded inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PencilIcon
                        aria-hidden="true"
                        className="-ml-0.5 size-4"
                      />
                      Edit Notice
                    </button>
                    <button
                      type="button"
                      onClick={handleDownload}
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
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="rounded inline-flex items-center gap-x-1.5 bg-red-50 px-3 py-2 text-xs text-red-700 ring-1 ring-inset ring-red-300 hover:bg-red-100"
                    >
                      <TrashIcon
                        aria-hidden="true"
                        className="-ml-0.5 size-4"
                      />{" "}
                      Delete Notice
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pt-5 pb-5">
                  <h3 className="text-base font-semibold text-gray-900">
                    {selectedNotice.sections} Notice Details
                  </h3>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
                  <div className=" px-4 py-6 col-span-full sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      Notice served on
                    </dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                      {selectedNotice.ownerName}
                    </dd>
                  </div>
                  <div className="px-4 sm:col-span-1 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Of</dt>
                    <div className="whitespace-pre-line text-sm/6 text-gray-700">
                      {[
                        selectedNotice.adjoiningProperty?.owner_address1,
                        selectedNotice.adjoiningProperty?.owner_address2,
                        selectedNotice.adjoiningProperty?.owner_town,
                        selectedNotice.adjoiningProperty?.owner_county,
                        selectedNotice.adjoiningProperty?.owner_postcode,
                        selectedNotice.adjoiningProperty?.owner_country,
                      ]
                        .filter((part) => part && part.trim() !== "")
                        .join("\n")}
                    </div>
                  </div>
                  <div className="px-4 sm:col-span-1 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      Adjoining Property
                    </dt>
                    <div className="whitespace-pre-line text-sm/6 text-gray-700">
                      {[
                        selectedNotice.adjoiningProperty?.addressLine1,
                        selectedNotice.adjoiningProperty?.addressLine2,
                        selectedNotice.adjoiningProperty?.town,
                        selectedNotice.adjoiningProperty?.county,
                        selectedNotice.adjoiningProperty?.postcode,
                      ]
                        .filter((part) => part && part.trim() !== "")
                        .join("\n")}
                    </div>
                  </div>
                </dl>

                <dl className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      Notice Served Under
                    </dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                      {selectedNotice.sections.join(", ")}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      Served on
                    </dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                      {new Date(selectedNotice.startDate).toLocaleDateString()}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                    <div>
                      <dt className="text-sm/6 font-medium text-gray-900">
                        Response
                      </dt>
                      <div className="w-60 mt-2 grid grid-cols-1">
                        <select
                          id="noticeResponse"
                          name="noticeResponse"
                          defaultValue=""
                          placeholder="Select response"
                          className="w-60 col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option>Consent</option>
                          <option>Consent subject to SOC</option>
                          <option>Dissent (Two Surveyors)</option>
                          <option>Dissent (Agreed Surveyors)</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">
                      Response due on
                    </dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                      {new Date(
                        selectedNotice.responseDate
                      ).toLocaleDateString()}
                    </dd>
                  </div>
                </dl>

                <div className="border-b border-gray-200 pt-5 pb-5">
                  <h3 className="text-base font-semibold text-gray-900">
                    Appointed Surveyor
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Select a notice to view details.
            </p>
          )}
        </main>
      </div>
      <Overlay open={open} setOpen={setOpen} title="Create Notice">
        <CreateNoticeForm
          jobDetails={jobDetails}
          adjoiningProperties={adjoiningProperties}
          notice={selectedNotice}
        />
      </Overlay>
    </div>
  );
}
