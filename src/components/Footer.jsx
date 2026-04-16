export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {year} Prime Axis North America Limited</div>
        <div>Canada • United States • North America</div>
      </div>
    </footer>
  );
}

