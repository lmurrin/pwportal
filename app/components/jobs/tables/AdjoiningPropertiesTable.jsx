"use client";

import { useState } from "react";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";

export default function AdjoiningPropertiesTable({ adjoiningProperties }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  if (!adjoiningProperties || adjoiningProperties.length === 0) {
    return (
      <p className="text-sm text-gray-500">No adjoining properties found.</p>
    );
  }

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="mt-6">
      <div className=" bg-indigo-50 p-3 rounded-lg sm:flex sm:items-center sm:justify-between px-3">
        <h3 className="text-base font-semibold text-gray-900">
          Adjoining Owners
        </h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Owner
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Tenure
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Property Address
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Owner Address
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 text-sm font-semibold text-gray-900"
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {adjoiningProperties.map((property, index) => (
                  <tr key={property.id}>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-900">
                      {property.owner_name || "-"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {property.ownership_type
                        ? property.ownership_type[0].toUpperCase() +
                          property.ownership_type.slice(1)
                        : "-"}
                    </td>
                    <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-500">
                      {[
                        property.addressLine1,
                        property.addressLine2,
                        property.town,
                        property.county,
                        property.postcode,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </td>
                    <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-500">
                      {[
                        property.owner_address1,
                        property.owner_address2,
                        property.owner_town,
                        property.owner_county,
                        property.owner_postcode,
                        property.owner_country,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={() => toggleMenu(index)}
                      >
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>

                      {openMenuIndex === index && (
                        <div className="absolute right-4 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <button
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                setOpenMenuIndex(null);
                                console.log("View details", property.id);
                              }}
                            >
                              <EyeIcon className="h-4 w-4" />
                              View details
                            </button>
                            <button
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                setOpenMenuIndex(null);
                                console.log("Edit property", property.id);
                              }}
                            >
                              <PencilSquareIcon className="h-4 w-4" />
                              Edit owner
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
