/* eslint-disable @next/next/no-img-element */
import Eventdetails from "@/components/Eventdetails";
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

export const metadata = {
  title: "Ultimate hackathon, Kolosseum - Konnexions",
  description:
    "Gear up! Konnexions is back with the ultimate hackathon, Kolosseum. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Code. Collaborate. Conquer | Kolosseum",
    description:
      "Gear up! Konnexions is back with the ultimate hackathon, Kolosseum. Brace yourself for an exhilarating journey of problem-solving, collaboration, and cutting-edge development. Whether you're a coding maestro or a budding genius, this is your chance to showcase your talent and make waves in the digital realm. Don't let this opportunity slip through your fingertips! Secure your spot now —register fast!",
    type: "website",
    authors: ["Konnexions", "KIIT"],
    images: [
      {
        url: "https://kolesseum.konnexions.dev/og-image-800.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://kolesseum.konnexions.dev/og-image-800.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen h-fit bg-neutral-100">
      <div className="md:flex h-fit lg:p-8 md:space-x-6">
        <Eventdetails />
        <Form />
      </div>
    </main>
  );
}
