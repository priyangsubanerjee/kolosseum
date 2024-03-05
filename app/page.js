/* eslint-disable @next/next/no-img-element */
import Form from "@/components/Form";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function Home() {
  return (
    <main className="flex lg:min-h-[900px] h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 flex-col items-center justify-between p-24 relative">
      <img
        src="https://www.pixel4k.com/wp-content/uploads/2020/10/movement-colors-abstract-4k_1602440202.jpg.webp"
        className="fixed inset-0 h-full w-full brightness-50 grayscale object-cover"
        alt=""
      />

      <div className="absolute inset-0 h-full w-full lg:flex justify-center lg:p-10">
        <div className="w-full md:mx-auto lg:mx-0 lg:min-h-0 h-fit pb-5 md:pb-8 lg:pb-0 md:w-[700px] lg:w-[430px] shrink-0 flex flex-col lg:h-full bg-black/10 backdrop-blur-xl overflow-hidden lg:rounded-l-xl relative">
          <div className="py-4 px-4 flex justify-between">
            <div>
              <button className="text-neutral-300 hover:underline text-sm flex items-center space-x-1">
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
            </div>
            <Button
              size="sm"
              className="text-neutral-200 bg-transparent border border-neutral-700 rounded-full h-fit"
            >
              <div className="flex items-center space-x-2 px-3 py-2">
                <span className=" font-medium text-sm">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="md:p-3">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/06/IMG_0058.jpeg"
              alt=""
              className="md:rounded-lg h-[250px] w-full object-cover"
            />
          </div>
          <div className="px-6 mt-6">
            <h1 className="text-white text-4xl lg:text-4xl font-jost font-semibold">
              Kolesseum
            </h1>
            <p className="text-neutral-300 mt-3 text-sm leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
              vero nemo aspernatur neque nam quam consectetur tempora, quas
              nobis impedit quisquam repudiandae molestiae? Quam ducimus
              similique expedita aperiam delectus.
            </p>
            <div className="mt-6">
              <div className="flex items-center w-full text-white">
                <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#fff"
                      d="M195.368 60.632H60.632v134.736h134.736z"
                    />
                    <path
                      fill="#ea4335"
                      d="M195.368 256L256 195.368l-30.316-5.172l-30.316 5.172l-5.533 27.73z"
                    />
                    <path
                      fill="#188038"
                      d="M0 195.368v40.421C0 246.956 9.044 256 20.21 256h40.422l6.225-30.316l-6.225-30.316l-33.033-5.172z"
                    />
                    <path
                      fill="#1967d2"
                      d="M256 60.632V20.21C256 9.044 246.956 0 235.79 0h-40.422c-3.688 15.036-5.533 26.101-5.533 33.196c0 7.094 1.845 16.24 5.533 27.436c13.41 3.84 23.515 5.76 30.316 5.76c6.801 0 16.906-1.92 30.316-5.76"
                    />
                    <path fill="#fbbc04" d="M256 60.632h-60.632v134.736H256z" />
                    <path
                      fill="#34a853"
                      d="M195.368 195.368H60.632V256h134.736z"
                    />
                    <path
                      fill="#4285f4"
                      d="M195.368 0H20.211C9.044 0 0 9.044 0 20.21v175.158h60.632V60.632h134.736z"
                    />
                    <path
                      fill="#4285f4"
                      d="M88.27 165.154c-5.036-3.402-8.523-8.37-10.426-14.94l11.689-4.816c1.06 4.042 2.913 7.175 5.558 9.398c2.627 2.223 5.827 3.318 9.566 3.318c3.823 0 7.107-1.162 9.852-3.487c2.746-2.324 4.127-5.288 4.127-8.875c0-3.672-1.449-6.67-4.345-8.994c-2.897-2.324-6.535-3.486-10.88-3.486h-6.754v-11.57h6.063c3.739 0 6.888-1.011 9.448-3.033c2.56-2.02 3.84-4.783 3.84-8.303c0-3.132-1.145-5.625-3.435-7.494c-2.29-1.87-5.188-2.813-8.708-2.813c-3.436 0-6.164.91-8.185 2.745a16.115 16.115 0 0 0-4.413 6.754l-11.57-4.817c1.532-4.345 4.345-8.185 8.471-11.503c4.127-3.318 9.398-4.985 15.798-4.985c4.733 0 8.994.91 12.767 2.745c3.772 1.836 6.736 4.379 8.875 7.613c2.14 3.25 3.2 6.888 3.2 10.93c0 4.126-.993 7.613-2.98 10.476c-1.988 2.863-4.43 5.052-7.327 6.585v.69a22.248 22.248 0 0 1 9.398 7.327c2.442 3.284 3.672 7.208 3.672 11.79c0 4.58-1.163 8.673-3.487 12.26c-2.324 3.588-5.54 6.417-9.617 8.472c-4.092 2.055-8.69 3.1-13.793 3.1c-5.912.016-11.369-1.685-16.405-5.087m71.797-58.005l-12.833 9.28l-6.417-9.734l23.023-16.607h8.825v78.333h-12.598z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-sm">Sunday, 17th march, 2023</span>
              </div>
              <div className="flex items-center w-full text-white mt-3">
                <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.54"
                    height="28"
                    viewBox="0 0 256 367"
                  >
                    <path
                      fill="#34a853"
                      d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                    />
                    <path
                      fill="#fbbc04"
                      d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                    />
                    <path
                      fill="#4285f4"
                      d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                    />
                    <path
                      fill="#1a73e8"
                      d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                    />
                    <path
                      fill="#ea4335"
                      d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                    />
                  </svg>
                </div>

                <span className="ml-3 text-sm">Campus, 14</span>
              </div>
            </div>
            <Button className="md:hidden w-full bg-white text-black mt-12 mb-8 rounded-full h-fit">
              <div className="flex items-center justify-center py-3 text-base space-x-2">
                <span className="font-medium">Register now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipTRightUser0">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <circle cx="24" cy="12" r="8" fill="#555" />
                        <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                        <path d="m30 36l-8 8l-4-4" />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipTRightUser0)"
                  />
                </svg>
              </div>
            </Button>
            <div className="hidden lg:flex items-center justify-center mt-14 text-neutral-200">
              <Link
                class="md:ml-10"
                href={"https://www.instagram.com/sanjayarora"}
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                      ></path>
                      <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m17.5 6.51l.01-.011"
                      ></path>
                    </g>
                  </svg>
                </button>
              </Link>
              <Link class="ml-6" href={"https://www.facebook.com/"}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link href={"https://www.linkedin.com/"}>
                <button class="ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:mx-auto md:max-w-[700px] lg:mx-0 lg:max-w-[650px] bg-neutral-900 backdrop-blur-xl lg:-translate-x-[1px] min-h-screen md:min-h-0 lg:min-h-0 lg:h-full pb-16 lg:rounded-r-xl px-0 md:px-10 lg:px-0">
          <Form />
        </div>
      </div>
    </main>

    // <main>
    //   <div className="h-16 border-b border-neutral-800 flex items-center px-6">
    //     <h2 className="text-neutral-400 font-jost text-2xl">
    //       Konnexions <span className="text-white">Kolesseum</span>
    //     </h2>
    //   </div>
    // </main>
  );
}
