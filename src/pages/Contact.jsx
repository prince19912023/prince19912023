import { contact } from "../data/siteData.js";
import PageHero from "../components/PageHero.jsx";

function normalizePhoneForTel(phone) {
  return phone.replace(/[^\d+]/g, "");
}

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Prime Axis"
        subtitle="Reach our head office or one of our branches across North America."
        imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Modern laptop and AI-themed workspace"
      />

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Let’s build secure and intelligent technology together
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            Whether you need AI solutions, cybersecurity support, enterprise
            networking, software development, or software testing, we’re ready
            to help you move forward.
          </p>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="space-y-5 text-slate-200">
              <div>
                <div className="text-sm text-slate-400">Company</div>
                <div className="font-medium">{contact.company}</div>
              </div>

              <div>
                <div className="text-sm text-slate-400">Email</div>
                <a
                  className="font-medium hover:text-cyan-300"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <div className="text-sm text-slate-400">Service Regions</div>
                <div className="font-medium">{contact.regions}</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Locations
            </div>
            <div className="grid gap-6">
              {contact.offices.map((office) => (
                <div
                  key={`${office.type}-${office.city}`}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm text-slate-400">
                        {office.type}
                      </div>
                      <div className="mt-1 text-xl font-semibold">
                        {office.city}
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/30" />
                  </div>

                  <div className="mt-4 grid gap-3 text-slate-200">
                    <div>
                      <div className="text-sm text-slate-400">Address</div>
                      <div className="font-medium">{office.address}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Phone</div>
                      <a
                        className="font-medium hover:text-cyan-300"
                        href={`tel:${normalizePhoneForTel(office.phone)}`}
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-slate-400">What to expect</div>
          <h2 className="mt-2 text-2xl font-semibold">
            A clear plan in a short call
          </h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              <span>
                We’ll understand your goals, constraints, timeline, and current
                systems.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              <span>
                We’ll propose an approach that balances AI capability, security,
                and long-term maintainability.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              <span>
                You’ll receive a next-steps outline with clear deliverables.
              </span>
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <div className="text-sm text-cyan-300">AI-driven delivery</div>
            <div className="mt-2 text-slate-200">
              We use automation and modern engineering practices to move fast
              while keeping quality high.
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

