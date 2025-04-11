"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBulb,
  IconHome,
} from "@tabler/icons-react";
import { TimelineDemo } from "@/components/TimelineDemo";
import SkillsSection from "@/components/SkillsSection";
import { Code2 } from "lucide-react";
// import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const DATA = [
  {
    title: "Chat Collect",
    href: "https://mulcho-shipping.vercel.app",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "Connects verified users to market products on social platforms; automates order processing. ",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "Mongoose",
      "TailwindCSS",
      "Cloudinary",
      "AWS Lambda",
      "Material UI",
      "Headless UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://mulcho-shipping.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/shishir91/mulchoShipping",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/mulcho.png",
  },
  {
    title: "Snappy Chat-App ",
    href: "https://chat-app-mern-client-pi.vercel.app/",
    dates: "June 2023 - Present",
    active: true,
    description: "A real-time chat application using Socket.io and MongoDB. ",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "Mongoose",
      "TailwindCSS",
      "Socket.io",
    ],
    links: [
      {
        type: "Website",
        href: "https://chat-app-mern-client-pi.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/shishir91/Chat_App-MERN",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/chat.png",
  },
  {
    title: "Fotheby’s Auction House (Live Bidding System)",
    href: "https://github.com/shishir91/Fothebys_Auction_House",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed a real-time auction house for bidding using the MERN stack. ",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "MySQL",
      "Sequelize",
      "TailwindCSS",
      "Material UI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/shishir91/Fothebys_Auction_House",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/auction.png",
  },
  {
    title: "Fun Olympic Video Streaming Web App ",
    href: "https://github.com/shishir91/FunOlympic_Video-Streaming",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed a video streaming platform using Node.js, Express.js, and EJS template engine.",
    technologies: [
      "Node.js",
      "Express",
      "EJS",
      "JavaScript",
      "MySQL",
      "Sequelize",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/shishir91/FunOlympic_Video-Streaming",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/fun.png",
  },
];

export default function Home() {
  const words = [
    "Software Engineer",
    "Web Developer",
    "Backend Engineer",
    "MERN Stack Developer",
  ];
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Skills",
      icon: (
        <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Education & Experience",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline",
    },
    {
      title: "Projects",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/shishir91",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/shishir91",
    },
  ];
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     setIsVisible(window.scrollY > 300);
  //   };

  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);
  return (
    <>
      {/* <Navbar className="top-1" /> */}
      <div className="flex flex-col bg-black/[0.96] antialiased">
        {/* <DarkModeToggle /> */}
        <div className="fixed bottom-6 left-[37%] z-[1000]">
          {/* {isVisible && ( */}
          <FloatingDock
            desktopClassName="rounded-3xl"
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
          {/* )} */}
        </div>
        <section
          id="home"
          className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden"
        >
          <Spotlight />
          <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-10 md:pt-0">
            <center>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt="Shishir" src="/shishir.jpg" />
                  {/* <AvatarFallback>{DATA.initials}</AvatarFallback> */}
                </Avatar>
              </BlurFade>
            </center>
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Shishir Shrestha
            </h1>
            <div className="mt-4 font-bold text-xl text-neutral-300 max-w-lg text-center mx-auto">
              <FlipWords words={words} duration={1500} />
            </div>
            {/* <div className="flex items-center justify-center h-[15rem] w-full">
              <FloatingDock
                desktopClassName="rounded-3xl"
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
              />
            </div> */}
          </div>
        </section>
        <section id="skills" className="mx-40">
          <SkillsSection />
        </section>
        <section id="timeline" className="mx-40">
          <TimelineDemo />
        </section>
        <section id="projects">
          <section className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold ">Projects</h2>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </section>
        <section id="testo">
          <AnimatedTestimonials
            testimonials={[
              {
                name: "Sumit Shrestha",
                quote:
                  "Shishir's technical expertise and problem-solving skills are top-notch. A true asset to any team!",

                designation: "Founder of MulCho",
                src: "/sumit.JPG",
              },
              {
                name: "Bishal Acharya",
                quote:
                  "Working with Shishir has been a seamless experience—his code is as clean as his approach to innovation.",
                designation: "Software Developer",
                src: "/bishal.jpeg",
              },
              {
                name: "Shreeyanch Shrestha",
                quote:
                  "Shishir brings creativity and precision to every project, making complex ideas a reality.",

                designation: "Founder of Samparka, Sync Technology",
                src: "/shreeyanch.jpg",
              },
              {
                name: "Bikul Raj Koirala",
                quote:
                  "A dedicated professional with a passion for continuous learning and innovation in tech.",

                designation: "Associate Head at ISMT College",
                src: "/bikul.jpg",
              },
            ]}
          />
        </section>
        <section id="contact" className="mb-20">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    // href={DATA.contact.social.X.url}
                    href=""
                    className="text-blue-500 hover:underline"
                  >
                    on LinkedIn
                  </Link>{" "}
                  and I&apos;ll respond ASAP.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </>
  );
}
