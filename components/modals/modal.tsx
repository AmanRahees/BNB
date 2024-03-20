"use client";

import { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ title, children, isOpen, close }: ModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);
  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  if (showModal) {
    return (
      <div className="flexCenter fixed inset-0 z-50 bg-black/60">
        <div className="bg-white w-[90%] md:w-[80%] lg:w-[600px] p-6 rounded-xl">
          <header className="relative">
            <h1 className="text-lg font-semibold text-center">{title}</h1>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-2 p-2"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>
          </header>
          <hr className="my-4" />
          <section className="relative">{children}</section>
        </div>
      </div>
    );
  }
};
