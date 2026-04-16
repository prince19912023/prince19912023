import PageHero from "../components/PageHero.jsx";
import PhotoCard from "../components/PhotoCard.jsx";

export default function Industries() {
  const industries = [
    {
      label: "Healthcare",
      alt: "Hospital technology and data",
      src: "https://images.unsplash.com/photo-1580281658628-1d7f3f6b9c6b?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Finance",
      alt: "Financial analytics on screens",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Retail & eCommerce",
      alt: "Warehouse logistics technology",
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "SaaS & Technology",
      alt: "Software engineering workspace",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Manufacturing",
      alt: "Industrial automation equipment",
      src: "https://images.unsplash.com/photo-1581092919535-7146b1d4c9b4?auto=format&fit=crop&w=1600&q=80",
    },
    {
      label: "Public Sector",
      alt: "City infrastructure and technology",
      src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <>
      <PageHero
        title="Industries we support"
        subtitle="AI, security, and infrastructure expertise across regulated and high-scale environments."
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Data center servers"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-8 max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Focus areas
          </div>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Built for compliance, uptime, and trust
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            We tailor architecture and delivery based on risk profile, data
            sensitivity, and operational requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((i) => (
            <PhotoCard key={i.label} src={i.src} alt={i.alt} label={i.label} />
          ))}
        </div>
      </section>
    </>
  );
}

