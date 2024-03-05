import { Button } from "@nextui-org/react";
import React from "react";

function Eventdetails() {
  return (
    <div className="w-full lg:max-w-[400px] shrink-0">
      <div className="h-fit p-5 rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <img
            src="https://ksac.kiit.ac.in/wp-content/uploads/2019/08/university-logo-retina.png"
            className="h-12"
            alt=""
          />
          <img
            src="https://ksac.kiit.ac.in/wp-content/uploads/2020/06/konnexions.png"
            className="h-16"
            alt=""
          />
        </div>
        <div className="mt-4">
          <img
            src="https://www.apple.com/newsroom/videos/media/eyesight/posters/Apple-WWDC23-Vision-Pro-EyeSight-230605.jpg.large_2x.jpg"
            className="h-[250px] object-cover w-full rounded-md"
            alt=""
          />
        </div>
        <div className="mt-8">
          <h1 className="text-neutral-800 text-3xl lg:text-3xl font-light">
            <span className="font-semibold">Kolesseum</span>{" "}
            <span className="text-indigo-400">✲</span> 2024
          </h1>
          <p className="text-neutral-500 mt-3 text-xs leading-7 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
            vero nemo aspernatur neque nam quam consectetur tempora, quas nobis
            impedit quisquam repudiandae molestiae? Quam ducimus similique
            expedita aperiam delectus.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="text-indigo-600"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  stroke="currentColor"
                  stroke-width="1"
                  d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1"
                  d="M7 4V2.5M17 4V2.5M2.5 9h19"
                />
                <path
                  fill="currentColor"
                  d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                />
              </g>
            </svg>
            <p className="text-sm ml-2">17th march, 2023</p>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
              className="text-teal-600"
            >
              <path
                fill="currentColor"
                d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
              />
              <path
                fill="currentColor"
                d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320"
              />
            </svg>

            <p className="text-sm ml-2">Campus 14, KIIT University</p>
          </div>
        </div>
        <div className="mt-16 flex justify-between">
          <button className="text-neutral-900 hover:underline text-sm flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M7.067 12.926a2.192 2.192 0 0 0-.016 1.009C4.49 13.573 3 11.764 3 10v-.5A1.5 1.5 0 0 1 4.5 8h6.023c.015.355.127.701.328 1H4.5a.5.5 0 0 0-.5.5v.5c0 1.253 1.088 2.6 3.067 2.926M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5m0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5m3.584 5.081l.283-.75c.258-.68 1.062-1.016 1.74-.727l.388.166c.473.202.865.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.024.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.066 1.066 0 0 1 1.034-.323l1.225.29c.971-.607 1.492-1.46 1.562-2.56l-.878-.86a.937.937 0 0 1-.221-1.008"
              />
            </svg>
            <span>Contact us</span>
          </button>
          <Button className="text-neutral-900 bg-neutral-200 rounded-full hover:underline text-sm flex items-center space-x-1">
            <div className="flex items-center space-x-1 px-3">
              <span>Login</span>
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
      </div>
    </div>
  );
}

export default Eventdetails;
