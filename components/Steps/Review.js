import { Input } from "@nextui-org/react";
import React from "react";

function Review() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        <div className="col-span-2 pb-2">
          <p className="text-sm text-neutral-600">Team details</p>
        </div>
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        <div className="col-span-2 pb-2 mt-7 text-neutral-600">
          <p className="text-sm">Member 1 details</p>
        </div>
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        <div className="col-span-2 pb-2 mt-7 text-neutral-600">
          <p className="text-sm">Member 2 details</p>
        </div>
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        <div className="col-span-2 pb-2 mt-7 text-neutral-600">
          <p className="text-sm">Member 3 details (optional)</p>
        </div>
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          value={"Team name"}
          label="Team name *"
          readOnly
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
        <Input
          label="Roll number *"
          required
          classNames={{
            input: "pl-3",
            label: "pl-3",
          }}
        />
      </div>
    </div>
  );
}

export default Review;
