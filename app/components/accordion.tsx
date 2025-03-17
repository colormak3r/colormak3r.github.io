import { ReactNode } from "react";

export default function Accordion({
  isOpen = true,
  title,
  content,
  className,
}: {
  isOpen?: boolean;
  title: string;
  content: ReactNode;
  className?: string;
}) {
  return (
    <>
      <details open={isOpen} className={className}>
        <summary className="bg-mine-3 p-4 rounded-md font-semibold text-mine-7 text-lg">
          {title}
        </summary>
        <div className="p-2">{content}</div>
      </details>
    </>
  );
}
