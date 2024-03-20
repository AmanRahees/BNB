import React from "react";
import Navbar from "./_components/navbar";
import Login from "@/components/modals/login-modal";
import Signup from "@/components/modals/signup-modal";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="relative max-container pt-32">{children}</div>
      <Login />
      <Signup />
    </>
  );
}

export default BaseLayout;
