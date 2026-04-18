import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { Card } from '@/components/ui/card'
import { AnimatedList, AnimatedItem } from '@/components/AnimatedList'

const skillGroups = [
  {
    title: 'Core Areas',
    icon: '🧠',
    skills: [
      'Computer Vision',
      'Deep Learning',
      'Multimodal Learning',
      'Natural Language Processing',
      'Spectral Analysis',
      'Biometric Systems',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    skills: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'Scikit-learn',
      'Hugging Face',
      'Keras',
      'NLTK',
      'spaCy',
      'LangChain',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🔧',
    skills: [
      'Python',
      'SQL',
      'Java',
      'Git',
      'Docker',
      'Flask',
      'FastAPI',
      'n8n',
      'Azure AI',
    ],
  },
]

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and frameworks I work with"
        />
        <AnimatedList className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <AnimatedItem key={group.title}>
            <Card
              className="p-6 bg-card border-border hover:border-primary/30 transition-all"
            >
              <h3 className="text-foreground font-semibold text-lg mb-4 flex items-center gap-2">
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </SectionWrapper>
  )
}
