"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CreateNoticeForm from "../../forms/CreateNoticeForm";
import Overlay from "../../ui/Overlay";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { HomeIcon, PaperClipIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpLeftIcon,
  CalendarIcon,
  ChevronDownIcon,
  DocumentArrowDownIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { select } from "@heroui/theme";
import NoticesCards from "../../cards/NoticesCards";

export default function TabNoticesNew({ jobDetails, adjoiningProperties }) {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const searchParams = useSearchParams();
  const showNewNoticeForm = searchParams.get("new-notice") === "true";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <NoticesCards adjoiningProperties={adjoiningProperties} />
      </div>
      <Overlay open={open} setOpen={setOpen} title="Create Notice">
        <CreateNoticeForm
          jobDetails={jobDetails}
          adjoiningProperties={adjoiningProperties}
          notice={selectedNotice}
        />
      </Overlay>
    </>
  );
}
