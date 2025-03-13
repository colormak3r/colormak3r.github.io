import { ReactNode } from "react";

export default function TextSpan({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <>
      <div className="font-semibold flex justify-between">
        <span className="w-1/3 flex items-center">{title}</span>
        <span className="w-2/3 font-normal text-right">{content}</span>
      </div>
    </>
  );
}
