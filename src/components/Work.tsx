"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the types for the sections
type ExperienceSection = "research" | "fullTime" | "intern";

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  image: string;
}

const Work = () => {
  const [selectedSection, setSelectedSection] =
    useState<ExperienceSection>("fullTime");

  // Define the experiences object with strict typing
  const experiences: Record<ExperienceSection, Experience> = {
    research: {
      title: "Graduate Student Assistant",
      company: "University Of Florida",
      duration: "06/2021 – Present",
      responsibilities: [
        "Developed a cutting-edge image annotation tool for NASA using Angular and Django’s MVC framework with over 30 data models, integrating Meta’s “Segment Anything” model for advanced machine learning training.",
        "Leveraged NGINX and Docker for optimized request handling and streamlined deployments, with AWS Lambda triggers on S3 and CI/CD via GitHub Actions for automated deployment on AWS EC2.",
        "Trained a VGG16-based convolutional neural network (CNN) to detect nutrient deficiencies in potato leaves, achieving 89.2% accuracy; leveraged Seaborn for clear visualization of complex data, enhancing result interpretation.",
      ],
      image: "/uf.png", // Replace with the actual path or URL
    },

    fullTime: {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      duration: "08/2021 – 12/2022",
      responsibilities: [
        "Engineered and deployed scalable, high-performance web applications for Bayers, using a combination of Angular for the frontend and Node.js for the back end, hosted on AWS infrastructure.",
        "Developed RESTful APIs and microservices using Node.js and Express, integrated with PostgreSQL, and deployed via Amazon EKS, boosting data processing efficiency by 25%.",
        "Integrated AWS Cognito with API Gateway for secure microservices authentication, managing 50,000+ users, enhancing security and scalability.",
        "Used AWS CloudFormation for streamlined multi-region deployments, reducing errors, and employed CloudWatch Logs for proactive monitoring, enhancing system reliability by 20%.",
        "Collaborated in an Agile environment, using user stories to guide development, participate in daily Scrum meetings, and adapt features based on client feedback.",
      ],
      image: "/cognizant.jpg", // Replace with the actual path or URL
    },
    intern: {
      title: "Intern",
      company: "Cognizant Technology Solutions",
      duration: "02/2021 – 05/2021",
      responsibilities: [
        "Developed advanced CRUD operations in SharePoint using SPFx, C# for CSOM forms, and ASP.NET Web Forms, resulting in a 25% improvement in user interaction responsiveness and enhanced site functionality.",
        "Designed and implemented automated workflows with Power Automate and PowerApps, reducing manual email notifications and report generation time by 40% and increasing process efficiency by 20%.",
      ],
      image: "/cognizant.jpg", // Replace with the actual path or URL
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.02,
      backgroundColor: "#f0f4f8",
      transition: { duration: 0.3 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    // Assign the id="work" to the Work Experience section
    <div id="work" className={"sep-border mx-6 px-2 py-16 mt-6"}>
      <div className={"flex flex-col max-w-5xl mx-auto"}>
        {/* Icon and Title for Work Experience */}
        <div className={"flex flex-row gap-4 items-center mb-8"}>
          <span className={"material-symbols-rounded text-4xl"}>
            code_blocks
          </span>{" "}
          {/* Work Icon */}
          <h1 className={"text-4xl font-bold"}>Work Experience</h1>
        </div>

        {/* Buttons for Research, Full-Time, and Intern */}
        <motion.div className="flex flex-row justify-center gap-4 mb-8">
          {["research", "fullTime", "intern"].map((section) => (
            <motion.button
              key={section}
              onClick={() => setSelectedSection(section as ExperienceSection)}
              className={`px-4 py-2 font-semibold border-b-4 transition-colors duration-300 ${
                selectedSection === section
                  ? "border-green-600"
                  : "border-transparent"
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Conditional rendering of section names */}
              {section === "research"
                ? "Research"
                : section === "fullTime"
                  ? "Full-time"
                  : "Intern"}
            </motion.button>
          ))}
        </motion.div>

        {/* Displaying the Selected Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{
              opacity: 0,
              x: selectedSection === "fullTime" ? -100 : 100,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: selectedSection === "fullTime" ? 100 : -100,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="motion-container"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex flex-row bg-gray-100 p-6 rounded-lg shadow-md relative"
            >
              {/* Image section */}
              <div className={"mr-6"}>
                <Image
                  src={experiences[selectedSection].image}
                  alt={`${experiences[selectedSection].company} logo`}
                  width={60}
                  height={60}
                  className={"rounded-full shadow-md"}
                />
              </div>

              {/* Content section */}
              <motion.div
                className="flex flex-col w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Title and Company */}
                <h2
                  className={"text-2xl font-semibold text-black dark:text-blue"}
                >
                  {experiences[selectedSection].title}
                </h2>

                <p className={"text-lg text-gray-600 mb-2"}>
                  {experiences[selectedSection].company}
                </p>

                {/* Responsibilities with green arrow */}
                <motion.ul className={"ml-6 space-y-2"}>
                  {experiences[selectedSection].responsibilities.map(
                    (item, idx) => (
                      <motion.li
                        key={idx}
                        className={"flex items-start space-x-2 text-gray-700"}
                        variants={itemVariants}
                      >
                        <span className={"text-green-500"}>&#x27A4;</span>{" "}
                        {/* Unicode for green arrow */}
                        <p className={"text-base"}>{item}</p>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              </motion.div>

              {/* Date Section (aligned to the right end) */}
              <div className={"absolute right-6 top-6 text-sm text-gray-500"}>
                {experiences[selectedSection].duration}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;
