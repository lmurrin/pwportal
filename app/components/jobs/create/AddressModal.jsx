"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState, useEffect } from "react";

export default function AddressModal({
  open,
  setOpen,
  title,
  address,
  onSave,
}) {
  const [formData, setFormData] = useState(address);

  // Keep formData in sync with incoming address
  useEffect(() => {
    if (address) setFormData(address);
  }, [address]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="flex flex-col relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <DialogTitle className="mb-4 text-lg font-semibold text-gray-900">
              {title}
            </DialogTitle>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              {[
                ["address1", "Address 1"],
                ["address2", "Address 2"],
                ["town", "Town"],
                ["county", "County"],
                ["postcode", "Postcode"],
                ["country", "Country"],
              ].map(([field, label]) => (
                <div className="sm:col-span-3" key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm text-gray-500"
                  >
                    {label}
                  </label>
                  <div className="mt-2">
                    <input
                      id={field}
                      name={field}
                      type="text"
                      value={formData[field] || ""}
                      onChange={handleChange}
                      placeholder={label}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:flex sm:justify-end gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="cursor-pointer inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="cursor-pointer inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
