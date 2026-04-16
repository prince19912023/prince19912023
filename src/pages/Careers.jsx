import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function Careers() {
  const roles = [
    {
      title: "Cybersecurity Engineer",
      desc: "Threat modeling, security architecture, hardening, and monitoring.",
    },
    {
      title: "Network / Infrastructure Engineer",
      desc: "Routing, switching, cloud networking, and performance optimization.",
    },
    {
      title: "Full-Stack Software Engineer",
      desc: "Modern web apps, APIs, cloud-native services, and scalability work.",
    },
    {
      title: "QA Automation Engineer",
      desc: "Test strategy, automation frameworks, performance validation.",
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
        <div className="mb-8 max-w-3xl">
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
      </section>
    </>
  );
}

