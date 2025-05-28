"use client";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { HomeIcon, PaperClipIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import AdjoiningPropertiesTable from "../tables/AdjoiningPropertiesTable";

export default function TabAdjoiningProperties({
  jobDetails,
  adjoiningProperties,
  quickLinks,
}) {
  const [startDate, setStartDate] = useState("");
  const [currentProperty, setCurrentProperty] = useState();

  // Check adjoining property exists before rendering
  if (!adjoiningProperties || adjoiningProperties.length === 0) {
    return (
      <p className="text-sm text-gray-500">No adjoining properties found.</p>
    );
  }

  return (
    <>
      <AdjoiningPropertiesTable adjoiningProperties={adjoiningProperties} />
    </>
  );
}
