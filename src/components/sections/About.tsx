import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { Card } from '@/components/ui/card'

const stats = [
  { value: '9', label: 'Publications', sub: 'IEEE + CVPR/ICCV' },
  { value: '2', label: 'CVPR 2026', sub: 'Accepted Papers' },
  { value: '88%', label: 'Auth Accuracy', sub: 'Biometric System' },
  { value: '73.8%', label: 'F1 Score', sub: 'Deepfake Detection' },
]

export function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Research Profile"
          subtitle="Building robust AI systems for visual forensics and multimodal understanding"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I am a PhD researcher at IIT Mandi's Centre for AI and Robotics, specializing in
              computer vision with a focus on deepfake detection and visual forensics. My work
              spans production-grade KYC verification systems, forensic ensemble methods, and
              robust detection pipelines under real-world degradations.
            </p>
            <p>
              Previously, I completed my B.S. in Data Science and Applications from IIT Madras,
              where I developed a strong foundation in machine learning and statistical modeling.
              I have contributed to multiple CVPR and ICCV workshop challenges, driving advances
              in AI-generated image detection and document forensics.
            </p>
            <p>
              My research combines deep learning with domain-specific priors to build systems
              that are both accurate and robust — bridging the gap between academic research
              and real-world deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="p-6 bg-slate-800/50 border-slate-700/50 text-center hover:border-blue-500/30 transition-all hover:bg-slate-800/70"
              >
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
