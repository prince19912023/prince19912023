import { contact } from "../data/siteData.js";
import PageHero from "../components/PageHero.jsx";

function normalizePhoneForTel(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function officeBadge(office) {
  if (office.type === "Head Office") return "HQ";
  if (office.city.toLowerCase().includes("vancouver")) return "BC";
  if (office.city.toLowerCase().includes("trail")) return "BC";
  return "Office";
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
                  className="group rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/30"
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-blue-500/20 ring-1 ring-white/10">
                      <div className="text-xs font-bold tracking-wider text-slate-100">
                        {officeBadge(office)}
                      </div>
                    </div>
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

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Secure intake + scope alignment",
                      "Architecture and rollout plan",
                      "Testing and release readiness",
                      "Operational handoff and support",
                    ].map((x) => (
                      <div
                        key={x}
                        className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs text-slate-200"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-slate-400">What to expect</div>
              <h2 className="mt-2 text-2xl font-semibold">
                A clear plan in a short call
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                We’ll quickly align on goals, constraints, and risk — then
                propose a delivery plan that balances AI capability, security,
                and long-term maintainability.
              </p>
              <ul className="mt-5 space-y-3 text-slate-300">
                {[
                  "Understand current state, timeline, and constraints",
                  "Identify high-ROI opportunities and risk areas",
                  "Propose a secure architecture + rollout plan",
                  "Define deliverables, milestones, and success metrics",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/40 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Fast start
              </div>
              <div className="mt-3 text-2xl font-bold">
                Discovery sprint (optional)
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                For complex engagements, we can begin with a short discovery
                sprint that produces architecture, scope, risks, and a
                prioritized delivery plan.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Architecture + security review",
                  "Delivery plan + milestones",
                  "Testing + release readiness",
                  "Operational handoff plan",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Response time
              </div>
              <div className="mt-3 text-2xl font-bold">We respond quickly</div>
              <p className="mt-4 leading-7 text-slate-300">
                Send your request and we’ll follow up with next steps and a
                short call to align on scope.
              </p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">
                Email: <span className="text-cyan-200">{contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

