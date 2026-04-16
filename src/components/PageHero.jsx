export default function PageHero({ title, subtitle, imageSrc, imageAlt }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover opacity-55"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto max-w-7xl px-6">
        <div className="relative">
          <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl ai-drift" />
          <div className="absolute -right-24 -top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl ai-float" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
            AI • Cybersecurity • Networking • Software Engineering
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base leading-7 text-slate-200/90 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

