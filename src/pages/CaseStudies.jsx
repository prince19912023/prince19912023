import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function CaseStudies() {
  const items = [
    {
      title: "AI Agent Enablement for Operations",
      tags: ["AI Agents", "Automation", "Knowledge Systems"],
      desc: "Designed an AI agent workflow to accelerate internal requests and knowledge retrieval with governance, role-based access, and audit trails.",
      details: [
        "Use-case selection and success metrics definition",
        "Secure tool integrations + knowledge base strategy",
        "Production rollout with guardrails and monitoring",
      ],
    },
    {
      title: "Security Hardening & Zero-Trust Rollout",
      tags: ["Security", "Identity", "Network Segmentation"],
      desc: "Delivered a phased approach to reduce blast radius, improve identity controls, and strengthen monitoring across environments.",
      details: [
        "Segmentation strategy and least-privilege access",
        "Firewall and secure remote access design",
        "Operational readiness and incident response alignment",
      ],
    },
    {
      title: "Network Modernization for Performance",
      tags: ["Enterprise Networking", "Resilience", "Observability"],
      desc: "Upgraded routing/switching architecture and performance monitoring to support growth, stability, and reliability targets.",
      details: [
        "Routing/switching modernization and documentation",
        "Performance baselines and monitoring improvements",
        "Resilience checks and operational handoff",
      ],
    },
    {
      title: "Cloud Landing Zone + Secure Foundations",
      tags: ["Cloud", "Security", "Governance"],
      desc: "Established secure cloud foundations with clear network boundaries, access control, and operational guardrails for scale.",
      details: [
        "Landing zone structure and account/subscription strategy",
        "IAM hardening (SSO/MFA) and access review workflow",
        "Logging, monitoring, and baseline security controls",
      ],
    },
    {
      title: "CI/CD Reliability and Release Readiness",
      tags: ["DevOps", "SRE", "Delivery"],
      desc: "Improved deployment confidence through pipeline discipline, automated checks, and operational visibility.",
      details: [
        "CI/CD strategy, environments, and gating policies",
        "Observability hooks and deployment monitoring",
        "Rollback strategy and incident process improvements",
      ],
    },
    {
      title: "QA Automation + Regression Stabilization",
      tags: ["QA", "Automation", "Quality Engineering"],
      desc: "Built a sustainable automation approach to reduce regressions, validate critical workflows, and increase release stability.",
      details: [
        "Test strategy aligned to business-critical flows",
        "Automation framework and maintainable test suites",
        "Performance validation and release quality reporting",
      ],
    },
    {
      title: "IAM Modernization and Privileged Access",
      tags: ["IAM", "Security", "Auditability"],
      desc: "Strengthened identity posture with access reviews, least privilege, and clear audit trails for sensitive environments.",
      details: [
        "Role design and privileged access controls",
        "Onboarding/offboarding automation improvements",
        "Audit evidence strategy and reporting",
      ],
    },
    {
      title: "Hybrid Connectivity & Secure Remote Access",
      tags: ["Networking", "Security", "Hybrid"],
      desc: "Designed secure connectivity across environments with reliable remote access and clear segmentation boundaries.",
      details: [
        "Hybrid routing and secure connectivity planning",
        "Remote access policy and identity enforcement",
        "Operational playbooks and monitoring readiness",
      ],
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
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Delivery examples
          </div>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Built for real enterprise constraints
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Each engagement is different — but the pattern is consistent:
            security-by-design, clear operational handoff, and a delivery plan
            that teams can actually run in production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {c.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              How we measure success
            </div>
            <div className="mt-3 text-2xl font-bold md:text-3xl">
              Outcomes that matter after launch
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              We align delivery to operational reality: reliability, security
              posture, maintainability, and faster iteration cycles. Our goal is
              not just to build — it’s to help teams run systems confidently.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Reduced operational friction through automation",
                "Improved security posture and audit readiness",
                "Faster deployments with fewer regressions",
                "Better visibility via monitoring and SLOs",
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

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Next step
            </div>
            <div className="mt-3 text-xl font-bold">
              Let’s design a secure, AI-ready roadmap
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              Share your goals, timeline, and constraints. We’ll propose a
              practical plan with clear deliverables.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-950/40 p-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Engagement formats
          </div>
          <div className="mt-3 text-2xl font-bold md:text-3xl">
            Flexible delivery to match your timeline
          </div>
          <p className="mt-4 leading-7 text-slate-300">
            We support short discovery engagements, delivery sprints, and
            longer programs — with clear milestones, documentation, and
            operational handoff.
          </p>
        </div>
      </section>
    </>
  );
}

