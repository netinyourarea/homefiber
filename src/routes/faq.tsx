import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Are you an official cable or internet service provider?",
    a: "No. Home Fiber Connection is an independent third-party assistance platform. We are not an ISP and we do not represent any provider.",
  },
  {
    q: "Do you sell internet, cable, or streaming plans?",
    a: "No. We do not sell plans, subscriptions, activations or hardware. We provide independent guidance and informational support only.",
  },
  {
    q: "Do you charge for your services?",
    a: "Yes. Our assistance fee is separate from any charges billed by your service provider. Fees are disclosed before assistance begins.",
  },
  {
    q: "Will I still be billed by my service provider?",
    a: "Yes. Your provider continues to bill you directly. Our fee only covers our independent assistance.",
  },
  {
    q: "Do you need my account passwords or sensitive information?",
    a: "No. We never request provider account passwords or other sensitive credentials.",
  },
  {
    q: "Which providers do you support?",
    a: "We may reference several internet, broadband and cable TV brands for informational purposes only. All trademarks belong to their respective owners. We are not affiliated with, authorized by, or endorsed by any of them.",
  },
  {
    q: "Are your services refundable?",
    a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, subject to the eligibility outlined in our Refund Policy.",
  },
  {
    q: "What kind of help can I expect on a call?",
    a: "A calm, plain-language conversation focused on your questions. Examples include explaining bill terminology, walking through general setup steps, or helping you decide what to ask your provider.",
  },
  {
    q: "Will you contact my provider for me?",
    a: "No. Our role is limited to independent guidance. You remain the account holder and continue to communicate directly with your provider for any official changes.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Independent Third-Party Assistance | Home Fiber Connection" },
      {
        name: "description",
        content:
          "Frequently asked questions about Home Fiber Connection, an independent third-party internet and cable assistance startup. Not an ISP, not affiliated with any provider.",
      },
      { property: "og:title", content: "Home Fiber Connection FAQ" },
      {
        property: "og:description",
        content: "Honest answers about how our independent assistance works.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber font-semibold">FAQ</p>
            <h1 className="font-display text-5xl md:text-7xl mt-3 text-balance">
              Questions &amp; <span className="font-serif-italic text-amber">honest answers</span>.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Home Fiber Connection is an independent third-party service assistance startup,
              launched in 2026. The answers below explain exactly how our assistance works — and
              what it is not.
            </p>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <div className="glass rounded-2xl">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={open === i}
                  >
                    <span className="font-semibold text-base md:text-lg">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 glass rounded-3xl p-8 md:p-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Still have a question?</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Talk to an independent third-party advisor — no forms, no scripts.
              </p>
            </div>
            <a
              href="tel:8884784101"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            >
              <Phone className="w-4 h-4" /> (888) 478-4101
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
