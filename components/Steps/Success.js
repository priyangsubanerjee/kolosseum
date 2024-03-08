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
          <div className="h-12 rounded px-3 flex items-center justify-center bg-neutral-50 border-neutral-400 border border-dashed">
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
        <Link href="https://www.instagram.com/kiitkonnexions/">
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
