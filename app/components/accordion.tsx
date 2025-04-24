import { ReactNode } from "react";

export default function Accordion({
  isOpen = true,
  title,
  children,
  className,
}: {
  isOpen?: boolean;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <>
      <details open={isOpen} className={className}>
        <summary className="bg-mine-3 p-4 rounded-md font-semibold text-mine-7 text-lg">
          {title}
        </summary>
        <div className="p-2">{children}</div>
      </details>
    </>
  );
}
