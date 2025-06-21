import React, { ReactNode } from "react";
export default function AutoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full md:w-auto md:flex-row md:space-x-2 md:space-y-0 items-center justify-center">
        {children}
      </div>
    </>
  );
}
