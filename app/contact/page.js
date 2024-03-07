/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact us - Kolosseum",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kolosseum. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {},
  openGraph: {
    title: "Contact us - Kolosseum",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kolosseum. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      //   {
      //     url: "https://kolesseum.vercel.app/og-image-800.png",
      //     width: 800,
      //     height: 600,
      //   },
      //   {
      //     url: "https://kolesseum.vercel.app/og-image-800.png",
      //     width: 1800,
      //     height: 1600,
      //   },
    ],
  },
};

function ContactUs() {
  const MemberCard = ({ name, image, phone }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={image || "https://chat.corteidh.or.cr/media/user.png"}
            className="h-[150px] w-[150px] rounded-md object-cover"
            alt=""
          />
          <Link
            className="absolute bottom-0 translate-y-1/2  left-1/2 -translate-x-1/2 "
            href={`tel:${phone}`}
          >
            <Button
              radius="full"
              isIconOnly
              className="bg-white text-neutral-700 shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="m7.85 2.703l1.937-.584a2.75 2.75 0 0 1 3.301 1.506l1.358 3.02a2.75 2.75 0 0 1-.633 3.14l-2.067 1.926c-.277.263-.067 1.288.945 3.042c1.013 1.755 1.796 2.449 2.157 2.341l2.708-.828a2.75 2.75 0 0 1 3.034 1.02l1.93 2.675a2.75 2.75 0 0 1-.339 3.606l-1.492 1.413a3.75 3.75 0 0 1-3.676.863c-3.126-.957-6.021-3.797-8.724-8.48C5.58 12.673 4.557 8.717 5.27 5.485a3.75 3.75 0 0 1 2.58-2.782"
                />
              </svg>
            </Button>
          </Link>
        </div>
        <h2 className="text-center text-lg font-medium mt-6">{name}</h2>
      </div>
    );
  };

  const members = [
    {
      name: "Swasti",
      image: "https://media.graphassets.com/n2avMhDoRqHfspM0XqU1",
      phone: "+91 97981 69103",
    },
    {
      name: "Gourav",
      image: "https://media.graphassets.com/7FFMZBhUToerVUOeYbfz",
      phone: "+91 79086 31466",
    },
    {
      name: "Sudip",
      image: "https://media.graphassets.com/ZiZyWmTTnKHSWemdVpLH",
      phone: "+91 79086 31466",
    },
    {
      name: "Priyangsu",
      image: "https://media.graphassets.com/JhnvOmnwSkaDBOHNCt3a",
      phone: "+91 9647045453",
    },
    {
      name: "Aunay",
      image: "https://media.graphassets.com/jDUP6UbrSvCyr8GMZKsg",
      phone: "+91 96744 22441",
    },
  ];

  return (
    <div className="my-12 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Link className="mx-auto" href="/">
          <img src="/logo-kolosseum.png" className="h-8 mx-auto" alt="" />
        </Link>
        <h1 className="text-2xl md:text-3xl font-medium text-center mt-10">
          Contact Us <span className="text-fuchsia-400">✲</span> OC Team
        </h1>
        <p className="text-center text-neutral-500 mt-4 leading-9">
          You can reach us any time, we are all ears to your queries and
          suggestions.
        </p>

        <div className="w-full flex flex-wrap gap-8 justify-center mt-16 max-w-xl mx-auto">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
