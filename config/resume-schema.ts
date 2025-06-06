import type { ResumeSchema } from "../types/resume";

export const title = `Senior Software Engineer`;

export const headline = `${title} with 8+ years of experience delivering modern frontend applications, designing robust APIs, and building scalable, distributed backend systems. A GenAI enthusiast passionate about creating user-centric experiences and data-driven platforms across the full stack.`;

export const resumeSchema: ResumeSchema = {
  work: [
    {
      companyName: "Snyk",
      title: "Full Stack Engineer",
      location: "Zurich, Switzerland - Hybrid",
      startDate: "May 2024",
      endDate: "Present",
      description: [
        "Led UI development for a strategic 2025 initiative, delivering a new web interface enabling enterprise customers to define custom SAST sanitizers. Orchestrated cross-team collaboration with product, designers and backend engineers and managed the complete UI development lifecycle (planning, organization, execution) using Vue 3, TypeScript, Vite, Vitest, Playwright, and Storybook.",
        "Championed company-wide AI adoption, participating in internal trials of cutting-edge GenAI tools (e.g., Gemini, Claude, Windsurf, Cursor). Delivered company-wide presentations illustrating how GenAI-enhanced workflows can significantly boost team and developer productivity.",
        "Enhanced Snyk’s Open Source offering by designing and implementing features for Deepcode AI, a Software Composition Analysis (SCA) scanner leveraging Program Analysis techniques. Developed and deployed Dockerized microservices using Golang, TypeScript, and Node.js across multiple Kubernetes clusters (AWS, GCP) using Helm Charts, and implemented REST APIs adhering to JSON API specifications.",
        "Enhanced scanner performance by implementing a Redis caching layer, optimizing concurrency for I/O-bound tasks, and fine-tuning Worker Threads for CPU-intensive computations. These strategies, monitored using Datadog, Prometheus, and OpenTelemetry, significantly reduced scan processing times and improved throughput and response rates during high-demand scenarios.",
      ],
    },
    {
      companyName: "Frontiers",
      title: "Technical Lead",
      location: "Zurich, Switzerland - Hybrid",
      startDate: "Feb 2023",
      endDate: "May 2024",
      description: [
        "Led a team of 6 developers in the development and launch of Brink UI, a Vue 3 Component Library built in TypeScript, aligned with a new Design System. Delivered the library from inception to alpha within 5 months, piloted across multiple projects. The library’s adoption reduced UI development time by 30%, while enhancing cross-project consistency and streamlining component reuse and maintenance.",
        "Led DevOps efforts within the team, implementing CI/CD pipelines using monorepo tooling (Lerna, NX, Node.js, GitHub Actions) and streamlining release processes (alpha, beta, stable) for efficient distribution via the NPM registry. Established a collaborative release review process with Designers and QAs, reducing defect rates and enhancing cross-functional teamwork focused on quality.",
        "Conducted research into open-source libraries and build tooling to ensure compatibility with frameworks such as Vite, Nuxt.js, and Tailwind. Developed custom Storybook plugins using AST parsing to enhance the Vue authoring experience. Contributed to the Storybook roadmap, identifying and addressing key bugs within the Vue ecosystem.",
      ],
    },
    {
      companyName: "Meta (Facebook)",
      title: "Frontend Engineer",
      location: "Zurich, Switzerland - Hybrid",
      startDate: "Jun 2022",
      endDate: "Feb 2023",
      isContract: true,
      description: [
        "Collaborated with the Mapillary team (acquired by Meta) to integrate their platforms and infrastructure into Meta’s ecosystem. Developed a strategic roadmap for the gradual migration and worked closely with stakeholders to identify and implement effective solutions.",
        "Partnered with the Facebook and Instagram Design System teams to explore the deployment of an independent Design System/Component Library tailored for Mapillary products, with a potential Headless system based on Facebook’s library.",
        "Led the rewrite of the Mapillary website, migrating from Next.js to React, PHP, and Facebook CMS. Achieved a 36% improvement in Accessibility, a 17% boost in Performance, and a 25% increase in SEO scores. Enhanced Core Web Vitals, reducing First Contentful Paint (FCP) by 20% and Largest Contentful Paint (LCP) by 60%, significantly improving user experience. Spearheaded the implementation of internationalization (i18n) for Mapillary web apps (Angular, TypeScript), enabling localization across 24 languages to improve accessibility and reach.",
      ],
    },
    {
      companyName: "Tundra",
      title: "Senior Frontend Engineer",
      location: "Zurich, Switzerland - Hybrid",
      startDate: "Nov 2021",
      endDate: "Jun 2022",
      description: [
        "Pioneered web security enhancements on WholesaleCoop.com by designing an improved authentication strategy and implementing the entire UI authentication flow.",
        "Directed Tundra.com’s e-commerce platform transition to a hybrid rendering model using Next.js, yielding a 20-40% improvement in Core Web Vitals metrics.",
      ],
    },
    {
      companyName: "Tray.ai",
      title: "Senior Frontend Engineer",
      location: "London, UK - Remote",
      startDate: "Jan 2021",
      endDate: "Oct 2021",
      description: [
        "Led the transition of Tray Documentation from Gatsby to Next.js, creating a custom compiler for interactive page generation. This improved the editing experience for technical writers and set new stylistic standards.",
      ],
    },
    {
      companyName: "OVO Energy | Noble Ltd | London Borough of Hackney",
      title: "Software Developer",
      location: "London, UK - Hybrid",
      startDate: "Sep 2016",
      endDate: "Jan 2021",
      description: [
        "At OVO, I developed an interactive map across Web, Android, and iOS using React, React Native, Mapbox and React Map GL.",
        "At Noble, I contributed to the development of Noble Vision, a real-time network threat dashboard, transitioning the app from an Electron-based desktop application to a web-based solution using React, Redux, TypeScript, and GraphQL.",
        "At Hackney, I built web features using Angular, TypeScript, C#, and .NET Core",
      ],
    },
  ],
};

export const skillGroups: Array<{ groupName: string; skills: string[] }> = [
  {
    groupName: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "PHP", "HTML", "CSS"],
  },
  {
    groupName: "Web Technologies",
    skills: [
      "React",
      "Node.js",
      "Next.js",
      "Express",
      "Vue",
      "Angular",
      "GraphQL",
    ],
  },
  {
    groupName: "DevOps Tools",
    skills: ["Docker", "Kubernetes", "Helm", "CircleCI", "GitHub Actions"],
  },
  {
    groupName: "Database Systems & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "NATS"],
  },
  {
    groupName: "Cloud Platforms",
    skills: ["AWS", "Google Cloud Platform"],
  },
  {
    groupName: "Soft Skills",
    skills: [
      "Communication",
      "Problem-solving",
      "Team Collaboration",
      "Mentoring",
    ],
  },
] as const;
