import React, { useState } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { ExperienceSection } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { EducationSection } from '@/components/Education'
import { LeadershipSection } from '@/components/Leadership'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ResumeModal } from '@/components/ResumeModal'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'

export const PortfolioApp: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ScrollProgress />
        <CustomCursor />

        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        <main>
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <LeadershipSection />
          <Contact />
        </main>

        <Footer />

        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  )
}

export default PortfolioApp
