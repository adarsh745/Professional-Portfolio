export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problemSolved: string
  solution: string
  contributions: string[]
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  category: "AI & LLM" | "Full Stack" | "Real-Time Systems"
}

export const projects: Project[] = [
  {
    id: "rag-application",
    title: "Production-Ready RAG Application",
    subtitle: "Enterprise Document QA System powered by OpenAI & LangChain",
    description: "Intelligent document question-answering system leveraging Retrieval-Augmented Generation (RAG), vector similarity search, and high-throughput FastAPI endpoints.",
    problemSolved: "Enterprise documents are often unstructured, massive, and difficult to query accurately without hallucinations or latency.",
    solution: "Engineered a dual-pipeline (Ingestion + Retrieval) system using FastAPI, OpenAI embeddings, LangChain, and Chroma Vector Database for context-aware document interrogation.",
    contributions: [
      "Built an end-to-end ingestion pipeline with document loading, text chunking, tokenization, embedding generation, and storage in Chroma Vector Database.",
      "Implemented a retrieval pipeline using semantic search, vector similarity, and prompt engineering to generate accurate, context-aware responses from enterprise documents.",
      "Optimized document retrieval performance and integrated scalable APIs for efficient, production-ready AI-powered search."
    ],
    technologies: [
      "FastAPI",
      "OpenAI API",
      "LangChain",
      "Chroma Vector DB",
      "Python",
      "Embeddings",
      "RAG",
      "REST APIs"
    ],
    githubUrl: "https://github.com/adarsh745",
    featured: true,
    category: "AI & LLM"
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    subtitle: "Bidirectional Messaging Platform with Event-Driven Architecture",
    description: "Secure, low-latency messaging platform supporting real-time user presence, typing feedback, JWT session protection, and event validation.",
    problemSolved: "Establishing high-concurrency client-server synchronization while maintaining JWT session security and accurate event broadcasts.",
    solution: "Designed an event-driven WebSocket communication layer using Socket.io and Node.js with state monitoring and JWT route guards.",
    contributions: [
      "Built real-time messaging using Socket.io, enabling bidirectional communication between client and server.",
      "Authenticated and secured sessions using JWT-based login with protected chat routes.",
      "Designed and implemented an event-driven communication system, ensuring real-time event accuracy through Postman and Socket listener tests.",
      "Added features like typing indicators, message delivery status, and live user presence monitoring."
    ],
    technologies: [
      "Socket.io",
      "React.js",
      "Node.js",
      "Express JS",
      "JWT",
      "WebSockets",
      "Postman"
    ],
    githubUrl: "https://github.com/adarsh745",
    featured: true,
    category: "Real-Time Systems"
  }
]
