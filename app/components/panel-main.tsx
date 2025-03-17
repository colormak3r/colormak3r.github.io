import { ReactNode } from "react";

export default function MainPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-mine-2 to-mine-3 p-4 text-lg shadow-md">
      {children}
    </div>
  );
}
