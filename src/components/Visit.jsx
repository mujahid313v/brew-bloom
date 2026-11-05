import Reveal from './Reveal'

const HOURS = [
  { days: 'Monday', time: 'Closed' },
  { days: 'Tuesday — Thursday', time: '7:00 AM – 3:00 PM' },
  { days: 'Friday — Saturday', time: '7:00 AM – 4:00 PM' },
  { days: 'Sunday', time: '8:00 AM – 2:00 PM' },
]

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 bg-cream-dark">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
            Hours &amp; location
          </p>
          <h2 className="mt-3">Find your seat.</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <Reveal delay={0} className="md:col-span-3">
            <div className="rounded-3xl bg-cream p-6 shadow-sm md:p-8">
              <h3 className="text-2xl font-semibold text-espresso">Opening hours</h3>
              <ul className="mt-6 divide-y divide-espresso/10">
                {HOURS.map((row) => (
                  <li
                    key={row.days}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-medium text-espresso">{row.days}</span>
                    <span className="font-medium text-espresso/80">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2">
            <div className="rounded-3xl bg-espresso p-6 text-cream md:p-8">
              <h3 className="text-2xl font-semibold text-cream">Find us</h3>
              <address className="not-italic">
                <p className="mt-4 text-lg">123 Roastery Lane</p>
                <p className="text-lg">Portland, OR 97209</p>
              </address>
              <p className="mt-6 text-espresso/80 md:text-cream/80">
                Parking is limited on Roastery Lane — street parking nearby, or
                use the lot on Alder Street.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
