import Reveal from './Reveal'

const GALLERY_IMAGES = [
  {
    id: 'gal-interior',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Inside the warm Brew & Bloom café',
  },
  {
    id: 'gal-coffee-beans',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Fresh roasted coffee beans at Brew & Bloom',
  },
  {
    id: 'gal-burger',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Hearty homemade burger served at Brew & Bloom',
  },
  {
    id: 'gal-salad',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Fresh seasonal salad from the Brew & Bloom kitchen',
  },
  {
    id: 'gal-cake',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Dessert plate from the Brew & Bloom kitchen',
  },
  {
    id: 'gal-kitchen',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80&fm=webp',
    imageAlt: 'Preparing food in the Brew & Bloom kitchen',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
            Gallery
          </p>
          <h2 className="mt-3">A look inside the bloom.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={image.id} delay={(index % 3) * 90}>
              <div className="group overflow-hidden rounded-3xl shadow-md">
                <img
                  src={image.image}
                  alt={image.imageAlt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
