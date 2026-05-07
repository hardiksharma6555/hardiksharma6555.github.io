/* Portfolio — Research Lab Dark v2 */
const { useState, useEffect, useRef } = React;
const D = window.PORTFOLIO_DATA;

// ——— Hero ———
function Hero() {
  const [tickIdx, setTickIdx] = useState(0);
  const ticks = ["computer vision", "deepfake forensics", "multimodal AI", "LLMs & agentic AI"];
  useEffect(() => {
    const i = setInterval(() => setTickIdx(x => (x + 1) % ticks.length), 2400);
    return () => clearInterval(i);
  }, []);
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-inner">
        <div>
          <div className="hero-tag">
            <span className="pulse"></span>
            Available for collaboration · CV · Deepfake · LLMs & Agentic AI
          </div>
          <h1 className="hero-name">
            Hardik<br />Sharma<span className="accent">.</span>
          </h1>
          <div className="hero-role">
            <span>PhD Research</span>
            <span className="sep"></span>
            <span className="ticker">{ticks[tickIdx]}</span>
          </div>
          <p className="hero-bio">
            I build computer vision systems that <em>detect and explain</em> — focused on deepfake detection,
            multimodal document forensics, and LLMs &amp; agentic AI for real-world deployment.
          </p>
          <div className="hero-ctas">
            <a className="btn primary" href="assets/Hardik_Sharma_Resume.pdf" download>
              Download Resume <span className="arr">↓</span>
            </a>
            <a className="btn" href={D.links.linkedin} target="_blank" rel="noopener">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 6, verticalAlign: -2}}>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
              LinkedIn <span className="arr">→</span>
            </a>
            <a className="btn" href="#demo">Try the demo</a>
            <a className="btn" href={D.links.scholar} target="_blank">Scholar</a>
          </div>
          <div className="hero-stack">
            <span className="label">Stack</span>
            <div className="stack-tags">
              <span className="stack-tag">PyTorch</span>
              <span className="stack-tag">CUDA</span>
              <span className="stack-tag">CLIP</span>
              <span className="stack-tag">FastAPI</span>
              <span className="stack-tag">Docker</span>
            </div>
          </div>
        </div>
        <div className="hero-portrait">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
          <img src="assets/hardik_hero.png" alt="Hardik Sharma"
               onError={e => { e.currentTarget.src = "uploads/hardik_pict.png"; }} />
          <div className="nameplate">
            <div className="l">
              <strong>HARDIK SHARMA</strong>
              <span>India · IST</span>
            </div>
            <div className="r">
              <span>PORTFOLIO ’26</span>
              <span>v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— Section header ———
function SectionHead({ num, title, accentWord, meta }) {
  const parts = accentWord && title.includes(accentWord)
    ? title.split(accentWord)
    : null;
  return (
    <header className="section-head">
      <span className="num">{num}</span>
      <h2>
        {parts
          ? <>{parts[0]}<span className="accent">{accentWord}</span>{parts[1]}</>
          : title}
      </h2>
      {meta && <span className="meta">{meta}</span>}
    </header>
  );
}

// ——— About ———
function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="section-inner">
        <SectionHead num="01" title="About" meta="Profile · 2026" />
        <div className="about-grid">
          <div className="about-copy">
            <p>{D.about.summary}</p>
            {D.about.secondary && <p>{D.about.secondary}</p>}
          </div>
          <div className="interests-grid">
            {D.interests.map(i => (
              <div key={i.code} className="interest-card">
                <div className="code">{i.code}</div>
                <div className="label">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— DEMO (auto-playing reel) ———
function DeepfakeDemo() {
  const [mode, setMode] = useState("deepfake");
  const cfg = D.demo[mode];
  const samples = cfg.samples;
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("analyzing"); // analyzing | verdict
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [scores, setScores] = useState({});
  const [confidence, setConfidence] = useState(0);
  const tickRef = useRef(null);
  const holdRef = useRef(null);

  const stepsByMode = {
    deepfake: ["extract face crops", "frequency-domain features", "trufor noise prior", "vlm semantic check", "ensemble fusion"],
    liveness: ["frame extraction", "depth-from-defocus", "micro-movement analysis", "screen-replay check", "decision fusion"],
  };
  const steps = stepsByMode[mode];
  const sample = samples[idx % samples.length];

  // Reset whenever mode changes
  useEffect(() => {
    setIdx(0);
    setPhase("analyzing");
    setProgress(0);
    setStepIdx(0);
    setScores({});
    setConfidence(0);
  }, [mode]);

  // Auto-play loop: analyzing → verdict → next
  useEffect(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    if (holdRef.current) clearTimeout(holdRef.current);

    setProgress(0);
    setStepIdx(0);
    setScores({});
    setConfidence(0);

    const tgt = sample.target;
    const streamKeys = cfg.streams.map(s => s.k);
    let t = 0;
    const TICK = 50;
    const ANALYZE_MS = 2400;
    const HOLD_MS = 3200;

    setPhase("analyzing");
    tickRef.current = setInterval(() => {
      t += TICK;
      const p = Math.min(100, (t / ANALYZE_MS) * 100);
      setProgress(p);
      setStepIdx(Math.min(steps.length - 1, Math.floor((p / 100) * steps.length)));
      const k = p / 100;
      const next = {};
      streamKeys.forEach(sk => { next[sk] = (tgt[sk] || 0) * k; });
      setScores(next);
      setConfidence(tgt.conf * k);
      if (t >= ANALYZE_MS) {
        clearInterval(tickRef.current);
        setPhase("verdict");
        holdRef.current = setTimeout(() => {
          setIdx(i => (i + 1) % samples.length);
        }, HOLD_MS);
      }
    }, TICK);

    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
      if (holdRef.current) clearTimeout(holdRef.current);
    };
  }, [idx, mode]);

  const verdictAccepted = sample.truth === "real";
  const verdictText = mode === "deepfake"
    ? (verdictAccepted ? "REAL — ACCEPTED" : "FAKE — REJECTED")
    : (verdictAccepted ? "LIVE — VERIFIED" : "SPOOF — REJECTED");

  return (
    <section className="demo" id="demo" data-screen-label="Demo">
      <div className="demo-inner">
        <SectionHead num="02" title="Live Demo" accentWord="Demo" meta="Auto-playing reel · Multimodal forensics" />

        <div className="demo-mode-toggle">
          {[{k:"deepfake",l:"Deepfake Detection"},{k:"liveness",l:"Liveness Detection"}].map(m => (
            <button key={m.k}
              className={"mode-pill" + (mode === m.k ? " active" : "")}
              onClick={() => setMode(m.k)}>
              <span className="dot"></span>{m.l}
            </button>
          ))}
        </div>

        <div className="demo-grid">
          {/* Viewer */}
          <div className="demo-viewer">
            <span className="demo-corner tl"></span>
            <span className="demo-corner tr"></span>
            <span className="demo-corner bl"></span>
            <span className="demo-corner br"></span>
            <span className="demo-label input">INPUT · {sample.label}</span>

            <img src={sample.src} alt={sample.label}
                 onError={e => { e.currentTarget.src = "assets/sample_fake.jpg"; }}
                 style={{
                   filter: phase === "analyzing" ? "contrast(1.08) saturate(0.85)" : "none",
                 }} />

            {phase === "verdict" && sample.truth === "fake" && (
              <svg className="demo-heatmap" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id={"hot1-"+mode+idx} cx="50%" cy="42%" r="22%">
                    <stop offset="0%" stopColor="#ff5b3a" stopOpacity="0.55"/>
                    <stop offset="100%" stopColor="#ff5b3a" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id={"hot2-"+mode+idx} cx="38%" cy="55%" r="14%">
                    <stop offset="0%" stopColor="#ffae3a" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#ffae3a" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="100" height="100" fill={"url(#hot1-"+mode+idx+")"}/>
                <rect width="100" height="100" fill={"url(#hot2-"+mode+idx+")"}/>
              </svg>
            )}

            {phase === "analyzing" && <div className="demo-scan"></div>}

            {phase === "analyzing" && (
              <div className="processing-card">
                <div className="head">
                  <div className="l"><span className="pdot"></span> Processing</div>
                  <span className="pct">{Math.round(progress)}%</span>
                </div>
                <div className="track"><div className="fill" style={{ width: progress + "%" }}></div></div>
                <div className="steps">
                  {steps.map((s, i) => (
                    <span key={s} className={i <= stepIdx ? "done" : ""}>
                      {i <= stepIdx ? "✓" : "○"} &nbsp; {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {phase === "verdict" && (
              <span className={"demo-label verdict " + sample.truth}>
                {mode === "deepfake"
                  ? (verdictAccepted ? "REAL" : "FAKE")
                  : (verdictAccepted ? "LIVE" : "SPOOF")
                } · {Math.round(sample.target.conf)}%
              </span>
            )}

            {/* progress dots */}
            <div className="reel-dots">
              {samples.map((s, i) => (
                <span key={s.id} className={"reel-dot" + (i === idx ? " active" : "")}></span>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div className="demo-panel">
            <div>
              <h3>{cfg.title}</h3>
              <div className="desc" style={{marginTop: 6}}>{cfg.desc}</div>
            </div>

            <div className="demo-readout">
              <div className="verdict-row">
                <div className={"pct num verdict-" + (phase === "verdict" ? sample.truth : "neutral")}>
                  {Math.round(confidence)}%
                </div>
                <div className="verdict-meta">
                  <span className="vlabel">Confidence</span>
                  <span className={"vstate " + (phase === "verdict" ? "verdict-" + sample.truth : "processing")}>
                    {phase === "analyzing" ? "ANALYZING…" : verdictText}
                  </span>
                </div>
              </div>
              <div className="bar-stack">
                {cfg.streams.map(s => (
                  <div key={s.k} className="bar-row">
                    <span>{s.label}</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: (scores[s.k] || 0) + "%" }}></div></div>
                    <span className="bar-val num">{Math.round(scores[s.k] || 0)}</span>
                  </div>
                ))}
              </div>
            </div>

            {phase === "verdict" && (
              <div className={"reel-summary reel-" + sample.truth}>
                <span className="r-title">
                  {sample.truth === "fake"
                    ? (mode === "deepfake" ? "Why this is rejected" : "Spoof signatures")
                    : (mode === "deepfake" ? "Why this is authentic" : "Liveness signatures")}
                </span>
                <p>{sample.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— Experience ———
function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="experience" data-screen-label="Experience">
      <div className="section-inner">
        <SectionHead num="03" title="Experience" meta="2024 — Present" />
        <div className="timeline">
          {D.experience.map((e, i) => (
            <div key={i}
                 className={"tl-item" + (open === i ? " expanded" : "")}
                 onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="tl-period">{e.period}</div>
              <div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-org">
                  <span>{e.org}</span>
                  <span className="tl-tag">{e.tag}</span>
                </div>
                <ul>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Publications ———
function Publications() {
  return (
    <section className="section" id="publications" data-screen-label="Publications">
      <div className="section-inner">
        <SectionHead num="04" title="Publications" accentWord="Publications" meta={`${D.publications.length} entries`} />
        <div className="pubs-list">
          {D.publications.map((p, i) => (
            <a key={i} href={D.links.scholar} target="_blank" className="pub-row">
              <span className="p-num num">P/{String(i+1).padStart(2,"0")}</span>
              <span className="p-title">{p.title}</span>
              <span className="p-venue">{p.venue} · {p.tag}</span>
              <span className="p-year num">{p.year}</span>
              <span className="p-arr">→</span>
            </a>
          ))}
        </div>
        <div className="challenges">
          {D.challenges.map((c, i) => (
            <div key={i} className="challenge">
              <div className="c-name">{c.name}</div>
              <div className="c-context">{c.context}</div>
              <div className="c-result">{c.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Projects ———
function Projects() {
  return (
    <section className="section" id="projects" data-screen-label="Projects">
      <div className="section-inner">
        <SectionHead num="05" title="Projects" meta="Selected work" />
        <div className="projects">
          {D.projects.map((p, i) => (
            <article key={i} className="project-card">
              <div className="p-kind"><span className="dot"></span>{p.kind}</div>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-blurb">{p.blurb}</p>
              <div className="p-metrics">
                {p.metrics.map(m => (
                  <div key={m.k} className="p-metric">
                    <span className="k">{m.k}</span>
                    <span className="v num">{m.v}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Side Projects ———
function SideProjects() {
  const items = D.sideProjects || [];
  if (!items.length) return null;
  return (
    <section className="section" id="side-projects" data-screen-label="Side Projects">
      <div className="section-inner">
        <SectionHead num="06" title="Side Projects" accentWord="Side Projects" meta={`${items.length} live deployments · Vercel`} />
        <div className="side-projects">
          {items.map((p, i) => (
            <article key={i} className="side-card">
              <div className="sp-head">
                <div className="sp-kind"><span className="dot"></span>{p.kind}</div>
                <span className="sp-num num">S/{String(i+1).padStart(2,"0")}</span>
              </div>
              <h3 className="sp-title">{p.title}</h3>
              <p className="sp-blurb">{p.blurb}</p>
              {p.tags && (
                <div className="sp-tags">
                  {p.tags.map(t => <span key={t} className="sp-tag">{t}</span>)}
                </div>
              )}
              <div className="sp-actions">
                <a className="sp-btn primary" href={p.live} target="_blank" rel="noopener">
                  Live <span className="arr">↗</span>
                </a>
                <a className="sp-btn" href={p.code} target="_blank" rel="noopener">
                  Code <span className="arr">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Skills ———
function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="section-inner">
        <SectionHead num="07" title="Skills" meta="Capabilities matrix" />
        <div className="skills">
          {Object.entries(D.skills).map(([cat, items]) => (
            <div key={cat} className="skill-block">
              <div className="s-label">{cat}</div>
              <div className="s-chips">
                {items.map(s => <span key={s} className="skill-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Education ———
function Education() {
  return (
    <section className="section" id="education" data-screen-label="Education">
      <div className="section-inner">
        <SectionHead num="08" title="Education" meta="Academic path" />
        <div className="education">
          {D.education.map((e, i) => (
            <div key={i} className="edu-row">
              <span className="e-num num">E/{String(i+1).padStart(2,"0")}</span>
              <div className="e-main">
                <div className="e-degree">{e.degree}</div>
                <div className="e-school">{e.school} <span className="e-loc">· {e.location}</span></div>
                {e.sub && <div className="e-sub">{e.sub}</div>}
              </div>
              <div className="e-meta">
                <span className="e-mark num">{e.mark}</span>
                <span className="e-period num">{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Awards / Certifications ———
function Awards() {
  return (
    <section className="section" id="awards" data-screen-label="Certifications">
      <div className="section-inner">
        <SectionHead num="09" title="Certifications & Achievements" meta="Credentials" />
        <div className="awards">
          {D.awards.map((a, i) => (
            <div key={i} className="award-row">
              <span className="a-num num">A/{String(i+1).padStart(2,"0")}</span>
              <span className="a-name">{a.name}</span>
              <span className="a-org">{a.org}</span>
              <span className="a-year num">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Contact ———
function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="Contact">
      <div className="contact-inner">
        <div>
          <SectionHead num="10" title="Contact" meta="Let's talk" />
          <h3 className="contact-lede">
            Let's build systems that <span className="stamp"><span className="accent">see clearly</span></span>.
          </h3>
          <p className="contact-sub">
            Available for collaboration on deepfake detection, computer vision research, and LLMs / agentic AI projects.
          </p>
        </div>
        <div className="contact-lines">
          <a className="contact-line" href={`mailto:${D.email}`}>
            <span className="k">Email</span>
            <span>{D.email}</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-line" href={D.links.scholar} target="_blank">
            <span className="k">Scholar</span>
            <span>scholar.google.com</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-line" href={D.links.github} target="_blank">
            <span className="k">GitHub</span>
            <span>@hardiksharma6555</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-line" href={D.links.github2} target="_blank">
            <span className="k">GitHub</span>
            <span>@hardikbha</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-line" href={D.links.linkedin} target="_blank">
            <span className="k">LinkedIn</span>
            <span>hardik-sharma-profile</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-line" href={D.links.kaggle} target="_blank">
            <span className="k">Kaggle</span>
            <span>iitm21f1006555</span>
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ——— Nav + Footer ———
function ThemeToggle({ theme, setTheme }) {
  const isDark = theme !== "light";
  const next = isDark ? "light" : "dark";
  return (
    <button
      className="pf-theme-toggle"
      onClick={() => setTheme && setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

function Nav({ theme, setTheme }) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#demo", label: "Demo" },
    { href: "#experience", label: "Work" },
    { href: "#publications", label: "Publications" },
    { href: "#projects", label: "Projects" },
    { href: "#side-projects", label: "Side Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="pf-nav">
      <div className="pf-nav-inner">
        <a href="#" className="pf-brand">
          <span className="mark">H</span>
          hardik.sharma
        </a>
        <ul>
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="pf-nav-right">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <div className="pf-status">
            <span className="led"></span>
            <span>OPEN TO COLLABORATION</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="pf-foot">
      <span>© 2026 HARDIK SHARMA · ALL RIGHTS RESERVED</span>
      <span>BUILT WITH REACT · PYTORCH · COFFEE</span>
    </footer>
  );
}

// ——— Root ———
function Portfolio({ theme, setTheme }) {
  return (
    <div className="portfolio-root" data-theme={theme || "dark"}>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <DeepfakeDemo />
      <Experience />
      <Publications />
      <Projects />
      <SideProjects />
      <Skills />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

window.Portfolio = Portfolio;
