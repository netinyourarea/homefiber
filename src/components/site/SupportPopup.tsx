import { useEffect, useState } from "react";
import { Phone, X, Wifi } from "lucide-react";

export function SupportPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("hfc_support_popup_dismissed") === "1") return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem("hfc_support_popup_dismissed", "1"); } catch {}
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <button
        aria-label="Close support popup"
        onClick={close}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />
      <div className="relative animate-pop-in w-full max-w-lg bg-card border border-primary/40 rounded-2xl overflow-hidden ring-glow">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber/20 blur-3xl rounded-full" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-black/60 hover:bg-primary hover:text-primary-foreground text-foreground transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative p-8 md:p-10 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-red grid place-items-center shadow-glow-red animate-pulse-glow">
            <Wifi className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 id="support-popup-title" className="font-display text-3xl md:text-4xl mt-6 tracking-tight font-semibold">
            Internet or Cable <span className="font-serif-italic text-amber">Not Working?</span>
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Get independent third-party guidance for slow internet, outages, setup confusion or cable concerns.
          </p>

          <a
            href="tel:8884784101"
            onClick={close}
            className="mt-7 inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-[0.2em] text-sm rounded-full shadow-glow-red transition-transform hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4" /> (888) 478-4101
          </a>

          <p className="mt-5 text-xs text-muted-foreground/80">
            Quick assistance &nbsp;•&nbsp; No forms &nbsp;•&nbsp; Talk to a real third-party advisor
          </p>
          <p className="mt-3 text-[10px] text-muted-foreground/70 leading-relaxed">
            Home Fiber Connection is an independent third-party service. Not affiliated with any provider.
          </p>
        </div>
      </div>
    </div>
  );
}
