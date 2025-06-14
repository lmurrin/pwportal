"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "../components/ui/PageHeader";
import { useRouter } from "next/navigation";
import { useOverlay } from "../context/OverlayContext";
import CreateJobForm from "../components/forms/CreateJobForm";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { showOverlay } = useOverlay();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/api/user/jobs", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to load jobs.");
        }

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <p className="p-4">Loading jobs...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <>
      <PageHeader
        title="Jobs"
        primaryBtnText="Create Job"
        onPrimaryClick={() => showOverlay("Create New Job", <CreateJobForm />)}
      />
      <main>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-xs font-medium uppercase text-gray-500 sm:pl-0"
              >
                Ref.
              </th>
              <th
                scope="col"
                className="hidden py-3.5 pl-4 pr-3 text-left text-xs font-medium uppercase text-gray-500 lg:table-cell"
              >
                Address
              </th>
              <th
                scope="col"
                className="hidden py-3.5 pl-4 pr-3 text-left text-xs font-medium uppercase text-gray-500 sm:table-cell"
              >
                BUILDING OWNER
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-xs font-medium uppercase text-gray-500"
              >
                NAMED SURVEYOR
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-gray-500 sm:w-auto sm:max-w-none sm:pl-0">
                  {job.reference}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">{job.title}</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {job.email}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm font-medium text-gray-900 lg:table-cell">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {job.title}
                  </Link>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {job.bo_name}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">LM</td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Manage<span className="sr-only">, {job.name}</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
