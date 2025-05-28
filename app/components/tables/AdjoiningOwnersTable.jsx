import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRef, useState, useEffect } from "react";

const AdjoiningOwnersTable = ({ adjoiningProperties }) => {
  const sectionRows = [
    {
      section: "Owner Details",
      rows: [
        { label: "Owner", field: "owner_name" },
        { label: "Tenure", field: "ownership_type" },
        { label: "Property Address", field: "addressLine1" },
      ],
    },
    {
      section: "Notices",
      rows: [
        { label: "Notices", field: "noticeSummary", showCreateNotice: true },
        { label: "Response Due", field: "noticeResponseDue" },
        { label: "10 Day Letter", field: "tenDayLetter" },
        { label: "s10(4)", field: "s104" },
        { label: "Response", field: "response" },
        { label: "Response date", field: "responseDate" },
        {
          label: "Appointed Surveyor",
          field: "appointedSurveyor",
          isIcon: true,
        },
      ],
    },
    {
      section: "SOC",
      rows: [
        { label: "SOC Date", field: "socDate" },
        { label: "SOC Status", field: "socStatus" },
        { label: "SOC Surveyor", field: "socSurveyor" },
      ],
    },
    {
      section: "Award",
      rows: [
        { label: "Award Status", field: "awardStatus" },
        { label: "Award Signed", field: "awardSigned" },
        { label: "Award Served", field: "awardServed" },
      ],
    },
  ];

  const renderCell = (property, field, isIcon, showCreateNotice = false) => {
    const notices = property.notices ?? [];

    const createNoticeLink = (
      <a
        href={`/notices/create?adjoiningPropertyId=${property.id}`}
        className="text-sm text-blue-600 hover:underline mt-1 inline-block"
      >
        <PlusIcon className="h-4 w-4 inline mr-1" />
        <span>Create notice</span>
      </a>
    );

    if (field === "noticeSummary") {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          {notices.length ? (
            <div className="flex flex-col gap-1">
              {notices.map((n) => {
                const date = n.startDate
                  ? new Date(n.startDate).toLocaleDateString()
                  : "-";
                return (
                  <div key={n.id}>
                    {n.sections?.map((s) => `${s} – ${date}`).join(", ") || "-"}
                  </div>
                );
              })}
              {showCreateNotice && createNoticeLink}
            </div>
          ) : (
            <div>
              -<br />
              {showCreateNotice && createNoticeLink}
            </div>
          )}
        </td>
      );
    }

    if (field === "noticeResponseDue") {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          {notices.length ? (
            <div className="flex flex-col gap-1">
              {notices.map((n) => {
                const date = n.responseDate
                  ? new Date(n.responseDate).toLocaleDateString()
                  : "-";
                return (
                  <div key={n.id}>
                    {n.sections?.map((s) => `${s} – ${date}`).join(", ") || "-"}
                  </div>
                );
              })}
              {showCreateNotice && createNoticeLink}
            </div>
          ) : (
            <div>
              -<br />
              {showCreateNotice && createNoticeLink}
            </div>
          )}
        </td>
      );
    }

    if (field === "tenDayLetter") {
      return (
        <td className="align-top text-sm/6 font-medium text-gray-900 py-4 px-3">
          <div className="flex flex-col gap-1">
            <a
              href={`/ten-day-letter/create?propertyId=${property.id}`}
              className="text-blue-600 hover:underline text-sm mt-1"
            >
              <PlusIcon className="h-4 w-4 inline mr-1" />
              <span>Create 10 Day Letter</span>
            </a>
          </div>
        </td>
      );
    }

    if (field === "s104") {
      return (
        <td className="align-top text-sm/6 font-medium text-gray-900 py-4 px-3">
          <div className="flex flex-col gap-1">
            <a
              href={`/appointments/s104/create?propertyId=${property.id}`}
              className="text-blue-600 hover:underline text-sm mt-1"
            >
              <PlusIcon className="h-4 w-4 inline mr-1" />
              <span>Create s10(4) appointment</span>
            </a>
          </div>
        </td>
      );
    }

    if (field === "response") {
      return (
        <td className="align-top text-sm/6 font-medium text-gray-900 py-4 px-3">
          <div className="flex flex-col gap-1">
            {/* Response select dropdown */}
            <select
              className="mt-1 text-sm py-1 outline-none border-none ring-0 focus:ring-0 focus:outline-none bg-transparent"
              defaultValue=""
              onChange={(e) => {
                const value = e.target.value;
                console.log(
                  `Selected response for property ${property.id}: ${value}`
                );
                // Optional: trigger API update here
              }}
            >
              <option value="" disabled>
                Select response...
              </option>
              <option value="Consent">Consent</option>
              <option value="Consent subject to SOC">
                Consent subject to SOC
              </option>
              <option value="Dissent (Two Surveyors)">
                Dissent (Two Surveyors)
              </option>
              <option value="Dissent (Agreed Surveyor)">
                Dissent (Agreed Surveyor)
              </option>
            </select>
          </div>
        </td>
      );
    }

    if (field === "responseDate") {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          {notices.length ? (
            <div className="flex flex-col gap-1">
              {notices.map((n) => (
                <div key={n.id} className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">
                    {n.sections?.join(", ")} -
                  </span>
                  <input
                    type="date"
                    className="text-sm border-none outline-none ring-0 focus:ring-0 bg-transparent w-fit"
                    defaultValue={
                      n.responseDate
                        ? new Date(n.responseDate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => {
                      const value = e.target.value;
                      console.log(
                        `New response date for notice ${n.id}:`,
                        value
                      );
                      // Optional: Save to API
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            "-"
          )}
        </td>
      );
    }

    if (field === "socDate") {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          <input
            type="date"
            className="text-sm border-none outline-none ring-0 focus:ring-0 bg-transparent w-fit"
            defaultValue={
              property.socDate
                ? new Date(property.socDate).toISOString().split("T")[0]
                : ""
            }
            onChange={(e) => {
              const value = e.target.value;
              console.log(`New SOC date for property ${property.id}:`, value);
              // Optional: Save to API
            }}
          />
        </td>
      );
    }

    if (field === "socStatus") {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          <select
            defaultValue={property.socStatus || "N/A"}
            className="text-sm bg-transparent border-none outline-none ring-0 focus:ring-0"
            onChange={(e) => {
              const value = e.target.value;
              console.log(`New SOC status for property ${property.id}:`, value);
              // Optional: Save to API
            }}
          >
            <option value="N/A">N/A</option>
            <option value="To be booked">To be booked</option>
            <option value="Booked">Booked</option>
            <option value="Complete">Complete</option>
          </select>
        </td>
      );
    }

    const renderNoticeField = (notice) => {
      switch (field) {
        case "noticeSections":
          return notice.sections?.join(", ");
        case "noticeServiceDate":
          return notice.startDate
            ? new Date(notice.startDate).toLocaleDateString()
            : "-";
        case "responseDate":
          return notice.responseDate
            ? new Date(notice.responseDate).toLocaleDateString()
            : "-";
        case "responseReceived":
          return notice.responseReceived
            ? new Date(notice.responseReceived).toLocaleDateString()
            : "-";
        case "noticeActions":
          return (
            <a
              href={`/notices/${notice.id}`}
              className="text-blue-600 hover:underline"
            >
              Manage
            </a>
          );
        default:
          return "-";
      }
    };

    if (field.startsWith("notice")) {
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          {notices.length ? (
            <div className="flex flex-col gap-1">
              {notices.map((n) => (
                <div key={n.id}>{renderNoticeField(n)}</div>
              ))}
            </div>
          ) : (
            "-"
          )}
        </td>
      );
    }

    // Handle icon rows
    if (isIcon) {
      return (
        <td className="px-4 py-3 whitespace-nowrap min-w-70">
          {property[field] === true ? (
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </td>
      );
    }

    // Capitalize ownership_type
    if (field === "ownership_type") {
      const val = property.ownership_type;
      const formatted =
        val && typeof val === "string"
          ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
          : "-";
      return (
        <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
          {formatted}
        </td>
      );
    }

    return (
      <td className="text-sm/6 font-medium text-gray-900 py-4 px-3 align-top">
        {property[field] || ""}
      </td>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto relative">
      {/* Sticky table head on top of screen */}
      <div className="sticky top-0 z-30 bg-white dark:bg-gray-900 overflow-hidden">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 dark:text-white">
            <tr>
              <th className="w-40 px-4 py-3 text-lg bg-white dark:bg-gray-900 sticky left-0 z-30">
                {/* Label column */}
              </th>
              {adjoiningProperties.map((property, idx) => (
                <th
                  key={idx}
                  className="pt-12  text-sm font-medium px-4 py-3 align-top"
                >
                  {property.addressLine1}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      {/* Scrollable body below */}
      <div className="overflow-x-auto">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="hidden">
            {/* Visually hidden duplicate head (needed for accessibility) */}
          </thead>
          <tbody>
            {sectionRows.map((section, idx) => (
              <React.Fragment key={idx}>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 border-gray-300">
                  <th
                    className="sticky left-0 z-10 bg-gray-50 dark:bg-gray-800 px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white w-40"
                    scope="row"
                  >
                    {section.section}
                  </th>
                  {adjoiningProperties.map((_, i) => (
                    <td key={i} className="bg-gray-50 dark:bg-gray-800"></td>
                  ))}
                </tr>
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-gray-300">
                    <th
                      className="sticky left-0 z-10 bg-white dark:bg-gray-900 px-3 py-4 font-normal whitespace-nowrap w-40 align-top"
                      scope="row"
                    >
                      {row.label}
                    </th>
                    {adjoiningProperties.map((property, pIdx) =>
                      renderCell(
                        property,
                        row.field,
                        row.isIcon,
                        row.showCreateNotice
                      )
                    )}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdjoiningOwnersTable;
