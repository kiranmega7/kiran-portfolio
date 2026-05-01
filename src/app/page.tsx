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
      label: "Completed",
      title: "National Service",
      subtitle: "Completed",
    },
    {
      label: "Foundation",
      title: "B2C Sales",
      subtitle: "Built sales fundamentals",
    },
    {
      label: "Current",
      title: "PLC Automation",
      subtitle: "B2B Sales Engineer",
    },
    {
      label: "Current",
      title: "DoubleLead",
      subtitle: "Co-founder",
    },
    {
      label: "Coming Soon",
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
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-10">
        <RevealSection id="hero" className="premium-section border-none pt-8">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Singapore / Portfolio
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.03em] text-white md:text-7xl">
            Kiran Veeranala
          </h1>
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

        <RevealSection id="about" className="premium-section">
          <h2 className="section-title">About</h2>
          <div className="grid gap-3 text-sm text-zinc-300 md:grid-cols-2 md:text-base">
            <p>23 years old, Singapore-based.</p>
            <p>Currently a Sales Engineer at PLC Automation.</p>
            <p>Co-founder of DoubleLead.</p>
            <p>
              Pursuing an Accounting & Finance degree at Murdoch University via
              Kaplan.
            </p>
            <p className="md:col-span-2">
              Background in B2B industrial automation sales.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="timeline" className="premium-section">
          <h2 className="section-title">Career Timeline</h2>
          <ul className="space-y-6">
            {timeline.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 border-l border-white/15 pl-4 sm:grid-cols-[130px_1fr] sm:pl-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {item.label}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-zinc-300">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="projects" className="premium-section">
          <h2 className="section-title">Projects</h2>
          <article className="premium-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
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
            <p>
              AI powered sales follow-up tool for solo salespeople in Southeast Asia.
              Built to solve the #1 reason deals are lost: lack of follow-up.
            </p>
            <p>
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

        <RevealSection id="stats" className="premium-section">
          <h2 className="section-title">Stats</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat) => (
              <div key={stat.value + stat.label} className="premium-card">
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

        <RevealSection id="contact" className="premium-section border-b-0 pb-16">
          <h2 className="section-title">Contact</h2>
          <form className="premium-card space-y-3">
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
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-7">
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
