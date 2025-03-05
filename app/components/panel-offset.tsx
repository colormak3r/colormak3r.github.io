import { ReactNode } from "react";

export default function OffsetPanel({
  isLeft,
  twoThrids,
  oneThird,
}: {
  isLeft: boolean;
  twoThrids: ReactNode;
  oneThird: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {isLeft ? (
          <>
            <div className="md:w-2/3">{twoThrids}</div>
            <div className="md:w-1/3">{oneThird}</div>
          </>
        ) : (
          <>
            <div className="md:w-1/3">{oneThird}</div>
            <div className="md:w-2/3">{twoThrids}</div>
          </>
        )}
      </div>
    </>
  );
}
