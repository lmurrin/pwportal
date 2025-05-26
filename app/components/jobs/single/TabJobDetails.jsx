import { PaperClipIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function TabJobDetails({
  jobDetails,
  adjoiningProperties,
  quickLinks,
}) {
  // Formatted works address
  const worksAddress = [
    jobDetails.work_address1,
    jobDetails.work_address2,
    jobDetails.work_town,
    jobDetails.work_county,
    jobDetails.work_postcode,
    jobDetails.work_country,
  ]
    .filter(Boolean)
    .join("\n");

  // Formatted building owner address
  const boAddress = [
    jobDetails.bo_address1,
    jobDetails.bo_address2,
    jobDetails.bo_town,
    jobDetails.bo_county,
    jobDetails.bo_postcode,
    jobDetails.bo_country,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      {/* Two-column layout starts here */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Main content (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div>
            <div>
              <dl className="grid grid-cols-1 sm:grid-cols-2">
                <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Building Owner
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    {jobDetails.bo_name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Work Description
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Single storey extension and loft conversion.
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Named Surveyor
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Not assigned
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Managing Surveyor
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    Not assigned
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Works Address
                  </dt>
                  <dd className="whitespace-pre-wrap mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    {worksAddress}
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Building Owner Address
                  </dt>
                  <dd className="whitespace-pre-wrap mt-1 text-sm/6 text-gray-700 sm:mt-2">
                    {boAddress}
                  </dd>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Adjoining Properties
                    <div className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-900 bg-gray-100 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      {adjoiningProperties.length}
                    </div>
                  </dt>
                  <div className="flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {adjoiningProperties.map((property) => (
                              <tr key={property.id}>
                                <td>
                                  <a
                                    href={`/jobs/${jobDetails.id}?tab=adjoining-properties`}
                                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-600 sm:pl-0"
                                  >
                                    {[
                                      property.addressLine1,
                                      property.addressLine2,
                                      property.town,
                                      property.county,
                                      property.postcode,
                                    ]
                                      .filter(
                                        (part) => part && part.trim() !== ""
                                      )
                                      .join(", ")}
                                  </a>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {property.owner_name}
                                </td>

                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                                  <a
                                    href={`/jobs/${jobDetails.id}?tab=adjoining-properties`}
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    Manage
                                    <span className="sr-only">
                                      , {property.name}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Attachments
                  </dt>
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
                              resume_back_end_developer.pdf
                            </span>
                            <span className="shrink-0 text-gray-400">
                              2.4mb
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
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className="shrink-0 text-gray-400">
                              4.5mb
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
              </dl>
            </div>
          </div>
        </div>

        {/* Sidebar (1/3 width on large screens) */}
        <aside className="flex flex-col gap-2">
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
            {quickLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-sm text-indigo-600 w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">Add Google Map Embed</h2>
          </div>
        </aside>
      </div>
    </>
  );
}
