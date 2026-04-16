import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-10">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          404
        </div>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Page not found</h1>
        <p className="mt-4 text-slate-300">
          The page you’re looking for doesn’t exist. Head back home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

