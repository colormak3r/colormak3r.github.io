import { ReactNode } from "react";

export default function TextFlowTitle({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between text-lg font-semibold text-mine-7">
        {title}
        <span className="text-right text-md font-normal hidden md:block">{content}</span>
      </div>
      <div className="text-mine-4 italic text-md md:hidden">{content}</div>
    </>
  );
}
