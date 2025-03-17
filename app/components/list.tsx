import { ReactNode } from "react";

export default function List({children, isTitle = false}: {children: ReactNode, isTitle?: boolean}) {
  return <ul className={`list-[square] ml-4 ${isTitle ? "text-mine-7" : ""}`}>{children}</ul>;
}
