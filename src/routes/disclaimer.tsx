import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Home Fiber Connection" },
      {
        name: "description",
        content:
          "Home Fiber Connection is an independent third-party service assistance startup, not affiliated with any internet, cable TV or streaming provider.",
      },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber font-semibold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Disclaimer</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Home Fiber Connection</strong> is an independent
              third-party service assistance provider. We are not affiliated with, authorized by, or
              endorsed by any internet, broadband, or cable TV service provider. Brand names, if
              mentioned, are used strictly for informational purposes only.
            </p>

            <p>
              All information on this website is provided in good faith for general informational
              and educational purposes only. We make no representations or warranties of any kind,
              express or implied, regarding the accuracy, adequacy, validity, reliability or
              completeness of any information on the site.
            </p>

            <p>Our role is limited to independent guidance and assistance. We do not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell internet, cable, broadband or streaming subscriptions.</li>
              <li>Provide official customer support on behalf of any brand.</li>
              <li>Guarantee technical fixes or specific outcomes.</li>
              <li>Represent or partner with any telecom or cable TV provider.</li>
            </ul>

            <p>
              All trademarks, logos and brand names mentioned belong to their respective owners.
              Their use here is strictly for informational reference and does not imply any
              affiliation or endorsement.
            </p>

            <p>
              For questions about this Disclaimer, contact{" "}
              <a className="text-primary" href="mailto:support@homefiberconnection.com">
                support@homefiberconnection.com
              </a>{" "}
              or call{" "}
              <a className="text-primary" href="tel:8884784101">
                (888) 478-4101
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
