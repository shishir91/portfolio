import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Dot } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "July 2024 - Present",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            Full Stack MERN Developer
          </h1>
          <p className="font-bold">
            Sync Technologies Pvt. Ltd. | Kathmandu, Nepal
          </p>
          <ul>
            <li className="flex">
              <Dot /> Leading development of Digital Loyalty Solutions and Smart
              Business Card projects.
            </li>
            <li className="flex">
              <Dot /> Developing and customizing scalable web applications using
              MERN stack.
            </li>
            <li className="flex">
              <Dot /> Collaborating with cross-functional teams to ensure
              high-quality deliverables.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jan 2024 – May 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            MERN Stack Intern
          </h1>
          <p className="font-bold">Oppam’s Technologies | Lalitpur, Nepal</p>
          <ul>
            <li className="flex">
              <Dot /> Contributed to projects like Bus Ticketing System, Zenosho
              Energy, and Oppam’s Tech Website.
            </li>
            <li className="flex">
              <Dot /> Developed and tested web applications using React,
              Node.js, Express, and MongoDB.
            </li>
            <li className="flex">
              <Dot /> Performed code reviews and collaborated with senior
              developers to enhance performance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Oct 2023 – Jan 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            Web Developer Intern
          </h1>
          <p className="font-bold">Amsoft Technologies | Kathmandu, Nepal</p>
          <ul>
            <li className="flex">
              <Dot /> Worked on Mutual Funds, NEPSE, and Banking projects.
            </li>
            <li className="flex">
              <Dot /> Gained hands-on experience in frontend and backend
              development.
            </li>
            <li className="flex">
              <Dot /> Strengthened skills in database management and RESTful API
              development.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: " Apr 2022 – Oct 2022 ",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            Customer Service Representative
          </h1>
          <p className="font-bold">Kalash Communications | Lalitpur, Nepal</p>
          <ul>
            <li className="flex">
              <Dot /> Provided technical support for Worldlink Communications.
            </li>
            <li className="flex">
              <Dot /> Developed problem-solving and communication skills while
              handling customer issues.
            </li>
            <li className="flex">
              <Dot /> Assisted with network troubleshooting and client issue
              resolution.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Dec 2019 – Jan 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            BSc. (Hons) Computer Systems Engineering
          </h1>
          <p className="font-bold">
            ISMT College | University of Sunderland | Kathmandu, Nepal
          </p>
        </div>
      ),
    },
    {
      title: "Jul 2017 – Oct 2019",
      content: (
        <div>
          <h1 className="text-neutral-200 text-lg font-bold mb-2">
            High School (+2 Science)
          </h1>
          <p className="font-bold">Caspian Valley College | Lalitpur, Nepal</p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
