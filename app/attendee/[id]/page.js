/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import React from "react";

function IdCards() {
  return (
    <div>
      <div className="max-w-7xl mx-auto rounded-3xl mt-6 md:mt-10 lg:mt-16 overflow-hidden px-4 md:px-10 pb-20">
        <div className="flex items-center md:justify-center relative w-full">
          <img
            src="/logo-kolosseum.png"
            alt=""
            className="h-7 md:h-8 lg:h-10"
          />
          <Button
            size="smn"
            className="absolute right-0 inset-y-0 rounded-full bg-neutral-100"
          >
            <div className="px-2 flex items-center">
              <span>Register</span>
            </div>
          </Button>
        </div>
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold md:text-center text-neutral-700 mt-8 md:mt-8 lg:mt-16 leading-[1.5]">
          Team <span className="outline-text">metal</span>, See you on March 17
        </h1>
        <p className="md:text-center md:text-base mt-4 lg:mt-7 text-neutral-600 leading-[2]">
          Keep an eye on your email for further instructions.
        </p>

        <div className="flex items-center justify-center mt-5 md:mt-10">
          <Button className="rounded-full bg-black text-white">
            <span className="px-2">Share with friends</span>
          </Button>
        </div>
        <div className="w-full h-full bg-white grid gap-y-10 md:gap-y-10 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto md:mt-10 mt-12 lg:mt-20">
          <div className="flex justify-center">
            <img src="/idcard.png" className="w-[300px] md:w-[350px]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="/idcard.png" className="w-[350px] md:w-[350px]" alt="" />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <img src="/idcard.png" className="w-[350px] md:w-[350px]" alt="" />
          </div>
        </div>

        <div className="h-[500px] bg-red-100 mt-44"></div>
      </div>
    </div>
  );
}

export default IdCards;
