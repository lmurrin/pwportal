"use client";

import { useEffect, useState } from "react";

export default function GenerateDocumentForm({ userId }) {
  const [jobs, setJobs] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [adjoiningProperties, setAdjoiningProperties] = useState([]);

  const [selectedJobId, setSelectedJobId] = useState("");
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [loading, setLoading] = useState(false);

  // Load jobs and templates on mount
  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/user/jobs");
      const data = await res.json();
      setJobs(data);
    }

    async function fetchTemplates() {
      const res = await fetch("/api/user/templates");
      const data = await res.json();
      setTemplates(data);
    }

    fetchJobs();
    fetchTemplates();
  }, []);

  // Load adjoining properties when job changes
  useEffect(() => {
    async function fetchProperties() {
      if (!selectedJobId) return;
      const res = await fetch(`/api/user/jobs/${selectedJobId}/adjoining`);
      const data = await res.json();
      setAdjoiningProperties(data);
    }

    fetchProperties();
  }, [selectedJobId]);

  const handleDownload = async () => {
    if (!selectedJobId || !selectedPropertyId || !selectedTemplateId) return;

    setLoading(true);
    try {
      const res = await fetch("/api/generate-doc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          templateId: selectedTemplateId,
          jobId: selectedJobId,
          propertyId: selectedPropertyId,
          extraData: {
            // You can pass dynamic logic here based on job or form UI
            astride_boundary: true,
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to generate document");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.docx";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download error:", err);
      alert("Document generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Generate Document</h2>

      <div>
        <label className="block font-medium mb-1">Select Job</label>
        <select
          value={selectedJobId}
          onChange={(e) => setSelectedJobId(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select a job --</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title || job.reference}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">
          Select Adjoining Property
        </label>
        <select
          value={selectedPropertyId}
          onChange={(e) => setSelectedPropertyId(e.target.value)}
          className="w-full border p-2 rounded"
          disabled={!adjoiningProperties.length}
        >
          <option value="">-- Select a property --</option>
          {adjoiningProperties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.addressLine1}, {p.town}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Select Template</label>
        <select
          value={selectedTemplateId}
          onChange={(e) => setSelectedTemplateId(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select a template --</option>
          {templates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleDownload}
        disabled={
          loading ||
          !selectedJobId ||
          !selectedPropertyId ||
          !selectedTemplateId
        }
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Download Document"}
      </button>
    </div>
  );
}
