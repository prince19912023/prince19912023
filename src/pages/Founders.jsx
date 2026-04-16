import { Link } from "react-router-dom";
import { founders } from "../data/siteData.js";

export default function Founders() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto max-w-7xl px-6">
        <div className="relative">
          <div className="absolute -left-20 -top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl ai-drift" />
          <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl ai-float" />
        </div>
      </div>

      <div className="mb-10 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Founders
        </div>
        <h1 className="text-3xl font-bold md:text-4xl">
          Leadership behind Prime Axis
        </h1>
        <p className="mt-4 text-slate-300 leading-7">
          Prime Axis North America Limited is led by founders focused on
          building secure, high-quality, and future-ready technology services.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
          >
            Contact the Team
          </Link>
          <Link
            to="/services"
            className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
          >
            View Services
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {founders.map((f) => (
          <div
            key={f.name}
            className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-sm text-slate-400">{f.role}</div>
                <h2 className="mt-1 text-2xl font-semibold">{f.name}</h2>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/30" />
            </div>
            <p className="mt-4 leading-7 text-slate-300">{f.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

