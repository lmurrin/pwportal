"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";

import SingleJobHeader from "../../components/jobs/single/SingleJobHeader";
import SingleJobTabs from "../../components/jobs/single/SingleJobTabs";
import TabJobDetails from "../../components/jobs/single/TabJobDetails";
import TabAdjoiningProperties from "../../components/jobs/single/TabAdjoiningProperties";
import TabNotices from "@/app/components/jobs/single/TabNotices";
import DownloadNoticeButton from "@/app/components/documents/DownloadNoticeButton";
import GenerateDocumentForm from "@/app/components/documents/GenerateDocForm";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

const quickLinks = [
  { name: "Create notice", href: "#" },
  { name: "Create letter", href: "#" },
  { name: "Create Award", href: "#" },
  { name: "Generate email", href: "#" },
  { name: "Edit adjoining properties", href: "#" },
];

export default function JobDetailPage() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { id: jobId } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [jobDetails, setJobDetails] = useState(null);

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

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  if (!jobDetails) return <LoadingSpinner />;

  const adjoiningProperties = jobDetails.properties || [];

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

      {/* Enable this if needed */}
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
        />
      )}
    </>
  );
}
