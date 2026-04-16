import PageHero from "../components/PageHero.jsx";
import PhotoCard from "../components/PhotoCard.jsx";

export default function Industries() {
  const industries = [
    {
      label: "Healthcare",
      alt: "Hospital technology and data",
      src: "https://images.unsplash.com/photo-1580281658628-1d7f3f6b9c6b?auto=format&fit=crop&w=1600&q=80",
      desc: "Security-first systems for sensitive data, operational uptime, and compliant workflows across clinical and administrative environments.",
      bullets: [
        "Secure network segmentation and access controls",
        "Cloud foundations with auditability and resilience",
        "Automation for operational workflows and support",
      ],
    },
    {
      label: "Finance",
      alt: "Financial analytics on screens",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      desc: "Enterprise security and performance for high-trust environments, with strong identity controls and reliable engineering practices.",
      bullets: [
        "Zero-trust designs and IAM hardening",
        "Observability and reliability engineering",
        "Secure software delivery and QA automation",
      ],
    },
    {
      label: "Retail & eCommerce",
      alt: "Warehouse logistics technology",
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
      desc: "Scalable infrastructure and software systems that support demand spikes, resilient operations, and data-driven decision making.",
      bullets: [
        "Performance and scalability planning",
        "Cloud migration and modernization",
        "Automation for support and operations",
      ],
    },
    {
      label: "SaaS & Technology",
      alt: "Software engineering workspace",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
      desc: "AI-ready engineering, secure platforms, and fast delivery loops that scale with growth and reliability expectations.",
      bullets: [
        "AI agent enablement and governance",
        "CI/CD, SRE practices, and SLOs",
        "Security architecture and hardening",
      ],
    },
    {
      label: "Manufacturing",
      alt: "Industrial automation equipment",
      src: "https://images.unsplash.com/photo-1581092919535-7146b1d4c9b4?auto=format&fit=crop&w=1600&q=80",
      desc: "Network and infrastructure designs built for uptime, operational continuity, and secure connectivity across environments.",
      bullets: [
        "Secure connectivity and segmentation",
        "Hybrid network modernization",
        "Monitoring strategy and incident readiness",
      ],
    },
    {
      label: "Public Sector",
      alt: "City infrastructure and technology",
      src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80",
      desc: "Reliable platforms and security controls designed for trust, documentation, and long-term operational stability.",
      bullets: [
        "Security and compliance enablement",
        "Infrastructure planning and resilience",
        "Testing strategy and quality discipline",
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Industries we support"
        subtitle="AI, security, and infrastructure expertise across regulated and high-scale environments."
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Data center servers"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-8 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Focus areas
          </div>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Built for compliance, uptime, and trust
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            We tailor architecture and delivery based on risk profile, data
            sensitivity, and operational requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((i) => (
            <div key={i.label} className="space-y-4">
              <PhotoCard src={i.src} alt={i.alt} label={i.label} />
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="leading-7 text-slate-300">{i.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {i.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Typical engagement types
            </div>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Common programs we deliver across industries
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Our work adapts to the realities of each environment — but the
              most successful initiatives share clear outcomes, security
              controls, and operational discipline.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "AI agent rollout",
                  desc: "Use-case selection, guardrails, tool integrations, and secure production deployment.",
                },
                {
                  title: "Zero-trust modernization",
                  desc: "Identity-first access, segmentation, secure remote access, and policy design.",
                },
                {
                  title: "Cloud migration + hardening",
                  desc: "Landing zones, network security controls, DR planning, and operational readiness.",
                },
                {
                  title: "Reliability uplift",
                  desc: "Observability, SLOs, incident process, and performance + scaling improvements.",
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
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Outcomes
            </div>
            <div className="mt-3 text-xl font-bold">
              Delivery that teams can operate
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              We emphasize documentation, testing, monitoring readiness, and
              operational handoff — because production is where value is
              realized.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Clear architecture and rollout plan",
                "Security controls + auditability",
                "Stable releases with QA strategy",
                "Operational playbooks and monitoring",
              ].map((o) => (
                <div
                  key={o}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200"
                >
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

