export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-semibold text-cream">
              Brew &amp; Bloom
            </h2>
            <p className="mt-4 text-cream/80">
              Single-origin coffee and a small seasonal kitchen, brewed slow
              and served warm since 2019.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
              Explore
            </h3>
            <ul className="mt-4 flex flex-wrap gap-6">
              <li>
                <a href="#top" className="text-cream/80 transition hover:text-cream">
                  Back to top
                </a>
              </li>
              <li>
                <a href="#story" className="text-cream/80 transition hover:text-cream">
                  Our story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/80 transition hover:text-cream">
                  Menu
                </a>
              </li>
              <li>
                <a href="#signatures" className="text-cream/80 transition hover:text-cream">
                  Signatures
                </a>
              </li>
              <li>
                <a href="#visit" className="text-cream/80 transition hover:text-cream">
                  Hours &amp; location
                </a>
              </li>
              <li>
                <a href="#reserve" className="text-cream/80 transition hover:text-cream">
                  Reserve
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-8 text-center">
          <p className="text-sm text-cream/70">
            Sample project by Mujahid. Not a real business.
          </p>
        </div>
      </div>
    </footer>
  )
}
