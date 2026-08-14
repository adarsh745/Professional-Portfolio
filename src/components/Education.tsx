import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { educationList } from '@/data/education'
import { slideUp } from '@/animations/variants'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Qualifications"
          subtitle="Strong academic foundation in Computer Science and Internet of Things (IoT)."
        />

        <div className="max-w-4xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <GlassCard glow className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {edu.fieldOfStudy}
                      </p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      Academic Focus & Coursework
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
