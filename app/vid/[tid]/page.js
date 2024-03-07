/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */ import {
  Button,
  Spinner,
} from "@nextui-org/react";

import VirtualCard from "../components/VirtualCard";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Team Id Card | Kolosseum",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kolosseum. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {},
  openGraph: {
    title: "Get Your Virtual Id | Kolosseum",
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

function IdCards({ params }) {
  return <VirtualCard tid={params.tid} />;
}

export default IdCards;
