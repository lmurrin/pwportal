"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useOverlay } from "@/app/context/OverlayContext";

export default function PageHeader({
  title,
  primaryBtnText,
  showBreadcrumb = true,
  showSecondaryBtn = false,
  showPrimaryBtn = true,
  primaryBtnLink = "/jobs/create",
  onPrimaryClick, // optional: callback for custom handling
  overlayTitle, // optional: title for overlay
  overlayContent, // optional: JSX to display in overlay
}) {
  const router = useRouter();
  const { showOverlay } = useOverlay(); // ← Access global overlay

  return (
    <div className="mb-12">
      {/* Breadcrumbs */}
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="-ml-1 mr-1 size-5 shrink-0 text-gray-400"
            />
            Back
          </a>
        </nav>
        {showBreadcrumb && (
          <nav aria-label="Breadcrumb" className="hidden sm:flex">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Jobs
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="size-5 text-gray-400" />
                  <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Engineering
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="size-5 text-gray-400" />
                  <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {title}
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        )}
      </div>

      {/* Title and Button */}
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-4 flex shrink-0 md:ml-4 md:mt-0">
          {showSecondaryBtn && (
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
            >
              Edit
            </button>
          )}
          {showPrimaryBtn && primaryBtnText && (
            <button
              type="button"
              onClick={() => {
                if (onPrimaryClick) {
                  onPrimaryClick();
                } else if (overlayContent) {
                  showOverlay(overlayTitle || "Panel", overlayContent);
                } else {
                  router.push(primaryBtnLink);
                }
              }}
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {primaryBtnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
