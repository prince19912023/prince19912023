import { Link } from "react-router-dom";
import AiHeroVisual from "../components/AiHeroVisual.jsx";
import AiCircuitSvg from "../components/AiCircuitSvg.jsx";
import { highlights } from "../data/siteData.js";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_25%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl ai-drift" />
            <div className="absolute -right-24 -top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl ai-float" />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Building secure, intelligent digital systems
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI-led IT solutions for modern businesses across North America
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Prime Axis North America Limited helps organizations modernize
              infrastructure, strengthen cybersecurity, deploy AI agents, build
              reliable software, and scale enterprise networks with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full space-y-6">
              <AiHeroVisual />
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-500/10">
                <AiCircuitSvg className="h-auto w-full opacity-95" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 rounded-[28px] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              AI & Security by design
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Modernize faster—without compromising resilience
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              We bring together AI agents, cybersecurity hardening, enterprise
              networking, and software engineering to deliver reliable outcomes.
            </p>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <Link
              to="/founders"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Meet the Founders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

