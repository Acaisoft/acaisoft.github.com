import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment, ReactNode } from "react";
import { MdClose } from "react-icons/md";

export interface ConsentDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

export const ConsentDialog: React.FC<ConsentDialogProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="transition duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <div className="fixed inset-0">
            <div className="absolute inset-0 -z-10 bg-black/50" />

            <div className="flex max-h-full min-h-full flex-col items-center justify-center p-4">
              <Dialog.Panel className="relative flex max-w-3xl flex-col overflow-hidden rounded-lg bg-white p-4 sm:p-10">
                <div className="mb-6 flex items-start justify-between">
                  <Dialog.Title className="mt-1.5 font-bold text-blue-800">
                    {title}
                  </Dialog.Title>
                  <button type="button" onClick={onClose}>
                    <MdClose className="text-4xl text-blue-800" />
                  </button>
                </div>
                <div
                  className={clsx(
                    "flex flex-col gap-5 overflow-auto text-sm leading-relaxed",
                    // Header styles
                    "[&_h4]:mb-2 [&_h4]:font-bold [&_h4]:text-blue-800",
                    // List styles
                    "[&_ul]:my-1 [&_ul]:ml-5 [&_ul]:list-disc"
                  )}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
