// app/page.tsx
import type { ReactNode } from "react";

const BRAND = {
  navy: "#071A33",
  navy2: "#0B2550",
  electric: "#2F6BFF",
  ice: "#EAF1FF",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <TopBar />

      <Header />

      <Hero />

      <PromoTiles />

      <FeaturedCollections />

      <CategoryRow />

      <GuidesAndStory />

      <TrustBadges />

      <Team />

      <Waitlist />

      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div
      className="w-full border-b"
      style={{
        background: BRAND.navy,
        borderColor: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.9)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
        <span className="tracking-wide">
          Built for mindful strength • Designed for safe resistance
        </span>
        <span className="hidden sm:inline">Launching soon at surgeharness.com</span>
      </div>
    </div>
  );
}

function Header() {
  const nav = [
    { label: "Product", href: "#product" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Guides", href: "#guides" },
    { label: "Story", href: "#story" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Surge Harness</div>
            <div className="text-[11px] text-slate-500">movement resistance system</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-slate-900">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="rounded-xl px-4 py-2 text-sm font-medium text-white"
            style={{ background: BRAND.navy }}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background “image” placeholder (swap with a real photo later) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 20%, rgba(47,107,255,0.22), transparent 60%), linear-gradient(120deg, #061427 0%, #0B2550 55%, #071A33 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND.electric }} />
            Wearable resistance • Controlled movement • Low impact
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Strength you can feel.
            <span className="block text-white/75">Control you can build.</span>
          </h1>

          <p className="mt-4 max-w-prose text-base leading-relaxed text-white/80">
            Surge Harness adds <span className="font-medium text-white">movement resistance</span> —
            elastic bands anchored from torso to arms — to gently slow motion, promote body awareness,
            and support mindful strength training and rehab.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="rounded-xl px-5 py-3 text-sm font-medium text-white"
              style={{ background: BRAND.electric }}
            >
              Get early access
            </a>
            <a
              href="#product"
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
            >
              See the system
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-white/80">
            {/* <Stat label="Dynamic tension" value="Adjustable" />
            <Stat label="Focus" value="Control" />
            <Stat label="Designed for" value="Movement" /> */}
          </div>

          <p className="mt-4 text-xs text-white/65">
            Not medical advice. If you’re recovering from injury, consult a professional before use.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Surge Harness</p>
                <p className="mt-1 text-sm text-white/75">
                  Wearable resistance routing for arms + overhead motion
                </p>
              </div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/85 ring-1 ring-white/15">
                prototype phase
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs text-white/70">What it does</p>
              <ul className="mt-2 space-y-1 text-sm text-white/90">
                <li>• Adds resistance without adding load</li>
                <li>• Slows motion to improve control + technique</li>
                <li>• Modular tension for training or rehab</li>
              </ul>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <MiniCard title="Climbing" desc="Technique under resistance" />
              <MiniCard title="Rehab" desc="Controlled rebuilding" />
              <MiniCard title="Posture" desc="Active engagement" />
              <MiniCard title="Athletes" desc="Warmups + prehab" />
            </div>

            <a
              href="#waitlist"
              className="mt-6 block w-full rounded-xl px-5 py-3 text-center text-sm font-medium text-white"
              style={{ background: BRAND.navy }}
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoTiles() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <PromoTile
            eyebrow="For climbers + athletes"
            title="Train control, not just power."
            body="Surge turns light sessions into intentional strength work by adding gentle resistance through movement."
            href="#product"
          />
          <PromoTile
            eyebrow="For rehab + daily posture"
            title="Support safe rebuilding."
            body="Designed to help users rebuild technique and engagement without bulky, static tools."
            href="#use-cases"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedCollections() {
  return (
    <section id="product" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured collection</h2>
            <p className="mt-2 max-w-prose text-slate-600">
              Start with the core system. Expand with bands + guides later.
            </p>
          </div>
          <a
            href="#waitlist"
            className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
          >
            Shop (coming soon)
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProductCard
            title="Surge Harness"
            price="Coming soon"
            badge="Core system"
            bullets={[
              "Torso-to-arm resistance routing",
              "Modular fit + tension",
              "Mindful movement focus",
            ]}
          />
          <ProductCard
            title="Replacement Band Kit"
            price="Coming later"
            badge="Accessories"
            bullets={["Multiple tensions", "Quick swap design", "Keep training consistent"]}
          />
          <ProductCard
            title="Movement Guides"
            price="Free + premium later"
            badge="Resources"
            bullets={[
              "Warmups + prehab flows",
              "Climbing-specific drills",
              "Progress tracking (planned)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function CategoryRow() {
  const cats = [
    { label: "Climbing", note: "technique under resistance" },
    { label: "Rehabilitation", note: "controlled rebuilding" },
    { label: "Posture + Core", note: "active engagement" },
    { label: "Training", note: "warmups + prehab" },
  ];

  return (
    <section id="use-cases" className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {cats.map((c) => (
            <div
              key={c.label}
              className="rounded-3xl border border-slate-200 bg-white p-5"
            >
              <div
                className="mb-3 h-10 w-10 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,107,255,0.20), rgba(7,26,51,0.06))",
                }}
              />
              <p className="text-sm font-semibold">{c.label}</p>
              <p className="mt-1 text-xs text-slate-600">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuidesAndStory() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Block
            id="guides"
            kicker="Guides"
            title="Move smarter. Train safer."
            body="Short, practical routines designed for climbers, athletes, and everyday users — built around control, range, and intentional tension."
            cta={{ label: "Explore guides (soon)", href: "#waitlist" }}
          />
          <Block
            id="story"
            kicker="Why Surge"
            title="A bridge between performance and rehab."
            body="Surge was created to fill the gap between high-performance gear and physical therapy tools — supporting strength through controlled movement instead of added load or strain."
            cta={{ label: "Read the story (soon)", href: "#waitlist" }}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h3 className="text-xl font-semibold tracking-tight">What’s new</h3>
          <p className="mt-2 max-w-3xl text-slate-700 leading-relaxed">
            The Surge Harness introduces <span className="font-medium">movement resistance</span> —
            elastic bands anchored from torso to arms — to gently slow motion and improve control.
            Unlike weighted apparel or passive posture aids, Surge adds dynamic, customizable tension
            that moves with your body, encouraging users to feel how they move rather than simply
            push harder.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Problem"
              body="Weighted or static tools can overload the body, limit mobility, or fail to integrate into daily movement."
            />
            <InfoCard
              title="Approach"
              body="Customizable tension designed to promote control, awareness, and safer strength building."
            />
            <InfoCard
              title="IP"
              body="We plan to explore design + utility patent protection for the routing system and modular harness design."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const items = ["Free shipping threshold (TBD)", "30-day returns (planned)", "Warranty (planned)", "Customer support"];
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 md:grid-cols-4">
          {items.map((t) => (
            <div key={t} className="rounded-2xl border border-slate-200 px-4 py-3">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Team</h2>
        <p className="mt-2 max-w-prose text-slate-600">
          Built through shared prototyping, testing, and iteration.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <PersonCard
            name="Arva Syed"
            role="User Testing Lead, Medical Research, Prototyping"
            body="Leads user testing and rehab safety research, ensuring Surge aligns with physiotherapy-informed movement analysis and iterative improvements."
          />
          <PersonCard
            name="Jordyn Rabinowitz"
            role="Project Manager, Prototyping"
            body="Manages timelines and integration across design, testing, and marketing, while contributing directly to prototypes, materials sourcing, and functionality testing."
          />
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get launch updates</h2>
              <p className="mt-2 max-w-prose text-slate-600">
                Early access to the first drop, plus updates on testing and release timing.
              </p>
            </div>
            <div className="text-sm text-slate-600">
              Brand: <span className="font-medium">dark blue</span> +{" "}
              <span className="font-medium">electric accent</span>
            </div>
          </div>

          {/* Frontend-only form (wire to your email service later) */}
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ boxShadow: "0 0 0 0 rgba(47,107,255,0.0)" }}
            />
            <button
              type="submit"
              className="rounded-xl px-5 py-3 text-sm font-medium text-white"
              style={{ background: BRAND.navy }}
            >
              Join waitlist
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <div className="text-sm font-semibold">Surge Harness</div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Wearable movement resistance for mindful strength training and safer rebuilding.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
            <FooterCol title="Product">
              <a href="#product">System</a>
              <a href="#use-cases">Use cases</a>
              <a href="#waitlist">Launch</a>
            </FooterCol>
            <FooterCol title="Resources">
              <a href="#guides">Guides</a>
              <a href="#story">Story</a>
              <a href="#team">Team</a>
            </FooterCol>
            <FooterCol title="Contact">
              <a href="#waitlist">Email updates</a>
              <a href="#waitlist">Partnerships (soon)</a>
              <a href="#waitlist">Press (soon)</a>
            </FooterCol>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Surge Harness</span>
          <span>surgeharness.com</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- Small components -------------------- */

function LogoMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      aria-label="Surge logo"
      role="img"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="surgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={BRAND.electric} stopOpacity="1" />
          <stop offset="1" stopColor={BRAND.navy2} stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Rounded square */}
      <rect x="6" y="6" width="52" height="52" rx="16" fill={BRAND.navy} />

      {/* Stylized S */}
      <path
        d="M41 18c-2.4-2.2-6-3.4-10-3.4-7 0-12 3.6-12 8.6 0 4.5 3.7 6.7 10.4 7.8 6.2 1 8.1 2.3 8.1 4.4 0 2.5-2.8 4.2-7 4.2-4.2 0-7.4-1.5-9.8-4.1"
        fill="none"
        stroke="url(#surgeGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow element */}
      <path
        d="M43 42l8 0 0-8"
        fill="none"
        stroke={BRAND.electric}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 34c-6.5 6.8-12.6 10.8-21 12.3"
        fill="none"
        stroke={BRAND.electric}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
      <div className="text-sm font-semibold text-white">{value}</div>
      <div className="mt-0.5 text-[11px] text-white/75">{label}</div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
      <p className="text-xs font-semibold text-white">{title}</p>
      <p className="mt-1 text-[11px] text-white/75">{desc}</p>
    </div>
  );
}

function PromoTile(props: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <a
      href={props.href}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7"
    >
      <div
        className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(47,107,255,0.25), rgba(7,26,51,0.04) 55%, transparent 70%)",
        }}
      />
      <p className="text-xs font-semibold text-slate-500">{props.eyebrow}</p>
      <p className="mt-2 text-xl font-semibold tracking-tight">{props.title}</p>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-600">
        {props.body}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium" style={{ color: BRAND.navy }}>
        Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </a>
  );
}

function ProductCard(props: {
  title: string;
  price: string;
  badge: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold">{props.title}</p>
          <p className="mt-1 text-sm text-slate-600">{props.price}</p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-medium text-white"
          style={{ background: BRAND.navy }}
        >
          {props.badge}
        </span>
      </div>

      <div
        className="mt-5 aspect-[4/3] w-full rounded-2xl border border-slate-200"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,107,255,0.18), rgba(7,26,51,0.04))",
        }}
      />

      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {props.bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <a
        href="#waitlist"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
      >
        Notify me
      </a>
    </div>
  );
}

function Block(props: {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
}) {
  return (
    <div id={props.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
      <p className="text-xs font-semibold text-slate-500">{props.kicker}</p>
      <p className="mt-2 text-xl font-semibold tracking-tight">{props.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{props.body}</p>
      <a
        href={props.cta.href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
        style={{ color: BRAND.navy }}
      >
        {props.cta.label} <span>→</span>
      </a>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}

function PersonCard(props: { name: string; role: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div
          className="h-12 w-12 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,107,255,0.20), rgba(7,26,51,0.06))",
          }}
        />
        <div>
          <p className="text-base font-semibold">{props.name}</p>
          <p className="mt-1 text-sm text-slate-600">{props.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">{props.body}</p>
    </div>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-semibold tracking-wide text-slate-500">{title}</div>
      <div className="flex flex-col gap-2 text-slate-700">
        {children}
      </div>
    </div>
  );
}