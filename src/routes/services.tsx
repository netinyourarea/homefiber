import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Check, Phone } from "lucide-react";
import fiber from "@/assets/fiber.jpg";
import cableTv from "@/assets/cable-tv.jpg";
import router from "@/assets/router.jpg";
import smartHome from "@/assets/smart-home.jpg";
import homeOffice from "@/assets/home-office.jpg";
import gaming from "@/assets/gaming.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Assistance Topics — Independent Internet & Cable Guidance | Home Fiber Connection" },
      { name: "description", content: "Independent third-party assistance topics including Wi-Fi guidance, broadband questions, router setup walkthroughs, cable TV navigation and more. We are not an ISP." },
      { property: "og:title", content: "Home Fiber Connection — Assistance Topics" },
      { property: "og:description", content: "Independent third-party assistance for internet, Wi-Fi and cable TV concerns." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    title: "Wi-Fi & broadband guidance",
    img: fiber,
    text: "We help you understand common Wi-Fi and broadband concepts — signal coverage, speed terminology, and what to ask your provider. Educational support only; we do not sell or activate service.",
    points: ["Plain-language explainers", "What questions to ask your provider", "General troubleshooting context", "No passwords requested"],
  },
  {
    title: "Cable TV navigation help",
    img: cableTv,
    text: "Independent guidance on how cable TV packages are typically structured, what add-ons commonly mean, and how to read your bill. We do not sell or activate any cable TV subscription.",
    points: ["How packages are typically structured", "Reading a cable TV bill", "Common add-on terminology", "No brand affiliation"],
  },
  {
    title: "Router & equipment guidance",
    img: router,
    text: "General informational guidance on home networking equipment — what routers, modems and mesh systems are, and how they fit together. We do not sell hardware or perform technical fixes.",
    points: ["Router vs. modem basics", "Mesh and Wi-Fi 6/6E concepts", "Equipment placement tips", "Educational only"],
  },
  {
    title: "Setup walkthroughs",
    img: smartHome,
    text: "Step-by-step informational walkthroughs of common home setup questions, framed in plain language. We do not provide guaranteed technical fixes or perform official provider support.",
    points: ["Common setup terminology", "What to expect from a setup", "Independent third-party perspective", "Guidance only"],
  },
  {
    title: "Common issue assistance",
    img: homeOffice,
    text: "General assistance on common everyday connectivity concerns — slow speeds, intermittent Wi-Fi, equipment confusion. We help you understand options; provider issues remain with the provider.",
    points: ["Issue-context guidance", "Questions to bring to your provider", "Plain-language explanations", "No impersonation of providers"],
  },
  {
    title: "Service option explainers",
    img: gaming,
    text: "We help you understand the kinds of internet and cable TV options that exist in general — terminology, common features, what to research. We never recommend specific brands as 'official' or 'best'.",
    points: ["Service option education", "What terminology means", "Independent perspective", "No brand recommendations"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber font-semibold">Assistance topics</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
              Where independent <span className="font-serif-italic text-amber">guidance</span> helps.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Home Fiber Connection provides general informational support for internet, broadband, Wi-Fi and cable TV concerns. We are an independent third-party startup — not an ISP, not affiliated with any provider, and we do not sell plans or subscriptions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-10 space-y-24">
          {blocks.map((b, i) => (
            <Reveal key={b.title}>
              <article className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-6 [direction:ltr]">
                  <img src={b.img} alt={b.title} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-elegant" />
                </div>
                <div className="lg:col-span-6 [direction:ltr]">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber">0{i + 1}</p>
                  <h2 className="font-display text-3xl md:text-5xl mt-3 text-balance">{b.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{b.text}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber flex-none" /> {p}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:8884784101" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-glow-red hover:scale-[1.03] transition-transform">
                    <Phone className="w-4 h-4" /> Speak with Support
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-10 mt-20">
          <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
            Disclaimer: Home Fiber Connection is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only. Our service assistance fee is separate from any provider charges.
          </p>
        </div>
      </section>
    </Layout>
  );
}
