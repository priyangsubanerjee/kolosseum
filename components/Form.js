import { Button, Input } from "@nextui-org/react";
import React from "react";
import Teamname from "./Steps/Teamname";
import Member1 from "./Steps/Member1";

function Form() {
  return (
    <div className="w-full h-fit bg-white md:bg-white rounded-lg px-6 py-16 md:p-10 border-t border-dashed md:border-none">
      <div className="flex items-center">
        <svg
          className="h-10 w-10 lg:h-12 lg:w-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
            <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" />
            <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" />
            <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
          </g>
        </svg>
        <h1 className="text-2xl md:text-2xl font-light ml-2">
          <span className=" font-semibold">Team</span> registration
        </h1>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <span className="bg-neutral-50 py-2 text-xs px-4 rounded-full">
          Closing in 3 days
        </span>
        <span className="bg-sky-50 py-2 text-xs px-4 rounded-full">
          16 teams registered
        </span>
      </div>

      <div className="flex items-center justify-center mt-10">
        {[1, 2, 3, 4].map((i, index) => (
          <div key={i} className="flex items-center">
            <div
              style={{
                background: index == 0 && "rgb(217 249 157)",
              }}
              className="flex items-center justify-center rounded-full bg-neutral-100 h-12 w-12"
            >
              <p>{i}</p>
            </div>
            {i !== 4 && <div className="w-[40px] h-[1px] bg-neutral-200"></div>}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center">
        <h2 className="font-medium">Team details</h2>
        <p className="text-sm text-neutral-600 ml-3">
          <span className="text-red-400">*</span> marked fields are mandatory
        </p>
      </div>
      <div className="mt-5">
        {/* <Teamname /> */}
        <Member1 />
      </div>
      <div className="flex items-center justify-between mt-8">
        <button></button>
        <Button className="bg-black text-white rounded-full">
          <div className="flex items-center">
            <span>Next</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Form;
