import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { ExternalLink } from 'lucide-react'
import { AnimatedList, AnimatedItem } from '@/components/AnimatedList'

const publications = [
  // IEEE Transactions (top)
  {
    title: 'BioFASTNet: Biomedical Fragmented Attention Spectral Transformer Network for Infrared Spectra Analysis',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    venueType: 'IEEE TIM',
    year: '2026',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/document/11457985',
  },
  {
    title: 'CIRSNet: A Lightweight Chemometric Infrared Spectral Network for Spectral Analysis',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    venueType: 'IEEE TIM',
    year: '2025',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/document/11194114/',
  },
  // CVPR Workshop papers (accepted)
  {
    title: 'TRIDENT: Robust Deepfake Detection via Tri-Modal Forensic Ensembles',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR Workshops',
    year: '2026',
    status: 'Accepted',
    link: null,
  },
  {
    title: 'Beyond Backbones: Degradation-Aware Prototype Fusion for Robust Deepfake Detection',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR Workshops',
    year: '2026',
    status: 'Accepted',
    link: null,
  },
  // Challenge reports
  {
    title: 'Deepfake Image Detection in the Wild: NTIRE 2026 Challenge Report',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR Workshops',
    year: '2026',
    status: 'Published',
    link: 'https://arxiv.org/pdf/2604.11487',
  },
  {
    title: 'Robust Deepfake Detection, NTIRE 2026 Challenge: Report',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR Workshops',
    year: '2026',
    status: 'Published',
    link: null,
  },
  {
    title: 'Low Light Image Enhancement Challenge at NTIRE 2026',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR Workshops',
    year: '2026',
    status: 'Published',
    link: null,
  },
  {
    title: 'DeepID Challenge of Detecting Synthetic Manipulations in ID Documents',
    venue: 'ICCV Workshops 2025',
    venueType: 'ICCV Workshops',
    year: '2025',
    status: 'Published',
    link: 'https://publications.idiap.ch/attachments/papers/2025/Korshunov_ICCV_2025.pdf',
  },
  // Under review / remaining
  {
    title: 'Explainable Deepfake Detection',
    venue: 'ACM Multimedia',
    venueType: 'ACM MM',
    year: '2025',
    status: 'Under Review',
    link: null,
  },
  {
    title: 'Defect Tool Benchmarking on Audio Datasets',
    venue: 'Interspeech',
    venueType: 'Interspeech',
    year: '2025',
    status: 'Under Review',
    link: null,
  },
  {
    title: 'Text Summarization of Publicly Available BBC News Dataset on Kaggle',
    venue: 'Global Journal for Research Analysis (GJRA)',
    venueType: 'Journal',
    year: '2024',
    status: 'Published',
    link: 'https://www.worldwidejournals.com/global-journal-for-research-analysis-GJRA/fileview/text-summarization-of-publicly-available-bbc-news-dataset-on-kaggle_February_2024_2107870058_7203315.pdf',
  },
]

const venueColors: Record<string, string> = {
  'CVPR Workshops': 'bg-violet-600/15 text-violet-600 border-violet-600/25 dark:text-violet-300',
  'ICCV Workshops': 'bg-amber-600/15 text-amber-700 border-amber-600/25 dark:text-amber-300',
  'IEEE TIM': 'bg-blue-600/15 text-blue-700 border-blue-600/25 dark:text-blue-300',
  'ACM MM': 'bg-rose-600/15 text-rose-700 border-rose-600/25 dark:text-rose-300',
  Interspeech: 'bg-teal-600/15 text-teal-700 border-teal-600/25 dark:text-teal-300',
  Journal: 'bg-green-600/15 text-green-700 border-green-600/25 dark:text-green-300',
}

const statusColors: Record<string, string> = {
  Accepted: 'bg-green-600/15 text-green-700 border-green-600/25 dark:text-green-400',
  'Under Review': 'bg-orange-600/15 text-orange-700 border-orange-600/25 dark:text-orange-300',
}

export function Publications() {
  return (
    <SectionWrapper id="publications">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Publications"
          subtitle="Research contributions across computer vision, forensics, spectral learning, and audio"
        />
        <AnimatedList className="space-y-4">
          {publications.map((pub, i) => (
            <AnimatedItem key={i}>
            <div
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${venueColors[pub.venueType] ?? venueColors.Journal}`}>
                      {pub.venueType}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                      {pub.year}
                    </span>
                    {(pub.status === 'Accepted' || pub.status === 'Under Review') && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded border ${statusColors[pub.status]}`}>
                        {pub.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-foreground text-sm font-semibold leading-snug mb-1 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{pub.venue}</p>
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:text-primary/80 text-xs font-medium transition-colors whitespace-nowrap flex-shrink-0 mt-1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Paper
                  </a>
                )}
              </div>
            </div>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </SectionWrapper>
  )
}
