// COMPLETE INTEGRATING EDIT NOTICE FUNCTIONATITY

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { select } from "@heroui/theme";
import { useEffect, useState } from "react";

const noticeSections = [
  { id: 1, name: "Section 1: Line of Junction", value: "S1" },
  { id: 3, name: "Section 3: Party Structure", value: "S3" },
  { id: 6, name: "Section 6: Adjacent Excavation", value: "S6" },
];

const s3WorksOptions = [
  { id: 1, name: "Underpin or raise a party structure", value: "a" },
  { id: 2, name: "Carry out repairs to a party structure", value: "b" },
  { id: 3, name: "Demolish a partition and build a party wall", value: "c" },
  {
    id: 4,
    name: "Works to buildings connected by arches or structure over public ways",
    value: "d",
  },
  { id: 5, name: "Demolish a party structure and rebuild", value: "e" },
  { id: 6, name: "Cut into a party structure for any purpose", value: "f" },
  {
    id: 7,
    name: "Cut away from a party structure (i.e. remove chimney breast)",
    value: "g",
  },
  { id: 8, name: "Cut away overhangs", value: "h" },
  { id: 9, name: "Cut into the wall of an adjoining property", value: "j" },
  {
    id: 10,
    name: "Execute works relating to connecting a party structure with an adjoining premises",
    value: "k",
  },
  { id: 11, name: "Demolish a party fence wall and rebuild it", value: "l" },
  {
    id: 12,
    name: "Reduce or demolish a party wall to a determined height",
    value: "l",
  },
  {
    id: 13,
    name: "Expose a section of party wall hitherto enclosed",
    value: "n",
  },
];

export default function CreateNoticeForm({
  jobDetails,
  adjoiningProperties,
  notice,
}) {
  const today = new Date();
  const startDateStr = today.toISOString().split("T")[0];

  const responseDate = new Date(today);
  responseDate.setDate(responseDate.getDate() + 14);
  const responseDateStr = responseDate.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(startDateStr);
  const [responseDateState, setResponseDate] = useState(responseDateStr);
  const [query, setQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedSections, setSelectedSections] = useState([]);
  const [s3Paragraphs, setS3Paragraphs] = useState([]);

  const [sectionTemplates, setSectionTemplates] = useState({});
  const [allTemplates, setAllTemplates] = useState([]);

  // Fetch templates
  useEffect(() => {
    async function fetchTemplates() {
      const res = await fetch("/api/templates");
      const data = await res.json();
      setAllTemplates(data);
    }

    fetchTemplates();
  }, []);

  const getTemplatesForSection = (subtype) =>
    allTemplates.filter(
      (template) =>
        template.type === "NOTICE" && template.noticeSubtype === subtype
    );

  // Set default templates for selected sections
  useEffect(() => {
    if (allTemplates.length === 0 || selectedSections.length === 0) return;

    const defaults = {};
    selectedSections.forEach((sectionId) => {
      const subtype = `S${sectionId}`;
      const templates = getTemplatesForSection(subtype);
      const defaultTpl = templates.find((tpl) => tpl.isDefault);
      if (defaultTpl) {
        defaults[subtype] = defaultTpl.id;
      }
    });

    setSectionTemplates((prev) => ({ ...defaults, ...prev }));
  }, [allTemplates, selectedSections]);

  // Update dates
  useEffect(() => {
    const newResponseDate = new Date(startDate);
    newResponseDate.setDate(newResponseDate.getDate() + 14);
    setResponseDate(newResponseDate.toISOString().split("T")[0]);
  }, [startDate]);

  const handleCheckboxChange = (id) => {
    setSelectedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSelectParagraphs = (value) => {
    setS3Paragraphs((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredProperties =
    query === ""
      ? adjoiningProperties
      : adjoiningProperties.filter((property) => {
          return (
            property.addressLine1
              ?.toLowerCase()
              .includes(query.toLowerCase()) ||
            property.town?.toLowerCase().includes(query.toLowerCase()) ||
            property.postcode?.toLowerCase().includes(query.toLowerCase())
          );
        });

  /*==============================================
Handle create notice
==============================================*/
  const handleCreateNotice = async () => {
    if (!selectedProperty || selectedSections.length === 0) {
      alert("Please select a recipient and at least one section.");
      return;
    }

    const commonData = {
      jobId: jobDetails.id,
      adjoiningPropertyId: selectedProperty.id,
      ownerName: selectedProperty.owner_name,
      startDate,
      responseDate: responseDateState,
    };

    const s1Details = {
      wallPosition: document.getElementById("s1WallLocation")?.value,
      projectingFootings: document.getElementById("projectingFootings")?.value,
      description: document.getElementById("s1WorksDescription")?.value,
    };

    const s3Details = {
      paragraphs: s3Paragraphs,
      description: document.getElementById("s3WorksDescription")?.value,
    };

    const s6Details = {
      distanceType: document.getElementById("3m6mNotice")?.value,
      safeguard: document.getElementById("safeguardAdjoiningProperty")?.value,
      description: document.getElementById("s6WorksDescription")?.value,
    };

    const noticesToCreate = selectedSections.map((sectionId) => {
      const section = `S${sectionId}`;
      const base = {
        ...commonData,
        sections: [section],
      };

      if (section === "S1") {
        return {
          ...base,
          templates: { S1: sectionTemplates[section] },
          s1Details,
        };
      }

      if (section === "S3") {
        return {
          ...base,
          templates: { S3: sectionTemplates[section] },
          s3Details,
        };
      }

      if (section === "S6") {
        return {
          ...base,
          templates: { S6: sectionTemplates[section] },
          s6Details,
        };
      }

      return base;
    });

    try {
      for (const payload of noticesToCreate) {
        const res = await fetch("/api/notices/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to create notice");
      }

      alert("Notices created successfully.");
      // Optional: refresh or redirect
    } catch (err) {
      console.error("Error creating notices:", err);
      alert("An error occurred while creating the notices.");
    }
  };

  return (
    <>
      <div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 mb-6">
          <div className=" px-4 py-6 col-span-full sm:px-0">
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
              <Combobox
                as="div"
                value={selectedProperty}
                onChange={(property) => {
                  setQuery("");
                  setSelectedProperty(property);
                }}
              >
                <Label className="block text-sm/6 font-medium text-gray-900">
                  Recipient
                </Label>
                <div className="relative mt-2">
                  <ComboboxInput
                    className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(event) => setQuery(event.target.value)}
                    onBlur={() => setQuery("")}
                    displayValue={(property) =>
                      property
                        ? `${property.addressLine1}, ${property.town} ${property.postcode}`
                        : ""
                    }
                    placeholder="Search or select a recipient..."
                  />
                  <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                      className="size-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </ComboboxButton>

                  {filteredProperties.length > 0 && (
                    <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredProperties.map((property) => (
                        <ComboboxOption
                          key={property.id}
                          value={property}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                        >
                          <div className="flex">
                            <span className="truncate group-data-[selected]:font-semibold">
                              {[
                                property.addressLine1,
                                property.addressLine2,
                                property.town,
                                property.county,
                                property.postcode,
                              ]
                                .filter((part) => part && part.trim() !== "")
                                .join(", ")}
                            </span>
                            <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                              {property.owner_name}
                            </span>
                          </div>
                          <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                            <CheckIcon className="size-5" aria-hidden="true" />
                          </span>
                        </ComboboxOption>
                      ))}
                    </ComboboxOptions>
                  )}
                </div>
              </Combobox>
            </dd>
          </div>
          {selectedProperty && (
            <>
              <div className="px-4 pb-6 col-span-full sm:px-0">
                <dt className="text-sm font-medium text-gray-900">
                  Adjoining owner
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {selectedProperty.owner_name || "Select a recipient"}
                </dd>
              </div>

              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Of</dt>
                <div className="whitespace-pre-line text-sm/6 text-gray-700">
                  {[
                    selectedProperty.owner_address1,
                    selectedProperty.owner_address2,
                    selectedProperty.owner_town,
                    selectedProperty.owner_county,
                    selectedProperty.owner_postcode,
                    selectedProperty.owner_country,
                  ]
                    .filter((part) => part && part.trim() !== "")
                    .join("\n")}
                </div>
              </div>

              <div className="px-4 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  Adjoining property
                </dt>
                <div className="whitespace-pre-line text-sm/6 text-gray-700">
                  {[
                    selectedProperty.addressLine1,
                    selectedProperty.addressLine2,
                    selectedProperty.town,
                    selectedProperty.county,
                    selectedProperty.postcode,
                  ]
                    .filter((part) => part && part.trim() !== "")
                    .join("\n")}
                </div>
              </div>
            </>
          )}
        </dl>
        <div className="border-b border-gray-200 pt-6 pb-5">
          <h3 className="text-base font-semibold text-gray-900">
            Notice Sections
          </h3>
        </div>
        <dl className="grid grid-cols-1">
          <div className="px-4 py-6 sm:col-span-1 sm:px-0">
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select the section(s) you wish to serve notice under
                </label>
                <div className="space-y-2">
                  {noticeSections.map((section) => (
                    <div key={section.id} className="flex items-center gap-2">
                      <input
                        id={`section-${section.id}`}
                        type="checkbox"
                        value={section.value}
                        checked={selectedSections.includes(section.id)}
                        onChange={() => handleCheckboxChange(section.id)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`section-${section.id}`}
                        className="text-sm text-gray-700"
                      >
                        {section.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </dd>
          </div>
        </dl>

        {selectedSections.includes(1) && (
          <>
            {/* SECTION 1 WORKS */}
            <div className="border-b border-gray-200 pt-6 pb-5">
              <h3 className="text-base font-semibold text-gray-900">
                Line of Junction Works
              </h3>
            </div>
            {/* Wall position */}
            <dl className="grid grid-cols-1">
              <div className="px-4 pt-6 sm:col-span-1 sm:px-0">
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  <label
                    htmlFor="s1WallLocation"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Where will the wall be constructed?
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="s1WallLocation"
                      name="s1WallLocation"
                      defaultValue="Astride the boundary"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>Astride the boundary - s1(2)</option>
                      <option>
                        Wholly on the Building Owner's land - s1(5)
                      </option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </dd>
              </div>
            </dl>

            {/* Projecting footings */}
            <dl className="grid grid-cols-1">
              <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  <div>
                    <label
                      htmlFor="projectingFootings"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Is it intended to place projecting footings under the land
                      of the Adjoining Property?
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="projectingFootings"
                        name="projectingFootings"
                        defaultValue="No"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                  </div>
                </dd>
              </div>
            </dl>

            {/* Section 1 Work Description */}
            <div className="mb-6">
              <label
                htmlFor="s1WorksDescription"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Section 1 works description
              </label>
              <div className="mt-2">
                <textarea
                  id="s1WorksDescription"
                  name="s1WorksDescription"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                  placeholder='e.g. "Construct a new wall on the boundary line...'
                />
              </div>
            </div>
          </>
        )}

        {/* SECTION 3 WORKS */}
        {selectedSections.includes(3) && (
          <>
            <div className="border-b border-gray-200 pt-6 pb-5">
              <h3 className="text-base font-semibold text-gray-900">
                Party Structure Works
              </h3>
            </div>

            <div className="space-y-4 py-6">
              <label className="block text-sm font-medium text-gray-700">
                What type of work is being undertaken
              </label>
              <div className="space-y-2">
                {s3WorksOptions.map((paragraph) => (
                  <div key={paragraph.id} className="flex items-center gap-2">
                    <input
                      id={`section-${paragraph.value}`}
                      type="checkbox"
                      value={paragraph.value}
                      checked={s3Paragraphs.includes(paragraph.value)}
                      onChange={() => handleSelectParagraphs(paragraph.value)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`section-${paragraph.value}`}
                      className="text-sm text-gray-700"
                    >
                      ({paragraph.value}) - {paragraph.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 1 Work Description */}
            <div className="mb-6">
              <label
                htmlFor="s3WorksDescription"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Section 3 works description
              </label>
              <div className="mt-2">
                <textarea
                  id="s3WorksDescription"
                  name="s3WorksDescription"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                  placeholder='e.g. "Cut into the party wall for the purpose of...'
                />
              </div>
            </div>
          </>
        )}

        {/* SECTION 6 WORKS */}
        {selectedSections.includes(6) && (
          <>
            <div className="border-b border-gray-200 pt-6 pb-5">
              <h3 className="text-base font-semibold text-gray-900">
                Adjacent Excavation Works
              </h3>
            </div>

            {/* 3m or 6m Notice */}
            <div className="px-4 pt-6 sm:col-span-1 sm:px-0">
              <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                <label
                  htmlFor="3m6mNotice"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Which type of notice is required?
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="3m6mNotice"
                    name="3m6mNotice"
                    defaultValue="Astride the boundary"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>3m Notice - s6(1)</option>
                    <option>6m Notice - s6(2)</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </dd>
            </div>

            {/* Safeguard Adjoining Property */}
            <div className="px-4 pt-6 sm:col-span-1 sm:px-0">
              <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                <label
                  htmlFor="safeguardAdjoiningProperty"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Is it intended to safeguard or otherwise strengthen the
                  adjoining property?
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="safeguardAdjoiningProperty"
                    name="safeguardAdjoiningProperty"
                    defaultValue="It is not intended, nor deemed necessary, to safeguard or otherwise strengthen the adjoining property's foundations."
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="It is intended to safeguard or otherwise strengthen the adjoining property's foundations.">
                      Yes
                    </option>
                    <option value="It is not intended, nor deemed necessary, to safeguard or otherwise strengthen the adjoining property's foundations.">
                      No
                    </option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </dd>
            </div>

            {/* Section 6 Work Description */}
            <div className="pt-6 mb-6">
              <label
                htmlFor="s6WorksDescription"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Section 3 works description
              </label>
              <div className="mt-2">
                <textarea
                  id="s6WorksDescription"
                  name="s6WorksDescription"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                  placeholder='e.g. "Excavate to form new foundations...'
                />
              </div>
            </div>
          </>
        )}

        {selectedSections.length > 0 && (
          <>
            {/* NOTICE DETAILS */}
            <div className="border-b border-gray-200 pt-6 pb-5">
              <h3 className="text-base font-semibold text-gray-900">
                Notice Details
              </h3>
            </div>

            {/* Date of service */}
            <div className="px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Date of service
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                <input
                  type="date"
                  id="serviceDate"
                  name="serviceDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min="2018-01-01"
                  placeholder="Select a date"
                />
              </dd>
            </div>

            {/* Date of response */}
            <div className="px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Response required by
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                <input
                  type="date"
                  id="responseDate"
                  name="responseDate"
                  value={responseDateState}
                  onChange={(e) => setResponseDate(e.target.value)}
                  min="2018-01-01"
                  placeholder="Select a date"
                />
              </dd>
            </div>
          </>
        )}

        {/* Template Selection */}
        <div className=" mb-30">
          {selectedSections.map((sectionId) => {
            const subtype = `S${sectionId}`;
            const templates = getTemplatesForSection(subtype);

            // Determine default template ID for this section
            const defaultTemplate = templates.find((tpl) => tpl.isDefault);

            return (
              <div key={subtype} className="mt-6">
                <label
                  htmlFor={`template-${subtype}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Template for {subtype} Notice
                </label>
                <div className="mt-2 grid grid-cols-1 w-100">
                  <select
                    id={`template-${subtype}`}
                    name={`template-${subtype}`}
                    className="mt-1 col-start-1 row-start-1  appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={
                      sectionTemplates[subtype] ?? defaultTemplate?.id ?? ""
                    }
                    onChange={(e) =>
                      setSectionTemplates((prev) => ({
                        ...prev,
                        [subtype]: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select a template</option>
                    {templates.map((tpl) => (
                      <option key={tpl.id} value={tpl.id}>
                        {tpl.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-12 py-4 flex items-center justify-end gap-x-6 shadow-md">
          <button
            type="submit"
            onClick={handleCreateNotice}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Notice
          </button>
        </div>
      </div>
    </>
  );
}
