"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import AnimateUp from "@/components/animate-up";
import { eventSpeakers } from "@/speakers";

export default function EventSpeakers() {
  const nav = useRouter();

  const NavigateSpeaker = (name: string) => {
    nav.push(`/speakers/${name}`);
  };

  return (
    <div className="flex flex-col gap-5 my-8 w-5/6 mx-auto text-center">
      <h3 className="text-3xl font-bold">
        Event <span className="text-primary">Speakers</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {eventSpeakers.map((speaker, index) => (
          <AnimateUp key={index}>
            <div className="flex flex-col items-center transition-all duration-200 ease-in-out">
              <div
                className="relative group flex justify-center items-center text-primary cursor-pointer"
                onClick={() => NavigateSpeaker(speaker.name)}
              >
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  width={200}
                  height={200}
                  className="rounded-full group-hover:opacity-60"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 absolute hidden group-hover:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-2xl">{speaker.name}</h4>
              <p className="text-sm text-primary">{speaker.role}</p>
            </div>
          </AnimateUp>
        ))}
      </div>
    </div>
  );
}
