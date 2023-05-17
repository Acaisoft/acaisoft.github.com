import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";
import pabloVerano from "../../public/images/people/pablo-verano.webp";
import { CheckCircleLarge } from "../icons/check-circle-large";
import { Blockquote } from "../ui/blockquote";
import { Button } from "../ui/button";
import { CheckboxInput } from "../ui/checkbox-input";
import { Input } from "../ui/input";
import { StatementMark } from "../ui/statement-mark";
import { Textarea } from "../ui/textarea";
import { useContactFormStore } from "./store";

export interface ContactUsDialogProps {}

type FormType = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const ContactUsDialog: React.FC<ContactUsDialogProps> = () => {
  const open = useContactFormStore((state) => state.open);
  const setOpen = useContactFormStore((state) => state.setOpen);
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
    reset,
  } = useForm<FormType>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {};

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={() => setOpen(false)}>
        <Transition.Child
          enter="transition duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <Dialog.Panel className="fixed inset-0 z-30 grid bg-white lg:grid-cols-2 lg:items-center">
            <button
              type="button"
              className="absolute right-3 top-3 lg:right-10 lg:top-10"
              onClick={() => setOpen(false)}
            >
              <MdClose className="text-4xl lg:text-white" />
            </button>
            {isSubmitted ? (
              <div className="flex flex-1 flex-col items-center py-32">
                <CheckCircleLarge className="mb-12" />
                <div className="mb-2 text-2xl font-bold">Thank you</div>
                <div className="mb-8 text-center font-medium text-grey-500">
                  Your message{" "}
                  <span className="text-grey-700">has been sent</span>.
                  <br />
                  We will respond to you within{" "}
                  <span className="text-grey-700">24 hours</span>.
                </div>
                <Button
                  variant="dark"
                  className="mt-8"
                  endIcon={<MdKeyboardArrowRight />}
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link href="/">HOME</Link>
                </Button>
              </div>
            ) : (
              <form
                className="flex flex-1 justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="max-w-xs flex-1 px-5 py-10 sm:max-w-sm sm:py-20 lg:max-w-md">
                  <Dialog.Title className="mb-8 text-4xl font-bold sm:mb-10 sm:text-5xl">
                    Contact us
                  </Dialog.Title>
                  <StatementMark className="mb-6 sm:mb-10" />

                  <div className="flex flex-col gap-5">
                    <Input
                      label="Your name"
                      {...register("name", { required: true })}
                    />
                    <Input
                      label="Email address"
                      type="email"
                      {...register("email", { required: true })}
                    />
                    <Input
                      label="Phone number"
                      type="tel"
                      {...register("phone")}
                    />
                    <Textarea
                      label="Tell us about..."
                      {...register("message", { required: true })}
                      rows={6}
                    />

                    <CheckboxInput
                      required
                      label={
                        <>
                          I agree to{" "}
                          <Link
                            href="/documents/AcaisoftPP.pdf"
                            className="underline"
                          >
                            Acaisoft Privacy Policy
                          </Link>
                        </>
                      }
                    />

                    <Button
                      variant="dark"
                      className="mt-8"
                      endIcon={<MdKeyboardArrowRight />}
                      type="submit"
                    >
                      SEND MESSAGE
                    </Button>
                  </div>
                </div>
              </form>
            )}

            <div className="hidden place-content-center self-stretch bg-purple-gradient text-white lg:grid">
              <Blockquote variant="light" responsive={false}>
                Since working with Acaisoft, our delivery velocity has increased
                at least 20 times. In the past months, we’ve done more
                developments than what had been done in the last four years in
                our company.
              </Blockquote>
              <div className="ml-2 mt-10 flex items-center gap-5 pt-5">
                <Image
                  src={pabloVerano}
                  alt="Pablo Verano"
                  className="h-20 w-20 rounded-full shadow-[0_2px_4px_6px_rgba(0,0,0,.12)]"
                />
                <div className="text-sm">
                  <div className="font-bold">Pablo Verano</div>
                  <div className="mb-0.5">Head of Product</div>
                  <div>Scoopr</div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
