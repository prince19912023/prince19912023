import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function Careers() {
  const roles = [
    {
      title: "Cybersecurity Engineer",
      desc: "Threat modeling, security architecture, hardening, monitoring strategy, and incident readiness in enterprise environments.",
      bullets: [
        "Security architecture and control design",
        "Vulnerability assessment and remediation planning",
        "Monitoring, detection engineering, and playbooks",
      ],
    },
    {
      title: "Network / Infrastructure Engineer",
      desc: "Routing, switching, secure connectivity, hybrid cloud networking, modernization, and performance optimization.",
      bullets: [
        "Routing/switching design and modernization",
        "Secure connectivity and segmentation boundaries",
        "Operational handoff, documentation, and monitoring",
      ],
    },
    {
      title: "Full-Stack Software Engineer",
      desc: "Modern web applications, APIs, cloud-native services, performance tuning, and scalable system design with strong quality discipline.",
      bullets: [
        "Frontend + backend engineering and API design",
        "Security and reliability engineering practices",
        "Performance tuning and scalability improvements",
      ],
    },
    {
      title: "QA Automation Engineer",
      desc: "Test strategy, automation frameworks, regression stability, and performance validation for reliable software delivery.",
      bullets: [
        "Test planning aligned to critical workflows",
        "Automation frameworks and maintainable suites",
        "Performance validation and release readiness",
      ],
    },
    {
      title: "AI Engineer / Agent Builder",
      desc: "Design and implement AI agents, orchestration, RAG pipelines, and secure integrations aligned to enterprise guardrails.",
      bullets: [
        "Agent workflows and tool integrations",
        "RAG design and evaluation for trust and accuracy",
        "Security, access control, and monitoring readiness",
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team building secure, AI-ready systems for modern businesses."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Team collaboration in an office"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Working at Prime Axis
            </div>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Build systems that are secure, scalable, and future-ready
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              We collaborate with organizations that need thoughtful
              architecture, strong delivery discipline, and real-world
              operational outcomes. If you enjoy solving complex problems and
              shipping high-quality work, you’ll fit right in.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Our culture emphasizes technical excellence, clear communication,
              and pragmatic decision making — with security and reliability as
              default expectations.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Security-by-design",
                  desc: "We treat security as architecture, not a checklist at the end.",
                },
                {
                  title: "Quality discipline",
                  desc: "Strong testing strategy, automation, and operational readiness.",
                },
                {
                  title: "AI-ready delivery",
                  desc: "Practical AI adoption with governance and clear controls.",
                },
                {
                  title: "Ownership mindset",
                  desc: "We optimize for outcomes and long-term maintainability.",
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
                to="/contact"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Apply / Contact
              </Link>
              <Link
                to="/about"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Hiring process
            </div>
            <div className="mt-3 text-xl font-bold">Clear, fast, and fair</div>
            <div className="mt-4 space-y-3 text-slate-300">
              {[
                "Intro call and alignment on goals",
                "Technical conversation with practical scenarios",
                "Review of communication and delivery approach",
                "Offer and onboarding planning",
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
        </div>

        <div className="mt-12 mb-8 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Open roles
          </div>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Build, secure, and scale enterprise technology
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            We’re always looking for strong engineers and builders. Roles shown
            here are representative — reach out to start a conversation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <div
              key={r.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
            >
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{r.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  Apply / Contact
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              What you’ll work on
            </div>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Complex systems with real constraints
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              You’ll work on projects where architecture matters: security
              boundaries, performance expectations, operational reliability, and
              long-term maintainability. We aim to deliver systems teams can
              confidently operate.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "AI agents and secure automations",
                "Cloud migrations and modernization",
                "Zero-trust and identity improvements",
                "Observability and reliability uplift",
                "QA automation and stability work",
                "Enterprise networking and connectivity",
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

          <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-6">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Apply
            </div>
            <div className="mt-3 text-xl font-bold">Send your profile</div>
            <p className="mt-4 leading-7 text-slate-300">
              Share your background, what you enjoy building, and what you want
              to work on next.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Contact / Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

