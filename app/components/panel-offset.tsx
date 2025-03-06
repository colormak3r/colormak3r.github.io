import { ReactNode } from "react";

export default function OffsetPanel({
  isLeft,
  mainSection,
  subSection,
}: {
  isLeft: boolean;
  mainSection: ReactNode;
  subSection: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row space-x-2">
        {isLeft ? (
          <>
            <div className="md:w-3/5">{mainSection}</div>
            <div className="md:w-2/5">{subSection}</div>
          </>
        ) : (
          <>
            <div className="md:w-2/5">{subSection}</div>
            <div className="md:w-3/5">{mainSection}</div>
          </>
        )}
      </div>
    </>
  );
}
