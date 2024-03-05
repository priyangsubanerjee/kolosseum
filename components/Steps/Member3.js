import { Input } from "@nextui-org/react";
import React from "react";

function Member3({ formProps, setFormProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Member name *"
        value={formProps.member3.name}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member3: { ...formProps.member3, name: e.target.value },
          })
        }
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Input
        label="Roll number *"
        value={formProps.member3.roll}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member3: { ...formProps.member3, roll: e.target.value },
          })
        }
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Input
        label="KiiT email *"
        value={formProps.member3.email}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member3: { ...formProps.member3, email: e.target.value },
          })
        }
        required
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
      <Input
        label="Contact number *"
        required
        value={formProps.member3.phone}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member3: { ...formProps.member3, phone: e.target.value },
          })
        }
        classNames={{
          input: "pl-3",
          label: "pl-3",
        }}
      />
    </div>
  );
}

export default Member3;
