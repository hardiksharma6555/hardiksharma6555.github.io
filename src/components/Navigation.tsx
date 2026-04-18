import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Interests', to: 'interests' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Experience', to: 'experience' },
  { label: 'Publications', to: 'publications' },
  { label: 'Competitions', to: 'competitions' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="hero"
          smooth
          duration={500}
          className={cn(
            'font-bold text-lg cursor-pointer transition-colors',
            scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-blue-200'
          )}
        >
          HS
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              className={cn(
                'px-3 py-2 rounded-lg text-sm transition-all cursor-pointer',
                scrolled
                  ? 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
              activeClass={scrolled ? 'text-primary bg-primary/10' : '!text-white bg-white/15'}
              spy
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              'p-2 rounded-lg transition-all',
              scrolled
                ? 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 transition-colors',
              scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-64}
                  className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-muted/50 text-sm transition-all cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
