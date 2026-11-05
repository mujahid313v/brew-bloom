export default function ReserveCta() {
  return (
    <>
      {/* Sticky reserve bar — mobile only */}
      <a
        href="#reserve"
        className="fixed inset-x-0 bottom-0 z-50 md:hidden rounded-t-2xl bg-espresso px-5 pb-[env(safe-area-inset-bottom)] pt-3 text-cream shadow-lg"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="font-display text-lg tracking-wide">Brew &amp; Bloom</p>
          <span className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-2.5 text-base font-semibold text-cream shadow-sm">
            Reserve a table
          </span>
        </div>
      </a>

      {/* Sticky reserve button — desktop only */}
      <a
        href="#reserve"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-terracotta px-6 py-4 font-semibold text-cream shadow-lg transition hover:bg-terracotta/90 md:inline-flex"
      >
        Reserve a table
      </a>
    </>
  )
}
