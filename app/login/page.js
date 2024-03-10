import { redirect } from "next/navigation";
import React from "react";

function page() {
  if (process.env.NODE_ENV == "production") {
    return redirect("/");
  }
  return <div>page</div>;
}

export default page;
