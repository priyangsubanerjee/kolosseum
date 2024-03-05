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
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="md:flex lg:p-8 md:space-x-6">
        <Eventdetails />
        <Form />
      </div>
    </main>
  );
}
