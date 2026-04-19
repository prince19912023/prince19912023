import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import AiCircuitSvg from "../components/AiCircuitSvg.jsx";
import PhotoCard from "../components/PhotoCard.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  const photos = [
    {
      label: "AI Engineering",
      alt: "Person working with AI and analytics dashboards",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Network & Data Center",
      alt: "Network switches and cables in a data center",
      src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Security Operations",
      alt: "Cybersecurity concept with code and locks",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <>
      <PageHero
        title="Services built for security, intelligence, and performance"
        subtitle="Strategic consulting and hands-on engineering across AI agents, cybersecurity, cloud architecture, DevOps/SRE, enterprise networking, software engineering, and QA."
        imageSrc="https://images.unsplash.com/photo-1581091870627-3af5f02aeb6a?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Engineers working with high-tech systems"
      />

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Request a Quote
              </Link>
              <Link
                to="/founders"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Leadership
              </Link>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-400">Delivery focus</div>
              <div className="mt-2 text-slate-200">
                Enterprise-grade security posture, AI-ready architecture, and
                reliable engineering practices that scale.
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Security controls and auditability",
                  "Clear architecture + rollout plan",
                  "Testing strategy + release readiness",
                  "Operational handoff + monitoring",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/40 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Engagement options
              </div>
              <div className="mt-3 text-2xl font-bold">
                Choose the delivery model that fits
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                We support short discovery engagements, delivery sprints, and
                longer programs. Each model includes clear deliverables,
                documentation, and an operational handoff plan.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Discovery sprint",
                    desc: "Architecture + scope + risks + delivery plan in a short engagement.",
                  },
                  {
                    title: "Delivery sprints",
                    desc: "Focused implementation milestones with testing and rollout readiness.",
                  },
                  {
                    title: "Program delivery",
                    desc: "End-to-end execution with clear phases and operational handoff.",
                  },
                  {
                    title: "Advisory + review",
                    desc: "Security/architecture reviews with prioritized recommendations.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
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
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10">
              <AiCircuitSvg className="h-auto w-full opacity-95" />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-slate-900/50 shadow-2xl shadow-cyan-500/10 ring-1 ring-white/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617791160505-6f00604ccc35?auto=format&fit=crop&w=1600&q=85"
                  alt="Advanced semiconductor and microelectronics manufacturing"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.2),transparent_55%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Semiconductors & silicon
                  </div>
                  <p className="mt-1 max-w-lg text-sm font-medium leading-relaxed text-white sm:text-base">
                    From advanced packaging to high-performance compute—hardware
                    innovation that powers AI, cloud, and next-generation networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-6 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Service catalog
          </div>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Built for modern enterprise needs
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            We design solutions that are secure, scalable, and operationally
            sound — with testing and monitoring readiness integrated early.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/15 ring-1 ring-cyan-400/30 transition group-hover:bg-cyan-400/20" />
                <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
                  Enterprise
                </span>
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.desc}
              </p>
              {service.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              What you get
            </div>
            <div className="mt-3 text-2xl font-bold md:text-3xl">
              Deliverables that teams can run in production
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              Our work includes the technical delivery plus the operational
              clarity required to keep systems stable: documentation, testing
              plans, and monitoring readiness.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Architecture diagrams and system boundaries",
                "Security controls, access model, and hardening plan",
                "Testing strategy + automation approach",
                "Monitoring/alerting plan and operational playbooks",
                "Rollout plan with milestones and success metrics",
                "Documentation + handoff for internal teams",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-8">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Quality
            </div>
            <div className="mt-3 text-xl font-bold">Testing built in</div>
            <p className="mt-4 leading-7 text-slate-300">
              We prioritize release readiness through QA strategy, automation,
              performance checks, and operational monitoring.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Regression protection for critical flows",
                "Performance validation where it matters",
                "Clear rollback and incident readiness",
                "Documentation and ownership clarity",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Visual snapshot
            </div>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Delivery across AI, security, and infrastructure
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Modern tooling, enterprise standards, and measurable outcomes.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((p) => (
            <PhotoCard key={p.label} src={p.src} alt={p.alt} label={p.label} />
          ))}
        </div>
      </section>
    </>
  );
}

