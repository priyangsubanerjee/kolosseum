import { Input } from "@nextui-org/react";
import React from "react";

function Member2({ formProps, setFormProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Member name *"
        value={formProps.member2.name}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member2: { ...formProps.member2, name: e.target.value },
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
        type="tel"
        value={formProps.member2.roll}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member2: {
              ...formProps.member2,
              roll: e.target.value.trimEnd(),
              email: `${e.target.value.trimEnd()}@kiit.ac.in`,
            },
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
        value={formProps.member2.email}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member2: { ...formProps.member2, email: e.target.value },
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
        type="tel"
        value={formProps.member2.phone}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member2: { ...formProps.member2, phone: e.target.value },
          })
        }
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
