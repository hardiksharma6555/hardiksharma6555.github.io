import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { Trophy } from 'lucide-react'

const competitions = [
  {
    title: 'DeepID 2025 Challenge',
    subtitle: 'Detecting Synthetic Manipulations in ID Documents',
    venue: 'ICCV Workshops 2025',
    description:
      'Contributed to challenge research focused on forged ID detection and localization under realistic KYC settings. Published as part of the ICCV workshop challenge report.',
    tags: ['ID Forensics', 'KYC', 'ICCV Workshops'],
  },
  {
    title: 'NTIRE 2026 — Robust AI-Generated Image Detection',
    subtitle: 'Detection in the Wild Challenge',
    venue: 'CVPR Workshops 2026',
    description:
      'Contributed to robust detection of AI-generated images under transformations such as blur, compression, cropping, and resizing. Published in CVPR Workshops proceedings.',
    tags: ['AI Image Detection', 'Robustness', 'CVPR Workshops'],
  },
  {
    title: 'NTIRE 2026 — Low Light Enhancement',
    subtitle: 'Low Light Image Enhancement Challenge',
    venue: 'CVPR Workshops 2026',
    description:
      'Contributed to algorithms for enhancing image quality in extreme low-light conditions. Part of the NTIRE 2026 challenge track published at CVPR Workshops.',
    tags: ['Image Enhancement', 'Low Light', 'CVPR Workshops'],
  },
]

export function Competitions() {
  return (
    <SectionWrapper id="competitions" className="bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Competitions & Challenges"
          subtitle="Workshop challenge contributions at top venues"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {competitions.map((comp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-violet-600 dark:text-violet-300 bg-violet-600/10 border border-violet-600/20 px-2 py-0.5 rounded">
                  {comp.venue}
                </span>
              </div>
              <h3 className="text-foreground font-semibold text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                {comp.title}
              </h3>
              <p className="text-muted-foreground text-xs mb-3">{comp.subtitle}</p>
              <p className="text-muted-foreground/70 text-xs leading-relaxed mb-4">{comp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {comp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
