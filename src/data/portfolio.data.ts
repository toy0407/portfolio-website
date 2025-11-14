import {
  LuBraces,
  LuBrain,
  LuCloud,
  LuDatabase,
  LuMonitor,
  LuServer,
} from "react-icons/lu";
import {
  FaJava,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaVectorSquare,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiDart,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiScikitlearn,
  SiFlutter,
  SiServerless,
  SiSpringboot,
  SiFirebase,
  SiSupabase,
  SiApachekafka,
  SiVercel,
  SiGithubactions,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { BiNetworkChart } from "react-icons/bi";

const email = "bose.suvro@gmail.com";
const phone = "+91 8250-937-819";

export const portfolioData = {
  personal: {
    name: "Suvro Bose",
    title: "Software Engineer | Full-Stack Developer",
    email: email,
    phone: phone,
    logo: "/assets/logo.png",
    resume:
      "https://drive.google.com/file/d/1mnbc9_YAspMWtGrSG3luoA7InHqL3NW8/view?usp=drive_link",
  },
  analytics: {
    trackablePages: ["/"],
  },
  skills: {
    categories: [
      {
        key: "languages",
        label: "Languages",
        description: "Core programming languages I use to build.",
        icon: LuBraces,
        items: [
          { label: "Java", icon: FaJava },
          { label: "Dart", icon: SiDart },
          { label: "TypeScript", icon: SiTypescript },
          { label: "JavaScript", icon: SiJavascript },
        ],
      },
      {
        key: "frontend",
        label: "Frontend",
        description: "Frameworks and tools for delightful UIs.",
        icon: LuMonitor,
        items: [
          { label: "Flutter", icon: SiFlutter },
          { label: "Next.js", icon: RiNextjsFill },
          { label: "React", icon: FaReact },
          { label: "Tailwind CSS", icon: SiTailwindcss },
        ],
      },
      {
        key: "backend",
        label: "Backend",
        description: "Server-side frameworks and API tooling.",
        icon: LuServer,
        items: [
          { label: "Node.js", icon: FaNodeJs },
          { label: "Express", icon: SiExpress },
          { label: "Serverless", icon: SiServerless },
          { label: "Spring Boot", icon: SiSpringboot },
          { label: "Firebase", icon: RiFirebaseFill },
          { label: "Supabase", icon: SiSupabase },
          { label: "Kafka", icon: SiApachekafka },
          { label: "REST APIs", icon: TbApi },
        ],
      },
      {
        key: "databases",
        label: "Databases",
        description: "Data stores used across projects.",
        icon: LuDatabase,
        items: [
          { label: "PostgreSQL", icon: SiPostgresql },
          { label: "MongoDB", icon: SiMongodb },
          { label: "MySQL", icon: SiMysql },
          { label: "Redis", icon: DiRedis },
        ],
      },
      {
        key: "devopsAndCloud",
        label: "DevOps & Cloud",
        description: "Infra, CI/CD, and cloud platforms.",
        icon: LuCloud,
        items: [
          { label: "Docker", icon: SiDocker },
          { label: "Kubernetes", icon: SiKubernetes },
          { label: "AWS", icon: FaAws },
          { label: "Vercel", icon: SiVercel },
          { label: "GitHub Actions", icon: SiGithubactions },
        ],
      },
      {
        key: "ai",
        label: "AI",
        description: "AI/ML tools and concepts.",
        icon: LuBrain,
        items: [
          { label: "LLM", icon: BiNetworkChart },
          { label: "RAG", icon: FaRobot },
          { label: "OpenAI API", icon: SiOpenai },
          { label: "LangChain", icon: SiLangchain },
          { label: "Vector DBs", icon: FaVectorSquare },
        ],
      },
    ],
  },
  navbar: {
    menuItems: [
      "About",
      "Skills",
      "Projects",
      "Experience",
      // "Testimonials",
      "Contact",
    ],
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
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/toy0407/",
    },
    {
      name: "LeetCode",
      icon: "leetcode",
      url: "https://leetcode.com/toy0407",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/toy0407",
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/toy_0407",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/toy0407",
    },
  ],
  cta: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    buttonText: "Say Hi!",
    buttonLink: `mailto:${email}`,
  },
};
