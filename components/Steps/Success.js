/* eslint-disable @next/next/no-img-element */
import { Chip } from "@nextui-org/react";
import React from "react";

function Success({ uid }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-32"
          src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
          alt=""
        />

        <h1 className="text-2xl font-semibold mt-8">
          Team registered successfully
        </h1>
      </div>

      <div className="bg-neutral-50 p-6 rounded-lg  max-w-xl mx-auto mt-10">
        <div className="flex justify-center items-center space-x-3">
          <span className="font-medium text-lg">Team unique id:</span>{" "}
          <span className="px-6 text-sm py-2 border bg-white rounded-full">
            {uid || "Loading..."}
          </span>
        </div>
        <p className="text-xs text-neutral-600 max-w-xl text-center mx-auto mt-4 leading-7">
          Your teams unique id is extremely important. It will be used to
          identify your team in the future. Please keep it safe.
        </p>
      </div>

      <div className="mt-10">
        <p className="text-center text-sm text-neutral-700">
          Keep a track on latest proceedings 🔔. Follow us on
        </p>

        <div className="flex items-center justify-center mt-5 space-x-4">
          <button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png"
              className="h-9 w-9 "
              alt=""
            />
          </button>
          <button>
            <img
              src="https://cdn.pixabay.com/photo/2021/12/10/16/37/facebook-6860914_1280.png"
              className="h-9 w-9 "
              alt=""
            />
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              className="h-9 w-9 "
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
