import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { cn } from '@/lib/utils'

const interests = [
  { label: 'Computer Vision', color: 'blue' },
  { label: 'Deepfake Detection', color: 'violet' },
  { label: 'Multimodal Forensics', color: 'blue' },
  { label: 'AI-Generated Image Detection', color: 'violet' },
  { label: 'Representation Learning', color: 'blue' },
  { label: 'Robustness under Real-World Degradations', color: 'violet' },
  { label: 'Document Forensics', color: 'blue' },
  { label: 'Visual Authentication', color: 'violet' },
  { label: 'Spectral Learning', color: 'blue' },
  { label: 'Multimodal Learning', color: 'violet' },
  { label: 'NLP & LLMs', color: 'blue' },
  { label: 'Biometric Systems', color: 'violet' },
]

export function ResearchInterests() {
  return (
    <SectionWrapper id="interests">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Research Interests"
          subtitle="Areas of active exploration and contribution"
        />
        <div className="flex flex-wrap gap-3 justify-center">
          {interests.map((item) => (
            <span
              key={item.label}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 cursor-default',
                item.color === 'blue'
                  ? 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20 hover:bg-blue-600/20 hover:border-blue-500/40'
                  : 'bg-violet-600/10 text-violet-700 dark:text-violet-300 border-violet-600/20 hover:bg-violet-600/20 hover:border-violet-500/40'
              )}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
