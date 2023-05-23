import { useRef, useState } from "react";

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number>();

  const copy = async (data: string) => {
    clearTimeout(timeoutRef.current);
    setCopied(false);

    await navigator.clipboard.writeText(data);

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return { copy, copied };
};
