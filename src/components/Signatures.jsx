import Reveal from './Reveal'

const SIGNATURES = [
  {
    id: 'sig-pour-over',
    name: 'Single-Origin Pour-Over',
    description: 'Ethiopia, brewed slow. Floral and bright.',
    price: 5.0,
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'A cup of pour-over coffee at Brew & Bloom',
    wide: true,
  },
  {
    id: 'sig-lavender-latte',
    name: 'Honey Lavender Latte',
    description: 'House honey, lavender, steamed milk. Our spring signature.',
    price: 6.25,
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Honey lavender latte with latte art at Brew & Bloom',
  },
  {
    id: 'sig-espresso-cake',
    name: 'Espresso Chocolate Cake',
    description: 'Dark chocolate, espresso, mascarpone cream.',
    price: 7.5,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Espresso chocolate cake with mascarpone cream',
  },
  {
    id: 'sig-burrata',
    name: 'Smoked Burrata & Fig',
    description: 'Fire-roasted burrata. The reason people come hungry.',
    price: 14.75,
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Smoked burrata and figs plated at Brew & Bloom',
  },
]

export default function Signatures() {
  return (
    <section id="signatures" className="scroll-mt-24 bg-cream-dark">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
            Signatures
          </p>
          <h2 className="mt-3">The dishes people talk about.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {SIGNATURES.map((dish, index) => (
            <Reveal
              key={dish.id}
              delay={index * 90}
              className={
                dish.wide
                  ? 'lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2'
                  : index === 1
                    ? 'lg:col-start-3 lg:row-start-1'
                    : index === 2
                      ? 'lg:col-start-4 lg:row-start-1'
                      : 'lg:col-start-3 lg:col-span-2 lg:row-start-2'
              }
            >
              <article className="group h-full overflow-hidden rounded-3xl bg-cream shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.imageAlt}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-espresso md:text-2xl">
                      {dish.name}
                    </h3>
                    <p className="whitespace-nowrap font-semibold text-terracotta">
                      ${dish.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="mt-2 text-espresso/80">{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
