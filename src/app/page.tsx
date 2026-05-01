import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot"), {
  ssr: false,
});
const RevealSection = dynamic(() => import("@/components/reveal-section"), {
  ssr: false,
});

type TimelineEntry = {
  period: string;
  headline: string;
  body?: string;
  bullets?: string[];
};

const timeline: TimelineEntry[] = [
  {
    period: "2022–2024",
    headline: "National Service — GPMG Commander, 1 SIR Infantry",
    body: "Completed full-time national service as a General Purpose Machine Gun Commander in 1st Singapore Infantry Regiment. Developed discipline, leadership under pressure, and decision-making in high-stakes environments.",
  },
  {
    period: "Sep 2024 – Jan 2026",
    headline: "B2C Sales Executive — Eden Cube Marketing",
    bullets: [
      "Ran 8–10 outbound sales conversations per day, consistently closing 1–2 customers daily",
      "Ranked top 20% of campaign based on weekly performance metrics",
      "Trained and supported new trainees on sales scripts, objection handling, and pipeline discipline",
      "Built rapid rapport across diverse customer profiles through clear, direct communication",
      "Developed resilience and composure in a high-rejection, target-driven environment",
    ],
  },
  {
    period: "Feb 2026 – Present",
    headline: "Sales Engineer — PLC Automation Pte Ltd",
    bullets: [
      "Managing B2B relationships with engineering, maintenance, and procurement stakeholders across industrial facilities",
      "Handling end-to-end RFQ processes for PLCs, VFDs, HMIs, and control system components",
      "Supporting clients with urgent sourcing requirements to mitigate operational downtime",
      "Identifying legacy and obsolete automation modules and coordinating alternative supply solutions",
      "Collaborating with regional supply networks to optimise lead times and cross-border orders",
      "Developing long-term client partnerships in manufacturing, semiconductor, pharmaceutical, and energy sectors",
      "Key accounts include Sumitomo Chemical Asia and ThermoFisher Scientific",
    ],
  },
  {
    period: "Apr 2026 – Present",
    headline: "Co-Founder — DoubleLead",
    body: "Building DoubleLead — an AI-powered sales execution tool for solo salespeople across Southeast Asia.",
  },
];

const statCards = [
  { value: "$200K+", label: "in quotes managed" },
  { value: "Top 20%", label: "B2C sales performer" },
  { value: "2", label: "industries: B2C and B2B" },
  { value: "1", label: "startup founded" },
  { value: "SEA", label: "target market" },
];

const currentlyItems = [
  "Closing B2B industrial automation deals at PLC Automation",
  "Building DoubleLead's first 10 paying customers",
  "Studying Accounting & Finance part-time at Murdoch via Kaplan",
  "Running 5km regularly and cutting weight",
  "Reading: Business strategy and self-improvement",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070709]/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <p className="text-sm font-medium tracking-wide text-zinc-300">Kiran</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.12em] text-zinc-400">
            <a href="#currently" className="transition hover:text-white">
              Currently
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#timeline" className="transition hover:text-white">
              Timeline
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#open-to" className="transition hover:text-white">
              Open to
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-32 pt-12 md:px-10 md:pt-18">
        <RevealSection id="hero" className="premium-section border-none py-16 md:py-28">
          <p className="section-label">Singapore / Portfolio</p>
          <div className="hero-glow-wrap mt-7">
            <span className="hero-glow" aria-hidden="true" />
            <h1 className="relative max-w-5xl text-balance text-6xl font-semibold leading-[0.94] tracking-[-0.045em] text-white md:text-8xl lg:text-9xl">
              Kiran Veeranala
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
            Sales Engineer | Co-Founder of DoubleLead | Building the future of sales
            execution in Southeast Asia
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="premium-button">
              View My Work
            </a>
            <a href="#contact" className="premium-button-secondary">
              Get In Touch
            </a>
          </div>
        </RevealSection>

        <RevealSection id="currently" className="premium-section py-16 md:py-24">
          <p className="section-label">Currently</p>
          <ul className="mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-zinc-300 md:text-lg">
            {currentlyItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="shrink-0 text-zinc-500" aria-hidden>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="about" className="premium-section py-16 md:py-24">
          <p className="section-label">About</p>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
            <p>
              Kiran Veeranala is a 23-year-old Singapore-based sales professional and
              entrepreneur. He operates at the intersection of high-performance B2B sales
              and early-stage startup building — managing industrial automation accounts
              by day while co-founding DoubleLead at night.
            </p>
            <p>
              He is pursuing a part-time Bachelor of Accounting & Finance at Murdoch
              University through Kaplan Higher Education — deliberately combining
              financial literacy with commercial execution. His long-term vision is to
              sit at the intersection of sales and finance: understanding not just how
              to close deals, but how those deals compound into business value,
              investment returns, and scalable systems.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="timeline" className="premium-section py-16 md:py-24">
          <p className="section-label">Career Timeline</p>
          <ul className="mt-8 space-y-12 md:space-y-14">
            {timeline.map((item) => (
              <li
                key={item.headline}
                className="grid grid-cols-[minmax(0,88px)_20px_1fr] gap-4 md:grid-cols-[minmax(0,140px)_28px_1fr] md:gap-8"
              >
                <p className="pt-0.5 text-[10px] uppercase leading-snug tracking-[0.12em] text-zinc-500 md:text-xs md:tracking-[0.14em]">
                  {item.period}
                </p>
                <div className="relative flex justify-center">
                  <span className="timeline-dot mt-1.5" />
                  <span className="timeline-line" />
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-medium text-white md:text-xl">
                    {item.headline}
                  </h3>
                  {item.body && (
                    <p className="mt-2 text-zinc-300 md:max-w-3xl">{item.body}</p>
                  )}
                  {item.bullets && (
                    <ul className="mt-3 list-none space-y-2 text-zinc-300 md:max-w-3xl">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2 pl-0">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="projects" className="premium-section py-16 md:py-24">
          <p className="section-label">Projects</p>
          <article className="mt-6 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                DoubleLead — AI-Powered Sales Execution Tool
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI",
                  "Sales execution",
                  "SEA",
                  "B2B / B2C",
                  "Startup",
                ].map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-zinc-500">
              Founded: April 2026 · Stage: Early stage, actively acquiring first paying
              customers · Co-founder (AI): Edmund Lin
            </p>
            <div className="space-y-4 text-zinc-300">
              <div>
                <p className="subsection-label">The problem</p>
                <p>
                  Most salespeople don&apos;t lose deals because customers aren&apos;t
                  interested. They lose deals because they fail to follow up. In a world
                  of overflowing inboxes and competing priorities, consistent follow-up
                  is the difference between closing and losing.
                </p>
              </div>
              <div>
                <p className="subsection-label">The solution</p>
                <p>
                  DoubleLead is an AI-powered execution tool built for solo salespeople —
                  insurance agents, property agents, and freelance sales professionals
                  across Southeast Asia. It automates follow-up sequences, tracks lead
                  status, and ensures no deal goes cold due to human forgetfulness.
                </p>
              </div>
              <div>
                <p className="subsection-label">Why I built it</p>
                <p>
                  As a salesperson myself, I experienced firsthand how deals slip through
                  the cracks — not from lack of interest, but lack of follow-up. Every
                  CRM I tried was built for enterprise teams. Nothing existed for the solo
                  operator who needed something simple, fast, and actually built for how
                  they sell. So I built it.
                </p>
              </div>
              <div>
                <p className="subsection-label">Positioning</p>
                <p className="font-medium text-white">
                  Apollo = leads. HubSpot = CRM. DoubleLead = execution.
                </p>
                <p className="mt-2">
                  Target users: Insurance agents, property agents, freelance salespeople
                  across Singapore, Malaysia, Indonesia, and the Philippines.
                </p>
              </div>
            </div>
            <a
              href="https://doublelead.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              doublelead.vercel.app {"->"}
            </a>
          </article>
        </RevealSection>

        <RevealSection id="philosophy" className="premium-section py-16 md:py-24">
          <p className="section-label">Philosophy</p>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
            <p>I believe in leverage over labour.</p>
            <p>Systems over hustle. Scale over salary.</p>
            <p>Building things that work while I sleep.</p>
            <p className="pt-2">
              Long term, I want to sit at the intersection of sales and finance —
              understanding not just how to close deals, but how those deals compound into
              business value. The best operators in the world understand both sides: how
              to generate revenue and how to deploy it intelligently. That&apos;s the
              version of myself I&apos;m building toward.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="open-to" className="premium-section py-16 md:py-24">
          <p className="section-label">Open to</p>
          <ul className="mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-zinc-300 md:text-lg">
            <li className="flex gap-3">
              <span className="shrink-0 text-zinc-500">→</span>
              <span>DoubleLead beta users and feedback</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-zinc-500">→</span>
              <span>Partnerships with sales communities in SEA</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-zinc-500">→</span>
              <span>Coffee chats with founders, operators, and investors</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-zinc-500">→</span>
              <span>Connecting with finance professionals and CFOs</span>
            </li>
          </ul>
        </RevealSection>

        <RevealSection id="stats" className="premium-section py-16 md:py-24">
          <p className="section-label">Stats</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {statCards.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.08em] text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="contact" className="premium-section border-b-0 py-16 md:py-24">
          <p className="section-label">Contact</p>
          <form className="mt-6 max-w-3xl space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="input-field"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="input-field"
                required
              />
            </div>
            <textarea
              placeholder="Your message"
              className="input-field min-h-28 resize-none"
              required
            />
            <button type="submit" className="premium-button w-full md:w-auto">
              Send Message
            </button>
          </form>
          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kiranveeranala@gmail.com"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </RevealSection>
      </main>

      <Chatbot />
    </div>
  );
}
