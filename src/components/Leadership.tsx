import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { leadershipRoles } from '@/data/leadership'
import { slideUp, staggerContainer } from '@/animations/variants'

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership & Impact"
          title="Engineering Management & Mentorship"
          subtitle="Proactive leadership managing development teams and driving technical project execution."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {leadershipRoles.map((role, idx) => (
            <motion.div key={idx} variants={slideUp}>
              <GlassCard glow className="p-8 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 group-hover:scale-105 transition-transform duration-300">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {role.title}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {role.organization}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 py-2 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-center">
                      <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 block leading-none">
                        {role.statNumber}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 block">
                        {role.statLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {role.impact}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
