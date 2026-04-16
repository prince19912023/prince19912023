import PageHero from "../components/PageHero.jsx";

export default function Blog() {
  const posts = [
    {
      title: "AI Agents in Enterprise: Where to Start",
      desc: "A practical framework to choose high-ROI automations and keep governance in place.",
      date: "Insights",
    },
    {
      title: "Zero-Trust Basics for Modern Networks",
      desc: "Core principles and a phased rollout plan that doesn’t break productivity.",
      date: "Security",
    },
    {
      title: "Building Reliable Systems with Observability",
      desc: "Metrics, logs, tracing, and SLOs that help teams ship with confidence.",
      date: "Engineering",
    },
  ];

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Thought leadership on AI, cybersecurity, networking, and modern software delivery."
        imageSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Electronics and circuits"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
            >
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                {p.date}
              </div>
              <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{p.desc}</p>
              <div className="mt-6 text-sm text-slate-400">
                Coming soon
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

