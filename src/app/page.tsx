import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot"), {
  ssr: false,
});
const RevealSection = dynamic(() => import("@/components/reveal-section"), {
  ssr: false,
});

export default function Home() {
  const timeline = [
    {
      year: "2019",
      title: "National Service",
      subtitle: "Completed",
    },
    {
      year: "2021",
      title: "B2C Sales",
      subtitle: "Built sales fundamentals",
    },
    {
      year: "2024",
      title: "PLC Automation",
      subtitle: "B2B Sales Engineer",
    },
    {
      year: "2025",
      title: "DoubleLead",
      subtitle: "Co-founder",
    },
    {
      year: "Next",
      title: "SaaS AE",
      subtitle: "Next chapter",
    },
  ];

  const statCards = [
    { value: "$200K+", label: "in quotes managed" },
    { value: "2", label: "months B2B experience" },
    { value: "1", label: "SaaS product built" },
    { value: "SEA", label: "target market" },
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070709]/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <p className="text-sm font-medium tracking-wide text-zinc-300">Kiran</p>
          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.12em] text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#timeline" className="hover:text-white transition">
              Timeline
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-32 pt-12 md:px-10 md:pt-18">
        <RevealSection id="hero" className="premium-section border-none py-16 md:py-28">
          <p className="section-label">
            Singapore / Portfolio
          </p>
          <div className="hero-glow-wrap mt-7">
            <span className="hero-glow" aria-hidden="true" />
            <h1 className="relative max-w-5xl text-balance text-6xl font-semibold leading-[0.94] tracking-[-0.045em] text-white md:text-8xl lg:text-9xl">
              Kiran Veeranala
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
            Sales Engineer | Founder of DoubleLead | Building the future of sales
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

        <RevealSection id="about" className="premium-section py-16 md:py-24">
          <p className="section-label">About</p>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
            <p>
              Kiran Veeranala is 23 years old and based in Singapore. He is
              currently a Sales Engineer at PLC Automation and co-founder of
              DoubleLead.
            </p>
            <p>
              He is pursuing an Accounting & Finance degree at Murdoch
              University via Kaplan, with a background in B2B industrial
              automation sales.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="timeline" className="premium-section py-16 md:py-24">
          <p className="section-label">Career Timeline</p>
          <ul className="mt-8 space-y-8 md:space-y-10">
            {timeline.map((item) => (
              <li key={item.title} className="grid grid-cols-[64px_20px_1fr] gap-4 md:grid-cols-[120px_28px_1fr] md:gap-8">
                <p className="pt-0.5 text-xs uppercase tracking-[0.16em] text-zinc-500 md:text-sm">
                  {item.year}
                </p>
                <div className="relative flex justify-center">
                  <span className="timeline-dot mt-1.5" />
                  <span className="timeline-line" />
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-zinc-300">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="projects" className="premium-section py-16 md:py-24">
          <p className="section-label">Projects</p>
          <article className="mt-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                DoubleLead
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AI", "SaaS", "Sales Automation", "B2B"].map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="max-w-4xl text-zinc-300">
              AI powered sales follow-up tool for solo salespeople in Southeast Asia.
              Built to solve the #1 reason deals are lost: lack of follow-up.
            </p>
            <p className="max-w-4xl text-zinc-300">
              Target users include insurance agents, property agents, and freelance
              salespeople.
            </p>
            <a
              href="https://doublelead.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              Visit Project {"->"}
            </a>
          </article>
        </RevealSection>

        <RevealSection id="stats" className="premium-section py-16 md:py-24">
          <p className="section-label">Stats</p>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="text-4xl font-semibold tracking-tight text-white">
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
