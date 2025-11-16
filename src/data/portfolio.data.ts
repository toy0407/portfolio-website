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
  FaReact,
  FaNodeJs,
  FaAws,
  FaVectorSquare,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiDart,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiFlutter,
  SiServerless,
  SiSpringboot,
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
const currentYear = new Date().getFullYear();

export const portfolioData = {
  personal: {
    name: "Suvro Bose",
    title: "Software Engineer / Full-Stack Developer",
    email: email,
    phone: phone,
    logo: "/assets/logo.png",
    resume:
      "https://drive.google.com/file/d/1mnbc9_YAspMWtGrSG3luoA7InHqL3NW8/view?usp=drive_link",
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
  hero: {
    tagline:
      "Crafting resilient systems and delightful experiences through clean architecture and thoughtful design.",
  },
  about: {
    title: "My Side of the Story",
    bio: [
      "I’m a software engineer based in Hyderabad, and a 2023 graduate of Jadavpur University, one of India’s top engineering institutions. I love building real-world, scalable products—whether it’s mobile apps, backend systems, or AI-powered experiences—and I enjoy solving problems at both the architectural and implementation level.",
      "Outside of tech, you’ll find me gaming or cheering through every F1 and MotoGP race—because speed, strategy, and precision inspire me both on and off the track.",
    ],
    quickFacts: {
      experience: `${currentYear - 2023}+ Years`,
      projects: "10+ Completed",
      leetcode: "Top 5% Worldwide",
      codechef: "4⭐ Rated (1858)",
    },
  },
  skills: {
    title: "Tools of My Trade",
    subtitle: "A showcase of my technical proficiencies and tools I excel at.",
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
  projects: {
    title: "Where Ideas became Reality",
    subtitle:
      "A showcase of applications and tools I've built using my skills.",
    data: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern React architecture and scalable backend.",
        // image: "/assets/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        sourceCode: "https://github.com/toy0407/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.vercel.app",
        featured: true,
      },
      {
        id: 2,
        title: "AI Chat Assistant",
        description:
          "An intelligent chatbot powered by OpenAI GPT-4 with custom knowledge base integration, conversation memory, and real-time streaming responses.",
        // image: "/assets/projects/chat-ai.jpg",
        technologies: [
          "Next.js",
          "OpenAI API",
          "LangChain",
          "Vector DB",
          "Supabase",
        ],
        sourceCode: "https://github.com/toy0407/ai-chat-assistant",
        liveUrl: "https://chat-ai-demo.vercel.app",
        featured: false,
      },
      {
        id: 3,
        title: "Task Management App",
        description:
          "A collaborative project management tool with real-time updates, team workspaces, and advanced filtering. Features drag-and-drop Kanban boards and time tracking.",
        // image: "/assets/projects/task-manager.jpg",
        technologies: ["Flutter", "Firebase", "Node.js", "WebSockets"],
        sourceCode: "https://github.com/toy0407/task-manager",
        liveUrl: null,
        featured: false,
      },
      {
        id: 4,
        title: "Analytics Dashboard",
        description:
          "A comprehensive analytics platform with interactive charts, real-time data visualization, and custom reporting. Handles millions of data points with optimized performance.",
        // image: "/assets/projects/analytics.jpg",
        technologies: ["React", "D3.js", "Express", "Redis", "Docker"],
        sourceCode: "https://github.com/toy0407/analytics-dashboard",
        liveUrl: "https://analytics-demo.vercel.app",
        featured: false,
      },
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
          subtitle: "Software Development Engineer 1",
          description: [
            "Architected and deployed a scalable RBAC system with granular role and permission control, boosting access management efficiency by 60%.",
            "Automated license and add-on workflows by integrating a Payment Gateway, cutting manual effort by 70% and streamlining revenue operations.",
            "Built an AI-powered Admin Copilot enabling natural language insights and analytics, improving admin decision speed by 40%.",
          ],
        },
        logo: "/assets/runo.png",
      },
      {
        title: "2022",
        content: {
          title: "PwC",
          subtitle: "Technology Consultant Intern",
          description: [
            "Developed and implemented a Data Lake for client databases, improving data accessibility and operational efficiency.",
            "Optimized ETL workflows using AWS Glue, Athena, and S3, enabling scalable analytics and faster data-driven decisions.",
            "Identified and resolved performance bottlenecks, reducing resource utilization by 80% and boosting system efficiency.",
          ],
        },
        logo: "/assets/pwc.png",
      },
    ],
  },
  cta: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    buttonText: "Say Hi!",
    buttonLink: `mailto:${email}`,
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
  analytics: {
    trackablePages: ["/"],
  },
};
