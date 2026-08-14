import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Download, FileText, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeIn, slideUp } from '@/animations/variants'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

interface HeroProps {
  onOpenResumeModal: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Status / Location Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="accent" className="gap-1.5 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Full-Time Roles</span>
              </Badge>
              <Badge variant="outline" className="gap-1 py-1 px-3">
                <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>{profile.location}</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15]">
              Hi, I'm{' '}
              <span className="gradient-text-light dark:gradient-text-dark">
                {profile.name}
              </span>
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {profile.subtitle}
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View My Work
                </Button>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </Button>
              </a>

              <Button
                variant="ghost"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenResumeModal}
              >
                Interactive CV
              </Button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                >
                  <LinkedinIcon className="w-5 h-5 text-sky-500" />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Quick Resume Highlights */}
              <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg block">
                    5+
                  </span>
                  Platforms Built
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg block">
                    RAG & LLM
                  </span>
                  AI Integration
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg block">
                    30+
                  </span>
                  Juniors Mentored
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Section - Circular Profile Picture Frame */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative p-3 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-purple-500 shadow-2xl shadow-indigo-500/25">
              {/* Circular Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-950 bg-slate-900 shadow-inner group">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[25%_20%] rounded-full group-hover:scale-110 transition-transform duration-500"
                />

                {/* Floating Bottom Role Pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/85 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold border border-slate-700/60 shadow-lg whitespace-nowrap">
                  Full Stack Developer
                </div>
              </div>

              {/* Floating Top Status Badge */}
              <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  {profile.name}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
