import React from "react";

function Form() {
  return (
    <div className="w-full h-fit bg-neutral-50 md:bg-white rounded-lg px-6 py-16 md:p-10">
      <div className="flex items-center">
        <svg
          className="h-8 w-8 lg:h-12 lg:w-12"
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
        <h1 className="text-xl md:text-2xl font-light ml-2">
          <span className=" font-semibold">Team</span> registration
        </h1>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <span className="bg-white md:bg-neutral-50 py-2 text-sm px-4 rounded-full">
          Closing in 3 days
        </span>
        <span className="bg-sky-50 py-2 text-sm px-4 rounded-full">
          16 teams registered
        </span>
      </div>

      <div className="flex items-center justify-center mt-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-neutral-100 h-12 w-12">
              <p>{i}</p>
            </div>
            {i !== 4 && <div className="w-[40px] h-[1px] bg-neutral-200"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
