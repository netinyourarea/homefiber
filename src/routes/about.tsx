import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ShieldCheck, Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import team from "@/assets/team.jpg";
import engineers from "@/assets/engineers.jpg";
import promise from "@/assets/promise.jpg";
import connectivity from "@/assets/connectivity.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Home Fiber Connection — Independent Third-Party Assistance Startup" },
      { name: "description", content: "Learn about Home Fiber Connection, a 2026 independent third-party service assistance startup offering guidance for internet, Wi-Fi and cable TV concerns. Not an ISP." },
      { property: "og:title", content: "About Home Fiber Connection" },
      { property: "og:description", content: "Independent third-party service assistance startup launched in 2026." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: team },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Independence first", text: "Zero provider affiliations. Our guidance is shaped by your questions, not by any brand." },
  { icon: BookOpen, title: "Education over sales", text: "We explain — we do not activate or sell connectivity services of any kind." },
  { icon: Heart, title: "Respectful conversations", text: "Calm, judgement-free help in plain language. No scripts, no pressure tactics." },
  { icon: Users, title: "Privacy aware", text: "We never request provider passwords or sensitive credentials to assist you." },
];

function AboutPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora" />
        <div className="container mx-auto px-6 lg:px-10 relative text-center max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">About Home Fiber Connection</p>
            <h1 className="font-display text-4xl md:text-7xl mt-4 tracking-tight font-semibold text-balance">
              An independent <span className="font-serif-italic text-amber">third-party</span> assistance startup.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Home Fiber Connection is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi and cable TV services. We are not affiliated with, authorized by, or endorsed by any telecom, internet, or cable TV provider.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden ring-glow">
              <img src={team} alt="Home Fiber Connection founding team" loading="lazy" width={1280} height={896} className="w-full aspect-[5/4] object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight font-semibold text-balance">
              A new kind of <span className="font-serif-italic text-amber">independent help</span>.
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Home Fiber Connection launched in 2026 as a small, independent startup. We saw how confusing internet and cable TV decisions can be — endless plans, unclear bills, hard-to-reach support — and built a third-party assistance service to translate it all into plain language.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We do not provide internet or cable services directly. We do not represent or partner with any telecom or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Mission &amp; values</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight font-semibold">What we stand for.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="glass rounded-2xl p-7 hover-lift h-full">
                  <span className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center mb-5">
                    <v.icon className="w-6 h-6 text-primary" />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden border border-border/40">
            <img src={connectivity} alt="Abstract fiber light streams" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
            <div className="relative grid md:grid-cols-4 gap-6 p-10 md:p-16">
              {[
                { n: 2026, s: "", l: "Year founded" },
                { n: 100, s: "%", l: "Independent" },
                { n: 0, s: "", l: "Provider partnerships" },
                { n: 7, s: "–15d", l: "Refund window" },
              ].map((s) => (
                <Reveal key={s.l}>
                  <div>
                    <div className="font-display text-5xl font-semibold text-amber"><Counter to={s.n} suffix={s.s} /></div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden ring-glow">
              <img src={engineers} alt="Home Fiber Connection research team at work" loading="lazy" width={1280} height={896} className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:order-1" delay={150}>
            <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our approach</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight font-semibold text-balance">
              People who <span className="font-serif-italic text-amber">explain, not sell</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our advisors are trained to give general guidance and informational support — never to impersonate providers or push you toward any specific brand. We listen, clarify, and respect your decision.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-primary" /> No provider impersonation, ever</li>
              <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-primary" /> No sensitive credentials requested</li>
              <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-primary" /> Educational, plain-language guidance only</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden glass p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden">
                <img src={promise} alt="Home Fiber Connection transparency promise" loading="lazy" width={1280} height={896} className="w-full aspect-square object-cover" />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={150}>
              <p className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Our promise</p>
              <h2 className="font-display text-3xl md:text-5xl mt-3 tracking-tight font-semibold text-balance">
                "Independent guidance, <span className="font-serif-italic text-amber">always disclosed</span>."
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our assistance fee is separate from any provider charges. Refund requests may be submitted within 7 to 15 days of purchase, subject to eligibility outlined on our Refund Policy page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
