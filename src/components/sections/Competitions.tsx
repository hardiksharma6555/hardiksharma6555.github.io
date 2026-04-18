import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { Trophy } from 'lucide-react'

const competitions = [
  {
    title: 'DeepID 2025 Challenge',
    subtitle: 'Detecting Synthetic Manipulations in ID Documents',
    venue: 'ICCV 2025 Workshops',
    description:
      'Contributed to challenge research focused on forged ID detection and localization under realistic KYC settings. Published as part of the workshop challenge report.',
    tags: ['ID Forensics', 'KYC', 'ICCV'],
  },
  {
    title: 'NTIRE 2026 — Robust AI-Generated Image Detection',
    subtitle: 'Detection in the Wild Challenge',
    venue: 'CVPR 2026 Workshops',
    description:
      'Contributed to robust detection of AI-generated images under transformations such as blur, compression, cropping, and resizing. Published in CVPR workshop proceedings.',
    tags: ['AI Image Detection', 'Robustness', 'CVPR'],
  },
  {
    title: 'NTIRE 2026 — Low Light Enhancement',
    subtitle: 'Low Light Image Enhancement Challenge',
    venue: 'CVPR 2026 Workshops',
    description:
      'Contributed to algorithms for enhancing image quality in extreme low-light conditions. Part of the NTIRE 2026 challenge track published at CVPR workshops.',
    tags: ['Image Enhancement', 'Low Light', 'CVPR'],
  },
]

export function Competitions() {
  return (
    <SectionWrapper id="competitions" className="bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Competitions & Challenges"
          subtitle="Workshop challenge contributions at top venues"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-600/20">
                  <Trophy className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs font-medium text-violet-300 bg-violet-600/10 border border-violet-600/20 px-2 py-0.5 rounded">
                  {comp.venue}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-blue-200 transition-colors">
                {comp.title}
              </h3>
              <p className="text-slate-400 text-xs mb-3">{comp.subtitle}</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{comp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {comp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-slate-700/50 text-slate-400 border border-slate-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
