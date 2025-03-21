import { Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";

function Teamname({ formProps, setFormProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Team name *"
        value={formProps.teamName}
        onChange={(e) =>
          setFormProps({ ...formProps, teamName: e.target.value })
        }
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Select
        selectionMode="single"
        selectedKeys={formProps.arena.length > 0 ? [formProps.arena] : []}
        onChange={(e) => setFormProps({ ...formProps, arena: e.target.value })}
        classNames={{
          value: "pl-3",
          label: "pl-3",
        }}
        label="Select arena"
        className="w-full"
      >
        <SelectItem value="Konnexweb" key="Konnexweb">
          Konnexweb (Web Dev)
        </SelectItem>
        <SelectItem value="Kognizance" key="Kognizance">
          Kognizance (App Dev)
        </SelectItem>
        <SelectItem value="Kernelkombat" key="Kernelkombat">
          Kernelkombat (ML & AI)
        </SelectItem>
      </Select>
    </div>
  );
}

export default Teamname;
