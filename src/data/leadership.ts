export interface LeadershipRole {
  title: string
  organization: string
  description: string
  impact: string
  statNumber: string
  statLabel: string
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: "Technical Lead Board Member",
    organization: "IVC",
    description: "Guiding technical direction, architecture decisions, and project development for student initiatives.",
    impact: "Mentoring 30+ junior developers and leading end-to-end technical project building.",
    statNumber: "30+",
    statLabel: "Juniors Mentored"
  },
  {
    title: "Team Lead",
    organization: "MomPharmacy",
    description: "Spearheaded engineering workflow across full-stack web and mobile development teams.",
    impact: "Managed 6 developers across full-stack and mobile platforms to deliver structured, sprint-based product releases.",
    statNumber: "6",
    statLabel: "Engineers Led"
  }
]
