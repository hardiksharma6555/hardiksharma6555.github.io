// Content data for Hardik's portfolio
window.PORTFOLIO_DATA = {
  name: "Hardik Sharma",
  roles: ["Researcher", "Engineer", "Developer", "AI Enthusiast"],
  tagline: "Ph.D. Researcher in Computer Vision & Deepfake Detection",
  subtagline: "Multimodal Forensics · Explainable AI",
  location: "Mandi, Himachal Pradesh, India",
  email: "hhardikssharma@gmail.com",
  phone: "+91 9877100914",
  links: {
    github: "https://github.com/hardiksharma6555",
    github2: "https://github.com/hardikbha",
    linkedin: "https://linkedin.com/in/hardik-sharma-profile/",
    kaggle: "https://www.kaggle.com/iitm21f1006555",
    scholar: "https://scholar.google.com/citations?user=TFYBmHAAAAAJ&hl=en",
    portfolio: "https://hardiksharma6555.github.io/",
  },

  about: {
    summary:
      "Computer vision researcher specializing in deepfake detection, multimodal document forensics, and explainable forensic reasoning. Research interests span self-supervised and reinforcement-learning approaches to deepfake detection, chain-of-thought reasoning for evidence-grounded forensic analysis, and agent-based detection frameworks for real-world media authentication.",
    secondary:
      "Hands-on experience across research and production environments — from scalable KYC verification systems and forensic pipelines using ensemble methods and multimodal cues, to robust visual recognition systems that hold up under compression, noise, and distribution shifts. Bridging theory and practice for high-stakes applications like digital identity verification and media authenticity.",
  },

  interests: [
    { label: "Computer Vision", code: "CV" },
    { label: "Deepfake Detection", code: "DFD" },
    { label: "Multimodal Forensics", code: "MMF" },
    { label: "Chain-of-Thought Forensic Reasoning", code: "CoT" },
    { label: "AI-Generated Image Detection", code: "AIGI" },
    { label: "Representation Learning & Robustness", code: "RLR" },
    { label: "Document Forensics & Visual Authentication", code: "DFVA" },
    { label: "Agent-Based Detection & LLMs", code: "AGT" },
  ],

  experience: [
    {
      role: "Vision Engineer",
      org: "Reagvis Labs",
      period: "Apr 2024 — Jul 2025",
      bullets: [
        "Built visual forensic pipelines for fraud detection by integrating VLM-based cues with forensic priors and the TruFor algorithm",
        "Boosted challenge weighted F1 from 0.706 → 0.712 by combining baseline outputs with statistical measures; achieved 0.839 on FantasyID",
        "Contributed to challenge-facing deepfake and document-forensics systems under realistic evaluation settings",
      ],
      tag: "research × engineering",
    },
    {
      role: "Computer Vision Intern",
      org: "Truens AI",
      period: "Dec 2024 — Apr 2025",
      bullets: [
        "Built real-time deepfake detection for banking KYC video calls — 73.8% F1 on a private dataset and 70% aggregate F1 across multiple evaluation scenarios",
        "Engineered a multimodal ID-card verification system combining computer vision and NLP to detect both visual and textual forgeries",
        "Focused on practical deployment constraints for remote onboarding and fraud-prevention workflows",
      ],
      tag: "industry",
    },
    {
      role: "Research Intern",
      org: "IIT Mandi",
      period: "May 2024 — Present",
      bullets: [
        "Conducted research on infrared spectral learning and chemometric modelling for molecular analysis",
        "Built deep architectures for imbalanced multi-label prediction from spectral inputs — 90.4% precision and 97.9% specificity on odor prediction",
        "Applied transformer-based modelling and augmentation strategies on a dataset of 3,036 molecules with 109 odor perception labels",
      ],
      tag: "research",
    },
    {
      role: "Data Science Intern",
      org: "DeepAlgorithms Pvt. Ltd.",
      period: "May 2024 — Nov 2024",
      bullets: [
        "Developed a behavioural biometric authentication system from motion-sensor data — 88% accuracy with FAR 0.04 and FRR 0.08",
        "Engineered a spatial-attention-based deep model that processed raw accelerometer, gyroscope, and magnetometer inputs without manual feature engineering",
      ],
      tag: "industry",
    },
    {
      role: "Research Intern",
      org: "AIISC, University of South Carolina",
      period: "Jul 2024 — Dec 2024",
      bullets: [
        "Implemented jailbreak techniques from the Trees of Attack framework and evaluated vulnerability across 22 major LLMs",
        "Benchmarked attack success across models including GPT-4, Claude, and LLaMA — demonstrating rigorous empirical research and evaluation capability",
      ],
      tag: "research",
    },
  ],

  publications: [
    {
      title: "CIRSNet: A Lightweight Chemometric Infrared Spectral Network for Spectral Analysis",
      venue: "IEEE T-IM",
      year: "2025",
      tag: "Journal",
    },
    {
      title: "BioFASTNet: Biomedical Fragmented Attention Spectral Transformer Network for Infrared Spectra Analysis",
      venue: "IEEE T-IM",
      year: "2026",
      tag: "Journal",
    },
    {
      title: "TRIDENT: Robust Deepfake Detection via Tri-Modal Forensic Ensembles",
      venue: "CVPR Workshops",
      year: "2026",
      tag: "Accepted",
    },
    {
      title: "Beyond Backbones: Degradation-Aware Prototype Fusion for Robust Deepfake Detection",
      venue: "CVPR Workshops",
      year: "2026",
      tag: "Accepted",
    },
    {
      title: "Deepfake Image Detection in the Wild — NTIRE 2026 Challenge Report",
      venue: "CVPR Workshops",
      year: "2026",
      tag: "Challenge Report",
    },
    {
      title: "Robust Deepfake Detection — NTIRE 2026 Challenge Report",
      venue: "CVPR Workshops",
      year: "2026",
      tag: "Challenge Report",
    },
    {
      title: "Low-Light Image Enhancement Challenge at NTIRE 2026",
      venue: "CVPR Workshops",
      year: "2026",
      tag: "Challenge Report",
    },
    {
      title: "DeepID Challenge of Detecting Synthetic Manipulations in ID Documents",
      venue: "ICCV Workshops",
      year: "2025",
      tag: "Challenge Report",
    },
    {
      title: "ForensicCoT: Evidence-Augmented Chain-of-Thought Reasoning for Cross-Domain Text Manipulation Detection",
      venue: "ACM Multimedia",
      year: "2026",
      tag: "Submitted",
    },
    {
      title: "DFToolBench-A: A Benchmark for Tool-Augmented Audio Deepfake Detection",
      venue: "Interspeech",
      year: "2026",
      tag: "Submitted",
    },
    {
      title: "Text Summarization of Publicly Available BBC News Dataset on Kaggle",
      venue: "GJRA",
      year: "2024",
      tag: "Journal",
    },
  ],

  challenges: [
    {
      name: "DeepID 2025 — ICCV Workshops",
      context: "Detecting synthetic manipulations in ID documents under realistic KYC settings",
      result: "Ranked 5th / 250+ teams",
    },
    {
      name: "NTIRE 2026 — CVPR Workshops",
      context: "Robust AI-Generated Image Detection in the Wild — diverse real-world transformations",
      result: "Ranked 5th / 300+ teams",
    },
    {
      name: "NTIRE 2026 — CVPR Workshops",
      context: "Robust Deepfake Detection — forensic ensembles under challenging conditions",
      result: "Ranked 6th / 100+ teams",
    },
    {
      name: "NTIRE 2026 — CVPR Workshops",
      context: "Low-Light Image Enhancement — perceptual restoration in extreme low-light",
      result: "Ranked 9th / 150+ teams",
    },
  ],

  projects: [
    {
      title: "Real-Time KYC Deepfake Detection",
      kind: "Industry system",
      blurb:
        "Sub-second multimodal pipeline for banking video KYC. Combines facial temporal cues, frequency-domain artifacts, and a lightweight TruFor-derived branch.",
      metrics: [
        { k: "F1 (private)", v: "73.8%" },
        { k: "F1 (aggregate)", v: "70.0%" },
        { k: "Latency", v: "<900ms" },
      ],
    },
    {
      title: "Behavioural Biometric Auth",
      kind: "Production research",
      blurb:
        "Continuous authentication from raw IMU streams. Spatial-attention over fused accelerometer / gyroscope / magnetometer channels — no manual feature engineering.",
      metrics: [
        { k: "Accuracy", v: "88%" },
        { k: "FAR", v: "0.04" },
        { k: "FRR", v: "0.08" },
      ],
    },
    {
      title: "Multimodal ID Forgery Detection",
      kind: "Vision + NLP",
      blurb:
        "Joint visual and textual authenticity model. Detects copy-move, inpainting, and semantic inconsistency in identity documents.",
      metrics: [
        { k: "F1 (FantasyID)", v: "0.839" },
        { k: "Weighted F1", v: "0.712" },
      ],
    },
    {
      title: "CIRSNet · Spectral Learning",
      kind: "Published research",
      blurb:
        "Lightweight chemometric network for IR spectral analysis — deployed on ESP32 for embedded real-time inference. Transformer-based modelling on 3,036 molecules across 109 odor labels.",
      metrics: [
        { k: "Precision", v: "90.4%" },
        { k: "Specificity", v: "97.9%" },
      ],
    },
  ],

  sideProjects: [
    {
      title: "Generic AI Assistant",
      kind: "Landing page · 2026",
      blurb:
        "Marketing site mockup for a general-purpose AI assistant — header, interactive demo, use cases, tutorials, social proof, and tracker sections.",
      tags: ["React", "Tailwind", "Babel"],
      live: "https://generic-ai-assistant-deploy.vercel.app",
      code: "https://github.com/hardiksharma6555/generic-ai-assistant",
    },
    {
      title: "Deepfake Website",
      kind: "Multi-page · 2026",
      blurb:
        "Multi-page marketing site for a deepfake-detection product — index, agent overview, and pricing pages with hero visualisations and feature sections.",
      tags: ["React", "Multi-page", "Babel"],
      live: "https://deepfake-website-deploy.vercel.app",
      code: "https://github.com/hardiksharma6555/deepfake-website",
    },
    {
      title: "Fake News Detector",
      kind: "Single page · 2026",
      blurb:
        "End-to-end fake-news classifier UI — atomic components, hero claim input, sectional explainer, and animated verdict panel.",
      tags: ["React", "Tailwind", "Babel"],
      live: "https://fake-news-detector-deploy.vercel.app",
      code: "https://github.com/hardiksharma6555/fake-news-detector",
    },
    {
      title: "Person Counter",
      kind: "Vision UI · 2026",
      blurb:
        "Landing page for a vision-based footfall analytics demo — primitives, hero, gallery, demo, verdict, and data sections.",
      tags: ["React", "Tailwind", "Babel"],
      live: "https://person-counter-deploy.vercel.app",
      code: "https://github.com/hardiksharma6555/person-counter",
    },
    {
      title: "Video Generator",
      kind: "Landing page · 2026",
      blurb:
        "Static landing page for a long-form video generation product — hero, feature sections, and a tweakable design panel for layout iteration.",
      tags: ["React", "Tailwind", "Babel"],
      live: "https://video-generator-deploy.vercel.app",
      code: "https://github.com/hardiksharma6555/video-generator",
    },
  ],

  skills: {
    "Core Areas": ["Computer Vision", "Deep Learning", "Multimodal Learning", "NLP", "LLMs & Agentic AI"],
    "Frameworks": ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "HuggingFace", "Keras", "spaCy", "NLTK"],
    "Languages": ["Python", "SQL", "Java", "JavaScript"],
    "Tools & Stack": ["Docker", "Git", "FastAPI", "Flask", "LangChain", "n8n"],
  },

  awards: [
    { name: "GATE DA Qualified", org: "Graduate Aptitude Test in Engineering — Data Science & AI", year: "2025" },
    { name: "Azure AI Fundamentals", org: "Microsoft", year: "Aug 2024" },
    { name: "Diploma in Data Science", org: "IIT Madras", year: "Jan 2025" },
    { name: "Natural Language Processing", org: "NPTEL", year: "Mar 2025" },
    { name: "Research Graduate Meeting Presenter", org: "IIT Mandi", year: "Mar 2024" },
  ],

  education: [
    {
      school: "Indian Institute of Technology, Mandi",
      location: "Himachal Pradesh",
      degree: "Ph.D. in Artificial Intelligence & Robotics",
      sub: "Centre for AI and Robotics (CAIR)",
      period: "Aug 2025 — Present",
      mark: "Current",
    },
    {
      school: "Indian Institute of Technology, Madras",
      location: "Tamil Nadu",
      degree: "B.S. in Data Science & Applications",
      sub: "",
      period: "Apr 2021 — May 2025",
      mark: "CGPA 7.93",
    },
    {
      school: "Partap World School, Indora",
      location: "Himachal Pradesh",
      degree: "Class XII (CBSE)",
      sub: "Senior Secondary",
      period: "Apr 2019 — Mar 2020",
      mark: "88.2%",
    },
    {
      school: "Partap World School, Indora",
      location: "Himachal Pradesh",
      degree: "Class X (CBSE)",
      sub: "Secondary",
      period: "Apr 2017 — Mar 2018",
      mark: "88.4%",
    },
  ],

  // ——— Demo content ———
  // Two modes: deepfake detection + liveness detection
  demo: {
    deepfake: {
      title: "Multimodal Deepfake Detection",
      desc: "Three forensic streams — frequency-domain, vision-language semantics, and TruFor sensor noise — fused at decision time. Run inference on a sample or upload your own image.",
      reportLabel: "Deepfake — Detailed Report",
      streams: [
        { k: "frequency", label: "Frequency artifacts" },
        { k: "vlm",       label: "VLM semantic" },
        { k: "trufor",    label: "TruFor noise prior" },
      ],
      samples: [
        {
          id: "df-real-1",
          label: "Real · Authentic capture",
          src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
          truth: "real",
          target: { conf: 94, vlm: 12, freq: 9, trufor: 14 },
          summary:
            "All three forensic streams align with a genuine single-pass camera capture. Sensor noise is uniform across the entire frame, skin micro-texture follows natural pore distribution, and the VLM finds no semantic inconsistencies between face geometry, hair, and lighting.",
        },
        {
          id: "df-fake-1",
          label: "Fake · GAN portrait",
          src: "uploads/sample_image.jpg",
          truth: "fake",
          target: { conf: 87, vlm: 81, frequency: 94, trufor: 78 },
          summary:
            "Frequency-domain artifacts in mid-band cheek region, micro-blur around hairline, and TruFor noise prior inconsistent with any known camera ISP — strong evidence of GAN synthesis.",
        },
      ],
    },
    liveness: {
      title: "Active Liveness Detection",
      desc: "End-to-end liveness pipeline combining depth-from-defocus, micro-movement analysis, and screen-replay detection. Distinguishes a genuine human from printed photos, replay attacks, and 3D masks.",
      reportLabel: "Liveness — Detailed Report",
      streams: [
        { k: "depth",    label: "Depth-from-defocus" },
        { k: "motion",   label: "Micro-movement" },
        { k: "replay",   label: "Screen-replay check" },
      ],
      samples: [
        {
          id: "lv-real-1",
          label: "Live · Genuine human",
          src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
          truth: "real",
          target: { conf: 96, depth: 92, motion: 89, replay: 8 },
          summary:
            "All liveness signals agree this is a genuine human in front of the camera. Natural micro-movements — involuntary blinks, sub-pixel head motion, and pupil dilation in response to ambient light — are present at expected frequencies. Depth-from-defocus matches a real 3D face at typical webcam distance, with no screen-replay artifacts in the temporal stream.",
        },
        {
          id: "lv-spoof-print",
          label: "Spoof · Printed photo",
          src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=900&q=80",
          truth: "fake",
          target: { conf: 91, depth: 12, motion: 8, replay: 22 },
          summary:
            "Detected flat planar surface presented to the camera — the depth map shows uniform focus across the entire face, inconsistent with real 3D facial geometry. Specular reflection pattern matches paper, not skin. No micro-movements, blinks, or pupil response detected over the full sampling window — strong evidence of a static printed-photo presentation attack.",
        },
        {
          id: "lv-spoof-replay",
          label: "Spoof · Replay attack",
          src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
          truth: "fake",
          target: { conf: 88, depth: 18, motion: 31, replay: 94 },
          summary:
            "Strong screen-replay signatures detected. Moiré pattern visible across the captured frames, characteristic of a display being filmed by another camera. Frame-rate aliasing produces periodic banding in the temporal stream, and the color gamut is compressed to sRGB display range with refresh-rate artifacts. The face appears to move naturally — but it's a recording of a real person being replayed on a screen.",
        },
      ],
    },
  },
};
