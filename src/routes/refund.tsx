import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Home Fiber Connection" },
      { name: "description", content: "Home Fiber Connection refund policy: refund requests may be submitted within 7 to 15 days of purchase, subject to eligibility." },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber font-semibold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. Independent third-party assistance">
              Home Fiber Connection is an independent third-party service assistance startup. We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or streaming service provider. This Refund Policy applies only to our assistance fees and not to any charges billed by your service provider.
            </Section>
            <Section title="2. Refund window">
              Refund requests can be submitted within <strong className="text-foreground">7 to 15 days of service purchase</strong>, depending on the type of assistance provided. The applicable window will be disclosed at the time of purchase.
            </Section>
            <Section title="3. Eligibility">
              Eligibility for a refund depends on factors including the type of assistance purchased and whether assistance has already been delivered. We review each request individually and respond in writing. We do not offer unconditional refund guarantees.
            </Section>
            <Section title="4. How to request a refund">
              Email{" "}
              <a className="text-primary" href="mailto:support@homefiberconnection.com">support@homefiberconnection.com</a>{" "}
              or call{" "}
              <a className="text-primary" href="tel:8884784101">(888) 478-4101</a>{" "}
              with your order details. Our team will respond with next steps and any documentation requirements.
            </Section>
            <Section title="5. Processing">
              Approved refunds are issued to the original method of payment. Processing time varies by payment provider and is generally completed within 5 to 10 business days after approval.
            </Section>
            <Section title="6. Provider charges">
              Refund requests for charges from your internet, broadband, cable TV, or streaming provider must be directed to that provider. Home Fiber Connection has no authority over third-party provider billing.
            </Section>
            <Section title="7. Contact">
              Questions? Email{" "}
              <a className="text-primary" href="mailto:support@homefiberconnection.com">support@homefiberconnection.com</a>{" "}
              or call{" "}
              <a className="text-primary" href="tel:8884784101">(888) 478-4101</a>.
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
