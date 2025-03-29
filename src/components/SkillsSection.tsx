"use client";

import { motion } from "framer-motion";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { Database, Terminal, Server, Layers } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <Terminal className="text-blue-600" size={20} /> },
      {
        name: "JavaScript",
        icon: <IconBrandJavascript className="text-yellow-400" size={20} />,
      },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript className="text-blue-500" size={20} />,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: <IconBrandReact className="text-blue-400" size={20} />,
      },
      {
        name: "Next.js",
        icon: (
          <IconBrandNextjs
            className="text-gray-800 dark:text-white"
            size={20}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: <IconBrandTailwind className="text-teal-400" size={20} />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <IconBrandNodejs className="text-green-500" size={20} />,
      },
      {
        name: "Express.js",
        icon: <Server className="text-gray-600 dark:text-white" size={20} />,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <Database className="text-green-500" size={20} />,
      },
      {
        name: "PostgreSQL",
        icon: <Database className="text-blue-500" size={20} />,
      },
      {
        name: "MySQL",
        icon: <Database className="text-orange-500" size={20} />,
      },
    ],
  },
  {
    category: "UI Libraries",
    items: [
      {
        name: "Material UI",
        icon: <Layers className="text-blue-500" size={20} />,
      },
      {
        name: "Chakra UI",
        icon: <Layers className="text-green-500" size={20} />,
      },
      {
        name: "ShadCN",
        icon: <Layers className="text-purple-500" size={20} />,
      },
      {
        name: "Headless UI",
        icon: <Layers className="text-gray-500" size={20} />,
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "Docker",
        icon: <IconBrandDocker className="text-blue-500" size={20} />,
      },
      {
        name: "AWS",
        icon: <IconBrandAws className="text-yellow-500" size={20} />,
      },
      {
        name: "GitHub Actions",
        icon: (
          <IconBrandGithub
            className="text-gray-800 dark:text-white"
            size={20}
          />
        ),
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Skills & Tech Stack
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
