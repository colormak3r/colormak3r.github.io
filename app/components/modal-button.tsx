"use client";

import { ReactNode } from "react";
import { useState } from "react";

export default function ButtonModal({
  text,
  title,
  content,
}: {
  text: string;
  title: string;
  content: ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-mine-5 rounded-md p-4 font-semibold text-lg hover:scale-110 transition duration-150 ease-in-out"
      >
        {text}
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 flex justify-center items-center pt-20 z-50">
            <div className="w-5/6 m-2 md:max-w-96 bg-mine-1 flex flex-col rounded-md justify-center items-center shadow-2xl border-mine-8 border-1">
              <div className="w-full px-4 py-2 bg-mine-3 flex justify-between items-center rounded-t-md font-bold">
                <div>{title}</div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-mine-4 hover:bg-mine-5 rounded-md"
                >
                  X
                </button>
              </div>
              {content}
            </div>
          </div>
          <div
            className="fixed inset-0 h-screen w-screen bg-mine-1 opacity-90 z-49"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>
  );
}
