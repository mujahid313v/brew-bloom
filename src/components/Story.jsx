import Reveal from './Reveal'

export default function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream-dark">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80&fm=webp"
              alt="The warm interior of the Brew & Bloom café"
              className="h-[20rem] w-full object-cover md:h-[26rem]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
              Our story
            </p>
            <h2 className="mt-3">From a two-person roastery to your favorite corner.</h2>
            <p className="mt-6 text-lg text-espresso/80">
              Brew &amp; Bloom started in 2019 with a secondhand espresso
              machine, a garage full of beans, and a stubborn belief that coffee
              should taste like somewhere. Today our little café still roasts in
              small batches, but the menu has grown up with the neighborhood.
            </p>
            <p className="mt-4 text-lg text-espresso/80">
              Every cup is brewed from beans we roast weekly. Every plate starts
              with vegetables from local farms. We keep the room warm, the pace
              slow, and the tables close.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
