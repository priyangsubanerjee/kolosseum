import { Input } from "@nextui-org/react";
import React from "react";

function Review() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        <div className="">
          <p className="text-sm text-neutral-500">Team name</p>
          <p className="text-base font-medium mt-3">Metallica</p>
        </div>
        <div className="">
          <p className="text-sm text-neutral-500">Arena</p>
          <p className="text-base font-medium mt-3">Webback</p>
        </div>
        <div className="">
          <p className="text-sm text-neutral-500">Team members</p>
          <p className="text-base font-medium mt-3">02</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
