"use client";

import { useState } from "react";
import {
  CalendarIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export default function AdjoiningPropertiesDetails({ adjoiningProperties }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  if (!adjoiningProperties || adjoiningProperties.length === 0) {
    return (
      <p className="text-sm text-gray-500">No adjoining properties found.</p>
    );
  }

  return (
    <div className="flex w-full pt-5">
      {/* Left sidebar - Adjoining Properties List */}
      <aside className="hidden w-80 shrink-0 border-r border-gray-200 sm:block overflow-y-auto">
        {adjoiningProperties.map((property) => (
          <li
            key={property.id}
            onClick={() => setSelectedProperty(property)}
            className={`relative flex justify-between gap-x-6 py-1 px-2 border-l-4 cursor-pointer
              ${
                selectedProperty?.id === property.id
                  ? "bg-indigo-50 border-indigo-600"
                  : "border-transparent hover:border-gray-200 hover:bg-gray-50"
              }`}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-gray-900">
                  {property.addressLine1 || "Unnamed Property"}
                </p>
                <p className="text-xs text-gray-500">
                  <UserIcon className="inline w-3.5 h-3.5 mr-1" />
                  {property.owner_name || "No owner name"}
                </p>
              </div>
            </div>
            <ChevronRightIcon className="size-5 text-gray-400" />
          </li>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        {selectedProperty ? (
          <div className="space-y-4">
            <div className="border-b border-gray-200 pt-5 pb-5">
              <h3 className="text-base font-semibold text-gray-900">
                Property Details
              </h3>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Owner</dt>
                <dd className="mt-1 text-sm text-gray-700">
                  {selectedProperty.owner_name}
                </dd>
              </div>
              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">
                  Ownership Type
                </dt>
                <dd className="mt-1 text-sm text-gray-700">
                  {selectedProperty.ownership_type}
                </dd>
              </div>
              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">
                  Property Address
                </dt>
                <dd className="mt-1 text-sm text-gray-700 whitespace-pre-line">
                  {[
                    selectedProperty.addressLine1,
                    selectedProperty.addressLine2,
                    selectedProperty.town,
                    selectedProperty.county,
                    selectedProperty.postcode,
                  ]
                    .filter(Boolean)
                    .join("\n")}
                </dd>
              </div>
              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">
                  Owner Address
                </dt>
                <dd className="mt-1 text-sm text-gray-700 whitespace-pre-line">
                  {[
                    selectedProperty.owner_address1,
                    selectedProperty.owner_address2,
                    selectedProperty.owner_town,
                    selectedProperty.owner_postcode,
                    selectedProperty.owner_country,
                  ]
                    .filter(Boolean)
                    .join("\n")}
                </dd>
              </div>
            </dl>
          </div>
        ) : (
          <p className="text-sm text-gray-500 px-4">
            Select a property to view details.
          </p>
        )}
      </main>
    </div>
  );
}
