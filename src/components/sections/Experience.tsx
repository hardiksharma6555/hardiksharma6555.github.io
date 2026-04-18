import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'

const experiences = [
  {
    role: 'Vision Engineer',
    company: 'Reagvis Labs',
    location: 'Remote',
    period: 'Apr 2024 — Jul 2025',
    highlights: [
      'Worked on visual forensic pipelines for fraud detection by integrating VLM-based cues with forensic priors and the TruFor algorithm.',
      'Improved challenge performance by combining baseline outputs with statistical measures, increasing weighted F1 from 0.706 to 0.712 and achieving 0.839 on FantasyID.',
      'Contributed to challenge-facing deepfake and document-forensics systems under realistic evaluation settings.',
    ],
    tags: ['Deepfake', 'VLM', 'F1: 0.839'],
  },
  {
    role: 'Computer Vision Intern',
    company: 'Truens AI',
    location: 'Remote',
    period: 'Dec 2024 — Apr 2025',
    highlights: [
      'Developed a real-time deepfake detection system for banking KYC video calls, achieving 73.8% F1 on a private dataset and 70% aggregate F1 across multiple evaluation scenarios.',
      'Engineered a multimodal ID-card verification system combining computer vision and NLP to detect both visual and textual forgeries in identity documents.',
      'Focused on practical deployment constraints for remote onboarding and fraud-prevention workflows.',
    ],
    tags: ['KYC', 'F1: 73.8%', 'Multimodal'],
  },
  {
    role: 'Research Intern',
    company: 'Indian Institute of Technology, Mandi',
    location: 'Himachal Pradesh',
    period: 'May 2024 — Present',
    highlights: [
      'Conducted research on infrared spectral learning and chemometric modeling for molecular analysis.',
      'Built deep architectures for imbalanced multi-label prediction from spectral inputs, improving precision to 90.4% and specificity to 97.9% on odor prediction tasks.',
      'Applied transformer-based modeling on a dataset of 3,036 molecules with 109 odor perception labels.',
    ],
    tags: ['Spectral Learning', 'Precision: 90.4%', 'Specificity: 97.9%'],
  },
  {
    role: 'Data Science Intern',
    company: 'DeepAlgorithms Pvt. Ltd.',
    location: 'Remote',
    period: 'May 2024 — Nov 2024',
    highlights: [
      'Developed a behavioral biometric authentication system using motion-sensor data, achieving 88% authentication accuracy with FAR: 0.04 and FRR: 0.08.',
      'Engineered a spatial-attention-based deep model that processed raw accelerometer, gyroscope, and magnetometer inputs without manual feature engineering.',
    ],
    tags: ['Biometrics', 'Acc: 88%', 'FAR: 0.04'],
  },
  {
    role: 'Research Intern',
    company: 'AIISC, South Carolina',
    location: 'Remote',
    period: 'Jul 2024 — Dec 2024',
    highlights: [
      'Implemented jailbreak techniques from the Trees of Attack framework and evaluated vulnerability across 22 major LLMs.',
      'Benchmarked attack success across models including GPT-4, Claude, and LLaMA — demonstrates rigorous empirical research and evaluation capability.',
    ],
    tags: ['LLM Security', '22 Models', 'Red Teaming'],
  },
]

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-900/50">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title="Research Experience"
          subtitle="Industry and academic research roles"
        />
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-600/20" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full border-2 -translate-x-1/2 bg-blue-600 border-blue-400" />

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-blue-300 font-medium text-sm">{exp.company}</p>
                      <p className="text-slate-500 text-xs">{exp.location}</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-400 border border-slate-600/30 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-blue-600/10 text-blue-400 border border-blue-600/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
