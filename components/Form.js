/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Button,
  Input,
  Skeleton,
  Spacer,
  Spinner,
  Tooltip,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import Teamname from "./Steps/Teamname";
import Member1 from "./Steps/Member1";
import Member2 from "./Steps/Member2";
import Member3 from "./Steps/Member3";
import Review from "./Steps/Review";
import toast from "react-hot-toast";
import axios from "axios";
import Success from "./Steps/Success";
import { NotifyTeam } from "@/helper/notify";
import { signIn, signOut, useSession } from "next-auth/react";

function Form() {
  const session = useSession();
  const lastDate = new Date("2024-03-16T23:59:59");
  let today = new Date();
  //   let differenceInDays = Math.floor(
  //     (lastDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  //   );

  const stepLabels = [
    "Team details",
    "Member 1",
    "Member 2",
    "Member 3 (optional)",
    "Review",
    "Success",
  ];
  const [step, setStep] = React.useState(0);
  const [uid, setUid] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [registeredTeams, setRegisteredTeams] = React.useState(null);
  const [userAgentWarning, setUserAgentWarning] = React.useState(null);

  const [formProps, setFormProps] = React.useState({
    teamName: "",
    arena: "",
    totalParticipants: 0,
    member1: {
      name: "",
      roll: "",
      email: "",
      phone: "",
    },
    member2: {
      name: "",
      roll: "",
      email: "",
      phone: "",
    },
    member3: {
      name: "",
      roll: "",
      email: "",
      phone: "",
    },
  });

  const handleProgress = async () => {
    switch (step) {
      case 0:
        if (formProps.teamName === "") {
          toast.error("Team name is required");
          return;
        } else if (formProps.teamName.length < 4) {
          toast.error("Atleast 4 characters for team name");
          return;
        } else if (formProps.arena === "") {
          toast.error("Select arena");
          return;
        } else {
          setStep((s) => s + 1);
        }
        break;
      case 1:
        if (formProps.member1.name === "") {
          toast.error("Member name is required");
          return;
        } else if (formProps.member1.roll === "") {
          toast.error("Roll number is required");
          return;
        } else if (formProps.member1.email === "") {
          toast.error("Email is required");
          return;
        } else if (!formProps.member1.email.toLowerCase().includes("@")) {
          toast.error("Invalid email address");
          return;
        } else if (
          formProps.member1.email.toLowerCase().includes("@") &&
          !formProps.member1.email.toLowerCase().includes("kiit.ac.in")
        ) {
          toast.error("Email must end with @kiit.ac.in");
          return;
        } else if (formProps.member1.phone === "") {
          toast.error("Contact number is required");
          return;
        } else if (formProps.member1.phone.length !== 10) {
          toast.error("Ph. number should be 10 digits");
          return;
        } else {
          setStep((s) => s + 1);
          setFormProps({
            ...formProps,
            totalParticipants: 1,
          });
        }
        break;
      case 2:
        if (formProps.member2.name === "") {
          toast.error("Member name is required");
          return;
        } else if (formProps.member2.roll === "") {
          toast.error("Roll number is required");
          return;
        } else if (formProps.member2.email === "") {
          toast.error("Email is required");
          return;
        } else if (!formProps.member2.email.toLowerCase().includes("@")) {
          toast.error("Invalid email address");
          return;
        } else if (
          formProps.member2.email.toLowerCase().includes("@") &&
          !formProps.member2.email.toLowerCase().includes("kiit.ac.in")
        ) {
          toast.error("Email must end with @kiit.ac.in");
          return;
        } else if (formProps.member2.phone === "") {
          toast.error("Contact number is required");
          return;
        } else if (formProps.member2.phone.length !== 10) {
          toast.error("Ph. number should be 10 digits");
          return;
        } else {
          setStep((s) => s + 1);
          setFormProps({
            ...formProps,
            totalParticipants: 2,
          });
        }
        break;
      case 3:
        if (
          formProps.member3.name != "" ||
          formProps.member3.roll != "" ||
          formProps.member3.email != "" ||
          formProps.member3.phone != ""
        ) {
          if (formProps.member3.name === "") {
            toast.error("Member name is required");
            return;
          } else if (formProps.member3.roll === "") {
            toast.error("Roll number is required");
            return;
          } else if (formProps.member3.email === "") {
            toast.error("Email is required");
            return;
          } else if (!formProps.member3.email.toLowerCase().includes("@")) {
            toast.error("Invalid email address");
            return;
          } else if (
            formProps.member3.email.toLowerCase().includes("@") &&
            !formProps.member3.email.toLowerCase().includes("kiit.ac.in")
          ) {
            toast.error("Email must end with @kiit.ac.in");
            return;
          } else if (formProps.member3.phone === "") {
            toast.error("Contact number is required");
            return;
          } else if (formProps.member3.phone.length !== 10) {
            toast.error("Ph. number should be 10 digits");
            return;
          } else {
            setStep((s) => s + 1);
            setFormProps({
              ...formProps,
              totalParticipants: 3,
            });
          }
        } else {
          setStep((s) => s + 1);
          setFormProps({
            ...formProps,
            totalParticipants: 2,
          });
        }
        break;

      case 4:
        if (
          formProps.member1.email === formProps.member2.email ||
          formProps.member1.email === formProps.member3.email ||
          formProps.member2.email === formProps.member3.email
        ) {
          toast.error("Emails should be unique");
          setStep(1);
          return;
        } else if (
          formProps.member1.roll === formProps.member2.roll ||
          formProps.member1.roll === formProps.member3.roll ||
          formProps.member2.roll === formProps.member3.roll
        ) {
          toast.error("Roll numbers should be unique");
          setStep(1);
          return;
        } else if (
          formProps.member1.phone === formProps.member2.phone ||
          formProps.member1.phone === formProps.member3.phone ||
          formProps.member2.phone === formProps.member3.phone
        ) {
          toast.error("Phone numbers should be unique");
          setStep(1);
          return;
        } else {
          handleSubmit();
        }
    }
  };

  const TrimFields = () => {
    let formPropsCopy = { ...formProps };
    formPropsCopy.teamName = formPropsCopy.teamName.trim();
    formPropsCopy.arena = formPropsCopy.arena.trim();
    formPropsCopy.member1.name = formPropsCopy.member1.name.trim();
    formPropsCopy.member1.roll = formPropsCopy.member1.roll.trim();
    formPropsCopy.member1.email = formPropsCopy.member1.email.trim();
    formPropsCopy.member1.phone = formPropsCopy.member1.phone.trim();
    formPropsCopy.member2.name = formPropsCopy.member2.name.trim();
    formPropsCopy.member2.roll = formPropsCopy.member2.roll.trim();
    formPropsCopy.member2.email = formPropsCopy.member2.email.trim();
    formPropsCopy.member2.phone = formPropsCopy.member2.phone.trim();
    formPropsCopy.member3.name = formPropsCopy.member3.name.trim();
    formPropsCopy.member3.roll = formPropsCopy.member3.roll.trim();
    formPropsCopy.member3.email = formPropsCopy.member3.email.trim();
    formPropsCopy.member3.phone = formPropsCopy.member3.phone.trim();
    return formPropsCopy;
  };

  const handleSubmit = async () => {
    toast.loading("Submitting...");
    setIsLoading(true);

    let checkUniqueName = await axios.post(
      "/register/api/unique-name",
      {
        name: formProps.teamName.trim(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (checkUniqueName.data.success) {
      let registerRequest = await axios.post(
        "/register/api",
        {
          ...TrimFields(),
          gmail: session.data.user.email.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (registerRequest.data.success) {
        setUid(registerRequest.data.pid);
        setStep(5);
        setIsLoading(false);
        toast.dismiss();
        toast.success("Registered successfully");
        await NotifyTeam(
          `Team Name: ${formProps.teamName}%0AArena: ${formProps.arena}%0APid: ${registerRequest.data.pid}%0AParticipants: ${formProps.totalParticipants}%0AGmail: ${session.data.user.email}%0AName: ${session.data.user.name}`
        );
      } else {
        setIsLoading(false);
        toast.dismiss();
        toast.error(registerRequest.data.message);
      }
    } else {
      toast.dismiss();
      setIsLoading(false);
      setStep(0);
      toast.error("Choose a different team name");
    }
  };

  const UpdateRegisteredTeamCount = async () => {
    let getCountRequest = await axios.get("/register/api/team-count");
    if (getCountRequest.data.success) {
      setRegisteredTeams(getCountRequest.data.count);
    } else {
      UpdateRegisteredTeamCount();
    }
  };

  useEffect(() => {
    UpdateRegisteredTeamCount();
  }, []);

  useEffect(() => {
    let userAgent = window.navigator.userAgent;
    if (userAgent.includes("Instagram")) {
      setUserAgentWarning(true);
    }
  }, []);

  return (
    <div className="w-full md:w-full h-full relative md:h-fit">
      <div
        style={{
          pointerEvents: isLoading ? "none" : "auto",
        }}
        className="w-full md:w-full h-full relative md:h-fit bg-white md:bg-white lg:rounded-lg px-6 py-16 md:p-10 border-t border-dashed lg:border-none"
      >
        {session.status == "authenticated" ? (
          <>
            <div className="">
              <div className="flex items-center">
                <svg
                  className="h-10 w-10 lg:h-12 lg:w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                    <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" />
                    <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" />
                    <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                  </g>
                </svg>
                <h1 className="text-2xl md:text-2xl font-light ml-2">
                  <span className=" font-semibold">Team</span> registration
                </h1>
                <Button
                  onClick={() => {
                    toast.error("Dashboard window opens soon");
                  }}
                  className="text-neutral-900 absolute top-0 md:static -translate-y-1/2 md:-translate-x-0 md:translate-y-0 left-1/2 -translate-x-1/2 bg-neutral-200 rounded-full hover:underline text-sm flex items-center ml-auto"
                >
                  <div className="flex items-center px-3">
                    <span className="mr-1">Dashboard</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.48 20q-.213 0-.356-.143q-.143-.144-.143-.357t.143-.357q.143-.143.357-.143h5.904q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q18.615 5 18.385 5H12.48q-.214 0-.357-.143q-.143-.144-.143-.357t.143-.357Q12.267 4 12.481 4h5.904q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463zm.407-7.5H4.519q-.213 0-.356-.143q-.144-.144-.144-.357t.144-.357q.143-.143.356-.143h8.368l-1.968-1.971q-.14-.14-.15-.339q-.009-.198.15-.363q.159-.165.352-.168q.192-.003.358.162l2.613 2.614q.243.242.243.565q0 .323-.243.565L11.63 15.18q-.146.146-.347.153q-.201.006-.367-.159q-.16-.165-.156-.357q.003-.191.162-.35z"
                      />
                    </svg>
                  </div>
                </Button>
              </div>
              <div className="flex flex-wrap items-center mt-4 gap-3">
                <span className="bg-neutral-50 py-2 text-xs px-4 rounded-full">
                  Regitrations closed
                </span>
                <div className="bg-sky-50 py-2 text-xs px-4 rounded-full flex items-center relative">
                  {registeredTeams} teams registered
                  <Skeleton
                    isLoaded={registeredTeams !== null}
                    className="rounded-full absolute inset-0 h-full w-full"
                  />
                </div>
                <span className="bg-pink-50 py-2 text-xs px-4 rounded-full">
                  Prize pool of ₹21,000
                </span>
                <span className="bg-yellow-50 py-2 text-xs px-4 rounded-full">
                  Goodies & giveaways
                </span>
              </div>

              <div className="hidden">
                <div className="mt-16">
                  {step < 5 && (
                    <>
                      <div className="flex items-center justify-center whitespace-nowrap scale-90 md:scale-100">
                        {[1, 2, 3, 4, 5].map((i, index) => (
                          <div
                            key={i}
                            className="flex items-center whitespace-nowrap"
                          >
                            <div
                              style={{
                                background: index <= step && "rgb(217 249 157)",
                              }}
                              className="flex items-center justify-center rounded-full bg-neutral-100 h-12 w-12"
                            >
                              <p>{i}</p>
                            </div>
                            {i !== 5 && (
                              <div className="w-[30px] lg:w-[50px] h-[1px] bg-neutral-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 text-sm">
                        <span className="font-medium">{stepLabels[step]}</span>
                        <span className="text-xs text-neutral-600 ml-3">
                          <span className="text-red-400">*</span> fields are
                          mandatory
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-5">
                  {step === 0 ? (
                    <Teamname
                      formProps={formProps}
                      setFormProps={setFormProps}
                    />
                  ) : step === 1 ? (
                    <Member1
                      formProps={formProps}
                      setFormProps={setFormProps}
                    />
                  ) : step === 2 ? (
                    <Member2
                      formProps={formProps}
                      setFormProps={setFormProps}
                    />
                  ) : step === 3 ? (
                    <Member3
                      formProps={formProps}
                      setFormProps={setFormProps}
                    />
                  ) : step === 4 ? (
                    <Review formProps={formProps} setFormProps={setFormProps} />
                  ) : step === 5 ? (
                    <Success uid={uid} />
                  ) : null}
                </div>
                <div className="mt-12">
                  {step < 5 && (
                    <div className="flex items-center justify-between mt-12">
                      <Button
                        disabled={step === 0}
                        onClick={() => setStep((s) => s - 1)}
                        className="bg-neutral-100 text-neutral-900 rounded-full disabled:opacity-45 disabled:cursor-not-allowed"
                      >
                        <div className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                              <path
                                fill="currentColor"
                                d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                              />
                            </g>
                          </svg>
                          <span>Back</span>
                        </div>
                      </Button>
                      <Button
                        onClick={() => handleProgress()}
                        className="bg-black text-white rounded-full"
                      >
                        <div className="flex items-center space-x-4 px-2">
                          <span>{step === 4 ? "Submit" : "Next"}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="https://www.steelmintevents.com/wp-content/uploads/2023/03/Untitled-1.png"
                  className="w-56 md:w-64 mt-12 object-contain"
                  alt=""
                />
              </div>

              <div className="mt-32 md:mt-10">
                <div className="flex items-center justify-center">
                  <p className="text-xs md:text-sm text-neutral-500">
                    You are logged in as{" "}
                    <Tooltip content="Logout">
                      <button
                        onClick={() => signOut()}
                        className="px-2 py-1 rounded-small bg-neutral-100 text-neutral-700 cursor-pointer"
                      >
                        {session.data.user.email}
                      </button>
                    </Tooltip>
                  </p>
                </div>
              </div>
              <div className="h-44 md:hidden"></div>
            </div>
          </>
        ) : (
          <>
            <div className="pb-20 md:pb-0">
              <div>
                <svg
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#fff"
                    d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                  />
                  <path
                    fill="#e33629"
                    d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                  />
                  <path
                    fill="#f8bd00"
                    d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                  />
                  <path
                    fill="#587dbd"
                    d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                  />
                  <path
                    fill="#319f43"
                    d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4"
                  />
                </svg>
                <h1 className="text-2xl translate-y-1 inline-block font-semibold ml-3">
                  Sign in
                </h1>
              </div>

              <p className="text-sm mt-6 leading-7">
                To register, please sign in with your KIIT gmail account
              </p>

              <p className="text-sm px-3 py-1 mt-4 rounded-full bg-yellow-50 text-yellow-800 w-fit">
                Only 1 team member needs to register the team.
              </p>

              <Button
                isLoading={session.status === "loading"}
                className="mt-5 w-full md:w-fit"
                onClick={() => signIn("google")}
              >
                Sign in with google
              </Button>
            </div>
          </>
        )}
      </div>

      {userAgentWarning && (
        <div className="fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center">
          <div className="w-[95%] md:w-[500px] bg-white rounded-xl">
            <div className="p-6">
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
                    stroke-width="1.55"
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-9-8v2m0 4h.01"
                  />
                </svg>
                <h1 className="text-xl font-semibold ml-2">
                  Unsupported browser
                </h1>
              </div>
              <p className="mt-3 leading-8 text-sm text-neutral-700">
                We are sorry, but we do not support Instagram&apos;s in-app
                browser. Please open the link in your default browser.
              </p>
            </div>
            <div className="flex items-center justify-end p-6">
              <Button
                onClick={() => {
                  setUserAgentWarning(false);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
