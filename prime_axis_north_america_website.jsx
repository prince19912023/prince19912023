export default function PrimeAxisWebsite() {
  const services = [
    {
      title: "AI Agents & Automation",
      desc: "Custom AI agents, workflow automation, intelligent assistants, and enterprise AI integrations designed to improve speed, accuracy, and customer experience.",
    },
    {
      title: "Cybersecurity & Network Security",
      desc: "End-to-end security architecture, firewall strategy, zero-trust design, vulnerability assessment, threat monitoring, and secure access solutions.",
    },
    {
      title: "Data Center & Enterprise Networking",
      desc: "Data center design, routing and switching, secure connectivity, hybrid cloud networking, network modernization, and performance optimization.",
    },
    {
      title: "Software Development",
      desc: "Modern web applications, business systems, backend services, API development, cloud-native platforms, and scalable enterprise software.",
    },
    {
      title: "Software Testing & QA",
      desc: "Manual testing, automation testing, test strategy, performance validation, regression testing, and quality engineering for reliable software delivery.",
    },
    {
      title: "Cloud & Infrastructure Solutions",
      desc: "Infrastructure planning, cloud migration, secure architecture, observability, resilience, and operational readiness for modern IT environments.",
    },
  ];

  const highlights = [
    "AI-first transformation",
    "Enterprise-grade security",
    "Scalable cloud and network architecture",
    "Reliable software delivery",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-wide">Prime Axis North America Limited</div>
            <div className="text-xs text-slate-300">AI • Cybersecurity • Networking • Software Engineering</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#why-us" className="hover:text-cyan-300">Why Us</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Building secure, intelligent digital systems
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI-led IT solutions for modern businesses across North America
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Prime Axis North America Limited helps organizations modernize infrastructure, strengthen cybersecurity, deploy AI agents, build reliable software, and scale enterprise networks with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                Book a Consultation
              </a>
              <a href="#services" className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5">
                Explore Services
              </a>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Flagship Focus</div>
                  <div className="text-2xl font-semibold">AI + Secure Infrastructure</div>
                </div>
                <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
                  Enterprise Ready
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-sm text-cyan-300">AI Agents</div>
                  <div className="mt-1 text-slate-200">Automate customer support, internal operations, analytics, and knowledge workflows.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-sm text-cyan-300">Cyber Defense</div>
                  <div className="mt-1 text-slate-200">Protect cloud, network, and application environments with modern security strategies.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-sm text-cyan-300">Software Quality</div>
                  <div className="mt-1 text-slate-200">Manual and automation testing that helps deliver stable, high-performing applications.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Services</div>
          <h2 className="text-3xl font-bold md:text-4xl">Technology services built around security, intelligence, and performance</h2>
          <p className="mt-4 text-slate-300 leading-7">
            We combine strategic consulting with hands-on engineering to help businesses adopt AI, secure their operations, modernize infrastructure, and deliver dependable software products.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400/30">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">About</div>
            <h2 className="text-3xl font-bold md:text-4xl">A modern IT partner with strong emphasis on AI and cyber resilience</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-7">
            <p>
              Prime Axis North America Limited delivers practical technology solutions for businesses that want to move faster without sacrificing security or quality.
            </p>
            <p>
              Our approach focuses on measurable business value through AI-powered automation, enterprise networking, cybersecurity hardening, software engineering, and quality assurance.
            </p>
            <p>
              We work with organizations that need thoughtful architecture, reliable delivery, and future-ready systems.
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Why Choose Us</div>
          <h2 className="text-3xl font-bold md:text-4xl">What makes Prime Axis different</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">AI-first mindset</h3>
            <p className="mt-3 leading-7 text-slate-300">We design solutions that use AI where it creates real operational value, from intelligent agents to workflow automation and data-driven decision support.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Security built in</h3>
            <p className="mt-3 leading-7 text-slate-300">Security is integrated from the start across infrastructure, applications, identity, and network architecture rather than treated as an afterthought.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">End-to-end delivery</h3>
            <p className="mt-3 leading-7 text-slate-300">From planning and architecture to implementation, testing, and optimization, we support the full technology lifecycle.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Scalable engineering</h3>
            <p className="mt-3 leading-7 text-slate-300">We build systems that are ready for growth, operationally sound, and aligned with modern enterprise expectations.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</div>
              <h2 className="text-3xl font-bold md:text-4xl">Let’s build secure and intelligent technology together</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Whether you need AI solutions, cybersecurity support, enterprise networking, software development, or software testing, we’re ready to help you move forward.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 text-slate-200">
                <div>
                  <div className="text-sm text-slate-400">Company</div>
                  <div className="font-medium">Prime Axis North America Limited</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="font-medium">info@yourdomain.com</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="font-medium">+1 (000) 000-0000</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Service Regions</div>
                  <div className="font-medium">Canada • United States • North America</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
