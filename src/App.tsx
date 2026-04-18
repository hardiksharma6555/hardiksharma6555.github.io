import { useEffect, useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { ResearchInterests } from '@/components/sections/ResearchInterests'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Publications } from '@/components/sections/Publications'
import { Competitions } from '@/components/sections/Competitions'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchInterests />
        <Skills />
        <Education />
        <Experience />
        <Publications />
        <Competitions />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
