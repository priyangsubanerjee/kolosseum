/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Advertisement from "@/components/Advertisement";
import { Button, Spinner } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function VirtualCard({ tid }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [spinnerOn, setSpinnerOn] = React.useState(true);
  const [isAdvertisementOn, setIsAdvertisementOn] = React.useState(false);
  const [stateText, setStateText] = React.useState("Searching for team");
  const [team, setTeam] = React.useState({});
  const searchParams = useSearchParams();
  const n_register = searchParams.get("register");

  const VirtualCard = ({ firstName, lastName }) => {
    return (
      <div className="w-[300px] md:w-[350px] relative pointer-events-none select-none">
        <img src="/idcard.png" className="h-full w-full" alt="" />
        <div className="absolute bottom-[70px] md:bottom-[85px] left-9 md:left-11">
          <h1 className="text-[20px] font-semibold font-poppins text-[#345969]">
            {firstName}
          </h1>
          <p className="font-poppins text-neutral-600">{lastName}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (tid) {
      findTeam(tid);
      if (n_register) {
        if (n_register == "true") {
          setTimeout(() => {
            setIsAdvertisementOn(true);
          }, 5000);
        }
      }
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }, [tid]);

  const findTeam = async (id) => {
    if (tid) {
      let findRequest = await axios.post(
        "/vid/teams/api",
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (findRequest.data.success) {
        setPageLoaded(true);
        setSpinnerOn(false);
        setTeam(findRequest.data.team);
      } else {
        setSpinnerOn(false);
        setStateText(findRequest.data.message);
        toast.error(findRequest.data.message);
      }
    }
  };

  const handleShare = () => {
    let msg = `We are team ${team.name} and we are participating in Kolosseum 2024. Join us in the biggest tech event of the year. Reserve your spot at now! #Kolosseum2024 #TechEvent #Konnexweb #Kognizance #Kernelkombat`;
    try {
      navigator.share({
        title: "Kolosseum 2024",
        text: msg,
        url: `https://kolosseum.konnexions.dev/vid/${tid}?register=true`,
      });
    } catch (error) {
      navigator.clipboard.writeText(msg);
      toast.success("Copied to clipboard");
    }
  };

  return (
    <div>
      {pageLoaded ? (
        <>
          <div className="max-w-7xl mx-auto rounded-3xl mt-6 md:mt-10 lg:mt-16 overflow-hidden px-4 md:px-10 pb-20 bg-white">
            <div className="flex items-center md:justify-center relative w-full">
              <Link href="/">
                <img
                  src="/logo-kolosseum.png"
                  alt=""
                  className="h-7 md:h-8 lg:h-10"
                />
              </Link>
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
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-medium text-center text-neutral-800 mt-16 md:mt-8 lg:mt-16 leading-[1.7]">
              Team{" "}
              <span className="text-[#345969] font-semibold">{team?.name}</span>
              , See you on March 17, 2024
            </h1>
            <p className="text-center text-sm md:text-base mt-3 lg:mt-7 text-neutral-600 leading-[2]">
              Keep an eye on your email for further instructions.
            </p>
            <div className="flex items-center justify-center mt-10 md:mt-10">
              <Button
                onClick={() => handleShare()}
                className="rounded-full bg-black text-white"
              >
                <span className="px-2">Share with friends</span>
              </Button>
            </div>
            <div className="w-full h-full bg-white gap-y-10 md:gap-y-10 md:gap-x-6 flex flex-wrap justify-center mx-auto md:mt-10 mt-12 lg:mt-20 relative">
              {team.members.map((member, index) => {
                let name = member.split(" ");
                let firstName = name[0];
                let lastName = name.length > 1 ? name[name.length - 1] : "";
                return (
                  <div key={index} className="flex justify-center">
                    <VirtualCard firstName={firstName} lastName={lastName} />
                  </div>
                );
              })}

              <div className="absolute inset-0 h-full w-full bg-transparent"></div>
            </div>
          </div>
          <div className="mt-20 h-72 bg-neutral-50"></div>
          {isAdvertisementOn && (
            <Advertisement close={() => setIsAdvertisementOn(false)} />
          )}
        </>
      ) : (
        <>
          <div className="fixed inset-0 h-screen w-screen bg-white flex md:items-center justify-center">
            <div className="w-[400px] md:h-[240px] px-7 py-9 bg-white rounded-lg relative">
              <img
                src="/idcard.png"
                alt=""
                className="w-32 hidden md:block absolute top-0 right-0 transform grayscale"
              />
              <img
                src="/idcard.png"
                alt=""
                className="w-32 block md:hidden grayscale mx-auto"
              />
              <img
                src="/logo-kolosseum.png"
                alt=""
                className="h-10 md:h-12 mx-auto md:mx-0 mt-14 md:mt-0"
              />

              <div className="text-neutral-600 flex items-center justify-center md:justify-start mt-6 space-x-4">
                {spinnerOn && <Spinner size="md" color="current" />}
                <span className="text-sm text-neutral-600">{stateText}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VirtualCard;
