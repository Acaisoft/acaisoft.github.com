import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContactFormStore } from "./store";

export type ContactUsButtonProps = ButtonProps;

export const ContactUsButton: React.FC<ContactUsButtonProps> = (props) => {
  const setOpen = useContactFormStore((state) => state.setOpen);

  return (
    <Button
      endIcon={<MdKeyboardArrowRight />}
      onClick={(e) => {
        props.onClick?.(e);
        setOpen(true);
      }}
      // eslint-disable-next-line react/no-children-prop
      children="CONTACT US"
      {...props}
    />
  );
};
