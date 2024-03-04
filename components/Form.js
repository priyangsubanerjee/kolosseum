"use client";
import { Button, Input, Select, SelectItem, Spacer } from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";

const RegisterTeam = ({ teamProps, setTeamProps }) => {
  return (
    <div className="px-10 mt-5">
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className=" shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1"
              d="M12 3C7.749 3 5.623 3 4.303 4.318C3.298 5.321 3.058 6.788 3 9.3m18 0c-.058-2.512-.298-3.98-1.303-4.982c-.818-.817-1.946-1.127-3.697-1.246M21 14.7c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8m-4 8V8m10 4h-2M4 12H2"
            />
          </svg>
          <h2 className="text-base ml-4 shrink-0 font-medium text-white">
            Team name
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Input
            value={teamProps.teamName}
            onChange={(e) =>
              setTeamProps({ ...teamProps, teamName: e.target.value })
            }
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-7-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
            />
          </svg>
          <h2 className="text-base shrink-0 ml-4 font-medium text-white">
            Select arena
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Select
            value={teamProps.arena}
            onChange={(e) =>
              setTeamProps({ ...teamProps, arena: e.target.value })
            }
            classNames={{
              label: "pl-3",
              value: "pl-3",
            }}
            radius="sm"
            label="Select an arena"
          >
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

const Member1Details = ({ teamProps, setTeamProps }) => {
  return (
    <div className="px-10 mt-5 space-y-2">
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4">
        <div className="flex items-center">
          <h2 className="text-base ml-4 shrink-0 font-medium text-white">
            Member name
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Input
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Member name"
          />
        </div>
      </div>
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4">
        <div className="flex items-center">
          <h2 className="text-base ml-4 shrink-0 font-medium text-white">
            Roll number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Input
            value={teamProps.teamName}
            onChange={(e) =>
              setTeamProps({ ...teamProps, teamName: e.target.value })
            }
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Member roll number"
          />
        </div>
      </div>
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4">
        <div className="flex items-center">
          <h2 className="text-base ml-4 shrink-0 font-medium text-white">
            Email address
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Input
            value={teamProps.teamName}
            onChange={(e) =>
              setTeamProps({ ...teamProps, teamName: e.target.value })
            }
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="KIIT email address"
          />
        </div>
      </div>
      <div className="dark lg:flex items-center text-white bg-black/10 rounded-md p-4">
        <div className="flex items-center">
          <h2 className="text-base ml-4 shrink-0 font-medium text-white">
            Phone number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <Input
            value={teamProps.teamName}
            onChange={(e) =>
              setTeamProps({ ...teamProps, teamName: e.target.value })
            }
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Phone number"
          />
        </div>
      </div>
    </div>
  );
};

const Member2Details = () => {
  return (
    <div className="px-10 mt-5">
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className=" shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1"
            d="M12 3C7.749 3 5.623 3 4.303 4.318C3.298 5.321 3.058 6.788 3 9.3m18 0c-.058-2.512-.298-3.98-1.303-4.982c-.818-.817-1.946-1.127-3.697-1.246M21 14.7c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8m-4 8V8m10 4h-2M4 12H2"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Member name
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M4 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5A.5.5 0 0 1 4 5M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9.5 1a.5.5 0 0 0 0 1h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5zM11 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Roll number
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M33.68 15.26H32v11.45l-7.36-7.36l-1.41 1.41L30.46 28H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0l6.66-6.63h-2.83l-5.24 5.21L5.31 8h14.75l1.15-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.24Z"
            class="clr-i-outline--alerted clr-i-outline-path-1--alerted"
          />
          <path
            fill="currentColor"
            d="m26.85 1l-5.72 9.91a1.28 1.28 0 0 0 1.1 1.91h11.45a1.28 1.28 0 0 0 1.1-1.91L29.06 1a1.28 1.28 0 0 0-2.21 0"
            class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Email address
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.988.988 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.501.501 0 0 0-.152.47l.012.052l.031.13a7.265 7.265 0 0 0 .729 1.805a7.264 7.264 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.732 12.732 0 0 1-3.024-3.529a12.432 12.432 0 0 1-1.554-4.385m3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.988 1.988 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.732 13.732 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.604 6.604 0 0 1-.936-1.223a6.268 6.268 0 0 1-.59-1.421"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Phone number
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
    </div>
  );
};

const Member3Details = () => {
  return (
    <div className="px-10 mt-5">
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className=" shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1"
            d="M12 3C7.749 3 5.623 3 4.303 4.318C3.298 5.321 3.058 6.788 3 9.3m18 0c-.058-2.512-.298-3.98-1.303-4.982c-.818-.817-1.946-1.127-3.697-1.246M21 14.7c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8m-4 8V8m10 4h-2M4 12H2"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Member name
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M4 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5A.5.5 0 0 1 4 5M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm9.5 1a.5.5 0 0 0 0 1h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5zM11 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Roll number
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M33.68 15.26H32v11.45l-7.36-7.36l-1.41 1.41L30.46 28H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0l6.66-6.63h-2.83l-5.24 5.21L5.31 8h14.75l1.15-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.24Z"
            class="clr-i-outline--alerted clr-i-outline-path-1--alerted"
          />
          <path
            fill="currentColor"
            d="m26.85 1l-5.72 9.91a1.28 1.28 0 0 0 1.1 1.91h11.45a1.28 1.28 0 0 0 1.1-1.91L29.06 1a1.28 1.28 0 0 0-2.21 0"
            class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Email address
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
      <div className="dark flex items-center text-white bg-black/10 rounded-md p-4 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.988.988 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.501.501 0 0 0-.152.47l.012.052l.031.13a7.265 7.265 0 0 0 .729 1.805a7.264 7.264 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.732 12.732 0 0 1-3.024-3.529a12.432 12.432 0 0 1-1.554-4.385m3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.988 1.988 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.732 13.732 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.604 6.604 0 0 1-.936-1.223a6.268 6.268 0 0 1-.59-1.421"
          />
        </svg>
        <h2 className="text-base ml-4 shrink-0 font-medium text-white">
          Phone number
        </h2>
        <div className="ml-auto">
          <Input
            className="w-[350px]"
            radius="sm"
            classNames={{
              input: "pl-3",
              label: "pl-3",
            }}
            label="Team name"
          />
        </div>
      </div>
    </div>
  );
};

const ReturnStepComponent = ({ teamProps, setTeamProps, currentStep }) => {
  switch (currentStep) {
    case 0:
      return <RegisterTeam teamProps={teamProps} setTeamProps={setTeamProps} />;
    case 1:
      return (
        <Member1Details teamProps={teamProps} setTeamProps={setTeamProps} />
      );
    case 2:
      return <Member2Details />;
    case 3:
      return <Member3Details />;
    default:
      <></>;
  }
};

function Form() {
  const steps = [
    "REGISTER TEAM",
    "MEMBER 1 INFO",
    "MEMBER 2 INFO",
    "MEMBER 3 INFO (OPTIONAL)",
  ];
  const [currentStep, setCurrentStep] = React.useState(0);

  const [teamProps, setTeamProps] = React.useState({
    teamName: "",
    arena: "",
    member1: {
      name: "",
      roll: "",
      email: "",
      phone: "",
    },
  });

  const ButtonText = () => {
    switch (currentStep) {
      case 0:
        return "Team details";
      case 1:
        return "Member 2 details";
      case 2:
        return "Member 3 details";
    }
  };

  const handleProgress = () => {
    setCurrentStep((prev) => prev + 1);
    switch (currentStep) {
      case 0:
        if (teamProps.teamName === "") {
          toast.error("Team name is required");
          return;
        } else if (teamProps.arena === "") {
          toast.error("Arena is required");
          return;
        } else {
          //setCurrentStep((prev) => prev + 1);
        }
        break;
      case 1:
        return 25;
      case 2:
        return 50;
      case 3:
        return 75;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div>
      <div className="px-10 py-9 flex items-center justify-between">
        <p className="text-white tracking-widest text-sm">
          {steps[currentStep]}
        </p>
        <p className="text-white tracking-widest text-sm">
          STEP {currentStep + 1} / {steps.length}
        </p>
      </div>
      <ReturnStepComponent
        setTeamProps={setTeamProps}
        teamProps={teamProps}
        currentStep={currentStep}
      />
      <div className="flex items-center justify-between mt-20 px-10">
        <button
          disabled
          className="text-base disabled:opacity-50 disabled:cursor-not-allowed text-neutral-100 hover:underline"
        >
          Back
        </button>
        <Button
          onClick={() => handleProgress()}
          radius="full"
          className="text-black h-fit"
        >
          <div className="flex items-center space-x-2 px-3 py-3">
            <span>{ButtonText()}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Form;
