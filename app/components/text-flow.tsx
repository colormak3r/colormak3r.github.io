import { ReactNode } from "react";

export default function TextFlow({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <>
      <div className="font-semibold text-mine-7 flex justify-between">
        <span>{title}</span>
        <span className="font-normal">{content}</span>
      </div>
    </>
  );
}
