export interface SkillCategory {
  title: string
  skills: string[]
  iconName: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C/C++"],
    iconName: "Code2"
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      "React.js",
      "React Native",
      "Angular.js",
      "FastAPI",
      "Node.js",
      "Express JS",
      "Spring Boot",
      "HTML/Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "AWS EC2",
      "Amazon S3",
      "LangChain",
      "OpenAI API",
      "WebSockets",
      "REST APIs"
    ],
    iconName: "Layers"
  },
  {
    title: "AI & LLM",
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "Embeddings",
      "Tokenization",
      "Text Chunking",
      "Ingestion Pipeline",
      "Retrieval Pipeline",
      "MCP (Model Context Protocol)",
      "Chroma Vector Database"
    ],
    iconName: "Cpu"
  },
  {
    title: "Developer Tools",
    skills: [
      "GitHub",
      "VS Code",
      "Postman",
      "Swagger",
      "Android Studio",
      "pgAdmin",
      "Redis"
    ],
    iconName: "Wrench"
  },
  {
    title: "Core Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "REST API Architecture",
      "Microservices Architecture",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "State Management (Redux, Zustand, RTK Query)"
    ],
    iconName: "Server"
  },
  {
    title: "Soft Skills & Leadership",
    skills: [
      "Problem-Solving",
      "Team Leadership",
      "Technical Mentorship",
      "Client Communication",
      "Agile/Sprint Management",
      "Teamwork"
    ],
    iconName: "Users"
  }
]
