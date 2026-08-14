import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { slideUp, staggerContainer } from '@/animations/variants'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="Proven track record in full-stack engineering, microservices, enterprise applications, and mobile solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={slideUp} className="relative group">
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>

              <GlassCard glow className="p-6 sm:p-8">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <Badge variant="success" size="sm">
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium italic">
                  "{exp.description}"
                </p>

                {/* Key Contributions */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Contributions & Engineering Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
