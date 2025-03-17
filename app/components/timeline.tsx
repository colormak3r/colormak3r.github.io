import React from "react";
import TextSpan from "./text-span";
import Space from "./space";

export interface TimelineItem {
  date: string;
  title: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <TextSpan title={`○ ${item.date}`} content={item.title} />
          {idx !== items.length - 1 && <Space size={3} connect={true} />}
        </React.Fragment>
      ))}
    </>
  );
}
