import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function CaseStudies() {
  const items = [
    {
      title: "AI Agent Enablement for Operations",
      tags: ["AI Agents", "Automation", "Knowledge Systems"],
      desc: "Designed an AI agent workflow to accelerate internal requests and knowledge retrieval with governance and audit trails.",
    },
    {
      title: "Security Hardening & Zero-Trust Rollout",
      tags: ["Security", "Identity", "Network Segmentation"],
      desc: "Delivered a phased approach to reduce blast radius, improve access controls, and strengthen monitoring across environments.",
    },
    {
      title: "Network Modernization for Performance",
      tags: ["Enterprise Networking", "Resilience", "Observability"],
      desc: "Upgraded routing/switching architecture and performance monitoring to support growth and reliability targets.",
    },
  ];

  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Representative delivery snapshots across AI, security, networking, and software engineering."
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Cybersecurity visuals"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <div
              key={c.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
            >
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 leading-7 text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Want similar outcomes?
          </div>
          <div className="mt-3 text-2xl font-bold md:text-3xl">
            Let’s design a secure, AI-ready roadmap
          </div>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

