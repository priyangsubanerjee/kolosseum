/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function IdCards() {
  const VirtualCard = ({ firstName, lastName }) => {
    return (
      <div className="w-[300px] md:w-[350px] relative">
        <img src="/idcard.png" className="h-full w-full" alt="" />
        <div className="absolute bottom-[90px] left-11">
          <h1 className="text-xl font-semibold font-poppins">{firstName}</h1>
          <p className="font-poppins text-neutral-600">{lastName}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto rounded-3xl mt-6 md:mt-10 lg:mt-16 overflow-hidden px-4 md:px-10 pb-20">
        <div className="flex items-center md:justify-center relative w-full">
          <img
            src="/logo-kolosseum.png"
            alt=""
            className="h-7 md:h-8 lg:h-10"
          />
          <Link href="/">
            <Button
              size="smn"
              className="absolute right-0 inset-y-0 rounded-full bg-neutral-100"
            >
              <div className="px-2 flex items-center">
                <span>Register</span>
              </div>
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:text-center text-neutral-700 mt-8 md:mt-8 lg:mt-16 leading-[1.5]">
          Team <span className="outline-text">metal</span>, See you on March 17,
          2024
        </h1>
        <p className="md:text-center text-sm md:text-base mt-3 lg:mt-7 text-neutral-600 leading-[2]">
          Keep an eye on your email for further instructions.
        </p>

        <div className="flex items-center justify-center mt-5 md:mt-10">
          <Button className="rounded-full bg-black text-white">
            <span className="px-2">Share with friends</span>
          </Button>
        </div>
        <div className="w-full h-full bg-white grid gap-y-10 md:gap-y-10 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto md:mt-10 mt-12 lg:mt-20">
          <div className="flex justify-center">
            <VirtualCard firstName="Priyangsu" lastName="Banerjee" />
          </div>
          <div className="flex justify-center">
            <VirtualCard firstName="Masoom" lastName="Choudhury" />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <VirtualCard firstName="Rahul" lastName="Choudhury" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCards;
