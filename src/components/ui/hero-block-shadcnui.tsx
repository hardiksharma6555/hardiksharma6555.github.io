import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface HeroBlockProps {
  name: string
  title: string
  bio: string
  photoUrl?: string
  badges?: string[]
  socialLinks?: {
    github?: string
    linkedin?: string
    email?: string
    kaggle?: string
  }
  ctaButtons?: {
    label: string
    href: string
    variant?: 'default' | 'outline'
  }[]
}

export function HeroBlock({
  name,
  title,
  bio,
  photoUrl,
  badges = [],
  socialLinks = {},
  ctaButtons = [],
}: HeroBlockProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          {photoUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-400/20">
                <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Portfolio
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">{name}</h1>
              <h2 className="text-lg lg:text-xl text-slate-300 font-medium mb-6">{title}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Separator className="mb-6 bg-blue-600/20" />
              <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">
                {bio}
              </p>
            </motion.div>

            {/* Badges */}
            {badges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
              >
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-300 border border-blue-600/20 hover:bg-blue-600/20 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            {ctaButtons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {ctaButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target={btn.href.startsWith('http') ? '_blank' : undefined}
                    rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn(
                      buttonVariants({ variant: btn.variant === 'outline' ? 'outline' : 'default' }),
                      btn.variant === 'outline'
                        ? 'border-blue-600/40 text-blue-300 hover:bg-blue-600/10 hover:text-blue-200'
                        : 'bg-blue-600 hover:bg-blue-500 text-white border-transparent'
                    )}
                  >
                    {btn.label}
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </a>
                ))}
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all border border-slate-700/50 hover:border-slate-600/50"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-blue-400 hover:bg-slate-700/60 transition-all border border-slate-700/50 hover:border-blue-600/30"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-red-400 hover:bg-slate-700/60 transition-all border border-slate-700/50 hover:border-red-600/30"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
              {socialLinks.kaggle && (
                <a
                  href={socialLinks.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaggle"
                  className="p-2.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/60 transition-all border border-slate-700/50 hover:border-cyan-600/30"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.946l6.344-6.465c.16-.165.316-.246.478-.246h3.275c.165 0 .245.064.22.194-.012.061-.054.132-.12.221L11.81 15.24l7.23 8.428a.395.395 0 0 1-.215.191z" />
                  </svg>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
