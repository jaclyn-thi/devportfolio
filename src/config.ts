export const siteConfig = {
  name: "Jaclyn Thi",
  title: "MEng Computer Science & Engineering — MIT",
  description:
    "MEng student and software engineer focused on information retrieval, ML, and systems.",
  accentColor: "#a00514",
  social: {
    email: "jthi@mit.edu",
    linkedin: "https://www.linkedin.com/in/jaclyn-thi/",
    twitter: "",
    github: "https://github.com/jaclyn-thi",
  },
  aboutMe:
    "MEng student in Computer Science and Engineering at MIT (expected Summer 2026). I build scalable ML and retrieval systems, develop end-to-end research pipelines, and enjoy full-stack and game development. Currently working on graph foundation models for AML and RAG-style document assessment.",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "React",
    "Vue",
    "Kotlin",
    "C",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "SQL",
    "Docker",
    "Gradle",
    "Postman",
    "MongoDB",
    "Studio 3T",
    "Azure Data Studio",
  ],
  projects: [
    {
      name: "Tempo Takedown",
      description:
        "Multiplayer local rhythm-based fighting game built with Unity; designed core mechanics, UI/UX, and animations. Public demo available for playtesting.",
      link: "https://exilesphinx.itch.io/tempo-takedown",
      skills: ["C#", "Unity", "Game Design", "UI/UX"],
    },
    {
      name: "RAG Document Assessment Pipeline",
      description:
        "Pipeline for automated RAG-style document assessment using LLMs to evaluate median relevance and consistency of retrieved documents.",
      link: "https://github.com/doGregor/UR_trecking_2025",
      skills: ["Python", "LLMs", "Retrieval", "Evaluation"],
    },
  ],
  experience: [
    {
      company: "Decentralized Information Group (DIG) — MIT",
      title: "Graduate Researcher",
      dateRange: "Sept 2025 - Present",
      bullets: [
        "Developing graph foundation models for anti-money laundering using PyTorch and GNNs",
        "Designing scalable ML pipelines to generate transferrable transaction embeddings",
        "Focusing on reproducibility and downstream integration",
      ],
    },
    {
      company: "MIT — Teaching",
      title: "Graduate TA & Lab Assistant",
      dateRange: "Sept 2024 - Present",
      bullets: [
        "Lead recitations and lab sessions for introductory programming courses (Python)",
        "Design problem sets, run office hours, and mentor lab assistants",
      ],
    },
    {
      company: "University of Regensburg",
      title: "Research Intern",
      dateRange: "June 2025 - Aug 2025",
      bullets: [
        "Applied advanced query expansion methods for Elasticsearch document retrieval, improving recall as measured by LLM-based relevance judgments",
        "Implemented a pipeline for RAG-style automated document assessment using LLM evaluations",
        "Contributed to the team's report for the TREC 2025 DRAGUN track",
      ],
    },
    {
      company: "Ultimate Kronos Group (UKG)",
      title: "Software Engineering Intern",
      dateRange: "May 2024 - Aug 2024",
      bullets: [
        "Improved HaAPI call performance in UKG Pro Learning by 325% using Kotlin coroutines and caching",
        "Implemented custom retry logic and enhanced logging for failed network requests",
        "Resolved tenant identifier compatibility issues between UKG Pro Learning and Schoox",
      ],
    },
    {
      company: "Physician-Scientist Impact Group — MIT",
      title: "Undergraduate Researcher",
      dateRange: "Feb 2024 - May 2024",
      bullets: [
        "Researched author name disambiguation techniques and clustering methods",
        "Analyzed patents, grants, and publications to quantify physician-scientist impact",
      ],
    },
    {
      company: "RAS Legal Group",
      title: "DevOps Specialist Intern",
      dateRange: "May 2023 - Aug 2023",
      bullets: [
        "Diagnosed and resolved software issues for a dispersed team of 1100+ employees across 17 states",
        "Automated legal document generation using SQL to extract case information from the firm's database",
      ],
    },
  ],
  education: [
    {
      school: "Massachusetts Institute of Technology (MIT)",
      degree: "MEng, Computer Science and Engineering — expected Summer 2026",
      dateRange: "Sept 2025 - Sept 2026",
      achievements: [
        "GPA: 4.2 / 5.0",
        "Relevant coursework: NLP, Deep Learning, AI and Decision Making",
      ],
    },
    {
      school: "Massachusetts Institute of Technology (MIT)",
      degree: "BS, Computer Science and Engineering — May 2025",
      dateRange: "Sept 2021 - May 2025",
      achievements: [
        "GPA: 4.7 / 5.0",
        "Coursework: Computer Vision, Machine Learning, Computer Systems Engineering, Software Design, Computer Systems Engineering",
      ],
    },
  ],
};
