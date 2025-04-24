// components/Modal.tsx
"use client";

import { ReactNode, MouseEvent } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ImageModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  // clicking background = close
  const handleBgClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  // prevent clicks on the content from bubbling up
  const stopProp = (e: MouseEvent) => e.stopPropagation();

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleBgClick}
    >
      <button
        className="absolute z-[99] bottom-2 left-1/2 transform -translate-x-1/2 text-mine-8 text-lg leading-none border-2 border-mine-8 rounded-full w-10 h-10 flex items-center justify-center hover:bg-mine-8 hover:text-mine-1 transition duration-150"
        onClick={onClose}
      >
        x
      </button>
      <div className="relative" onClick={stopProp}>
        {children}
      </div>
    </div>,
    document.body
  );
}
