import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot"), {
  ssr: false,
});
const RevealSection = dynamic(() => import("@/components/reveal-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-28 px-6 py-14 md:px-10">
        <RevealSection id="hero" className="pt-10">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Kiran Veeranala
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">
            Sales Engineer | Founder of DoubleLead | Building the future of
            sales execution in Southeast Asia
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
        </RevealSection>

        <RevealSection id="about" className="space-y-4">
          <h2 className="section-title">About</h2>
          <div className="card space-y-3 text-zinc-300">
            <p>23 years old, Singapore-based.</p>
            <p>Currently a Sales Engineer at PLC Automation.</p>
            <p>Co-founder of DoubleLead.</p>
            <p>
              Pursuing an Accounting & Finance degree at Murdoch University via
              Kaplan.
            </p>
            <p>Background in B2B industrial automation sales.</p>
          </div>
        </RevealSection>

        <RevealSection id="timeline" className="space-y-4">
          <h2 className="section-title">Career Timeline</h2>
          <ul className="card space-y-4 text-zinc-300">
            {[
              "National Service -> completed",
              "B2C Sales -> foundation",
              "PLC Automation -> B2B Sales Engineer (current)",
              "DoubleLead -> Co-founder (current)",
              "SaaS AE -> next chapter (coming soon)",
            ].map((item) => (
              <li key={item} className="border-l border-white/20 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="projects" className="space-y-4">
          <h2 className="section-title">Projects</h2>
          <article className="card space-y-3 text-zinc-300">
            <h3 className="text-xl font-semibold text-white">DoubleLead</h3>
            <p>
              AI powered sales follow-up tool for solo salespeople in Southeast
              Asia. Built to solve the #1 reason deals are lost: lack of
              follow-up.
            </p>
            <p>
              Target users include insurance agents, property agents, and
              freelance salespeople.
            </p>
            <a
              href="https://doublelead.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
            >
              Visit Project
            </a>
          </article>
        </RevealSection>

        <RevealSection id="stats" className="space-y-4">
          <h2 className="section-title">Stats</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "$200K+ in quotes managed",
              "2 months B2B experience",
              "1 SaaS product built",
              "Target market: SEA",
            ].map((stat) => (
              <div key={stat} className="card text-lg font-medium text-zinc-100">
                {stat}
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="contact" className="space-y-4 pb-20">
          <h2 className="section-title">Contact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card flex flex-col gap-4">
              <a
                href="mailto:kiranveeranala@gmail.com"
                className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
            <form className="card space-y-3">
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
              <textarea
                placeholder="Your message"
                className="input-field min-h-28 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealSection>
      </main>

      <Chatbot />
    </div>
  );
}
