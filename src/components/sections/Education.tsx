import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'

const education = [
  {
    institution: 'Indian Institute of Technology, Mandi',
    location: 'Mandi, Himachal Pradesh',
    degree: 'PhD in Artificial Intelligence and Robotics',
    department: 'Centre for AI and Robotics',
    period: 'Aug 2025 — Present',
    current: true,
  },
  {
    institution: 'Indian Institute of Technology, Madras',
    location: 'Chennai, Tamil Nadu',
    degree: 'B.S. in Data Science and Applications',
    department: 'CGPA: 7.93',
    period: 'Apr 2021 — May 2025',
    current: false,
  },
]

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Education" />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-600/20" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div className={`absolute left-4 top-2 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                  edu.current
                    ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/40 animate-pulse'
                    : 'bg-muted border-border'
                }`} />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-foreground font-semibold text-lg">{edu.institution}</h3>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                      edu.current
                        ? 'bg-blue-600/20 text-blue-600 dark:text-blue-300 border border-blue-600/30'
                        : 'bg-muted text-muted-foreground border border-border'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-300 font-medium text-sm mb-1">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
