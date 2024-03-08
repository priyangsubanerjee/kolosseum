import { Input } from "@nextui-org/react";
import React from "react";

function Review({ formProps }) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 pt-8">
        <div className="">
          <p className="text-sm text-neutral-500">Team name</p>
          <p className="text-base font-medium mt-3">{formProps.teamName}</p>
        </div>
        <div className="">
          <p className="text-sm text-neutral-500">Arena</p>
          <p className="text-base font-medium mt-3">{formProps.arena}</p>
        </div>
        <div className="">
          <p className="text-sm text-neutral-500">Team members</p>
          <p className="text-base font-medium mt-3">
            {formProps.totalParticipants}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
