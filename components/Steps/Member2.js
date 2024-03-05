import { Input } from "@nextui-org/react";
import React from "react";

function Member2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Member name *"
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
        label="KiiT email *"
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Input
        label="Contact number *"
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
    </div>
  );
}

export default Member2;
