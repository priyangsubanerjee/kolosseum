import { redirect } from "next/navigation";
import React from "react";

function page() {
  if (process.env.NODE_ENV == "production") {
    return redirect("/");
  }
  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center pt-24">
      <div className="w-[500px] bg-white h-[600px] rounded-md"></div>
    </div>
  );
}

export default page;
