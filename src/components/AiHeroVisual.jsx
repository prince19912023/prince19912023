export default function AiHeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl ai-drift" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl ai-float" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">Flagship Focus</div>
            <div className="text-2xl font-semibold">AI + Secure Infrastructure</div>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
            Enterprise Ready
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div className="text-sm text-cyan-300">AI Agents</div>
            <div className="mt-1 text-slate-200">
              Automate customer support, internal operations, analytics, and
              knowledge workflows.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div className="text-sm text-cyan-300">Cyber Defense</div>
            <div className="mt-1 text-slate-200">
              Protect cloud, network, and application environments with modern
              security strategies.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div className="text-sm text-cyan-300">Software Quality</div>
            <div className="mt-1 text-slate-200">
              Manual and automation testing that helps deliver stable,
              high-performing applications.
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="h-10 w-10 rounded-xl bg-cyan-400/15 ring-1 ring-cyan-400/30" />
          <div className="text-sm text-slate-200">
            AI-ready architecture with security built in from day one.
          </div>
        </div>
      </div>
    </div>
  );
}

