import { Dialog, Transition } from "@headlessui/react";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { MenuItem } from "./types";
import { MdChevronRight, MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  items,
}) => {
  const router = useRouter();

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          enter="transition duration-300"
          enterFrom="transform -translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition duration-300"
          leaveFrom="transform translate-y-0"
          leaveTo="transform -translate-y-full"
          as={Fragment}
        >
          <Dialog.Panel className="fixed inset-0 top-[60px] z-20 flex flex-col bg-white">
            <Dialog.Title className="sr-only">
              Mobile navigation menu
            </Dialog.Title>
            <div className="container flex flex-1 flex-col border-t border-grey-200 pt-4">
              <nav className="flex flex-col justify-center text-xl">
                {items.map((item) => (
                  <Fragment key={item.label}>
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        data-active={item.href === router.pathname || undefined}
                        className="py-4 data-[active]:font-bold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Collapsible.Root>
                        <Collapsible.Trigger className="flex w-full py-4 text-left [&[data-state=open]>svg]:rotate-180">
                          {item.label}
                          <MdKeyboardArrowDown className="ml-auto mr-1.5 text-3xl transition-transform duration-200" />
                        </Collapsible.Trigger>
                        <Collapsible.Content className="ml-2 flex flex-col">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              data-active={
                                subItem.href === router.pathname || undefined
                              }
                              className="py-3 data-[active]:font-bold"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </Collapsible.Content>
                      </Collapsible.Root>
                    )}
                  </Fragment>
                ))}
              </nav>

              <Button
                variant="dark"
                endIcon={<MdChevronRight />}
                className="mx-auto mb-40 mt-auto"
              >
                CONTACT US
              </Button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
