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
  title: "Team Id Card | Kodessphere",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Get Your Virtual Id | Kodessphere",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kodessphere. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      {
        url: "https://events.konnexions.dev/og-image-800.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "https://events.konnexions.dev/og-image-800.jpeg",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

function IdCards({ params }) {
  return <VirtualCard tid={params.tid} />;
}

export default IdCards;
