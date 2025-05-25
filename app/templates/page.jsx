"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PageHeader from "../components/ui/PageHeader";
import { useRouter } from "next/navigation";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import TemplateTabs from "../components/templates/TemplateTabs";
import TemplateUploadModal from "../components/templates/TemplateUploadModal";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    async function fetchTemplates() {
      if (!session?.user?.companyId) return;

      try {
        const res = await fetch("/api/templates");
        const data = await res.json();
        setTemplates(data);
      } catch (err) {
        setError("Failed to load templates");
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, [session]);

  const handleToggleDefault = async (template) => {
    try {
      const res = await fetch("/api/templates/set-default", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateId: template.id,
          type: template.type,
          noticeSubtype: template.noticeSubtype,
          isDefault: !template.isDefault, // 👈 toggle state
        }),
      });

      if (!res.ok) throw new Error("Failed to toggle default");

      const updated = await res.json();
      setTemplates(updated);
    } catch (err) {
      console.error("Toggle error:", err);
      alert("Unable to update default template.");
    }
  };

  const handleDownload = async (key) => {
    const res = await fetch(
      `/api/templates/download?key=${encodeURIComponent(key)}`
    );
    const data = await res.json();
    window.open(data.url, "_blank");
  };

  return (
    <>
      <PageHeader
        title="Templates"
        primaryBtnText="Add New"
        onPrimaryClick={() => setModalOpen(true)}
      />

      {session?.user && (
        <TemplateUploadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          userId={session.user.id}
          companyId={session.user.companyId} // if included in session
        />
      )}

      <div className="mt-8">
        <TemplateTabs />
      </div>

      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">
          Notices Templates
        </dt>
        <dd className="mt-2 text-sm text-gray-900">
          <ul
            role="list"
            className="divide-y divide-gray-100 rounded-md border border-gray-200"
          >
            {templates.map((template) => (
              <li
                key={template.id}
                className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
              >
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="size-5 shrink-0 text-gray-400" />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                      {template.name}
                    </span>
                    {template.isDefault && (
                      <span className="shrink-0 text-gray-400">
                        Default template
                      </span>
                    )}
                  </div>
                </div>
                <Switch
                  checked={template.isDefault}
                  onChange={() => handleToggleDefault(template)}
                  className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
                >
                  <span className="sr-only">Set as default</span>
                  <span className="pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5" />
                </Switch>

                <div className="ml-4 shrink-0">
                  <a
                    onClick={() => handleDownload(template.key)} // 👈 store `key` when uploading
                    className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </>
  );
}
