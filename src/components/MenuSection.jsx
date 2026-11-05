import { useState } from 'react'
import { MENU_CATEGORIES, getMenuItems } from '../data/menu'
import Reveal from './Reveal'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id)
  const items = getMenuItems(activeCategory)

  const selectCategory = (id) => {
    setActiveCategory(id)
  }

  return (
    <section id="menu" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
            The menu
          </p>
          <h2 className="mt-3">Cooked slow. Poured slow. Eaten slow.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-10 flex flex-wrap gap-2"
          >
            {MENU_CATEGORIES.map((category) => {
              const selected = category.id === activeCategory
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${category.id}`}
                  onClick={() => selectCategory(category.id)}
                  className={
                    selected
                      ? 'rounded-full bg-espresso px-5 py-2.5 text-base font-semibold text-cream'
                      : 'rounded-full border border-espresso/30 px-5 py-2.5 text-base font-semibold text-espresso transition hover:border-espresso hover:bg-espresso/5'
                  }
                >
                  {category.label}
                </button>
              )
            })}
          </div>

          <div
            key={activeCategory}
            role="tabpanel"
            id={`panel-${activeCategory}`}
            aria-labelledby={`tab-${activeCategory}`}
            className="menu-panel mt-8 grid gap-4 sm:grid-cols-2"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-cream-dark p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-espresso">{item.name}</h3>
                  <p className="whitespace-nowrap font-semibold text-terracotta">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="mt-2 text-espresso/80">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
