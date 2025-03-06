import { ReactNode } from "react";

export default function Accordion({
  isOpen,
  title,
  content,
}: {
  isOpen: boolean;
  title: string;
  content: ReactNode;
}) {
  return (
    <>
      <details open={isOpen}>
        <summary className="bg-mine-3 p-4 rounded-md font-semibold text-mine-7 text-lg">
          {title}
        </summary>
        <div className="p-4">{content}</div>
      </details>
    </>
  );
}
