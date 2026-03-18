import { ReactNode } from "react";

export default function TextFlowSubtitle({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between text-md font-medium italic">
        {title}
        <span className="text-right font-medium not-italic hidden md:block">
          {content}
        </span>
      </div>
      <div className="text-mine-4 font-medium md:hidden">{content}</div>
    </>
  );
}
