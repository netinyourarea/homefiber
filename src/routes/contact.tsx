import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Home Fiber Connection — Independent Third-Party Assistance" },
      { name: "description", content: "Reach Home Fiber Connection for independent third-party internet and cable assistance. Call (888) 478-4101 or send a message." },
      { property: "og:title", content: "Contact Home Fiber Connection" },
      { property: "og:description", content: "Independent third-party assistance, available by phone or message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      {/* ── hero ── */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber font-semibold">Contact</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
              Speak with an{" "}
              <span className="font-serif-italic text-amber">independent advisor</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Home Fiber Connection is an independent third-party service assistance startup. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Reach us by phone or message — we never request provider passwords.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── form + info grid ── */}
      <section className="pb-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Form card — takes 8 of 12 columns */}
            <Reveal className="lg:col-span-8">
              <div className="glass rounded-3xl p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gradient-red mx-auto grid place-items-center shadow-glow-red">
                      <Phone className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl mt-6">Thank you</h2>
                    <p className="text-muted-foreground mt-3 text-lg">
                      A third-party advisor will reach out shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl font-semibold">Request Help</h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Tell us what's going on — we'll respond with independent guidance. Please do not include any passwords or sensitive account credentials.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full name" id="name" required />
                      <Field label="Email address" id="email" type="email" required />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Phone number" id="phone" type="tel" />
                      <Field label="ZIP code" id="zip" />
                    </div>

                    <div>
                      <label
                        htmlFor="msg"
                        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="msg"
                        required
                        rows={6}
                        placeholder="Describe your internet or cable question in plain language…"
                        className="w-full bg-input/40 border border-border rounded-2xl px-5 py-4 text-sm outline-none focus:border-primary transition resize-none placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
                      <p className="text-[11px] text-muted-foreground/70 max-w-sm leading-relaxed">
                        By submitting you agree that Home Fiber Connection is an independent third-party provider — not your ISP or cable company.
                      </p>
                      <button
                        type="submit"
                        className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-glow-red hover:bg-primary/90 hover:scale-[1.02] transition-all whitespace-nowrap"
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info sidebar — 4 of 12 columns */}
            <Reveal delay={120} className="lg:col-span-4">
              <div className="space-y-4">
                <InfoCard icon={Phone} label="Call us" value="(888) 478-4101" href="tel:8884784101" />
                <InfoCard icon={Mail} label="Email" value="support@homefiberconnection.com" href="mailto:support@homefiberconnection.com" />
                <InfoCard icon={MapPin} label="Based in" value="United States · independent startup" />
                <InfoCard icon={Clock} label="Hours" value="Phone assistance available daily" />

                <div className="glass rounded-2xl p-6 border border-amber/20 space-y-2">
                  <ShieldCheck className="w-5 h-5 text-amber" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Home Fiber Connection is an independent third-party service assistance provider. Not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground/50"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass rounded-2xl p-5 hover-lift transition-all">
      <Icon className="w-5 h-5 text-amber mb-3" />
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display text-lg mt-1 break-words leading-snug">{value}</div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
}
