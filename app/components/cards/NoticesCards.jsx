import { PencilIcon, PlusIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const sectionRows = [
  {
    section: "Notices",
    rows: [
      { label: "Notices", field: "noticeSummary", showCreateNotice: true },
      { label: "Response Due", field: "noticeResponseDue" },
      { label: "10 Day Letter", field: "tenDayLetter" },
      { label: "s10(4)", field: "s104" },
      { label: "Response", field: "response" },
      { label: "Response date", field: "responseDate" },
      { label: "Appointed Surveyor", field: "surveyor" },
    ],
  },
];

const renderField = (property, field, showCreateNotice) => {
  const notices = property.notices || [];

  if (field === "noticeSummary") {
    return (
      <div className="space-y-1">
        {notices.length ? (
          notices.map((n) => {
            const date = n.startDate
              ? new Date(n.startDate).toLocaleDateString()
              : "-";
            return (
              <div key={n.id}>
                {n.sections?.map((s) => `${s} – ${date}`).join(", ") || "-"}
              </div>
            );
          })
        ) : (
          <div>-</div>
        )}
        {showCreateNotice && (
          <div className="flex justify-end pt-1">
            <button
              type="button"
              className="rounded-full bg-white flex gap-1 px-2.5 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PlusIcon className="h-4 w-4" /> Create
            </button>
          </div>
        )}
      </div>
    );
  }

  if (field === "noticeResponseDue") {
    return notices.map((n) => {
      const date = n.responseDate
        ? new Date(n.responseDate).toLocaleDateString()
        : "-";
      return (
        <div key={n.id}>
          {n.sections?.map((s) => `${s} – ${date}`).join(", ") || "-"}
        </div>
      );
    });
  }

  if (field === "tenDayLetter") {
    return (
      <button
        type="button"
        className="rounded-full bg-white flex gap-1 px-2.5 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <PlusIcon className="h-4 w-4" /> Create
      </button>
    );
  }

  if (field === "s104") {
    return (
      <button
        type="button"
        className="rounded-full bg-white flex gap-1 px-2.5 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <PlusIcon className="h-4 w-4" /> Create
      </button>
    );
  }

  if (field === "response") {
    return (
      <select
        className="text-sm border-none outline-none bg-transparent mt-1"
        defaultValue=""
      >
        <option value="" disabled>
          Select response...
        </option>
        <option value="Consent">Consent</option>
        <option value="Consent subject to SOC">Consent subject to SOC</option>
        <option value="Dissent (Two Surveyors)">Dissent (Two Surveyors)</option>
        <option value="Dissent (Agreed Surveyor)">
          Dissent (Agreed Surveyor)
        </option>
      </select>
    );
  }

  if (field === "responseDate") {
    return (
      <input
        type="date"
        defaultValue={
          property[field]
            ? new Date(property[field]).toISOString().split("T")[0]
            : ""
        }
        className="text-sm border-none outline-none bg-transparent mt-1"
      />
    );
  }

  return property[field] || "-";
};

const NoticesCards = ({ adjoiningProperties }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
      {adjoiningProperties.map((property) => (
        <div
          key={property.id}
          className="border border-gray-200 rounded-lg shadow-sm bg-white divide-gray-200 divide-y"
        >
          <div className="flex justify-between p-5 bg-gray-50 rounded-t-md">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {property.addressLine1 || "Unnamed Property"}
              </h2>
              <p className="text-sm text-gray-500">
                <UserIcon className="inline h-4 w-4 mr-1" />
                {property.owner_name || "No owner name"}
              </p>
            </div>
            <div className="pt-2">
              <PencilIcon className="h-3 w-3 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>

          {sectionRows.map((section) => (
            <div key={section.section} className="space-y-3 p-5">
              <h3 className="text-xs font-semibold uppercase text-gray-900">
                {section.section}
              </h3>
              <dl className="space-y-4 divide-gray-100 divide-y">
                {section.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-4 pb-3"
                  >
                    <dt className="text-sm text-gray-600">{row.label}</dt>
                    <dd className="text-sm font-medium text-gray-900 text-right">
                      {renderField(property, row.field, row.showCreateNotice)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NoticesCards;
