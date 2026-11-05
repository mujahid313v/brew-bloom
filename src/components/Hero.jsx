import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-olive/10 md:h-96 md:w-96"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-olive/40 bg-olive/10 px-4 py-1.5 text-sm font-medium tracking-wide text-olive">
              Est. 2019 — Portland, Oregon
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
              Good coffee. Honest plates. Slow mornings.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-espresso/80 md:text-xl">
              Brew &amp; Bloom is a neighborhood café pouring single-origin
              coffee and cooking from a seasonal kitchen. Good coffee takes
              time. Good food takes heart.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-lg font-semibold text-cream shadow-sm transition hover:bg-terracotta/90"
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-espresso bg-transparent px-7 py-3.5 text-lg font-semibold text-espresso transition hover:bg-espresso hover:text-cream"
              >
                View menu
              </a>
            </div>
          </div>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl bg-cream-dark shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80&fm=webp"
                alt="Baristas preparing coffee behind the counter at Brew & Bloom"
                className="h-[26rem] w-full object-cover md:h-[34rem] lg:h-[40rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
