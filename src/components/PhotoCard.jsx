export default function PhotoCard({ src, alt, label }) {
  return (
    <div className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-lg shadow-slate-950/30">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-100 backdrop-blur">
          {label}
        </div>
      </div>
    </div>
  );
}

