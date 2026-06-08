import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Wifi, Tv, ShieldCheck, ArrowRight, Quote, MapPin, Settings2, Router as RouterIcon, LifeBuoy, BookOpen, Star } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

import heroAssist from "@/assets/hero-assist.jpg";
import heroStreaming from "@/assets/hero-streaming.jpg";
import supportCall from "@/assets/support-call.jpg";
import advisor from "@/assets/advisor.jpg";
import neighborhood from "@/assets/neighborhood.jpg";
import fiber from "@/assets/fiber.jpg";
import cableTv from "@/assets/cable-tv.jpg";
import routerImg from "@/assets/router.jpg";
import smartHome from "@/assets/smart-home.jpg";
import homeOffice from "@/assets/home-office.jpg";
import gaming from "@/assets/gaming.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import business from "@/assets/business.jpg";
import support from "@/assets/support.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Fiber Connection — Independent Internet & Cable Service Assistance" },
      { name: "description", content: "Home Fiber Connection is an independent third-party assistance startup offering guidance and informational support for internet, broadband, Wi-Fi and cable TV concerns. Not an ISP." },
      { property: "og:title", content: "Home Fiber Connection — Independent Internet & Cable Assistance" },
      { property: "og:description", content: "Independent guidance and support for internet, Wi-Fi and cable TV — not affiliated with any provider." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const helpTopics = [
  { icon: Wifi, title: "Wi-Fi & broadband guidance", img: fiber, tag: "Connectivity", span: "lg:col-span-2 lg:row-span-2" },
  { icon: Tv, title: "Cable TV navigation help", img: cableTv, tag: "Cable", span: "" },
  { icon: RouterIcon, title: "Router & equipment guidance", img: routerImg, tag: "Equipment", span: "" },
  { icon: Settings2, title: "Setup walkthroughs", img: smartHome, tag: "Setup", span: "lg:col-span-2" },
  { icon: LifeBuoy, title: "Common issue assistance", img: homeOffice, tag: "Support", span: "" },
  { icon: BookOpen, title: "Service option explainers", img: gaming, tag: "Education", span: "" },
];

const reasons = [
  { title: "Independent and impartial", text: "We are a brand-new third-party startup with no provider ties — our only role is to help you understand your options.", img: heroLiving },
  { title: "Clear, plain-language guidance", text: "We translate confusing provider terminology into simple steps so you can make informed decisions about your home connection.", img: business },
  { title: "Educational, not transactional", text: "We do not sell plans, activations, or subscriptions. We focus on informational support and general guidance.", img: heroStreaming },
  { title: "Real humans, simple conversation", text: "Speak with a third-party assistance specialist — no scripts, no pressure, no passwords requested.", img: support },
];

const testimonials = [
  { name: "Marcus V.", role: "Customer in NY", quote: "They calmly walked me through what to ask my provider. No pressure, no upselling — exactly the kind of independent help I needed." },
  { name: "Priya R.", role: "Customer in TX", quote: "I had no idea what half of my bill meant. The advisor explained everything in plain language and didn't try to sell me anything." },
  { name: "The Okafor Family", role: "Customers in GA", quote: "They were upfront that they are not our provider — that honesty is exactly why we trusted the guidance we received." },
  { name: "Jordan P.", role: "Customer in CO", quote: "Got general guidance on a Wi-Fi issue at home in one short call. Very transparent about what they could and could not do." },
  { name: "Sienna B.", role: "Customer in WA", quote: "Refreshing to talk to a real, independent advisor instead of a call tree. They never asked for any passwords." },
];

function HomePage() {
  return (
    <Layout>
      <Hero />
      <DisclosureStrip />
      <WhatWeDo />
      <WhatWeDontDo />
      <HelpTopics />
      <Coverage />
      <WhySwitch />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
}

/* ─── HERO ─── asymmetric editorial split + image collage + marquee ─── */
function Hero() {
  const marqueeItems = [
    "Independent assistance",
    "Not an ISP",
    "No brand affiliation",
    "Plain-language guidance",
    "Third-party startup",
    "No passwords requested",
    "Phone support 24/7",
    "7–15 day refund window",
  ];

  return (
    <section className="relative -mt-20 overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.12]"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.10]"
          style={{ background: "var(--amber)" }}
        />
      </div>

      {/* ── main split grid ── */}
      <div className="container mx-auto px-6 lg:px-10 pt-32 pb-10 lg:pt-40 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* LEFT — editorial copy ── */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
            {/* eyebrow */}
            <Reveal>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-10 bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">
                  Independent Third-Party Assistance
                </span>
              </div>
            </Reveal>

            {/* headline — mixes display + serif-italic in a staggered block */}
            <Reveal delay={60}>
              <h1 className="font-display font-semibold tracking-tight leading-[1.0] text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.6rem]">
                <span className="block">Get </span>
                <span className="block font-serif-italic text-amber">independent</span>
                <span className="block">internet &amp; cable</span>
                <span className="block">
                  service{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">help.</span>
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-1 h-3 bg-primary/20 rounded-sm -z-0"
                    />
                  </span>
                </span>
              </h1>
            </Reveal>

            {/* divider */}
            <Reveal delay={120}>
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-border/50" />
                <ShieldCheck className="w-4 h-4 text-muted-foreground/50" />
                <div className="h-px flex-1 bg-border/50" />
              </div>
            </Reveal>

            {/* subtext */}
            <Reveal delay={160}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                General guidance and informational support for internet, broadband, Wi-Fi and cable TV — from an independent startup with no provider ties.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="tel:8884784101"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-glow-red transition-all"
                >
                  <span className="w-8 h-8 rounded-xl bg-primary-foreground/20 grid place-items-center">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-widest opacity-75 leading-none mb-0.5">Call now</span>
                    (888) 478-4101
                  </span>
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Topics <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground/70">
                Not an ISP · No brand affiliation · Separate assistance fee applies
              </p>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm">
                {[
                  { n: 2026, s: "", l: "Year founded" },
                  { n: 7, s: "–15d", l: "Refund window" },
                  { n: 24, s: "/7", l: "Phone support" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-border/50 pl-4">
                    <div className="font-display text-xl sm:text-2xl font-semibold">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image collage ── */}
          <div className="lg:col-span-6 xl:col-span-5 relative h-[520px] md:h-[600px] lg:h-[680px] hidden md:block">
            {/* Main image — slightly tilted right */}
            <Reveal delay={80} className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[78%] h-[75%] rounded-3xl overflow-hidden ring-glow rotate-[2deg] origin-bottom-right">
                <img
                  src={heroAssist}
                  alt="Independent advisor"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent" />
              </div>
            </Reveal>

            {/* Second image — bottom-left, counter-tilted */}
            <Reveal delay={160} className="absolute inset-0">
              <div className="absolute bottom-0 left-0 w-[55%] h-[52%] rounded-3xl overflow-hidden ring-glow -rotate-[2deg] origin-top-left">
                <img
                  src={heroStreaming}
                  alt="Cable and streaming assistance"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent" />
              </div>
            </Reveal>

            {/* Floating badge — top left */}
            <Reveal delay={240} className="absolute inset-0">
              <div className="absolute top-6 left-0 glass rounded-2xl px-4 py-3 max-w-[190px] border border-primary/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Advisor on line</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">Independent · third-party only · no provider ties</p>
              </div>
            </Reveal>

            {/* Floating stats chip — mid-right */}
            <Reveal delay={300} className="absolute inset-0">
              <div className="absolute bottom-[28%] right-0 glass rounded-2xl p-4 border border-amber/20">
                <div className="text-[10px] uppercase tracking-widest text-amber font-semibold mb-1">Est. 2026</div>
                <div className="font-display text-2xl font-semibold">U.S. Wide</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Independent startup</div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── marquee trust strip ── */}
      <div className="relative mt-2 border-y border-border/30 bg-onyx/50 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-xs text-muted-foreground uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-primary flex-none" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DISCLOSURE STRIP ─── */
function DisclosureStrip() {
  return (
    <section className="border-y border-border/40 bg-onyx/60">
      <div className="container mx-auto px-6 lg:px-10 py-5 flex items-start gap-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
        <ShieldCheck className="w-4 h-4 mt-0.5 text-amber flex-none" />
        <p>
          <strong className="text-foreground">Home Fiber Connection</strong> is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, authorized by, or sponsored by any cable, internet, broadband, or streaming service provider.
        </p>
      </div>
    </section>
  );
}

/* ─── WHAT WE DO ─── */
function WhatWeDo() {
  const items = [
    "Help you understand internet and broadband service options",
    "Offer practical guidance on common connectivity concerns",
    "Walk you through general service provider processes",
    "Share informational support related to cable TV services",
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">What we do</p>
          <h2 className="font-display text-3xl md:text-5xl mt-3 tracking-tight font-semibold text-balance">
            How Home Fiber Connection <span className="font-serif-italic text-amber">helps you</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our role is limited to independent guidance and assistance. We help users navigate everyday connectivity questions in plain language.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((t, i) => (
              <li key={t} className="glass rounded-2xl p-6 flex gap-4">
                <span className="w-9 h-9 rounded-xl bg-primary/15 text-primary grid place-items-center font-display text-sm font-semibold flex-none">
                  0{i + 1}
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── WHAT WE DO NOT DO ─── */
function WhatWeDontDo() {
  const items = [
    "We are not an Internet Service Provider (ISP).",
    "We do not provide official customer support for any brand.",
    "We are not affiliated, authorized, or endorsed by any telecom or cable company.",
    "We do not sell internet or cable subscriptions.",
    "We do not provide guaranteed technical fixes.",
  ];
  return (
    <section className="py-20 md:py-24 bg-onyx/40 border-y border-border/40">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">What we do not do</p>
            <h2 className="font-display text-3xl md:text-5xl mt-3 tracking-tight font-semibold text-balance">
              Clarity, <span className="font-serif-italic text-amber">on purpose</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To avoid any confusion, please note the boundaries of our independent assistance service:
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="rounded-2xl border border-border/60 bg-card/60 p-5 h-full">
                <div className="text-amber text-xs font-semibold uppercase tracking-widest">0{i + 1}</div>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          All mentions of providers, if any, are strictly for informational purposes only. Brand names referenced on this site are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}

/* ─── HELP TOPICS bento grid ─── */
function HelpTopics() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Help topics</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-tight font-semibold text-balance">
              Where independent <span className="font-serif-italic text-amber">guidance</span> helps most.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-muted-foreground leading-relaxed">
              A range of everyday topics our third-party assistance specialists can walk you through — informational support, not service activation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4">
          {helpTopics.map((b, i) => (
            <Reveal key={b.title} delay={i * 60} className={b.span}>
              <Link to="/services" className="group relative h-full block rounded-2xl overflow-hidden bg-card border border-border/40 hover-lift">
                <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] uppercase tracking-widest text-amber font-semibold">
                  <b.icon className="w-3 h-3" /> {b.tag}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{b.title}</h3>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── COVERAGE ─── */
function Coverage() {
  const [zip, setZip] = useState("");
  return (
    <section id="coverage" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-border/40">
          <img src={neighborhood} alt="Neighborhoods using home internet" loading="lazy" width={1600} height={900} className="w-full h-[560px] md:h-[640px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-10">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Where we help</p>
                <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-xl tracking-tight font-semibold text-balance">
                  Available to U.S. households, <span className="font-serif-italic text-amber">coast to coast</span>.
                </h2>
                <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
                  Share your ZIP code and we'll point you to general assistance topics relevant in your area. This is informational only — we do not check provider availability or sell service.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`We'll prepare general guidance for ${zip}. An advisor will follow up if you call us.`);
                  }}
                  className="mt-8 flex items-stretch gap-2 max-w-md glass rounded-full p-1.5"
                >
                  <div className="flex-1 flex items-center px-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <input
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="Enter ZIP code"
                      className="flex-1 bg-transparent outline-none px-3 py-3 text-sm placeholder:text-muted-foreground/70"
                      aria-label="ZIP code"
                    />
                  </div>
                  <button className="px-6 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
                    Get info
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY SWITCH zigzag ─── */
function WhySwitch() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Why people choose us</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-tight font-semibold text-balance">
              Built on <span className="font-serif-italic text-amber">independence</span> and transparency.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-20">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <article className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-7 [direction:ltr]">
                  <div className="relative rounded-3xl overflow-hidden ring-glow">
                    <img src={r.img} alt={r.title} loading="lazy" width={1280} height={896} className="w-full aspect-[16/10] object-cover" />
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-amber">0{i + 1}</div>
                  </div>
                </div>
                <div className="lg:col-span-5 [direction:ltr]">
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{r.text}</p>
                  <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── staggered two-row masonry with accent card ─── */
function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* background texture */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-background to-onyx/40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[140px] opacity-[0.08]"
          style={{ background: "var(--primary)" }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-10">

        {/* header row — left headline + right count badge */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">In their words</p>
              <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-tight font-semibold text-balance">
                Real people,{" "}
                <span className="font-serif-italic text-amber">real guidance</span>.
              </h2>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center hidden md:block">
              <div className="font-display text-4xl font-semibold text-primary">5.0</div>
              <div className="flex gap-0.5 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber text-amber" />
                ))}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">Avg. rating</div>
            </div>
          </div>
        </Reveal>

        {/* row 1 — 3 cards, middle one elevated */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {row1.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <TestimonialCard t={t} accent={i === 1} />
            </Reveal>
          ))}
        </div>

        {/* row 2 — 2 cards centered + a CTA card */}
        <div className="grid md:grid-cols-3 gap-5">
          {row2.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}

          {/* CTA filler card */}
          <Reveal delay={160}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 h-full min-h-[200px] flex flex-col items-center justify-center p-8 text-center bg-gradient-card">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{ background: "var(--gradient-aurora)" }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 grid place-items-center mx-auto mb-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Get independent guidance from a real third-party advisor — no scripts, no pressure.
                </p>
                <a
                  href="tel:8884784101"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, accent = false }: { t: typeof testimonials[0]; accent?: boolean }) {
  return (
    <figure
      className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "bg-primary/10 border border-primary/30 shadow-glow-red"
          : "glass border border-border/40"
      }`}
    >
      {accent && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      )}
      {/* stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-amber text-amber" />
        ))}
      </div>
      {/* quote */}
      <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">
        "{t.quote}"
      </blockquote>
      {/* author */}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border/30 pt-5">
        <div className="w-9 h-9 rounded-full bg-primary/15 grid place-items-center flex-none">
          <span className="font-display text-sm font-semibold text-primary">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold leading-tight">{t.name}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-border/40">
          <img src={supportCall} alt="Independent advisor workspace ready to assist" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          <div className="relative p-10 md:p-20 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Independent assistance · ready to help</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-tight font-semibold text-balance">
              Get <span className="font-serif-italic text-amber">independent guidance</span> today.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              One quick call. A real third-party advisor. Plain-language guidance — no scripts, no sales pressure, and no provider account passwords requested.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:8884784101" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-glow-red transition-all">
                <Phone className="w-4 h-4" /> Call (888) 478-4101
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition-colors">
                Request Help <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-muted-foreground max-w-md">
              Home Fiber Connection is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
