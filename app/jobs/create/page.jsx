"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/ui/PageHeader";
import AddressModal from "../../components/jobs/create/AddressModal";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function JobsNew() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [onSaveCallback, setOnSaveCallback] = useState(() => () => {});
  const [error, setError] = useState("");
  const router = useRouter();

  const openModal = (address, title, onSave) => {
    setCurrentAddress(address);
    setCurrentTitle(title);
    setOnSaveCallback(() => onSave);
    setIsModalOpen(true);
  };

  /*=========================================
     Form Data
   =========================================*/

  // Job Details Data
  const [jobRef, setJobRef] = useState("");
  const [jobName, setJobName] = useState("");
  const [worksDescription, setWorksDescription] = useState("");
  const [namedSurveyor, setNamedSurveyor] = useState();
  const [managingSurveyor, setManagingSurveyor] = useState();

  // Building Owner Details Data
  const [worksAddress, setWorksAddress] = useState({
    address1: "",
    address2: "",
    town: "",
    county: "",
    postcode: "",
    country: "",
  });
  const [ownerAddress, setOwnerAddress] = useState({
    address1: "",
    address2: "",
    town: "",
    county: "",
    postcode: "",
    country: "",
  });
  const [boName, setBoName] = useState("");
  const [boCorrName, setBoCorrName] = useState("");
  const [boPlurality, setBoPlurality] = useState("");
  const [boTenure, setBoTenure] = useState("");

  // Adjoining Owners' Data
  const [adjoiningOwners, setAdjoiningOwners] = useState([
    {
      name: "",
      correspondenceName: "",
      tenure: "",
      plurality: "",
      tenure: "",
      propertyAddress: {
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcode: "",
        country: "",
      },
      ownerAddress: {
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcode: "",
        country: "",
      },
    },
  ]);

  // Helper function to format address
  const formatAddress = (address) => {
    const parts = [
      address.address1,
      address.address2,
      address.town,
      address.county,
      address.postcode,
      address.country,
    ].filter((part) => part && part.trim() !== "");

    return parts.length > 0
      ? parts.map((part, index) => (
          <span key={index}>
            {part}
            <br />
          </span>
        ))
      : null;
  };

  /*============================================
    Fetch current job using id query param
   ============================================*/
  const [currentJob, setCurrentJob] = useState();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  useEffect(() => {
    if (!jobId) return;

    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/user/jobs/${jobId}`);
        if (!res.ok) {
          console.error("Failed to fetch job");
          return;
        }
        const jobData = await res.json();
        setCurrentJob(jobData);
        setWorksAddress({
          address1: jobData.work_address1,
          address2: jobData.work_address2,
          town: jobData.work_town,
          county: jobData.work_county,
          postcode: jobData.work_postcode,
          country: jobData.work_country,
        });
        setOwnerAddress({
          address1: jobData.bo_address1,
          address2: jobData.bo_address2,
          town: jobData.bo_town,
          county: jobData.bo_county,
          postcode: jobData.bo_postcode,
          country: jobData.bo_country,
        });
        setAdjoiningOwners(
          jobData.properties.map((prop) => ({
            name: prop.owner_name || "",
            correspondenceName: prop.owner_corr_name || "",
            tenure: prop.ownership_type || "",
            plurality: prop.owner_plurality || "",
            propertyAddress: {
              address1: prop.addressLine1 || "",
              address2: prop.addressLine2 || "",
              town: prop.town || "",
              county: prop.county || "",
              postcode: prop.postcode || "",
              country: prop.country || "",
            },
            ownerAddress: {
              address1: prop.owner_address1 || "",
              address2: prop.owner_address2 || "",
              town: prop.owner_town || "",
              county: prop.owner_county || "",
              postcode: prop.owner_postcode || "",
              country: prop.owner_country || "",
            },
          }))
        );
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, [jobId]);

  /*=========================================
     Handle Create New Job
   =========================================*/

  const handleCreateNewJob = async () => {
    try {
      const res = await fetch("/api/user/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: currentUserId,
          jobRef,
          jobName,
          worksDescription,
          namedSurveyor,
          managingSurveyor,
          worksAddress,
          ownerAddress,
          boName,
          boCorrName,
          boPlurality,
          boTenure,
          adjoiningOwners,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error creating job, please try again.");
      }

      const newJob = await res.json();
      router.push(`/jobs/${newJob.id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  /*=========================================
     Handle Submit
   =========================================*/
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleCreateNewJob();
  };

  /*=========================================
     Handle Copy Works Address to BO Address
   =========================================*/
  const handleCopyWorksAddressToBO = () => {
    setOwnerAddress({
      address1: worksAddress.address1,
      address2: worksAddress.address2,
      town: worksAddress.town,
      county: worksAddress.county,
      postcode: worksAddress.postcode,
      country: worksAddress.country,
    });
  };

  /*=========================================
     Handle Copy Adjoining Owner's Address 
     to Adjoining Property Address
   =========================================*/
  const handleCopyPropertyToOwnerAddress = (index) => {
    const updatedOwners = [...adjoiningOwners];

    updatedOwners[index] = {
      ...updatedOwners[index],
      ownerAddress: { ...updatedOwners[index].propertyAddress },
    };

    setAdjoiningOwners(updatedOwners);
  };

  /*=========================================
     Handle paste works address
   =========================================*/

  const handlePasteWorksAddress = (index) => {
    const updatedOwners = [...adjoiningOwners];

    updatedOwners[index] = {
      ...updatedOwners[index],
      propertyAddress: { ...worksAddress },
    };

    setAdjoiningOwners(updatedOwners);
  };

  /*=========================================
     Load Session
   =========================================*/

  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;
  const currentUserId = session?.user?.id;

  return (
    <>
      <PageHeader title="Create Job" showPrimaryBtn={false} />

      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Job Details
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Basic details about the job, including the building owner and
                works address.
              </p>
              <p className="mt-1 text-xs mt-4 text-indigo-600">
                Open Land Registry ↗︎
              </p>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              {/* Job Reference / Number */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Job Reference / Number
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="username"
                      name="username"
                      onChange={(e) => setJobRef(e.target.value)}
                      type="text"
                      defaultValue={currentJob ? currentJob.reference : ""}
                      placeholder="Ref. No."
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* End of Job Reference / Number */}

              {/* Job Name */}
              <div className="col-span-full">
                <label
                  htmlFor="jobName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Job Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="jobName"
                      name="jobName"
                      onChange={(e) => setJobName(e.target.value)}
                      type="text"
                      defaultValue={currentJob ? currentJob.title : ""}
                      placeholder="Job Name"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* End of JJob Name */}

              {/* Works Description */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Works description
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <textarea
                      id="description"
                      name="description"
                      onChange={(e) => setWorksDescription(e.target.value)}
                      defaultValue={currentJob ? currentJob.description : ""}
                      type="textarea"
                      rows={3}
                      placeholder="Works description"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* End of Works Description */}

              {/* Named Surveyor */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="namedSurveyor"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Named Surveyor
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="namedSurveyor"
                      name="namedSurveyor"
                      onChange={(e) => setNamedSurveyor(e.target.value)}
                      type="text"
                      placeholder="Named Surveyor"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* End of Named Surveyor */}

              {/* Managing Surveyor */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="managingSurveyor"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Managing Surveyor
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="managingSurveyor"
                      name="managingSurveyor"
                      onChange={(e) => setManagingSurveyor(e.target.value)}
                      type="text"
                      placeholder="Managing Surveyor"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* End of Managing Surveyor */}
            </div>
            {/* End of form group */}
          </div>
          {/* End of Job Details section */}

          {/*=================================
             Building Owner Details Section 
             =================================*/}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Building Owner Details
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Details about the building owner.
              </p>
              <p className="mt-1 text-xs mt-4 text-indigo-600">
                Open Land Registry ↗︎
              </p>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              {/* Works Address */}
              <div className="flex col-span-full gap-16">
                <div className="w-full col-span-full">
                  <label
                    htmlFor="boCorrespondenceName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Works Address
                  </label>
                  <div className="mt-2">
                    {formatAddress(worksAddress) ? (
                      <p className="text-sm text-gray-700">
                        {formatAddress(worksAddress)}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">No address added</p>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        openModal(
                          worksAddress,
                          "Edit Works Address",
                          setWorksAddress
                        )
                      }
                      className="mt-6 cursor-pointer rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Edit address
                    </button>
                    {worksAddress.address1.length > 1 && (
                      <button
                        type="button"
                        onClick={handleCopyWorksAddressToBO}
                        className="ml-2 mb-4 px-2 py-1 border-1 border-indigo-100 cursor-pointer rounded text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
                      >
                        Copy to owner's address
                      </button>
                    )}
                  </div>
                </div>

                {/* BO Address */}
                <div className="w-full col-span-full">
                  <label
                    htmlFor="boCorrespondenceName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Building Owner's Address
                  </label>
                  <div className="mt-2">
                    {formatAddress(ownerAddress) ? (
                      <p className="text-sm text-gray-700">
                        {formatAddress(ownerAddress)}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">No address added</p>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        openModal(
                          ownerAddress,
                          "Edit Owner's Address",
                          setOwnerAddress
                        )
                      }
                      className="mt-6 cursor-pointer rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Edit address
                    </button>
                  </div>
                </div>
              </div>

              {/* Building Owner Name */}
              <div className="col-span-full">
                <label
                  htmlFor="boName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Building Owner Name
                </label>
                <div className="mt-2">
                  <input
                    id="boName"
                    name="boName"
                    onChange={(e) => setBoName(e.target.value)}
                    defaultValue={currentJob ? currentJob.bo_name : ""}
                    type="text"
                    placeholder="John Smith"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* End of Building Owner Name */}

              {/* Building Owner Correspondence Name */}
              <div className="col-span-full">
                <label
                  htmlFor="boCorrespondenceName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Building Owner Correspondence Name
                </label>
                <div className="mt-2">
                  <input
                    id="boCorrespondenceName"
                    name="boCorrespondenceName"
                    onChange={(e) => setBoCorrName(e.target.value)}
                    defaultValue={currentJob ? currentJob.bo_name_corr : ""}
                    type="text"
                    placeholder="Mr J Smith"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <p
                  id="email-description"
                  className="mt-2 text-sm text-gray-500"
                >
                  How the building owner's name should appear in letters and
                  correspondence.
                </p>
              </div>
              {/* End of Building Owner Correspondence Name */}

              {/* Building Owner Plurality */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="boPlural"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Single or multiple owners{" "}
                  <span
                    title='Is the owner a single individual, or are there multiple
                  owners? This is used to determine the plurality (I" / "We"
                  etc.) in documents.'
                    className="text-indigo-600 text-xs font-bold ml-2"
                  >
                    ?
                  </span>
                </label>
                <div className="mt-2">
                  <select
                    id="boPlural"
                    name="boPlural"
                    onChange={(e) => setBoPlurality(e.target.value)}
                    defaultValue={currentJob ? currentJob.owner_plurality : ""}
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="SINGLE">Single</option>
                    <option value="MULTIPLE">Multiple</option>
                  </select>
                </div>
              </div>
              {/* End of Building Owner Plurality */}

              {/* Building Owner Tenure */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="boTenure"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Tenure
                </label>
                <div className="mt-2">
                  <select
                    id="boTenure"
                    name="boTenure"
                    onChange={(e) => setBoTenure(e.target.value)}
                    defaultValue={currentJob ? currentJob.ownership_type : ""}
                    placeholder="Tenure"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option default value="FREEHOLDER">
                      Freeholder
                    </option>
                    <option value="LEASEHOLDER">Leaseholder</option>
                    <option value="TENANT">Tenant</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
              {/* End of tenure */}
            </div>
            {/* End of form group */}
          </div>
          {/* End of Job Details section */}

          {/* Start Adjoining Owners Section */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Adjoining Properties
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Provide details of the affected adjoining properties.
              </p>
              <p className="mt-1 text-xs mt-4 text-indigo-600">
                Open Land Registry ↗︎
              </p>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              {adjoiningOwners.map((owner, index) => (
                <div
                  key={index}
                  className="col-span-full border-b border-gray-300 pb-10"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-6">
                    Adjoining Property {index + 1}
                  </h3>

                  {/* Addresses */}
                  <div className="flex flex-wrap gap-16 mt-8">
                    {/* Property Address */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <label
                        htmlFor={`propertyAddress-${index}`}
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Adjoining Property Address
                      </label>
                      <div className="mt-2">
                        {formatAddress(owner.propertyAddress) ? (
                          <p className="text-sm text-gray-700">
                            {formatAddress(owner.propertyAddress)}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No address added
                          </p>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            openModal(
                              owner.propertyAddress,
                              `Edit Adjoining Property Address ${index + 1}`,
                              (updated) => {
                                const updatedOwners = [...adjoiningOwners];
                                updatedOwners[index].propertyAddress = updated;
                                setAdjoiningOwners(updatedOwners);
                              }
                            )
                          }
                          className="mr-2 mt-8 cursor-pointer rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Edit address
                        </button>
                        {worksAddress.address1.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handlePasteWorksAddress(index)}
                            className="mb-2 px-2 py-1 border-1 border-indigo-100 cursor-pointer rounded text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
                          >
                            Paste works address
                          </button>
                        )}
                        {owner.propertyAddress.address1.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              handleCopyPropertyToOwnerAddress(index)
                            }
                            className="mb-4 px-2 py-1 border-1 border-indigo-100 cursor-pointer rounded text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
                          >
                            Copy to owner's address
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Owner's Address */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <label
                        htmlFor={`ownerAddress-${index}`}
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Adjoining Owner's Address
                      </label>
                      <div className="mt-2">
                        {formatAddress(owner.ownerAddress) ? (
                          <p className="text-sm text-gray-700">
                            {formatAddress(owner.ownerAddress)}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No address added
                          </p>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            openModal(
                              owner.ownerAddress,
                              `Edit Adjoining Owner Address ${index + 1}`,
                              (updated) => {
                                const updatedOwners = [...adjoiningOwners];
                                updatedOwners[index].ownerAddress = updated;
                                setAdjoiningOwners(updatedOwners);
                              }
                            )
                          }
                          className="mt-8 cursor-pointer rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Edit address
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Adjoining Owner Name */}
                  <div className="col-span-full mt-8">
                    <label
                      htmlFor={`aoName-${index}`}
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Owner Name(s)
                    </label>
                    <div className="mt-2">
                      <input
                        id={`aoName-${index}`}
                        name={`aoName-${index}`}
                        type="text"
                        value={owner.name}
                        onChange={(e) => {
                          const updated = [...adjoiningOwners];
                          updated[index].name = e.target.value;
                          setAdjoiningOwners(updated);
                        }}
                        placeholder="John Smith and Jane Ann Smith"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  {/* Correspondence Name */}
                  <div className="col-span-full mt-8">
                    <label
                      htmlFor={`aoCorrespondenceName-${index}`}
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Owner Correspondence Name
                    </label>
                    <div className="mt-2">
                      <input
                        id={`aoCorrespondenceName-${index}`}
                        name={`aoCorrespondenceName-${index}`}
                        type="text"
                        value={owner.correspondenceName}
                        onChange={(e) => {
                          const updated = [...adjoiningOwners];
                          updated[index].correspondenceName = e.target.value;
                          setAdjoiningOwners(updated);
                        }}
                        placeholder="Mr & Mrs Smith"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      How the adjoining owner's name should appear in letters
                      and correspondence.
                    </p>
                  </div>

                  <div className="flex gap-8 mt-8">
                    {/* Adjoining Owner Plurality */}
                    <div className="w-full">
                      <label
                        htmlFor="aoPlural"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Single or multiple owners{" "}
                        <span
                          title='Is the owner a single individual, or are there multiple
                  owners? This is used to determine the plurality ("I" / "We"
                  etc.) in documents.'
                          className="text-indigo-600 text-xs font-bold ml-2"
                        >
                          ?
                        </span>
                      </label>
                      <div className="mt-2">
                        <select
                          id="aoPlural"
                          name="aoPlural"
                          onChange={(e) => {
                            const updated = [...adjoiningOwners];
                            updated[index].plurality = e.target.value;
                            setAdjoiningOwners(updated);
                          }}
                          defaultValue={owner.plurality}
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option value="SINGLE">Single</option>
                          <option value="MULTIPLE">Multiple</option>
                        </select>
                      </div>
                    </div>
                    {/* End of Adjoining Owner Plurality */}

                    {/* Adjoining Owner Tenure */}
                    <div className="w-full">
                      <label
                        htmlFor="boTenure"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Tenure
                      </label>
                      <div className="mt-2">
                        <select
                          id="boTenure"
                          name="boTenure"
                          onChange={(e) => {
                            const updated = [...adjoiningOwners];
                            updated[index].tenure = e.target.value;
                            setAdjoiningOwners(updated);
                          }}
                          defaultValue={owner.tenure}
                          placeholder="Tenure"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option default value="FREEHOLDER">
                            Freeholder
                          </option>
                          <option value="LEASEHOLDER">Leaseholder</option>
                          <option value="TENANT">Tenant</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                    </div>
                    {/* End of AO tenure */}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() =>
                  setAdjoiningOwners((prev) => [
                    ...prev,
                    {
                      name: "",
                      correspondenceName: "",
                      propertyAddress: {
                        address1: "",
                        address2: "",
                        town: "",
                        county: "",
                        postcode: "",
                        country: "",
                      },
                      ownerAddress: {
                        address1: "",
                        address2: "",
                        town: "",
                        county: "",
                        postcode: "",
                        country: "",
                      },
                    },
                  ])
                }
                className="cursor-pointer col-span-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Add Adjoining Property
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>

            <div className="max-w-2xl space-y-10 md:col-span-2">
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">
                  By email
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          defaultChecked
                          id="comments"
                          name="comments"
                          type="checkbox"
                          aria-describedby="comments-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Comments
                      </label>
                      <p id="comments-description" className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          aria-describedby="candidates-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Candidates
                      </label>
                      <p id="candidates-description" className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          aria-describedby="offers-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Offers
                      </label>
                      <p id="offers-description" className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">
                  Push notifications
                </legend>
                <p className="mt-1 text-sm/6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      {currentAddress && (
        <AddressModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={currentTitle}
          address={currentAddress}
          onSave={onSaveCallback}
        />
      )}
    </>
  );
}
