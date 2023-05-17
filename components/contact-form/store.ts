import { create } from "zustand";

interface ContactForm {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useContactFormStore = create<ContactForm>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
