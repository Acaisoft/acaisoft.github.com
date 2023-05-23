import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";

const Root = AccordionPrimitive.Root;

const Item = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={clsx("border-b border-grey-200", className)}
    {...props}
  />
));
Item.displayName = AccordionPrimitive.Item.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={clsx(
        "flex flex-1 items-center gap-2 py-5 text-left text-xl font-medium text-slate-900 transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <MdKeyboardArrowDown className="ml-auto mr-1.5 flex-shrink-0 text-3xl transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
Trigger.displayName = AccordionPrimitive.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={clsx(
      "overflow-hidden text-grey-500 transition-all duration-200 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-6 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
Content.displayName = AccordionPrimitive.Content.displayName;

export const Accordion = Object.assign(Root, { Item, Trigger, Content });
