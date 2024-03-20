"use client";

import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { MenuItem } from "./menu-item";
import useLogin from "@/store/useLogin";
import useSignup from "@/store/useSignup";

export const UserNav = () => {
  const loginModal = useLogin();
  const signupModal = useSignup();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="inline-block border rounded-full overflow-hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-2 hover:bg-gray-100 p-2"
      >
        <HiBars3 size={18} />
        <FaUserCircle size={30} />
      </button>
      {isOpen && (
        <div className="absolute w-[220px] top-[50px] right-0 z-[100] bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
          <MenuItem label="Log In" onClick={() => loginModal.open()} />
          <MenuItem label="Sign Up" onClick={() => signupModal.open()} />
        </div>
      )}
    </div>
  );
};
