import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Copy, Check, Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { educationList } from '@/data/education'
import { skillCategories } from '@/data/skills'
import { leadershipRoles } from '@/data/leadership'
import { Button } from '@/components/ui/Button'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopyText = () => {
    const resumeText = `
${profile.name}
${profile.subtitle}
Contact: ${profile.phone} | ${profile.email} | ${profile.location}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}

EXPERIENCE:
${experiences
  .map(
    (e) => `
${e.role} - ${e.company} (${e.duration}, ${e.location})
${e.contributions.map((c) => `• ${c}`).join('\n')}
`
  )
  .join('')}

PROJECTS:
${projects
  .map(
    (p) => `
${p.title}
${p.description}
Technologies: ${p.technologies.join(', ')}
${p.contributions.map((c) => `• ${c}`).join('\n')}
`
  )
  .join('')}

EDUCATION:
${educationList.map((e) => `${e.degree} - ${e.fieldOfStudy}, ${e.institution} (${e.duration})`).join('\n')}
`
    navigator.clipboard.writeText(resumeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
          >
            {/* Modal Header Controls */}
            <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>Resume Preview</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">
                  Official CV
                </span>
              </h3>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyText}
                  icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                >
                  {copied ? 'Copied' : 'Copy Text'}
                </Button>

                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Download className="w-3.5 h-3.5" />}
                  >
                    Download Original PDF
                  </Button>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Document Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-slate-800 dark:text-slate-200">
              {/* Header with Circular Profile Image */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-20 h-20 rounded-full object-cover object-[25%_20%] border-2 border-indigo-500/40 shadow-md shrink-0"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-wide uppercase">
                      {profile.name}
                    </h1>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-indigo-500" /> {profile.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-500" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" /> {profile.location}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                      <GithubIcon className="w-3.5 h-3.5" /> adarsh745
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                      <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" /> Adarsh Janjirala
                    </a>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                  Education
                </h2>
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{edu.institution}</span>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{edu.degree} - {edu.fieldOfStudy}</p>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {edu.duration} | {edu.location}
                    </div>
                  </div>
                ))}
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline text-sm mb-1">
                        <div>
                          <span className="font-bold text-slate-900 dark:text-slate-100">{exp.role}</span>
                          <span className="text-slate-500 font-medium"> — {exp.company}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{exp.duration} | {exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1.5 ml-1">
                        {exp.contributions.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">
                  Key Projects
                </h2>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{proj.title}</h3>
                      <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 mt-1 ml-1">
                        {proj.contributions.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {skillCategories.map((cat) => (
                    <div key={cat.title}>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{cat.title}: </span>
                      <span className="text-slate-600 dark:text-slate-300">{cat.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                  Leadership & Responsibilities
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1.5 ml-1">
                  {leadershipRoles.map((role, idx) => (
                    <li key={idx}>
                      <strong className="text-slate-900 dark:text-slate-100">{role.title} at {role.organization}:</strong> {role.impact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
