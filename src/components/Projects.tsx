import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeaturedProject } from '@/components/FeaturedProject'
import { projects } from '@/data/projects'
import { staggerContainer } from '@/animations/variants'

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Work"
          title="Featured Projects & Case Studies"
          subtitle="Real-world production applications engineered with FastAPI, LangChain, OpenAI, Socket.io, React, and Node.js."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, idx) => (
            <FeaturedProject key={project.id} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
