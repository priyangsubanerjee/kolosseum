"use client";
import { Button, Input, Select, SelectItem, Spacer } from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";

const RegisterTeam = ({ teamProps, setTeamProps }) => {
  return (
    <div className="px-2 lg:px-10 mt-5">
      <div className="dark lg:flex items-center text-neutral-300 rounded-md px-4">
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
          <h2 className="text-sm ml-4 shrink-0 tracking-wide">Team name</h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center  text-neutral-300 rounded-md px-4 mt-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-7-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
            />
          </svg>
          <h2 className="text-sm ml-4 shrink-0 tracking-wide">Select arena</h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
    <div className="px-2 lg:px-10 mt-5 space-y-8">
      <div className="dark lg:flex items-center rounded-md px-4 text-neutral-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal tracking-wide">
            Member name
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal text-white">
            Roll number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <g fill="none" stroke="currentColor" stroke-width="1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m7 9l5 3.5L17 9"
              />
              <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            </g>
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Email address
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1.064 1.064 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.099 2.099 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312c.005-.014.007-.015 0-.006a.276.276 0 0 1-.03.039l-.01.01a.203.203 0 0 1-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.536 1.536 0 0 0 .42-.236a.923.923 0 0 0 .05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01a.383.383 0 0 1 .038-.03c.01-.007.007-.004-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Phone number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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

const Member2Details = ({ teamProps, setTeamProps }) => {
  return (
    <div className="px-2 lg:px-10 mt-5 space-y-8">
      <div className="dark lg:flex items-center rounded-md px-4 text-neutral-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal tracking-wide">
            Member name
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal text-white">
            Roll number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <g fill="none" stroke="currentColor" stroke-width="1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m7 9l5 3.5L17 9"
              />
              <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            </g>
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Email address
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1.064 1.064 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.099 2.099 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312c.005-.014.007-.015 0-.006a.276.276 0 0 1-.03.039l-.01.01a.203.203 0 0 1-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.536 1.536 0 0 0 .42-.236a.923.923 0 0 0 .05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01a.383.383 0 0 1 .038-.03c.01-.007.007-.004-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Phone number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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

const Member3Details = ({ teamProps, setTeamProps }) => {
  return (
    <div className="px-2 lg:px-10 mt-5 space-y-8">
      <div className="dark lg:flex items-center rounded-md px-4 text-neutral-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0"
              clip-rule="evenodd"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal tracking-wide">
            Member name
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 font-normal text-white">
            Roll number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <g fill="none" stroke="currentColor" stroke-width="1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m7 9l5 3.5L17 9"
              />
              <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            </g>
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Email address
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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
      <div className="dark lg:flex items-center text-white rounded-md px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1.064 1.064 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.099 2.099 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312c.005-.014.007-.015 0-.006a.276.276 0 0 1-.03.039l-.01.01a.203.203 0 0 1-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.536 1.536 0 0 0 .42-.236a.923.923 0 0 0 .05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01a.383.383 0 0 1 .038-.03c.01-.007.007-.004-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
            />
          </svg>
          <h2 className="text-sm ml-3 shrink-0 tracking-wide text-white">
            Phone number
          </h2>
        </div>
        <div className="lg:ml-auto w-full lg:max-w-[330px] mt-5 lg:mt-0">
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

const ReturnStepComponent = ({ teamProps, setTeamProps, currentStep }) => {
  switch (currentStep) {
    case 0:
      return <RegisterTeam teamProps={teamProps} setTeamProps={setTeamProps} />;
    case 1:
      return (
        <Member1Details teamProps={teamProps} setTeamProps={setTeamProps} />
      );
    case 2:
      return (
        <Member2Details teamProps={teamProps} setTeamProps={setTeamProps} />
      );
    case 3:
      return (
        <Member3Details teamProps={teamProps} setTeamProps={setTeamProps} />
      );
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
        return "Member details";
      case 1:
        return "Member 2 details";
      case 2:
        return "Member 3 details";
      case 3:
        return "Review and submit";
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
      <div className="px-5 lg:px-10 py-9 flex items-center justify-between">
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
      <div className="flex items-center justify-between mt-20 px-5 lg:px-10">
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="text-base disabled:opacity-50 disabled:cursor-not-allowed text-neutral-300 hover:underline"
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
