import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { founders } from "../data/siteData.js";

export default function Founders() {
  return (
    <>
      <PageHero
        title="Leadership behind Prime Axis"
        subtitle="Meet the founders driving secure, AI-ready, enterprise technology delivery."
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Cybersecurity and code visuals"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              Connect with leadership
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
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {f.photo ? (
                  <img
                    src={f.photo}
                    alt={`${f.name} portrait`}
                    className="h-40 w-40 rounded-[24px] object-cover ring-1 ring-white/10 sm:h-44 sm:w-44"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-40 w-40 rounded-[24px] bg-cyan-400/15 ring-1 ring-cyan-400/30 sm:h-44 sm:w-44" />
                )}

                <div className="min-w-0">
                  <div className="text-sm text-slate-400">{f.role}</div>
                  <h2 className="mt-1 text-2xl font-semibold">{f.name}</h2>
                  <p className="mt-4 whitespace-pre-line leading-7 text-slate-300">
                    {f.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

