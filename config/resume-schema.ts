import type { ResumeSchema } from "../types/resume";

export const resumeSchema: ResumeSchema = {
  work: [
    {
      companyName: "Snyk",
      title: "Software Engineer",
      location: "Zurich, Switzerland",
      startDate: "May 2024",
      endDate: "Present",
      description: [
        "Work within Snyk's Open Source on Deepcode AI, a Software Composition Analysis (SCA) tool leveraging Static Analysis to identify vulnerabilities, produce remediations, and ensure secure dependency management. The scanner operates at scale, serving thousands of enterprise customers and processing millions of build and manifest files, optimizing scan accuracy and remediation effectiveness across diverse ecosystems, programming languages, and build tools.",
        "Architected and deployed multiple microservices featuring REST APIs (JSON API, OpenAPI) and gRPC protocols, leveraging TypeScript, Node.js, and Express.js. Spearheaded the full development lifecycle—from CI/CD pipeline design using CircleCI to scalable deployments across AWS and GCP using Docker, Kubernetes, and ArgoCD—ensuring robust and reliable production environments.",
        "Enhanced SCA scanner performance through a Redis caching layer, concurrency optimizations for I/O-bound tasks, and Worker Threads for CPU-intensive processes. These enhancements significantly decreased scan processing times, improving throughput and response rates in high-demand scenarios.",
        "Designed and implemented a comprehensive data processing pipeline for ingesting scan results from Kubernetes Jobs, providing accuracy metrics that benchmark Snyk's scanner against open-source tools, ensuring high-quality scan outputs and actionable remediation insights for users.",
      ],
    },
    {
      companyName: "Frontiers",
      title: "Technical Lead",
      location: "Zurich, Switzerland",
      startDate: "Feb 2023",
      endDate: "May 2024",
      description: [
        "Led a team of 6 developers in launching Brink UI, a Vue 3 Component Library built in TypeScript and aligned with our new Design System. In just 5 months, we progressed from inception to alpha, piloted across multiple projects. Adoption led to a 30% reduction in UI development time and improved cross-project consistency, streamlining component reuse and maintenance.",
        "Served as the key individual for DevOps tasks within the team, implementing CI/CD with monorepo tooling (Lerna, NX, Node.js, GitHub Actions) and creating release pipelines (alpha, beta, stable) for efficient distribution through the NPM registry. Established a collaborative release review process with Designers and QAs, reducing defect rates and fostering quality-focused cross-functional teamwork.",
        "Conducted extensive research into open-source libraries and build tooling to ensure compatibility across teams using frameworks like Vite, Nuxt.js, and Tailwind. Developed dedicated Storybook plugins with custom Vue templating syntax via AST parsing, enhancing authoring experience. Played a key role in Storybook roadmap discussions, identifying and addressing bugs in the Vue ecosystem.",
      ],
    },
    {
      companyName: "Meta (Facebook)",
      title: "Frontend Engineer",
      location: "Zurich, Switzerland",
      startDate: "Jun 2022",
      endDate: "Feb 2023",
      isContract: true,
      description: [
        "Collaborated with the Mapillary team, a startup acquired by Meta, to integrate their platforms and infrastructure into Meta’s ecosystem. Developed a strategic roadmap for gradual migration and worked closely with stakeholders to identify effective solutions.",
        "Partnered with Facebook and Instagram Design System teams to explore deploying an independent Design System/Component Library tailored to Mapillary products, with potential for a Headless system based on Facebook’s library.",
        "Steered the rewrite of the Mapillary website, migrating from Next.js to React, PHP and Facebook CMS, achieving a 36% improvement in Accessibility, 17% boost in Performance, and 25% increase in SEO scores. Enhanced Core Web Vitals, achieving a 20% reduction in FCP and a 60% reduction in LCP, significantly improving user experience.",
        "Championed the implementation of internationalization (i18n) for Mapillary web apps (Angular, TypeScript), enabling efficient localization across 24 languages.",
      ],
    },
    {
      companyName: "Tundra",
      title: "Senior Frontend Engineer",
      location: "Zurich, Switzerland",
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
      location: "Remote",
      startDate: "Jan 2021",
      endDate: "Oct 2021",
      description: [
        "Led the transition of Tray Documentation from Gatsby to Next.js, creating a custom compiler for interactive page generation. This improved the editing experience for technical writers and set new stylistic standards.",
      ],
    },
    {
      companyName: "OVO Energy | Noble Ltd | London Borough of Hackney",
      title: "Software Developer",
      location: "London, United Kingdom",
      startDate: "Sep 2016",
      endDate: "Jan 2021",
      description: [
        "At <strong>OVO</strong>, I developed an interactive map across Web, Android, and iOS using React, React Native, Mapbox and React Map GL.",
        "At <strong>Noble</strong>, I contributed to the development of Noble Vision, a real-time network threat dashboard, transitioning the app from an Electron-based desktop application to a web-based solution using React, Redux, TypeScript, and GraphQL.",
        "At <strong>Hackney</strong>, I built web features using Angular, TypeScript, C#, and .NET Core",
      ],
    },
  ],
};
