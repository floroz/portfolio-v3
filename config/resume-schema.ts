import { ResumeSchema } from "types/resume";

export const resumeSchema: ResumeSchema = {
  work: [
    {
      companyName: "Frontiers",
      title: "Technical Lead",
      location: "Zurich, Switzerland",
      startDate: "Feb 2023",
      endDate: "Present",
      description: [
        "Led a team of 6 developers in launching Brink UI, a Vue 3 Component Library built in TypeScript and aligned with our new Design System. In just 5 months, we progressed from inception to the alpha version, which was piloted on multiple projects. Presented the first stable version to the entire Engineering department in October 2023. The adoption led to improved UI component construction time and enhanced overall productivity.",
        "Collaborated closely with Product and Design teams, leveraging comprehensive research and evaluation of existing solutions and open-source libraries. Led a design refinement process, fostering seamless interactions between Developers and Designers, improving cross-functional collaboration, and accelerating the design-to-development workflow. This approach also cultivated an MVP-oriented mindset among participants.",
        "Drove the adoption of our new design system across platforms and products, collaborating with Technical Leads and Software Architects. Cultivated an environment of continuous improvement by introducing open-source practices, fostering cross-team collaboration, and implementing comprehensive guidelines that spurred innovative approaches within the frontend engineering department.",
        "Played a pivotal leadership role in the recruitment process for frontend positions at Frontiers, where I devised a new frontend interview process and stages, ensuring quality and consistency amongst candidates. I was also entrusted with filling all key positions within the department. Additionally, I managed the hiring of frontend engineers for outsourced teams.",
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
        "Collaborated with the Mapillary team, a startup acquired by Meta, to ensure seamless integration of their platforms and infrastructure into Meta’s web ecosystem. This involved studying previous acquisitions by Meta to build effective integration strategies, liaising with key stakeholders, and partnering with the team to identify the best migration solutions. Additionally, provided a solid roadmap for the gradual transitioning of their software and products.",
        "Cooperated with the Design System Teams at Facebook and Instagram to explore opportunities for deploying an independent Design System/Component Library specifically for Mapillary products. Explored the development of a Headless system built on Facebook’s existing component library.",
        "Steered the rewriting of the Mapillary website by successfully migrating it from Next.js to the Facebook CMS. This resulted in significant improvements in key performance indicators such as Accessibility scores (improved by 36%), Performance (improved by 17%), and SEO (improved by 25%). Additionally, recorded important advancements in Core Web Vitals, with a 20% reduction in FCP and a 60% reduction in LCP.",
        "Championed the implementation of internationalization (i18n) support for Mapillary web apps (Angular, TypeScript), enabling efficient localization in 24 diverse languages.",
      ],
    },
    {
      companyName: "Tundra",
      title: "Senior Frontend Engineer",
      location: "Zurich, Switzerland",
      startDate: "Nov 2021",
      endDate: "Jun 2022",
      description: [
        "Pioneered web security improvements on WholesaleCoop.com by designing a refined authentication strategy and implementing the entire UI authentication flow.",
        "Directed Tundra.com’s e-commerce platform transition from a client-side to a hybrid rendering model using Next.js, yielding a 20-40% rise in Core Web Vitals metrics. Championed Next.js adaptation across frontend teams via workshops, demos, and paired programming.",
        "Drove the adoption of NX for the new WholeSaleCoop product in the frontend team and integrated NX with our CI/CD pipeline in CircleCI, significantly cutting CI execution time and speeding up PR to deployment phases.",
      ],
    },
    {
      companyName: "tray",
      title: "Senior Frontend Engineer",
      location: "Remote",
      startDate: "Jan 2021",
      endDate: "Oct 2021",
      description: [
        "Led Tray Documentation’s transition from Gatsby to Next.js, implementing a custom compiler for generating interactive pages. This initiative enhanced the editing experience for technical writers and set stylistic standards. Simultaneously, restructured domains of the Tray App’s frontend architecture by segmenting monolithic libraries, boosting deployment efficiency.",
      ],
    },
    {
      companyName: "OVO",
      title: "Frontend Engineer",
      location: "London, United Kingdom",
      startDate: "June 2020",
      endDate: "Jan 2021",
      description: [
        "Developed an interactive map across Web, Android, and iOS platforms using Mapbox and React Map GL. Conducted SDK provider evaluations, considering user traffic, ensuring the selection of the most efficient and cost-effective solution.",
      ],
    },
    {
      companyName: "Noble",
      title: "Frontend Engineer",
      location: "London, United Kingdom",
      startDate: "Jun 2019",
      endDate: "Feb 2020",
      description: [
        "Contributed to Noble Vision, a real-time network threat dashboard. Shifted the application from an Electron-based desktop application to a web-based solution using React, Redux, TypeScript and GraphQL.",
      ],
    },
    {
      companyName: "London Borough of Hackney",
      title: "Software Developer",
      location: "London, United Kingdom",
      startDate: "Sep 2016",
      endDate: "Jun 2019",
      description: [
        "Hired as a self-thought Software Developer. Built web features using Angular, TypeScript, C# and .NET Core 2.1.",
      ],
    },
  ],
};
