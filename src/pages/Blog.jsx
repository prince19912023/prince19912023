import PageHero from "../components/PageHero.jsx";
import PhotoCard from "../components/PhotoCard.jsx";

export default function Blog() {
  const posts = [
    {
      title: "AI Agents in Enterprise: Where to Start",
      desc: "A practical framework to choose high-ROI automations and keep governance in place.",
      date: "Insights",
      tag: "AI Agents",
    },
    {
      title: "Zero-Trust Basics for Modern Networks",
      desc: "Core principles and a phased rollout plan that doesn’t break productivity.",
      date: "Security",
      tag: "Zero Trust",
    },
    {
      title: "Building Reliable Systems with Observability",
      desc: "Metrics, logs, tracing, and SLOs that help teams ship with confidence.",
      date: "Engineering",
      tag: "SRE",
    },
    {
      title: "Cloud Landing Zones: The Secure Foundation",
      desc: "How to structure accounts, identity, networks, and guardrails for sustainable cloud scale.",
      date: "Cloud",
      tag: "Architecture",
    },
    {
      title: "QA Strategy that Prevents Release Firefighting",
      desc: "A pragmatic approach to test planning, automation, and release readiness for stable delivery.",
      date: "Quality",
      tag: "QA",
    },
    {
      title: "Security Monitoring That Actually Works",
      desc: "Turning noisy alerts into useful signals with clear ownership, triage, and playbooks.",
      date: "Security",
      tag: "Monitoring",
    },
    {
      title: "Network Modernization: From Legacy to Resilient",
      desc: "A step-by-step approach to upgrade routing/switching, segmentation, and operational clarity.",
      date: "Networking",
      tag: "Enterprise",
    },
    {
      title: "RAG Systems: Accuracy, Governance, and Trust",
      desc: "How to design retrieval systems that are helpful, auditable, and aligned to enterprise constraints.",
      date: "AI",
      tag: "RAG",
    },
    {
      title: "DevOps + SRE: Faster Delivery Without Risk",
      desc: "Pipelines, gates, SLOs, and deployment practices that increase velocity and confidence.",
      date: "Delivery",
      tag: "DevOps",
    },
  ];

  const featured = {
    label: "Featured",
    alt: "AI and analytics dashboards",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Thought leadership on AI, cybersecurity, networking, and modern software delivery."
        imageSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Electronics and circuits"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Insights
              </div>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Practical guidance for modern IT organizations
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Our content focuses on what works in real environments: security
                controls that teams can operate, AI systems with governance, and
                engineering practices that scale.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {posts.slice(0, 6).map((p) => (
                <article
                  key={p.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                      {p.date}
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{p.desc}</p>
                  <div className="mt-6 text-sm text-slate-400">Coming soon</div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Featured
              </div>
              <div className="mt-4">
                <PhotoCard
                  src={featured.src}
                  alt={featured.alt}
                  label={featured.label}
                />
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                We publish practical content on AI adoption, cyber resilience,
                cloud architecture, and delivery practices.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Topics
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "AI Agents",
                  "RAG",
                  "Cybersecurity",
                  "Zero Trust",
                  "Cloud",
                  "DevOps",
                  "SRE",
                  "Networking",
                  "QA",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Newsletter
              </div>
              <div className="mt-3 text-xl font-bold">
                Get new insights as we publish
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                Updates on AI, security, and engineering — focused on actionable
                ideas for real systems.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                  Email signup coming soon
                </div>
                <div className="rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950">
                  Subscribe
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <div className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            More posts
          </div>
          <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  {p.date}
                </div>
                <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
                  {p.tag}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{p.desc}</p>
              <div className="mt-6 text-sm text-slate-400">Coming soon</div>
            </article>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}

