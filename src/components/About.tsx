import React from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Bot, Users, Award, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { slideUp, staggerContainer } from '@/animations/variants'
import { profile } from '@/data/profile'

const features = [
  {
    icon: <Server className="w-6 h-6 text-indigo-500" />,
    title: 'Full Stack & Multi-Platform',
    description:
      'Engineered applications across 5 online pharmacy platforms (Web, Delivery, Admin, Picker Apps) and enterprise systems (HMS, EMS, Divine Food).',
  },
  {
    icon: <Bot className="w-6 h-6 text-sky-500" />,
    title: 'AI & Production RAG Systems',
    description:
      'Architected end-to-end RAG ingestion & retrieval pipelines with FastAPI, LangChain, Chroma Vector DB, and OpenAI embeddings for context-aware document query processing.',
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: 'Real-Time & API Security',
    description:
      'Implemented WebSockets and Socket.io for low-latency messaging, JWT authentication, role-based access control, and Redis caching for optimal API response rates.',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    title: 'Technical Leadership',
    description:
      'Led 6 developers across full-stack and mobile teams at MomPharmacy and mentored 30+ junior engineers as IVC Technical Lead Board Member.',
  },
]

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineered for Performance & Business Growth"
          subtitle="Combining full-stack software development, real-time messaging, optimized database architectures, and production AI solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Story Card */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6"
          >
            <GlassCard glow className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-16 h-16 rounded-full object-cover object-[25%_20%] border-2 border-indigo-500/40 shadow-md shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {profile.name}
                      </h3>
                      <Award className="w-4 h-4 text-indigo-500" />
                    </div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {profile.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Based in {profile.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am a <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">{profile.subtitle}</strong> with a strong foundation in Computer Science & IoT from Sreenidhi Institute Of Science and Technology.
                  </p>
                  <p>
                    My professional experience spans building enterprise systems such as Hospital Management Systems (HMS) and Employee Management Systems (EMS) at <strong className="text-slate-900 dark:text-slate-100">Samriddhi Anveshana Pvt. Ltd.</strong>, as well as managing multi-platform e-commerce and mobile delivery infrastructure at <strong className="text-slate-900 dark:text-slate-100">MomPharmacy</strong>.
                  </p>
                  <p>
                    I specialize in designing scalable backend REST APIs (FastAPI, Node.js, Spring Boot), crafting responsive modern frontends (React, Angular, React Native), and implementing AI-powered features using LangChain, vector databases, and OpenAI APIs.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Resume Verified Experience</span>
                </div>
                <a
                  href="#experience"
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Explore Experience &rarr;
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Key Competencies Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((item, idx) => (
              <GlassCard key={idx} glow className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
