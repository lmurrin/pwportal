"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Switch,
} from "@headlessui/react";
import { CheckIcon, DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import clsx from "clsx";

const TEMPLATE_TYPES = [
  { label: "Notice", value: "notice" },
  { label: "Letter", value: "letter" },
  { label: "Award", value: "award" },
];

export default function TemplateUploadModal({
  isOpen,
  onClose,
  userId,
  companyId,
}) {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [templateType, setTemplateType] = useState("notice");
  const [setAsDefault, setSetAsDefault] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [noticeSubtype, setNoticeSubtype] = useState("");
  const [templateName, setTemplateName] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a .docx file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", templateName || selectedFile.name);
    formData.append("type", templateType);
    if (templateType === "notice") formData.append("subtype", noticeSubtype);
    formData.append("userId", userId); // pass from parent/session
    formData.append("companyId", companyId); // pass from session
    formData.append("isDefault", setAsDefault);

    const res = await fetch("/api/templates/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      toast("Template uploaded!");
      onClose();
    } else {
      const err = await res.json();
      alert("Upload failed: " + err.error);
    }

    onClose(); // Close after upload
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-6 py-6 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
            <DialogTitle className="text-lg font-semibold text-gray-900 mb-4">
              Upload Template
            </DialogTitle>

            {/* Drag and drop */}
            <div
              className={clsx(
                "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
                dragging
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-500"
              )}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <DocumentArrowUpIcon className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Drag and drop your .docx file here, or{" "}
                <span className="text-indigo-600 underline">browse</span>
              </p>
              {selectedFile && (
                <p className="mt-2 text-sm font-medium text-gray-800">
                  Selected: {selectedFile.name}
                </p>
              )}
              <input
                type="file"
                accept=".docx"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
              />
            </div>

            {/* Template Name */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Template Name
              </label>
              <input
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="e.g. Section 1 Notice Template"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Template type */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Template Type
              </label>
              <select
                value={templateType}
                onChange={(e) => setTemplateType(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                {TEMPLATE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {templateType === "notice" && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notice Subtype
                </label>
                <select
                  value={noticeSubtype}
                  onChange={(e) => setNoticeSubtype(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm"
                >
                  <option value="">Select subtype</option>
                  <option value="S1">S1</option>
                  <option value="S3">S3</option>
                  <option value="S6">S6</option>
                </select>
              </div>
            )}

            {/* Set as default */}
            <div className="mt-4 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Set as default
              </label>
              <Switch
                checked={setAsDefault}
                onChange={setSetAsDefault}
                className={clsx(
                  setAsDefault ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                )}
              >
                <span
                  className={clsx(
                    setAsDefault ? "translate-x-6" : "translate-x-1",
                    "inline-block h-4 w-4 transform bg-white rounded-full transition-transform"
                  )}
                />
              </Switch>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Upload
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
