import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function About() {
  return (
    <>
      <PageHero
        title="About Prime Axis North America"
        subtitle="A modern IT partner focused on AI-driven delivery, cybersecurity resilience, and enterprise-scale engineering."
        imageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=80"
        imageAlt="AI and data visualizations"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Who we are
            </div>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              A modern IT partner for AI-first, security-first organizations
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Prime Axis North America Limited helps organizations design,
              build, and operate technology systems that are secure, resilient,
              and ready for modern AI adoption. We focus on practical delivery:
              architecture, implementation, testing, and operational handoff —
              not just slide decks.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Our strength is in bridging disciplines that are often treated
              separately: cybersecurity + enterprise networking + cloud and
              infrastructure + software engineering + QA. That integrated view
              reduces risk, speeds delivery, and improves the long-term
              maintainability of systems.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "AI enablement with guardrails",
                  desc: "Agents, RAG, and automation with clear controls, access, and auditability.",
                },
                {
                  title: "Security & resilience by design",
                  desc: "Threat-aware architecture, hardening, segmentation, and operational readiness.",
                },
                {
                  title: "Enterprise-scale engineering",
                  desc: "Cloud-native systems, scalable APIs, performance tuning, and reliability practices.",
                },
                {
                  title: "Quality discipline",
                  desc: "Test strategy, automation, release readiness, and measurable stability improvements.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="text-sm font-semibold text-slate-100">
                    {x.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Explore Services
              </Link>
              <Link
                to="/case-studies"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">What we value</div>
            <ul className="mt-4 space-y-3 text-slate-300">
              {[
                "Security built-in, not bolted on",
                "AI systems with clear controls and accountability",
                "Reliable delivery and test discipline",
                "Scalable architecture and observability",
                "Operational clarity, documentation, and handoff",
                "Measurable outcomes over vanity metrics",
              ].map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              How we work
            </div>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              A delivery model that reduces risk and increases speed
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              We structure engagements around clarity: what success looks like,
              what constraints exist, and what needs to be delivered. Our work
              typically includes discovery, architecture, implementation, and
              validation — with security checks and testing integrated early.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  step: "01 — Discovery & scope",
                  desc: "Goals, constraints, current state, risk review, and a delivery plan that matches your timeline.",
                },
                {
                  step: "02 — Architecture & design",
                  desc: "Security-first architecture, system boundaries, data flows, access controls, and scaling strategy.",
                },
                {
                  step: "03 — Build & integrate",
                  desc: "Implementation across cloud, network, and software — plus automation and operational tooling.",
                },
                {
                  step: "04 — Validate & handoff",
                  desc: "Testing, performance checks, monitoring readiness, documentation, and operational handover.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="text-sm font-semibold text-slate-100">
                    {s.step}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Why Prime Axis
            </div>
            <h3 className="mt-3 text-xl font-bold">Enterprise-ready delivery</h3>
            <p className="mt-4 leading-7 text-slate-300">
              We operate with security and reliability expectations that match
              modern enterprise environments, including documentation, testing,
              change control, and measurable operational outcomes.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">
              If you’re modernizing, scaling, or hardening systems — we can
              help you ship faster with confidence.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

