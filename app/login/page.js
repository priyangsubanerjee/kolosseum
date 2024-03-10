/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import LoginForm from "./components/LoginForm";

function page() {
  if (process.env.NODE_ENV == "production") {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center pt-24">
      <LoginForm />
    </div>
  );
}

export default page;
