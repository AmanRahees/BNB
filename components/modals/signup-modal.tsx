"use client";

import { Input } from "../ui/input";
import { Modal } from "./modal";
import useSignup from "@/store/useSignup";

function Login() {
  const signupModal = useSignup();
  return (
    <Modal
      title="Sign up"
      isOpen={signupModal.isOpen}
      close={signupModal.close}
    >
      <h1 className="text-2xl font-semibold my-2">Welcome to Airbnb</h1>
      <form action="" className="space-y-4">
        <Input
          type="email"
          className="w-full h-[54px] border-gray-300 outline-none"
          placeholder="Your Email Address"
        />
        <Input
          type="password"
          className="w-full h-[54px] border-gray-300 outline-none"
          placeholder="Your Password"
        />
        <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default Login;
