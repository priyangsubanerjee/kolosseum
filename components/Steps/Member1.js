"use client";

import { Input } from "@nextui-org/react";
import React from "react";

function Member1({ formProps, setFormProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Member name *"
        value={formProps.member1.name}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member1: { ...formProps.member1, name: e.target.value },
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
        value={formProps.member1.roll}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member1: {
              ...formProps.member1,
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
        value={formProps.member1.email}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member1: { ...formProps.member1, email: e.target.value },
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
        value={formProps.member1.phone}
        onChange={(e) =>
          setFormProps({
            ...formProps,
            member1: { ...formProps.member1, phone: e.target.value },
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

export default Member1;
