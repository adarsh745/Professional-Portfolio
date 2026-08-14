export interface Education {
  degree: string
  institution: string
  location: string
  duration: string
  fieldOfStudy: string
  highlights?: string[]
}

export const educationList: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    fieldOfStudy: "Computer Science (IoT)",
    institution: "Sreenidhi Institute Of Science and Technology",
    location: "Hyderabad, Telangana",
    duration: "Dec 2021 – June 2025",
    highlights: [
      "Specialized in Computer Science & Internet of Things (IoT)",
      "Focus on Data Structures, Algorithms, Software Engineering, OOP, and Distributed Systems",
      "Active participant in technical club board and project leadership"
    ]
  }
]
