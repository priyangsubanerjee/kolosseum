import { Input } from "@nextui-org/react";
import React from "react";

function Teamname() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Team name *"
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Input
        label="Team name *"
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
    </div>
  );
}

export default Teamname;
