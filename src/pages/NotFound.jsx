import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle="The page you’re looking for doesn’t exist."
        imageSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Circuit board and electronics"
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-10">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            404
          </div>
          <p className="mt-3 text-slate-300">
            Head back home to continue exploring Prime Axis.
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
    </>
  );
}

