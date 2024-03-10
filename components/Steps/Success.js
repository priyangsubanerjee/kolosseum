/* eslint-disable @next/next/no-img-element */
import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

function Success({ uid }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:-mt-8">
        <img
          className="h-24"
          src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
          alt=""
        />

        <h1 className="text-xl font-medium mt-5">
          Team registered successfully
        </h1>
        <div className="mt-8">
          <div className="h-12 rounded px-3 flex items-center justify-center bg-neutral-50 border-neutral-00 border">
            <span className="text-sm text-neutral-600 ml-1">
              Team unique id:
            </span>
            <span className="text-center tracking-wider ml-3 font-medium">
              {uid}
            </span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(uid);
                toast.success("Copied to clipboard");
              }}
              className="bg-white text-black border ml-2"
              size="sm"
              isIconOnly
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
        <p className="text-sm text-neutral-500 mt-9 text-center leading-7">
          <span className="text-black">Retain the team ID</span> for future
          reference, and follow us on social media for updates.
        </p>
      </div>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <Link href="https://www.instagram.com/kiitkonnexions?igsh=MTY3cnY1eWR2ZHhkNw==">
          <button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png"
              className="h-8 w-8 "
              alt=""
            />
          </button>
        </Link>
        <Link href="https://www.facebook.com/kiitkonnexions">
          <button>
            <img
              src="https://cdn.pixabay.com/photo/2021/12/10/16/37/facebook-6860914_1280.png"
              className="h-8 w-8 "
              alt=""
            />
          </button>
        </Link>
        <Link href="https://www.linkedin.com/company/kiitkonnexions/">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              className="h-8 w-8 "
              alt=""
            />
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link target="_blank" href={`https://events.konnexions.dev/vid/${uid}`}>
          <button className="flex items-center justify-center space-x-2 boder-b bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <rect
                width="320"
                height="448"
                x="96"
                y="32"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
                rx="48"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M208 80h96"
              />
              <path
                fill="currentColor"
                d="M333.48 284.51A39.65 39.65 0 0 0 304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94M371.69 448H236.31a12.05 12.05 0 0 1-9.31-4.17a13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92a12.05 12.05 0 0 1-9.31 4.17"
              />
            </svg>
            <span className="text-sm text-neutral-600">
              Get virtual id cards
            </span>
          </button>
        </Link>
      </div>

      {/* <div className="mt-4">
        <p className="text-center text-sm text-neutral-700">
          To keep a track on latest proceedings of the event, follow us on
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
      </div> */}
    </div>
  );
}

export default Success;
