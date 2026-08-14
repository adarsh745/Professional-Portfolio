import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, Cpu, MessageSquare } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/data/projects'
import { slideUp } from '@/animations/variants'
import { GithubIcon } from '@/components/icons/SocialIcons'

interface FeaturedProjectProps {
  project: Project
  index: number
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'AI & LLM':
        return <Cpu className="w-6 h-6 text-purple-500" />
      case 'Real-Time Systems':
        return <MessageSquare className="w-6 h-6 text-sky-500" />
      default:
        return <Sparkles className="w-6 h-6 text-indigo-500" />
    }
  }

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="mb-12 last:mb-0"
    >
      <GlassCard glow className="p-8 sm:p-10 border-indigo-200/60 dark:border-indigo-900/50 shadow-xl overflow-hidden relative">
        {/* Glow backdrop effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800">
              {getProjectIcon(project.category)}
            </div>
            <div>
              <Badge variant="accent" size="sm">
                Featured Case Study
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                Repository
              </Button>
            </a>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium mb-8 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Problem vs Solution Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 block mb-2">
              Problem & Challenge
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
              Architectural Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Key Contributions & Deliverables
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges & Links Footer */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                View GitHub Code
              </Button>
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
