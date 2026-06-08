import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Home Fiber Connection" },
      {
        name: "description",
        content:
          "The terms governing use of Home Fiber Connection, an independent third-party service assistance startup.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. Independent third-party assistance">
              Home Fiber Connection is an independent third-party service assistance startup. We are
              not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV,
              or streaming service provider. Brand names, if mentioned, are used strictly for
              informational purposes only.
            </Section>
            <Section title="2. Scope of service">
              We provide general guidance and informational support related to internet, broadband,
              Wi-Fi and cable TV services. We do not sell internet, cable, or streaming
              subscriptions, and we do not guarantee specific technical outcomes.
            </Section>
            <Section title="3. Assistance fees">
              Our assistance fee is separate from any charges billed by your service provider. Fees
              are disclosed before assistance begins and are payable in advance.
            </Section>
            <Section title="4. Provider relationships">
              You remain the account holder with your own service provider. Provider billing,
              accounts, and official support remain entirely with that provider. We do not represent
              any provider.
            </Section>
            <Section title="5. Acceptable use">
              You agree not to use our assistance for unlawful purposes, to misrepresent yourself,
              or to attempt to harm others.
            </Section>
            <Section title="6. Refunds">
              Refund requests may be submitted within 7 to 15 days of purchase, subject to the
              eligibility outlined in our Refund Policy.
            </Section>
            <Section title="7. Limitation of liability">
              Home Fiber Connection's liability is limited to the assistance fee paid. We make no
              guarantees regarding provider performance or technical outcomes.
            </Section>
            <Section title="8. Changes to terms">
              We may update these terms from time to time. Continued use of our service constitutes
              acceptance.
            </Section>
            <Section title="9. Contact">
              For questions about these terms, contact{" "}
              <a className="text-primary" href="mailto:support@homefiberconnection.com">
                support@homefiberconnection.com
              </a>{" "}
              or call{" "}
              <a className="text-primary" href="tel:8884784101">
                (888) 478-4101
              </a>
              .
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground mb-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
