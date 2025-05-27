"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export function OverlayProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null);
  const [title, setTitle] = useState("");

  const showOverlay = (title, content) => {
    setTitle(title);
    setOverlayContent(content);
    setIsOpen(true);
  };

  const hideOverlay = () => {
    setIsOpen(false);
    setOverlayContent(null);
    setTitle("");
  };

  return (
    <OverlayContext.Provider value={{ showOverlay, hideOverlay }}>
      {children}

      {/* Include Overlay Component Here */}
      <Dialog open={isOpen} onClose={hideOverlay} className="relative z-10">
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-full transform transition duration-500 ease-in-out data-[closed]:-translate-y-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between border-b pb-6 border-gray-200">
                      <DialogTitle className="text-xl font-semibold text-gray-900 px-6">
                        {title}
                      </DialogTitle>
                      <div className="ml-3 pr-6 flex h-7 items-center">
                        <button
                          onClick={hideOverlay}
                          className="text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-12">
                    {overlayContent}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  return useContext(OverlayContext);
}
