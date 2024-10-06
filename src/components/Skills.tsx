"use client"; // This makes the file a client component

import { motion } from "framer-motion"; // Ensure any other client-side libraries are imported

// Grouping tech stack under different categories
export const techStack = {
  languages: [
    {
      name: "C Language",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
    },
    {
      name: "TypeScript",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "JavaScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "SQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "C#",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
  ],
  frameworks: [
    {
      name: "Angular",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    },
    {
      name: "React",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Next.js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Django",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Flask",
      link: "https://devicon-website.vercel.app/api/flask/original.svg?color=%23D11616",
    },
    {
      name: "Express",
      link: "https://devicon-website.vercel.app/api/express/original.svg?color=%230FC716",
    },
    {
      name: "Flutter",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg",
    },
    {
      name: "Tailwind CSS",
      link: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
    },
    {
      name: "Webpack",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
    {
      name: "GraphQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "Redux",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    // {
    //   name: "Axios",
    //   link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-original.svg",
    // },
  ],
  databases: [
    {
      name: "MySQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Amazon RDS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonaws/amazonaws-original.svg",
    },
    {
      name: "DynamoDB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
    },
    {
      name: "MongoDB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Microsoft SQL Server",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
  ],
  cloud: [
    {
      name: "AWS",
      link: "https://devicon-website.vercel.app/api/amazonwebservices/original.svg",
    },
    {
      name: "Azure",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Docker",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ],
  devOps: [
    {
      name: "GitHub Actions",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Jenkins",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "Nginx",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
      name: "Linux",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ],
  tools: [
    {
      name: "JIRA",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Postman",
      link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Git",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "Bitbucket",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    },
    // {
    //   name: "Power BI",
    //   link: "https://github.com/devicons/devicon/tree/v2.16.0/icons/powerbi/powerbi-plain.svg",
    // },
    {
      name: "Figma",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    // This link is a placeholder; please replace it if you have a specific logo.
  ],
};

const Skills = () => {
  return (
    <div className={"sep-border mx-6 px-2 py-16 mt-6"}>
      <div className={"flex flex-col max-w-5xl mx-auto"}>
        {/* Skills heading with icon */}
        <div className={"flex flex-row gap-4 items-center mb-8"}>
          <span className={"material-symbols-rounded mr-1 scale-[200%] mx-1"}>
            build
          </span>
          <h1 className={"text-4xl font-bold"} id={"skills"}>
            Skills
          </h1>
        </div>

        {/* Languages Section */}
        <div className="skill-section">
          <h2 className="section-title">Languages</h2>
          <div className="grid-container">
            {techStack.languages.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="skill-card"
              >
                <div className="flex items-center">
                  <img
                    alt={el.name}
                    src={el.link}
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-icon.png")
                    }
                    className="w-12 h-12 mr-6"
                  />
                  <h4 className="text-lg font-semibold">{el.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="skill-section">
          <h2 className="section-title">Frameworks</h2>
          <div className="grid-container">
            {techStack.frameworks.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="skill-card"
              >
                <div className="flex items-center">
                  <img
                    alt={el.name}
                    src={el.link}
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-icon.png")
                    }
                    className="w-12 h-12 mr-6"
                  />
                  <h4 className="text-lg font-semibold">{el.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Section */}
        <div className="skill-section">
          <h2 className="section-title">Cloud</h2>
          <div className="grid-container">
            {techStack.cloud.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="skill-card"
              >
                <div className="flex items-center">
                  <img
                    alt={el.name}
                    src={el.link}
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-icon.png")
                    }
                    className="w-12 h-12 mr-6"
                  />
                  <h4 className="text-lg font-semibold">{el.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="skill-section">
          <h2 className="section-title">Tools</h2>
          <div className="grid-container">
            {techStack.tools.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="skill-card"
              >
                <div className="flex items-center">
                  <img
                    alt={el.name}
                    src={el.link}
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-icon.png")
                    }
                    className="w-12 h-12 mr-6"
                  />
                  <h4 className="text-lg font-semibold">{el.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .skill-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: var(--text-color);
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(200px, 1fr)
          ); /* Responsive columns */
          gap: 20px;
          padding: 20px;
        }

        .skill-card {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 12px;
          border: 2px solid #e2e8f0; /* Box border */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: scale(1.05);
        }

        img {
          margin-bottom: 0;
        }

        h4 {
          font-size: 16px;
          color: var(--text-color);
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(
              2,
              1fr
            ); /* Adjust to 2 columns for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .grid-container {
            grid-template-columns: repeat(
              1,
              1fr
            ); /* Stack in 1 column for very small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
