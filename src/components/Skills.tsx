import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Layers, Cpu, Wrench, Server, Users, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { skillCategories } from '@/data/skills'
import { slideUp, staggerContainer } from '@/animations/variants'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-indigo-500" />
    case 'Layers':
      return <Layers className="w-5 h-5 text-sky-500" />
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-purple-500" />
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-amber-500" />
    case 'Server':
      return <Server className="w-5 h-5 text-emerald-500" />
    case 'Users':
      return <Users className="w-5 h-5 text-rose-500" />
    default:
      return <Code2 className="w-5 h-5 text-indigo-500" />
  }
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeTab.toLowerCase()))

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="Categorized view of languages, frameworks, AI/LLM components, databases, and developer tools extracted directly from my resume."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === cat.title
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Category Cards Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div key={category.title} variants={slideUp} layout>
                <GlassCard glow className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                        {getIcon(category.iconName)}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800/80 dark:hover:bg-indigo-950/60 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 opacity-80" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
