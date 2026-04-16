import { NavLink } from "react-router-dom";

const baseLink =
  "rounded-xl px-3 py-2 text-sm transition hover:bg-white/5 hover:text-cyan-300";

function linkClassName({ isActive }) {
  return `${baseLink} ${isActive ? "bg-white/5 text-cyan-200" : "text-slate-100"}`;
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <div className="text-xl font-bold tracking-wide">
            Prime Axis North America Limited
          </div>
          <div className="text-xs text-slate-300">
            AI Agents • Cybersecurity • Cloud • DevOps • Networking • Software • QA
          </div>
        </div>

        <nav className="hidden max-w-[760px] flex-wrap justify-end gap-1 md:flex">
          <NavLink to="/" className={linkClassName} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClassName}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClassName}>
            Services
          </NavLink>
          <NavLink to="/industries" className={linkClassName}>
            Industries
          </NavLink>
          <NavLink to="/case-studies" className={linkClassName}>
            Case Studies
          </NavLink>
          <NavLink to="/founders" className={linkClassName}>
            Founders
          </NavLink>
          <NavLink to="/blog" className={linkClassName}>
            Blog
          </NavLink>
          <NavLink to="/careers" className={linkClassName}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={linkClassName}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

