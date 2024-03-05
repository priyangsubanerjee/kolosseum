"use client";
import { Button, Input, Spacer } from "@nextui-org/react";
import React, { useEffect } from "react";
import Teamname from "./Steps/Teamname";
import Member1 from "./Steps/Member1";
import Member2 from "./Steps/Member2";
import Member3 from "./Steps/Member3";
import Review from "./Steps/Review";
import toast from "react-hot-toast";
import axios from "axios";
import Success from "./Steps/Success";

function Form() {
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

  const [formProps, setFormProps] = React.useState({
    teamName: "",
    arena: "",
    totalParicipants: 0,
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
          !formProps.member1.email.toLowerCase().includes("@kiit.ac.in")
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
            totalParicipants: 1,
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
          !formProps.member2.email.toLowerCase().includes("@kiit.ac.in")
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
            totalParicipants: 2,
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
            !formProps.member3.email.toLowerCase().includes("@kiit.ac.in")
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
              totalParicipants: 3,
            });
          }
        } else {
          setStep((s) => s + 1);
          setFormProps({
            ...formProps,
            totalParicipants: 2,
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

  const handleSubmit = async () => {
    toast.loading("Submitting...");
    setIsLoading(true);

    let checkUniqueName = await axios.post(
      "/register/api/unique-name",
      {
        name: formProps.teamName,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (checkUniqueName.data.success) {
      let registerRequest = await axios.post("/register/api", formProps, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (registerRequest.data.success) {
        setUid(registerRequest.data.pid);
        setStep(5);
        setIsLoading(false);
        toast.dismiss();
        toast.success("Registered successfully");
      } else {
        setIsLoading(false);
        toast.dismiss();
        toast.error("Failed to register");
      }
    } else {
      toast.dismiss();
      setIsLoading(false);
      toast.error("Choose a different team name");
    }
  };

  return (
    <div
      style={{
        pointerEvents: isLoading ? "none" : "all",
      }}
      className="w-full md:w-full h-full md:h-fit bg-white md:bg-white lg:rounded-lg px-6 py-16 md:p-10 border-t border-dashed lg:border-none"
    >
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

        <button className="text-sm ml-auto text-neutral-700 hover:underline flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 13a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12S22.627 4 16 4"
            />
          </svg>
          <span className="hidden md:block">Docs</span>
        </button>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <span className="bg-neutral-50 py-2 text-xs px-4 rounded-full">
          Closing in 3 days
        </span>
        <span className="bg-sky-50 py-2 text-xs px-4 rounded-full">
          16 teams registered
        </span>
      </div>
      <div className="mt-10">
        {step < 5 && (
          <>
            <div className="flex items-center justify-center whitespace-nowrap scale-90 md:scale-100">
              {[1, 2, 3, 4, 5].map((i, index) => (
                <div key={i} className="flex items-center whitespace-nowrap">
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
                <span className="text-red-400">*</span> fields are mandatory
              </span>
            </div>
          </>
        )}
      </div>
      <div className="mt-5">
        {step === 0 ? (
          <Teamname formProps={formProps} setFormProps={setFormProps} />
        ) : step === 1 ? (
          <Member1 formProps={formProps} setFormProps={setFormProps} />
        ) : step === 2 ? (
          <Member2 formProps={formProps} setFormProps={setFormProps} />
        ) : step === 3 ? (
          <Member3 formProps={formProps} setFormProps={setFormProps} />
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
      <div className="h-44 md:hidden"></div>
    </div>
  );
}

export default Form;
