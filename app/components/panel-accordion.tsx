import { ReactNode } from "react";
import Accordion from "./accordion";
import MainPanel from "./panel-main";

export default function AccordionPanel({
  title,
  children,
  className,
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <MainPanel>
      <Accordion title={title} className={className}>
        {children}
      </Accordion>
    </MainPanel>
  );
}
