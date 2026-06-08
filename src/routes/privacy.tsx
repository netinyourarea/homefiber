import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Home Fiber Connection" },
      { name: "description", content: "How Home Fiber Connection, an independent third-party assistance startup, collects, uses, and protects your personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: 2026</p>

          <div className="prose prose-invert mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. About this policy">
              Home Fiber Connection is an independent third-party service assistance startup. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. This Privacy Policy explains how we handle your information when you use our assistance services.
            </Section>
            <Section title="2. Information we collect">
              We collect only information you provide directly to us — for example your name, contact details, ZIP code, and a description of the assistance you are seeking. We never request provider account passwords or other sensitive credentials.
            </Section>
            <Section title="3. How we use your information">
              To respond to assistance requests, deliver third-party guidance, process payment of our assistance fee, and improve our service. We do not sell your personal information.
            </Section>
            <Section title="4. Information sharing">
              We share information only with vendors who help us operate (such as payment processors) and as required by law. We do not share your information with any internet, cable, or streaming provider.
            </Section>
            <Section title="5. Data security">
              The site is served over HTTPS. We use encryption in transit, access controls, and routine reviews to protect your information.
            </Section>
            <Section title="6. Your rights">
              You may request access, correction, or deletion of your personal data at any time by contacting support@homefiberconnection.com.
            </Section>
            <Section title="7. Cookies & tracking">
              We use essential cookies to operate the site and optional analytics cookies to improve it. You can manage preferences via your browser.
            </Section>
            <Section title="8. Children's privacy">
              Our services are not directed to children under 13. We do not knowingly collect data from children.
            </Section>
            <Section title="9. Contact">
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
