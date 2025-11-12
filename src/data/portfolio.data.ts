import { desc } from "framer-motion/client";

const email = "bose.suvro@gmail.com";

export const portfolioData = {
  personal: {
    name: "Suvro Bose",
    email: email,
  },
  timeline: {
    title: "My Journey So Far",
    subtitle: "A timeline of my professional milestones.",
    data: [
      {
        title: "2023",
        content: {
          title: "Runo",
          subtitle:
            "Recognized for my contributions and leadership, I was promoted to Senior Software Engineer at PwC. Took on more complex projects and mentored junior developers.",
          description: [
            "Led a team of 5 engineers to deliver a critical client project ahead of schedule.",
            "Implemented performance optimizations that improved application speed by 30%.",
          ],
        },
        logo: "/assets/runo.png",
      },
      {
        title: "2022",
        content: {
          title: "PwC",
          subtitle:
            "Started my journey as a Software Engineer at PwC, focusing on building scalable web applications and contributing to open-source projects.",
          description: [
            "Developed and maintained features for a major client-facing application used by thousands of users.",
            "Collaborated with cross-functional teams to design and implement new functionalities based on client requirements.",
            "Participated in code reviews and contributed to improving code quality across the team.",
          ],
        },
        logo: "/assets/pwc.png",
      },
    ],
  },
  socials: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/toy0407",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/toy0407/",
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/toy_0407",
    },
    {
      name: "Email",
      icon: "mail",
      url: `mailto:${email}`,
    },
  ],
  cta: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    buttonText: "Get In Touch",
    buttonLink: `mailto:${email}`,
  },
};
