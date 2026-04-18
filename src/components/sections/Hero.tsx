import { HeroBlock } from '@/components/ui/hero-block-shadcnui'

export function Hero() {
  return (
    <HeroBlock
      name="Hardik Sharma"
      title="PhD Researcher | Computer Vision | Deepfake Detection"
      bio="Computer vision researcher with experience in deepfake detection, multimodal document forensics, AI-generated image detection, and robust visual recognition systems. Published in IEEE venues and contributed to CVPR/ICCV workshop challenge reports, with hands-on work spanning production-oriented KYC verification systems, forensic ensembles, and robust detection under real-world degradations."
      photoUrl="/images/hardik_pict.png"
      badges={[
        'Computer Vision',
        'Deepfake Detection',
        'Multimodal AI',
        'IEEE Published',
        'CVPR 2026',
        'PhD @ IIT Mandi',
      ]}
      socialLinks={{
        github: 'https://github.com/hardiksharma6555',
        linkedin: 'https://linkedin.com/in/hardik-sharma-profile/',
        email: 'hhardikssharma@gmail.com',
        kaggle: 'https://www.kaggle.com/iitm21f1006555',
      }}
      ctaButtons={[
        {
          label: 'View Publications',
          href: '#publications',
          variant: 'default',
        },
        {
          label: 'Download Resume',
          href: 'https://hardiksharma6555.github.io/portfolio/',
          variant: 'outline',
        },
      ]}
    />
  )
}
