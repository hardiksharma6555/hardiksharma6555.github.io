import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'

const projects = [
  {
    title: 'Facial Expression Recognition',
    description:
      'A deep learning pipeline using MobileNetV2 for facial expression recognition, achieving 96.96% accuracy on the FER2013 dataset. Deployed as a real-time demo.',
    tech: ['MobileNetV2', 'Python', 'OpenCV', 'PyTorch'],
    metric: '96.96% Accuracy',
    category: 'Computer Vision',
  },
  {
    title: 'BDM Capstone — Business Analytics',
    description:
      'End-to-end business data management capstone project analyzing retail operations. Data-driven recommendations led to a measurable 15% profit increase for the business.',
    tech: ['Python', 'Pandas', 'SQL', 'Visualization'],
    metric: '+15% Profit',
    category: 'Data Science',
  },
  {
    title: 'Movie Sentiment Analysis',
    description:
      'Kaggle competition entry for movie review sentiment classification. Achieved Rank 97/977 with F1 score of 0.832 using ensemble NLP techniques.',
    tech: ['NLP', 'Scikit-learn', 'NLTK', 'Ensemble'],
    metric: 'Rank 97/977 · F1 0.832',
    category: 'NLP',
  },
  {
    title: 'Grocery Store Management System',
    description:
      'Full-stack web application for grocery inventory and order management. Built with Flask backend and SQLAlchemy ORM with role-based access control.',
    tech: ['Flask', 'SQLAlchemy', 'Python', 'HTML/CSS'],
    metric: 'Full Stack',
    category: 'Web Dev',
  },
]

const categoryColors: Record<string, string> = {
  'Computer Vision': 'bg-blue-600/10 text-blue-300 border-blue-600/20',
  'Data Science': 'bg-green-600/10 text-green-300 border-green-600/20',
  NLP: 'bg-violet-600/10 text-violet-300 border-violet-600/20',
  'Web Dev': 'bg-amber-600/10 text-amber-300 border-amber-600/20',
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Selected Projects"
          subtitle="Academic and personal projects showcasing applied ML and software skills"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded border ${categoryColors[proj.category] || 'bg-slate-700/50 text-slate-400 border-slate-600/30'}`}>
                  {proj.category}
                </span>
                <span className="text-xs font-semibold text-blue-400 ml-auto">
                  {proj.metric}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-blue-200 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs bg-slate-700/50 text-slate-400 border border-slate-600/30"
                  >
                    {t}
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
