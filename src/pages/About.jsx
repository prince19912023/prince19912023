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
              Our mission
            </div>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Secure, intelligent systems that scale
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              We help organizations modernize infrastructure, harden security,
              and adopt AI agents responsibly—so teams can move fast without
              sacrificing reliability, compliance, or operational clarity.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Our approach blends architecture, implementation, and testing with
              an AI-first mindset and enterprise-grade security discipline.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Explore Services
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
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>Security built-in, not bolted on</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>AI systems with clear controls</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>Reliable delivery and test discipline</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>Scalable architecture and observability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

