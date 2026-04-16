import { Link } from "react-router-dom";
import AiCircuitSvg from "../components/AiCircuitSvg.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto max-w-7xl px-6">
        <div className="relative">
          <div className="absolute -left-20 -top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl ai-drift" />
          <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl ai-float" />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Services
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Technology services built around security, intelligence, and
            performance
          </h1>
          <p className="mt-4 text-slate-300 leading-7">
            We combine strategic consulting with hands-on engineering to help
            businesses adopt AI, secure their operations, modernize
            infrastructure, and deliver dependable software products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
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
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10">
          <AiCircuitSvg className="h-auto w-full opacity-95" />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400/30"
          >
            <div className="mb-4 h-10 w-10 rounded-xl bg-cyan-400/15 ring-1 ring-cyan-400/30 transition group-hover:bg-cyan-400/20" />
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

