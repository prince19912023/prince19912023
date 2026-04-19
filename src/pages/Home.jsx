import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import AiHeroVisual from "../components/AiHeroVisual.jsx";
import AiCircuitSvg from "../components/AiCircuitSvg.jsx";
import PhotoCard from "../components/PhotoCard.jsx";
import { highlights, services } from "../data/siteData.js";

export default function Home() {
  const photos = [
    {
      label: "AI + Automation",
      alt: "Abstract AI and data visualization on a screen",
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Cybersecurity",
      alt: "Server racks and network equipment in a data center",
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Cloud + Infrastructure",
      alt: "Modern city skyline with technology concept lighting",
      src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <>
      <PageHero
        title="AI-led IT solutions for modern businesses across North America"
        subtitle="Modernize infrastructure, strengthen cybersecurity, deploy AI agents, build reliable software, and scale enterprise networks with confidence."
        imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
        imageAlt="AI-generated imagery on a futuristic screen"
      />

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Building secure, intelligent digital systems
            </div>
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

            <div className="group relative mt-4 overflow-hidden rounded-[24px] border border-cyan-400/20 bg-slate-900/60 shadow-2xl shadow-cyan-500/15 ring-1 ring-white/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[21/9]">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1800&q=85"
                  alt="Abstract AI neural network and digital intelligence visualization"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Artificial intelligence
                  </div>
                  <p className="mt-1 max-w-xl text-sm font-medium leading-relaxed text-white sm:text-base">
                    Enterprise AI, automation, and intelligent systems—designed
                    for security, scale, and real business outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/50 shadow-xl shadow-blue-500/10 ring-1 ring-cyan-400/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85"
                  alt="Innovative enterprise data center with server racks and network infrastructure"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/35 to-transparent" />
                <div className="absolute inset-y-0 left-0 flex max-w-[85%] flex-col justify-end p-4 sm:max-w-[75%] sm:p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Data center & infrastructure
                  </div>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-white sm:text-base">
                    Modern colocation, cloud edge, and high-density compute—built
                    for resilience, security, and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <AiHeroVisual />
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-500/10">
              <AiCircuitSvg className="h-auto w-full opacity-95" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              What we deliver
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Secure AI, resilient infrastructure, and reliable engineering
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Prime Axis North America Limited is built for organizations that
              need measurable outcomes. We combine AI enablement with
              cybersecurity discipline, modern cloud architecture, and delivery
              practices that keep quality high.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              From architecture and implementation to testing, monitoring, and
              operational handoff, we help teams ship confidently in complex
              enterprise environments.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="text-sm font-semibold text-slate-100">
                    {s.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {s.bullets?.[0] ?? s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40 shadow-2xl shadow-cyan-500/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80"
                  alt="AI and modern engineering workspace"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur">
                  <div className="text-sm text-cyan-200">Enterprise outcomes</div>
                  <div className="mt-1 text-slate-100">
                    AI-ready architecture + security-by-design + dependable delivery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Real-world delivery
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              AI, security, and infrastructure—built for production
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Practical engineering and modern tooling to help you move faster,
              stay secure, and scale confidently.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              See all services
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((p) => (
            <PhotoCard key={p.label} src={p.src} alt={p.alt} label={p.label} />
          ))}
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Clear architecture and delivery plan",
                "Security controls integrated early",
                "Testing strategy and release readiness",
                "Operational handoff with observability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
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

