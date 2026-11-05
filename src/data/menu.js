export const MENU_CATEGORIES = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
];

export const MENU_ITEMS = {
  coffee: [
    {
      id: 'coffee-espresso',
      name: 'Sunrise Blend Espresso',
      description: 'Double shot of our house blend. Dark cocoa, red currant, a whisper of smoke.',
      price: 3.5,
    },
    {
      id: 'coffee-pour-over',
      name: 'Single-Origin Pour-Over',
      description: 'Ethiopia washed, brewed 1:16 for four slow minutes. Bright, floral, juicy.',
      price: 5.0,
    },
    {
      id: 'coffee-lavender-latte',
      name: 'Honey Lavender Latte',
      description: 'House honey, lavender, silky steamed milk. A spring classic.',
      price: 6.25,
    },
    {
      id: 'coffee-cafe-latte',
      name: 'Café au Lait',
      description: 'Classic 1:2 ratio with our house coffee. For slow siestas.',
      price: 4.5,
    },
  ],
  breakfast: [
    {
      id: 'breakfast-sunrise-toast',
      name: 'Sunrise Toast',
      description: 'Sourdough, whipped ricotta, seasonal jam, wildflower honey.',
      price: 9.5,
    },
    {
      id: 'breakfast-farmhouse',
      name: 'Farmhouse Plate',
      description: 'Two eggs any style, roasted greens, roasted potato, toasted sourdough.',
      price: 11.75,
    },
    {
      id: 'breakfast-brunch-stack',
      name: 'Brunch Stack',
      description: 'Buttermilk pancakes, maple mascarpone, berries, bacon.',
      price: 13.5,
    },
    {
      id: 'breakfast-brew-bowl',
      name: 'Brew House Bowl',
      description: 'House granola, yogurt, fruit, honey, coffee concentrate drizzle.',
      price: 10.5,
    },
  ],
  mains: [
    {
      id: 'mains-burrata',
      name: 'Smoked Burrata & Fig',
      description: 'Fire-roasted burrata, figs, olive oil, grilled sourdough, arugula.',
      price: 14.75,
    },
    {
      id: 'mains-bistro-chicken',
      name: 'Bistro Chicken',
      description: 'Roasted chicken thigh, root vegetables, pan jus, herbed butter.',
      price: 16.5,
    },
    {
      id: 'mains-mushroom-risotto',
      name: 'Wild Mushroom Risotto',
      description: 'Carnaroli rice, mixed forest mushrooms, parmesan, thyme.',
      price: 15.75,
    },
    {
      id: 'mains-harvest',
      name: 'Harvest Bowl',
      description: 'Roast squash, kale, farro, tahini, pickled onion.',
      price: 13.5,
    },
  ],
  desserts: [
    {
      id: 'desserts-espresso-cake',
      name: 'Espresso Chocolate Cake',
      description: 'Dark chocolate, espresso, mascarpone cream. The one everyone orders twice.',
      price: 7.5,
    },
    {
      id: 'desserts-citrus-cake',
      name: 'Citrus Olive Oil Cake',
      description: 'Lemon, rosemary, olive oil, whipped cream.',
      price: 7.25,
    },
    {
      id: 'desserts-panna-cotta',
      name: 'Vanilla Panna Cotta',
      description: 'Baked vanilla bean, macerated berries, almond tuile.',
      price: 8.0,
    },
    {
      id: 'desserts-honey-cookies',
      name: 'Honey Cardamom Cookies',
      description: 'Three cookies, flaky salt, cold milk.',
      price: 6.5,
    },
  ],
};

export function getMenuItems(categoryId) {
  return MENU_ITEMS[categoryId] ?? [];
}
