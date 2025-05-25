/*=================================================================
  Single Job Page
=================================================================*/

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // ← new
import SingleJobHeader from "../../components/jobs/single/SingleJobHeader";
import { useParams, useSearchParams } from "next/navigation";
import SingleJobTabs from "../../components/jobs/single/SingleJobTabs";
import TabJobDetails from "../../components/jobs/single/TabJobDetails";
import TabAdjoiningProperties from "../../components/jobs/single/TabAdjoiningProperties";
import TabNotices from "@/app/components/jobs/single/TabNotices";
import DownloadNoticeButton from "@/app/components/documents/DownloadNoticeButton";
import GenerateDocumentForm from "@/app/components/documents/GenerateDocForm";

// Sidebar nav quicklinks
const quickLinks = [
  { name: "Create notice", href: "#" },
  { name: "Create letter", href: "#" },
  { name: "Create Award", href: "#" },
  { name: "Generate email", href: "#" },
  { name: "Edit adjoining properties", href: "#" },
];

const notices = [
  {
    id: "1",
    address1: "12 Brick Street",
    section: "6",
    date_served: "02/02/2025",
    date_due: "16/02/2025",
  },
  {
    id: "2",
    address1: "8 Brick Street",
    section: "3",
    date_served: "02/02/2025",
    date_due: "16/02/2025",
  },
];

export default function JobDetailPage() {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const { id: jobId } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [jobDetails, setJobDetails] = useState(null);
  const [adjoiningProperties, setAdjoiningProperties] = useState([]);

  // Fetch job details
  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const res = await fetch(`/api/user/jobs/${jobId}`);
        if (!res.ok) throw new Error("Failed to fetch job details");
        const data = await res.json();
        setJobDetails(data);
      } catch (err) {
        console.error("Error fetching job details:", err);
      }
    }

    async function fetchAdjoiningProperties() {
      try {
        const res = await fetch(`/api/user/jobs/${jobId}/adjoining`);
        if (!res.ok) throw new Error("Failed to fetch adjoining properties");
        const data = await res.json();

        setAdjoiningProperties(data);
      } catch (err) {
        console.error("Error fetching adjoining properties:", err);
      }
    }

    if (jobId) {
      fetchJobDetails();
      fetchAdjoiningProperties();
    }
  }, [jobId]);

  if (!jobDetails) return <p>Loading...</p>;

  return (
    <>
      <SingleJobHeader job={jobDetails} />

      <div className="mt-8">
        <SingleJobTabs />
      </div>

      {(!tab || tab === "") && (
        <TabJobDetails
          jobDetails={jobDetails}
          adjoiningProperties={adjoiningProperties}
          quickLinks={quickLinks}
        />
      )}

      {/* {jobDetails?.userId && (
        <>
          <DownloadNoticeButton userId={jobDetails.userId} jobId={jobId} />
          <GenerateDocumentForm userId={jobDetails.userId} />
        </>
      )} */}

      {tab === "adjoining-properties" && (
        <TabAdjoiningProperties
          jobDetails={jobDetails}
          adjoiningProperties={adjoiningProperties}
        />
      )}

      {tab === "notices" && (
        <TabNotices
          jobDetails={jobDetails}
          adjoiningProperties={adjoiningProperties}
          notices={notices}
        />
      )}
    </>
  );
}
