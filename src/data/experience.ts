export interface Experience {
  id: string
  role: string
  company: string
  duration: string
  location: string
  isCurrent?: boolean
  description: string
  contributions: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "samriddhi",
    role: "Python Full Stack Developer",
    company: "Samriddhi Anveshana Pvt. Ltd.",
    duration: "May 2026 – Present",
    location: "Hyderabad, Telangana",
    isCurrent: true,
    description: "Developing enterprise-grade applications, secure REST APIs, payment integrations, and real-time features for client platforms.",
    contributions: [
      "Developed and maintained enterprise applications including Hospital Management System (HMS), Employee Management System (EMS), and Divine Food using Angular.js, React, FastAPI, and PostgreSQL.",
      "Built secure REST APIs, designed optimized PostgreSQL database schemas, and implemented a Referral & Reward System with WebSocket-based real-time updates.",
      "Collaborated directly with clients to gather business requirements, translate them into technical solutions, and support successful delivery of the Divine Food project.",
      "Integrated Razorpay Payment Gateway, converted web applications into Android apps using Android Studio (WebView), and collaborated on end-to-end full-stack feature development."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Angular.js",
      "PostgreSQL",
      "WebSockets",
      "Razorpay",
      "Android Studio",
      "REST APIs"
    ]
  },
  {
    id: "mompharmacy",
    role: "Full Stack Developer",
    company: "MomPharmacy",
    duration: "Apr 2025 – Apr 2026",
    location: "Hyderabad, Telangana",
    description: "Engineered multi-platform web and mobile software solutions for an online pharmacy ecosystem serving thousands of active users.",
    contributions: [
      "Built and maintained full-stack features across 5 platforms (E-commerce Web, User, Delivery, Admin, and Picker & Packer Apps) for an online pharmacy using React.js, React Native, Node.js, MongoDB, and Socket.io.",
      "Implemented JWT Authentication, role-based access, Redis caching, and real-time communication to enhance security and performance.",
      "Optimized state management using Redux, Zustand, RTK Query, and Context API; designed high-performance REST APIs with server-side pagination and optimized MongoDB queries."
    ],
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Redis",
      "JWT",
      "Redux",
      "Zustand",
      "RTK Query"
    ]
  }
]
