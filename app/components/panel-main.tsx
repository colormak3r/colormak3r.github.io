import { ReactNode } from "react";

export default function MainPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-mine-3 to-mine-2 p-4 text-lg">
      {children}
    </div>
  );
}
