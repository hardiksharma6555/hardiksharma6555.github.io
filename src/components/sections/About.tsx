import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Research Profile"
          subtitle="Building robust AI systems for visual forensics and multimodal understanding"
        />

        <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
          <p>
            I am a PhD researcher at IIT Mandi's Centre for AI and Robotics, specializing in
            computer vision with a focus on deepfake detection, multimodal document forensics,
            AI-generated image detection, and robust visual recognition systems. My work spans
            production-grade KYC verification systems, forensic ensemble methods, and robust
            detection pipelines designed to operate under real-world degradations such as
            compression, blur, and cropping.
          </p>
          <p>
            To date, I have 9 publications spanning IEEE Transactions on Instrumentation and
            Measurement, CVPR Workshops, and ICCV Workshops — with 2 CVPR Workshops 2026 papers
            accepted on robust deepfake detection. I have additionally submitted work to{' '}
            <span className="text-foreground font-medium">ACM Multimedia</span> on explainable
            deepfake detection, and to{' '}
            <span className="text-foreground font-medium">Interspeech</span> on defect tool
            benchmarking across audio datasets — reflecting a growing interest in multimodal and
            audio-visual forensics.
          </p>
          <p>
            Previously, I completed my B.S. in Data Science and Applications from IIT Madras,
            where I built a strong foundation in machine learning and statistical modeling. My
            applied research extends to spectral learning for molecular analysis, behavioral
            biometric authentication, and LLM vulnerability benchmarking — bridging academic
            research with real-world deployment constraints.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
