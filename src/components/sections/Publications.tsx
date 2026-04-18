import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'TRIDENT: Robust Deepfake Detection via Tri-Modal Forensic Ensembles',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR',
    year: '2026',
    status: 'Accepted',
    link: null,
  },
  {
    title: 'Beyond Backbones: Degradation-Aware Prototype Fusion for Robust Deepfake Detection',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR',
    year: '2026',
    status: 'Accepted',
    link: null,
  },
  {
    title: 'Deepfake Image Detection in the Wild: NTIRE 2026 Challenge Report',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR',
    year: '2026',
    status: 'Published',
    link: 'https://arxiv.org/pdf/2604.11487',
  },
  {
    title: 'Robust Deepfake Detection, NTIRE 2026 Challenge: Report',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR',
    year: '2026',
    status: 'Published',
    link: null,
  },
  {
    title: 'Low Light Image Enhancement Challenge at NTIRE 2026',
    venue: 'CVPR Workshops 2026',
    venueType: 'CVPR',
    year: '2026',
    status: 'Published',
    link: null,
  },
  {
    title: 'DeepID Challenge of Detecting Synthetic Manipulations in ID Documents',
    venue: 'ICCV Workshops 2025',
    venueType: 'ICCV',
    year: '2025',
    status: 'Published',
    link: 'https://publications.idiap.ch/attachments/papers/2025/Korshunov_ICCV_2025.pdf',
  },
  {
    title: 'BioFASTNet: Biomedical Fragmented Attention Spectral Transformer Network for Infrared Spectra Analysis',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    venueType: 'IEEE',
    year: '2026',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/document/11457985',
  },
  {
    title: 'CIRSNet: A Lightweight Chemometric Infrared Spectral Network for Spectral Analysis',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    venueType: 'IEEE',
    year: '2025',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/document/11194114/',
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
  CVPR: 'bg-violet-600/15 text-violet-300 border-violet-600/25',
  ICCV: 'bg-amber-600/15 text-amber-300 border-amber-600/25',
  IEEE: 'bg-blue-600/15 text-blue-300 border-blue-600/25',
  Journal: 'bg-green-600/15 text-green-300 border-green-600/25',
}

export function Publications() {
  return (
    <SectionWrapper id="publications">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Publications"
          subtitle="Research contributions across computer vision, forensics, and spectral learning"
        />
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${venueColors[pub.venueType] || venueColors.Journal}`}>
                      {pub.venueType}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-700/50 text-slate-400 border border-slate-600/30">
                      {pub.year}
                    </span>
                    {pub.status === 'Accepted' && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-600/15 text-green-400 border border-green-600/25">
                        Accepted
                      </span>
                    )}
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-blue-200 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-500 text-xs">{pub.venue}</p>
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors whitespace-nowrap flex-shrink-0 mt-1"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
