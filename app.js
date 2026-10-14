/**
 * Purpldine - Zomato UI Clone in Purple Theme
 * Full Interactive Engine: Search, Filters, Cart, Menus, Booking, Auth, Order Tracker
 */

// Global State
const state = {
  activeCity: 'Delhi NCR',
  activeTab: 'delivery', // 'delivery', 'dining', 'nightlife'
  activeFoodCategory: 'all',
  searchQuery: '',
  selectedFilters: {
    rating4Plus: false,
    pureVeg: false,
    fastDelivery: false,
    offersOnly: false,
    sortBy: 'popularity'
  },
  cart: [],
  appliedCoupon: null,
  activeModalRestaurant: null,
  theme: localStorage.getItem('purpldine-theme') || 'light',
  favorites: JSON.parse(localStorage.getItem('purpldine-favorites') || '[]'),
  user: JSON.parse(localStorage.getItem('purpldine-user') || 'null'),
  currentHeroVideoIdx: 0,
  isHeroAudioMuted: true
};

// Video Tracks
const videoTracks = [
  'images/v/5821374-hd_1920_1080_30fps.mp4',
  'images/v/12254141_3840_2160_24fps.mp4',
  'images/v/6327104-uhd_3840_2160_25fps.mp4'
];

// Video Stories Dataset
const videoStoriesData = [
  {
    video: 'images/v/12254141_3840_2160_24fps.mp4',
    title: 'Flaming Wok & Live Sizzler Masterclass',
    desc: 'Filmed at Neon Velvet Lounge & Bar • Asian Tapas & Sizzler Special',
    badge: 'Chef Spotlight',
    restId: 'rest-5'
  },
  {
    video: 'images/v/5821374-hd_1920_1080_30fps.mp4',
    title: '48-Hour Fermented Wood-Fired Sourdough Pizza',
    desc: 'Filmed at Artisan Crust Pizza Co. • Handcrafted Naples Style',
    badge: 'Artisan Kitchen',
    restId: 'rest-3'
  },
  {
    video: 'images/v/6327104-uhd_3840_2160_25fps.mp4',
    title: 'Sunset Golden Hour & Purple Smoke Cocktails',
    desc: 'Filmed at The Purple Bistro & Rooftop Bar • Connaught Place',
    badge: 'Sunset Experience',
    restId: 'rest-1'
  }
];

// Cities List
const cities = [
  { name: 'Delhi NCR', state: 'India', places: '14,280 places' },
  { name: 'Mumbai', state: 'Maharashtra', places: '12,940 places' },
  { name: 'Bengaluru', state: 'Karnataka', places: '15,620 places' },
  { name: 'Hyderabad', state: 'Telangana', places: '9,450 places' },
  { name: 'Chennai', state: 'Tamil Nadu', places: '7,890 places' },
  { name: 'Kolkata', state: 'West Bengal', places: '8,120 places' },
  { name: 'Pune', state: 'Maharashtra', places: '6,780 places' },
  { name: 'Goa', state: 'India', places: '3,210 places' },
  { name: 'Dubai', state: 'UAE', places: '5,420 places' }
];

// Curated Collections
const collections = [
  {
    id: 'c1',
    title: 'Top Trending Spots',
    places: '32 Places',
    img: 'images/image-1.png'
  },
  {
    id: 'c2',
    title: 'Best Rooftop Cafes & Bars',
    places: '24 Places',
    img: 'images/image-2.png'
  },
  {
    id: 'c3',
    title: 'Romantic Candlelit Escapes',
    places: '18 Places',
    img: 'images/image-3.png'
  },
  {
    id: 'c4',
    title: 'Artisan Coffee & Workspaces',
    places: '21 Places',
    img: 'images/image-4.png'
  }
];

// Food Categories (Round Inspiration Carousel)
const foodCategories = [
  { id: 'all', name: 'All Dishes', img: 'images/image-5.png' },
  { id: 'biryani', name: 'Biryani', img: 'images/image-6.png' },
  { id: 'pizza', name: 'Pizza', img: 'images/image-7.png' },
  { id: 'burger', name: 'Burgers', img: 'images/image-8.png' },
  { id: 'north-indian', name: 'North Indian', img: 'images/image-9.png' },
  { id: 'thali', name: 'Thali', img: 'images/image-10.png' },
  { id: 'rolls', name: 'Rolls & Wraps', img: 'images/image-11.png' },
  { id: 'pasta', name: 'Italian & Pasta', img: 'images/image-12.png' },
  { id: 'chinese', name: 'Chinese & Momos', img: 'images/image-13.png' },
  { id: 'dessert', name: 'Desserts & Cakes', img: 'images/image-14.png' },
  { id: 'shakes', name: 'Beverages & Shakes', img: 'images/image-15.png' }
];

// Top Brands
const topBrands = [
  { name: "Domino's Pizza", time: '20 mins', img: 'images/image-16.png', discount: '50% OFF' },
  { name: "McDonald's", time: '24 mins', img: 'images/image-17.png', discount: 'Free Fries' },
  { name: "KFC", time: '22 mins', img: 'images/image-18.png', discount: '40% OFF' },
  { name: "Burger King", time: '25 mins', img: 'images/image-19.png', discount: '60% OFF' },
  { name: "Haldiram's", time: '28 mins', img: 'images/image-20.png', discount: '20% OFF' },
  { name: "Starbucks Coffee", time: '18 mins', img: 'images/image-21.png', discount: 'PurplePro 15%' }
];

// Localities
const localities = [
  { name: 'Connaught Place', count: '412 places' },
  { name: 'Indiranagar', count: '584 places' },
  { name: 'Bandra West', count: '390 places' },
  { name: 'Koramangala', count: '632 places' },
  { name: 'Cyber Hub, Gurugram', count: '248 places' },
  { name: 'Jubilee Hills', count: '315 places' },
  { name: 'Park Street', count: '290 places' },
  { name: 'Hauz Khas Village', count: '180 places' }
];

// Comprehensive Restaurant Directory
const restaurants = [
  {
    id: 'rest-1',
    name: 'The Purple Bistro & Bar',
    cuisines: 'Continental, Italian, Craft Cocktails',
    rating: 4.6,
    reviewsCount: '2.4k',
    deliveryRating: 4.5,
    costForTwo: '₹1,200 for two',
    avgCost: 1200,
    deliveryTime: '24 mins',
    deliveryMins: 24,
    distance: '2.3 km',
    isVeg: false,
    hasDiscount: true,
    discountText: '50% OFF up to ₹100',
    isPromoted: true,
    category: 'dining',
    type: 'italian',
    image: 'images/image-1.png',
    address: 'Block M, Outer Circle, Connaught Place, New Delhi',
    safetyVerified: 'Purple Clean Certified Kitchen',
    menu: [
      { id: 'm101', name: 'Truffle Mushroom Risotto', price: 440, isVeg: true, desc: 'Creamy arborio rice infused with wild forest mushrooms and black truffle essence.', img: 'images/image-12.png' },
      { id: 'm102', name: 'Wood-Fired Purple Basil Pizza', price: 490, isVeg: true, desc: 'San Marzano tomatoes, fresh buffalo mozzarella, purple opal basil, and EVOO.', img: 'images/image-7.png' },
      { id: 'm103', name: 'Grilled Norwegian Salmon', price: 680, isVeg: false, desc: 'Pan-seared salmon fillet served with lemon butter caper sauce and charred asparagus.', img: 'images/image-22.png' },
      { id: 'm104', name: 'Smoked Berry Cheesecake', price: 290, isVeg: true, desc: 'Silky cream cheese layer topped with blueberry reduction and purple spun sugar.', img: 'images/image-14.png' }
    ]
  },
  {
    id: 'rest-2',
    name: 'Royal Dawat Biryani House',
    cuisines: 'Hyderabadi, Biryani, Mughlai, Kebabs',
    rating: 4.5,
    reviewsCount: '5.1k',
    deliveryRating: 4.6,
    costForTwo: '₹600 for two',
    avgCost: 600,
    deliveryTime: '20 mins',
    deliveryMins: 20,
    distance: '1.8 km',
    isVeg: false,
    hasDiscount: true,
    discountText: '60% OFF up to ₹120',
    isPromoted: false,
    category: 'delivery',
    type: 'biryani',
    image: 'images/image-6.png',
    address: 'Near Metro Pillar 42, Indiranagar 100ft Road',
    safetyVerified: 'Daily temperature checked staff',
    menu: [
      { id: 'm201', name: 'Special Dum Hyderabadi Mutton Biryani', price: 380, isVeg: false, desc: 'Slow-cooked fragrant basmati rice with marinated tender mutton cuts and saffron.', img: 'images/image-6.png' },
      { id: 'm202', name: 'Paneer Tikka Biryani Pot', price: 290, isVeg: true, desc: 'Clay-oven smoked cottage cheese cubes layered with caramelized onions & mint.', img: 'images/image-23.png' },
      { id: 'm203', name: 'Galouti Kebab Melt (4 Pcs)', price: 340, isVeg: false, desc: 'Mouth-melting minced lamb kebabs infused with 32 secret Lucknowi spices.', img: 'images/image-24.png' },
      { id: 'm204', name: 'Zafrani Firni in Clay Pot', price: 140, isVeg: true, desc: 'Traditional slow-cooked ground rice pudding topped with pistachios & silver vark.', img: 'images/image-10.png' }
    ]
  },
  {
    id: 'rest-3',
    name: 'Artisan Crust Pizza Co.',
    cuisines: 'Pizza, Fast Food, Desserts',
    rating: 4.4,
    reviewsCount: '1.8k',
    deliveryRating: 4.3,
    costForTwo: '₹750 for two',
    avgCost: 750,
    deliveryTime: '28 mins',
    deliveryMins: 28,
    distance: '3.1 km',
    isVeg: false,
    hasDiscount: true,
    discountText: 'Flat ₹150 OFF on ₹399',
    isPromoted: true,
    category: 'delivery',
    type: 'pizza',
    image: 'images/image-7.png',
    address: '14th Cross, 4th Block, Koramangala',
    safetyVerified: 'Contactless Safe Packaging',
    menu: [
      { id: 'm301', name: 'Burrata & Sun-Dried Tomato Pizza', price: 460, isVeg: true, desc: 'Fresh whole artisan burrata cheese, sun-dried tomatoes, arugula, and balsamic glaze.', img: 'images/image-7.png' },
      { id: 'm302', name: 'Spicy Pepperoni & Hot Honey', price: 520, isVeg: false, desc: 'Crispy pepperoni cups drizzled with chili-infused wildflower honey.', img: 'images/image-25.png' },
      { id: 'm303', name: 'Cheesy Garlic Pull-Apart Loaf', price: 210, isVeg: true, desc: 'Freshly baked sourdough bun stuffed with roasted garlic butter and mozzarella.', img: 'images/image-11.png' },
      { id: 'm304', name: 'Belgian Molten Lava Cake', price: 180, isVeg: true, desc: 'Warm gooey chocolate center oozing with dark Callebaut cocoa.', img: 'images/image-14.png' }
    ]
  },
  {
    id: 'rest-4',
    name: 'Saffron Courtyard - Pure Veg',
    cuisines: 'North Indian, Rajasthani, Thali',
    rating: 4.7,
    reviewsCount: '3.8k',
    deliveryRating: 4.7,
    costForTwo: '₹900 for two',
    avgCost: 900,
    deliveryTime: '32 mins',
    deliveryMins: 32,
    distance: '4.0 km',
    isVeg: true,
    hasDiscount: false,
    discountText: '',
    isPromoted: false,
    category: 'dining',
    type: 'thali',
    image: 'images/image-10.png',
    address: 'Opp. City Palace Gate, MG Road',
    safetyVerified: '100% Pure Vegetarian Kitchen',
    menu: [
      { id: 'm401', name: 'Grand Royal Maharaja Thali', price: 520, isVeg: true, desc: 'Paneer butter masala, dal makhani, ker sangri, missi roti, pullao, raita & gulab jamun.', img: 'images/image-10.png' },
      { id: 'm402', name: 'Dal Bukhara (Slow Cooked 18h)', price: 340, isVeg: true, desc: 'Whole black lentils simmered overnight with cream, tomatoes, and organic white butter.', img: 'images/image-9.png' },
      { id: 'm403', name: 'Amritsari Kulcha Platter', price: 260, isVeg: true, desc: 'Crisp layered stuffed potato kulchas served with pindi chole and tangy imli chutney.', img: 'images/image-26.png' }
    ]
  },
  {
    id: 'rest-5',
    name: 'Neon Velvet Lounge & Club',
    cuisines: 'Finger Food, Asian Tapas, Signature Cocktails',
    rating: 4.8,
    reviewsCount: '4.2k',
    deliveryRating: 4.2,
    costForTwo: '₹2,400 for two',
    avgCost: 2400,
    deliveryTime: '45 mins',
    deliveryMins: 45,
    distance: '5.2 km',
    isVeg: false,
    hasDiscount: true,
    discountText: 'PurplePro 20% OFF Bill',
    isPromoted: true,
    category: 'nightlife',
    type: 'cocktails',
    image: 'images/image-2.png',
    address: 'Sky Level 8, The Grand Horizon, Bandra West',
    safetyVerified: 'Exclusive Table Valet & Guestlist',
    menu: [
      { id: 'm501', name: 'Purple Mist Smoked Cocktail', price: 550, isVeg: true, desc: 'Elderflower liqueur, gin, butterfly pea flower infusion and dry ice aroma.', img: 'images/image-27.png' },
      { id: 'm502', name: 'Truffle Edamame Dim Sum (6 Pcs)', price: 390, isVeg: true, desc: 'Translucent crystal dumplings filled with crushed edamame and black truffle.', img: 'images/image-13.png' },
      { id: 'm503', name: 'Korean Sticky Glazed Wings', price: 420, isVeg: false, desc: 'Crisp chicken wings tossed in gochujang, toasted sesame seeds, and scallions.', img: 'images/image-28.png' }
    ]
  },
  {
    id: 'rest-6',
    name: 'The Burger Guild',
    cuisines: 'Gourmet Burgers, American, Shakes',
    rating: 4.3,
    reviewsCount: '1.4k',
    deliveryRating: 4.4,
    costForTwo: '₹550 for two',
    avgCost: 550,
    deliveryTime: '19 mins',
    deliveryMins: 19,
    distance: '1.4 km',
    isVeg: false,
    hasDiscount: true,
    discountText: '40% OFF up to ₹80',
    isPromoted: false,
    category: 'delivery',
    type: 'burger',
    image: 'images/image-8.png',
    address: 'Shop 12, Main Market, Sector 29, Gurugram',
    safetyVerified: 'Sizzle-sealed foil delivery',
    menu: [
      { id: 'm601', name: 'Double Smashed Cheese Burger', price: 299, isVeg: false, desc: 'Two prime smashed patties, cheddar melt, caramelized onions, house purple relish.', img: 'images/image-8.png' },
      { id: 'm602', name: 'Crispy Truffle Veggie Monster', price: 249, isVeg: true, desc: 'Crunchy herb potato-cheese patty, pickled jalapenos, and chipotle mayo on brioche.', img: 'images/image-29.png' },
      { id: 'm603', name: 'Thick Belgian Choco Shake', price: 169, isVeg: true, desc: 'Creamy hand-spun ice cream shake loaded with chocolate fudge drizzle.', img: 'images/image-15.png' }
    ]
  },
  {
    id: 'rest-7',
    name: 'Wok & Roll Pan Asian',
    cuisines: 'Chinese, Dimsums, Thai, Sushi',
    rating: 4.5,
    reviewsCount: '2.9k',
    deliveryRating: 4.5,
    costForTwo: '₹800 for two',
    avgCost: 800,
    deliveryTime: '26 mins',
    deliveryMins: 26,
    distance: '2.9 km',
    isVeg: false,
    hasDiscount: true,
    discountText: '50% OFF up to ₹100',
    isPromoted: false,
    category: 'delivery',
    type: 'chinese',
    image: 'images/image-13.png',
    address: 'Near City Square Mall, Jubilee Hills',
    safetyVerified: 'Steam-sterilized bamboo boxes',
    menu: [
      { id: 'm701', name: 'Dragon Chili Chicken Hakka Noodles', price: 280, isVeg: false, desc: 'Wok tossed ribbon noodles with shredded chicken, peppers, and garlic chili oil.', img: 'images/image-13.png' },
      { id: 'm702', name: 'Steamed Tibetan Veg Momos (8 Pcs)', price: 190, isVeg: true, desc: 'Delicate dumplings stuffed with minced vegetables served with fiery dip.', img: 'images/image-30.png' },
      { id: 'm703', name: 'Classic Pad Thai Noodles with Peanuts', price: 320, isVeg: true, desc: 'Flat rice noodles tossed in authentic tamarind palm sugar sauce.', img: 'images/image-31.png' }
    ]
  },
  {
    id: 'rest-8',
    name: 'Café de Lavender',
    cuisines: 'Coffee, European, Bakery, Breakfast',
    rating: 4.7,
    reviewsCount: '3.1k',
    deliveryRating: 4.6,
    costForTwo: '₹650 for two',
    avgCost: 650,
    deliveryTime: '22 mins',
    deliveryMins: 22,
    distance: '2.0 km',
    isVeg: true,
    hasDiscount: true,
    discountText: 'Free Croissant on ₹499',
    isPromoted: true,
    category: 'dining',
    type: 'dessert',
    image: 'images/image-4.png',
    address: 'Heritage Lane, Near Hauz Khas Fort',
    safetyVerified: 'Artisan hand-ground brew standard',
    menu: [
      { id: 'm801', name: 'Lavender Honey Iced Latte', price: 230, isVeg: true, desc: 'Espresso poured over chilled oat milk, organic lavender syrup, and wildflower honey.', img: 'images/image-4.png' },
      { id: 'm802', name: 'Flaky Butter Almond Croissant', price: 160, isVeg: true, desc: 'Freshly baked laminated pastry stuffed with almond frangipane paste.', img: 'images/image-11.png' },
      { id: 'm803', name: 'Avocado Toast with Purple Microgreens', price: 310, isVeg: true, desc: 'Crushed Hass avocado on toasted sourdough, feta crumble, and chili flakes.', img: 'images/image-5.png' }
    ]
  },
  {
    id: 'rest-9',
    name: 'Kolkata Rolls & Kebab Express',
    cuisines: 'Rolls, Street Food, Fast Food',
    rating: 4.2,
    reviewsCount: '1.2k',
    deliveryRating: 4.3,
    costForTwo: '₹350 for two',
    avgCost: 350,
    deliveryTime: '17 mins',
    deliveryMins: 17,
    distance: '1.2 km',
    isVeg: false,
    hasDiscount: true,
    discountText: '30% OFF on all orders',
    isPromoted: false,
    category: 'delivery',
    type: 'rolls',
    image: 'images/image-11.png',
    address: 'Central Market, Sector 18, Noida',
    safetyVerified: 'Hot-off-the-tawa foil packing',
    menu: [
      { id: 'm901', name: 'Double Egg Double Chicken Roll', price: 180, isVeg: false, desc: 'Crispy flaky paratha layered with two eggs, spiced chicken chunks, lime & onions.', img: 'images/image-11.png' },
      { id: 'm902', name: 'Paneer Tikka Kathi Roll', price: 150, isVeg: true, desc: 'Tandoori cottage cheese cubes wrapped with mint chutney and crunchy capsicum.', img: 'images/image-11.png' }
    ]
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initVideos();
  renderCityDropdown();
  renderCollections();
  renderFoodCarousel();
  renderBrands();
  renderLocalities();
  renderRestaurants();
  setupEventListeners();
  updateCartBadge();
});

function initVideos() {
  document.querySelectorAll('video').forEach(vid => {
    vid.muted = true;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // Retry playing on user interaction
        console.log('Video autoplay initialized');
      });
    }
  });
}

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
  const drawerThemeBtn = document.getElementById('drawer-theme-btn');
  if (drawerThemeBtn) {
    drawerThemeBtn.innerHTML = state.theme === 'dark' ? '<i class="fas fa-sun"></i> <span>Light Mode</span>' : '<i class="fas fa-moon"></i> <span>Dark Mode</span>';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('purpldine-theme', state.theme);
  initTheme();
  showToast(state.theme === 'dark' ? 'Switched to Midnight Purple Dark Mode' : 'Switched to Light Mode');
}

// City Selector & Dropdown
function renderCityDropdown() {
  const dropdown = document.getElementById('city-dropdown');
  const heroCityName = document.getElementById('hero-city-name');
  const pickerCityName = document.getElementById('picker-city-name');

  if (heroCityName) heroCityName.textContent = state.activeCity;
  if (pickerCityName) pickerCityName.textContent = state.activeCity;

  if (!dropdown) return;

  let html = `
    <div class="city-dropdown-header">
      <span>Select Delivery City</span>
      <i class="fas fa-map-marker-alt" style="color:var(--primary)"></i>
    </div>
    <div class="detect-location-btn" id="detect-loc-btn">
      <i class="fas fa-crosshairs"></i>
      <span>Detect My Current Location</span>
    </div>
  `;

  cities.forEach(city => {
    const isActive = city.name === state.activeCity;
    html += `
      <div class="city-item ${isActive ? 'active' : ''}" data-city="${city.name}">
        <div>
          <div style="font-weight:600">${city.name}</div>
          <div style="font-size:0.75rem; color:var(--text-muted)">${city.state}</div>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted)">${city.places}</span>
      </div>
    `;
  });

  dropdown.innerHTML = html;

  dropdown.querySelectorAll('.city-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const selected = item.getAttribute('data-city');
      setCity(selected);
      dropdown.classList.remove('show');
      document.getElementById('location-picker')?.classList.remove('active');
    });
  });

  document.getElementById('detect-loc-btn')?.addEventListener('click', () => {
    showToast('Locating your position in ' + state.activeCity + '...');
    setTimeout(() => {
      showToast('Location updated: Connaught Place, ' + state.activeCity);
      dropdown.classList.remove('show');
      document.getElementById('location-picker')?.classList.remove('active');
    }, 600);
  });
}

function setCity(cityName) {
  state.activeCity = cityName;
  renderCityDropdown();
  const heroCity = document.getElementById('hero-city-name');
  const pickerCity = document.getElementById('picker-city-name');
  const dynamicCityTitles = document.querySelectorAll('.dynamic-city-text');

  if (heroCity) heroCity.textContent = cityName;
  if (pickerCity) pickerCity.textContent = cityName;
  dynamicCityTitles.forEach(el => el.textContent = cityName);

  showToast(`Delivering in ${cityName}`);
  renderRestaurants();
}

// Curated Collections
function renderCollections() {
  const container = document.getElementById('collections-grid');
  if (!container) return;

  container.innerHTML = collections.map(col => `
    <div class="collection-card" onclick="filterByCollection('${col.title}')">
      <img src="${col.img}" alt="${col.title}" class="collection-img" onerror="this.src='images/image-1.png'">
      <div class="collection-overlay">
        <h3 class="collection-title">${col.title}</h3>
        <span class="collection-places">${col.places} <i class="fas fa-caret-right"></i></span>
      </div>
    </div>
  `).join('');
}

function filterByCollection(name) {
  showToast(`Exploring curated collection: ${name}`);
  const restSection = document.getElementById('restaurant-list-section');
  if (restSection) {
    restSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Editorial Guide Filter
function filterByEditorial(guideTitle) {
  showToast(`📖 Reading Curated Guide: "${guideTitle}"`);
  if (guideTitle.includes('Trendy') || guideTitle.includes('Fun Dinner')) {
    state.activeTab = 'dining';
    state.selectedFilters.rating4Plus = true;
  } else if (guideTitle.includes('Black & White') || guideTitle.includes('Desserts')) {
    state.activeFoodCategory = 'dessert';
  } else if (guideTitle.includes('Dive Bar') || guideTitle.includes('Pub')) {
    state.activeTab = 'nightlife';
  } else if (guideTitle.includes('Café Kestrel')) {
    openRestaurantModal('rest-8');
    return;
  }
  renderRestaurants();
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === state.activeTab);
  });
  document.getElementById('restaurant-list-section')?.scrollIntoView({ behavior: 'smooth' });
}

// Food Categories Round Carousel
function renderFoodCarousel() {
  const container = document.getElementById('food-carousel');
  if (!container) return;

  container.innerHTML = foodCategories.map(cat => `
    <div class="food-cat-item ${state.activeFoodCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      <div class="food-cat-img-box">
        <img src="${cat.img}" alt="${cat.name}" class="food-cat-img" onerror="this.src='images/image-5.png'">
      </div>
      <span class="food-cat-name">${cat.name}</span>
    </div>
  `).join('');

  container.querySelectorAll('.food-cat-item').forEach(item => {
    item.addEventListener('click', () => {
      const catId = item.getAttribute('data-cat');
      state.activeFoodCategory = catId;
      renderFoodCarousel();
      renderRestaurants();
      showToast(`Showing results for ${item.querySelector('.food-cat-name').textContent}`);
    });
  });
}

// Top Brands
function renderBrands() {
  const container = document.getElementById('brands-grid');
  if (!container) return;

  container.innerHTML = topBrands.map(brand => `
    <div class="brand-card" onclick="searchBrand('${brand.name}')">
      <div class="brand-logo-wrap">
        <img src="${brand.img}" alt="${brand.name}" onerror="this.src='images/image-16.png'">
      </div>
      <span class="brand-name">${brand.name}</span>
      <span class="brand-time">${brand.time}</span>
      <span style="font-size:0.75rem; color:var(--primary); font-weight:700; margin-top:2px;">${brand.discount}</span>
    </div>
  `).join('');
}

function searchBrand(brandName) {
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.value = brandName;
    state.searchQuery = brandName.toLowerCase();
    renderRestaurants();
    document.getElementById('restaurant-list-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}

// Localities
function renderLocalities() {
  const container = document.getElementById('localities-grid');
  if (!container) return;

  let html = localities.map(loc => `
    <div class="locality-card" onclick="filterByLocality('${loc.name}')">
      <div>
        <h4 class="locality-title">${loc.name}</h4>
        <span class="locality-count">${loc.count}</span>
      </div>
      <i class="fas fa-chevron-right locality-chevron"></i>
    </div>
  `).join('');

  html += `
    <div class="locality-card see-more-card" onclick="showAllLocalities()">
      <span>See more</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  `;

  container.innerHTML = html;
}

function filterByLocality(locName) {
  showToast(`Showing popular restaurants in ${locName}`);
  document.getElementById('restaurant-list-section')?.scrollIntoView({ behavior: 'smooth' });
}

function showAllLocalities() {
  showToast('Loaded 24 more localities across ' + state.activeCity);
}

// Render Restaurant Cards
function renderRestaurants() {
  const container = document.getElementById('restaurant-grid');
  const countBadge = document.getElementById('results-count-badge');
  if (!container) return;

  let filtered = [...restaurants];

  // Category Tab filter (delivery, dining, nightlife)
  if (state.activeTab !== 'all') {
    if (state.activeTab === 'delivery') {
      filtered = filtered.filter(r => r.category === 'delivery' || r.deliveryRating > 0);
    } else if (state.activeTab === 'dining') {
      filtered = filtered.filter(r => r.category === 'dining' || r.rating >= 4.4);
    } else if (state.activeTab === 'nightlife') {
      filtered = filtered.filter(r => r.category === 'nightlife' || r.avgCost > 1000);
    }
  }

  // Food category filter
  if (state.activeFoodCategory !== 'all') {
    filtered = filtered.filter(r => r.type === state.activeFoodCategory || r.cuisines.toLowerCase().includes(state.activeFoodCategory));
  }

  // Search query filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(q) || 
      r.cuisines.toLowerCase().includes(q) ||
      r.menu.some(m => m.name.toLowerCase().includes(q))
    );
  }

  // Quick Filters
  if (state.selectedFilters.rating4Plus) {
    filtered = filtered.filter(r => r.rating >= 4.4 || r.deliveryRating >= 4.4);
  }
  if (state.selectedFilters.pureVeg) {
    filtered = filtered.filter(r => r.isVeg === true);
  }
  if (state.selectedFilters.fastDelivery) {
    filtered = filtered.filter(r => r.deliveryMins <= 25);
  }
  if (state.selectedFilters.offersOnly) {
    filtered = filtered.filter(r => r.hasDiscount === true);
  }

  // Sort
  if (state.selectedFilters.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.selectedFilters.sortBy === 'deliveryTime') {
    filtered.sort((a, b) => a.deliveryMins - b.deliveryMins);
  } else if (state.selectedFilters.sortBy === 'costLowToHigh') {
    filtered.sort((a, b) => a.avgCost - b.avgCost);
  } else if (state.selectedFilters.sortBy === 'costHighToLow') {
    filtered.sort((a, b) => b.avgCost - a.avgCost);
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} restaurants available`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px;">
        <i class="fas fa-utensils" style="font-size:3rem; color:var(--purple-300); margin-bottom:16px;"></i>
        <h3 style="font-size:1.4rem; font-weight:700; margin-bottom:8px;">No restaurants found</h3>
        <p style="color:var(--text-muted); margin-bottom:20px;">Try clearing filters or search for another dish/cuisine.</p>
        <button class="nav-btn-outline" style="background:var(--primary); color:#fff; border:none;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(rest => {
    const isFav = state.favorites.includes(rest.id);
    return `
      <div class="restaurant-card" onclick="openRestaurantModal('${rest.id}')">
        <div class="rest-img-wrapper">
          <img src="${rest.image}" alt="${rest.name}" class="rest-img" onerror="this.src='images/image-1.png'">
          ${rest.isPromoted ? `<span class="rest-promoted-tag">Promoted</span>` : ''}
          ${rest.hasDiscount ? `
            <div class="rest-discount-tag">
              <i class="fas fa-tags"></i>
              <span>${rest.discountText}</span>
            </div>
          ` : ''}
          <div class="rest-delivery-time">
            <i class="far fa-clock" style="margin-right:3px;"></i> ${rest.deliveryTime}
          </div>
          <button class="rest-favorite-btn ${isFav ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite('${rest.id}')" title="Save to Favorites">
            <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
        </div>

        <div class="rest-header-row">
          <h3 class="rest-name" title="${rest.name}">${rest.name}</h3>
          <span class="rest-rating-badge">
            ${rest.rating} <i class="fas fa-star" style="font-size:0.75rem;"></i>
          </span>
        </div>

        <div class="rest-sub-row">
          <span class="rest-cuisines" title="${rest.cuisines}">${rest.cuisines}</span>
          <span class="rest-cost">${rest.costForTwo}</span>
        </div>

        <div class="rest-footer-divider"></div>

        <div class="rest-footer-row">
          <span class="rest-safety-tag">
            <i class="fas fa-shield-alt"></i>
            <span>${rest.safetyVerified}</span>
          </span>
          <span class="rest-orders-count">${rest.distance}</span>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  state.searchQuery = '';
  state.activeFoodCategory = 'all';
  state.selectedFilters = {
    rating4Plus: false,
    pureVeg: false,
    fastDelivery: false,
    offersOnly: false,
    sortBy: 'popularity'
  };
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
  renderFoodCarousel();
  renderRestaurants();
  showToast('Filters reset to default');
}

// Video Controls & Theater Mode
function switchHeroVideo(idx) {
  if (idx < 0 || idx >= videoTracks.length) return;
  state.currentHeroVideoIdx = idx;
  const videoEl = document.getElementById('hero-main-video');
  const sourceEl = document.getElementById('hero-video-source');
  const pills = document.querySelectorAll('.video-pill');

  pills.forEach((p, i) => p.classList.toggle('active', i === idx));

  if (videoEl && sourceEl) {
    videoEl.style.opacity = '0.3';
    sourceEl.src = videoTracks[idx];
    videoEl.load();
    videoEl.play().catch(e => console.log('Autoplay muted playback'));
    setTimeout(() => {
      videoEl.style.opacity = '0.55';
    }, 200);
  }

  const titles = ['Atmospheric Sizzle Kitchen', 'Artisan Wood-Fired Pizza', 'Rooftop Sunset & Craft Cocktails'];
  showToast(`Switched Hero Video: ${titles[idx]}`);
}

function toggleHeroAudio() {
  const videoEl = document.getElementById('hero-main-video');
  const audioBtn = document.getElementById('hero-audio-btn');
  if (!videoEl || !audioBtn) return;

  state.isHeroAudioMuted = !state.isHeroAudioMuted;
  videoEl.muted = state.isHeroAudioMuted;

  if (state.isHeroAudioMuted) {
    audioBtn.innerHTML = `<i class="fas fa-volume-mute"></i> <span>Muted</span>`;
    showToast('Hero background audio muted');
  } else {
    audioBtn.innerHTML = `<i class="fas fa-volume-up" style="color:var(--purple-300)"></i> <span>Sound On</span>`;
    showToast('Hero background audio unmuted 🔊');
  }
}

function openVideoTheater(storyIndex) {
  const story = videoStoriesData[storyIndex];
  if (!story) return;

  const modal = document.getElementById('video-theater-modal');
  const player = document.getElementById('theater-video-player');
  const source = document.getElementById('theater-video-source');
  const title = document.getElementById('theater-title');
  const desc = document.getElementById('theater-desc');
  const badge = document.getElementById('theater-badge');

  if (source) source.src = story.video;
  if (title) title.textContent = story.title;
  if (desc) desc.textContent = story.desc;
  if (badge) badge.innerHTML = `<span class="story-live-dot"></span> ${story.badge}`;

  if (player) {
    player.load();
    player.muted = false; // with sound in theater mode
    player.play().catch(e => console.log('Autoplay handled'));
  }

  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoTheater() {
  const modal = document.getElementById('video-theater-modal');
  const player = document.getElementById('theater-video-player');
  if (player) {
    player.pause();
  }
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Favorite Toggle
function toggleFavorite(restId) {
  const idx = state.favorites.indexOf(restId);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast('Removed from favorites');
  } else {
    state.favorites.push(restId);
    showToast('Saved to your favorites ❤️');
  }
  localStorage.setItem('purpldine-favorites', JSON.stringify(state.favorites));
  renderRestaurants();
}

// Restaurant Detail & Menu Modal
function openRestaurantModal(restId) {
  const rest = restaurants.find(r => r.id === restId);
  if (!rest) return;

  state.activeModalRestaurant = rest;
  const modal = document.getElementById('restaurant-detail-modal');
  if (!modal) return;

  // Banner & Details
  document.getElementById('modal-rest-img').src = rest.image;
  document.getElementById('modal-rest-name').textContent = rest.name;
  document.getElementById('modal-rest-cuisines').textContent = rest.cuisines;
  document.getElementById('modal-rest-address').textContent = rest.address;
  document.getElementById('modal-dining-rating').innerHTML = `${rest.rating} <i class="fas fa-star"></i>`;
  document.getElementById('modal-delivery-rating').innerHTML = `${rest.deliveryRating} <i class="fas fa-star"></i>`;
  document.getElementById('modal-cost').textContent = rest.costForTwo;

  // Video Tour for Restaurant
  const videoTour = document.getElementById('modal-rest-video');
  if (videoTour) {
    let chosenVideo = videoTracks[0];
    if (restId === 'rest-5' || restId === 'rest-2') chosenVideo = videoTracks[1];
    else if (restId === 'rest-1' || restId === 'rest-8') chosenVideo = videoTracks[2];
    else if (restId === 'rest-3' || restId === 'rest-6') chosenVideo = videoTracks[0];
    
    videoTour.querySelector('source').src = chosenVideo;
    videoTour.load();
  }

  // Render Menu
  renderModalMenu(rest);

  // Switch to menu tab by default
  switchModalTab('menu');

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeRestaurantModal() {
  const modal = document.getElementById('restaurant-detail-modal');
  const modalVideo = document.getElementById('modal-rest-video');
  if (modalVideo) {
    modalVideo.pause();
  }
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

function renderModalMenu(rest) {
  const menuContainer = document.getElementById('modal-menu-items');
  if (!menuContainer) return;

  menuContainer.innerHTML = rest.menu.map(item => {
    const inCart = state.cart.find(c => c.id === item.id);
    return `
      <div class="menu-item-card">
        <div class="menu-item-left">
          <div class="veg-badge ${item.isVeg ? '' : 'non-veg'}">
            <span class="veg-icon"></span>
            <span>${item.isVeg ? 'PURE VEG' : 'NON-VEG'}</span>
          </div>
          <h4 class="menu-item-name">${item.name}</h4>
          <div class="menu-item-price">₹${item.price}</div>
          <p class="menu-item-desc">${item.desc}</p>
        </div>
        <div class="menu-item-right">
          <img src="${item.img}" alt="${item.name}" class="menu-item-thumb" onerror="this.src='images/image-12.png'">
          ${inCart ? `
            <div class="qty-control">
              <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
              <span class="qty-count">${inCart.qty}</span>
              <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
            </div>
          ` : `
            <button class="add-cart-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${item.img}', ${item.isVeg})">ADD +</button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function switchModalTab(tabName) {
  document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach(c => c.style.display = 'none');

  const btn = document.querySelector(`.modal-tab-btn[data-tab="${tabName}"]`);
  const content = document.getElementById(`modal-tab-${tabName}`);

  if (btn) btn.classList.add('active');
  if (content) content.style.display = 'block';
}

// Cart System
function addToCart(itemId, name, price, img, isVeg) {
  const existing = state.cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: itemId,
      name: name,
      price: price,
      img: img,
      isVeg: isVeg,
      qty: 1,
      restaurantName: state.activeModalRestaurant ? state.activeModalRestaurant.name : 'Purpldine Express'
    });
  }

  showToast(`Added "${name}" to your cart! 🛒`);
  if (state.activeModalRestaurant) {
    renderModalMenu(state.activeModalRestaurant);
  }
  updateCartBadge();
  renderCartDrawer();
}

function updateItemQuantity(itemId, change) {
  const itemIndex = state.cart.findIndex(i => i.id === itemId);
  if (itemIndex > -1) {
    state.cart[itemIndex].qty += change;
    if (state.cart[itemIndex].qty <= 0) {
      const removedName = state.cart[itemIndex].name;
      state.cart.splice(itemIndex, 1);
      showToast(`Removed "${removedName}" from cart`);
    }
  }

  if (state.activeModalRestaurant) {
    renderModalMenu(state.activeModalRestaurant);
  }
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('floating-cart-count');
  const floatingBtn = document.getElementById('floating-cart-btn');

  if (badge) badge.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  if (floatingBtn) {
    floatingBtn.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    if (backdrop) backdrop.style.display = 'none';
  } else {
    renderCartDrawer();
    drawer.classList.add('open');
    if (backdrop) backdrop.style.display = 'block';
  }
}

function renderCartDrawer() {
  const itemsWrap = document.getElementById('cart-items-wrap');
  const billSummary = document.getElementById('cart-bill-summary');
  if (!itemsWrap || !billSummary) return;

  if (state.cart.length === 0) {
    itemsWrap.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:var(--text-muted);">
        <i class="fas fa-shopping-basket" style="font-size:3.5rem; color:var(--purple-300); margin-bottom:16px;"></i>
        <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">Your cart is empty</h3>
        <p>Explore top restaurants and treat yourself to a delectable meal.</p>
      </div>
    `;
    billSummary.style.display = 'none';
    return;
  }

  billSummary.style.display = 'block';

  // Render items
  itemsWrap.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <div style="display:flex; align-items:center; gap:12px; flex:1;">
        <span class="veg-badge ${item.isVeg ? '' : 'non-veg'}" style="margin:0;"><span class="veg-icon"></span></span>
        <div>
          <h4 style="font-size:0.95rem; font-weight:600; color:var(--text-primary);">${item.name}</h4>
          <span style="font-size:0.85rem; color:var(--text-muted);">₹${item.price} each</span>
        </div>
      </div>
      <div class="qty-control" style="margin:0;">
        <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
        <span class="qty-count">${item.qty}</span>
        <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
      </div>
      <div style="font-weight:700; font-size:1rem; width:70px; text-align:right;">
        ₹${item.price * item.qty}
      </div>
    </div>
  `).join('');

  // Bill Calculations
  const itemTotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = itemTotal > 500 ? 0 : 40;
  const platformFee = 9;
  const gst = Math.round(itemTotal * 0.05);

  let discount = 0;
  if (state.appliedCoupon === 'PURPLE50') {
    discount = Math.min(Math.round(itemTotal * 0.5), 150);
  } else if (state.appliedCoupon === 'WELCOME100') {
    discount = 100;
  }

  const grandTotal = Math.max(0, itemTotal + deliveryFee + platformFee + gst - discount);

  billSummary.innerHTML = `
    <!-- Promo Coupon Section -->
    <div style="display:flex; gap:8px; margin-bottom:18px;">
      <input type="text" id="promo-input" placeholder="Enter coupon (e.g. PURPLE50)" value="${state.appliedCoupon || ''}" class="form-input" style="text-transform:uppercase; font-size:0.9rem; font-weight:600;">
      <button class="auth-btn" style="width:auto; margin:0; padding:8px 16px;" onclick="applyPromoCode()">
        ${state.appliedCoupon ? 'REMOVE' : 'APPLY'}
      </button>
    </div>
    ${state.appliedCoupon ? `
      <div style="font-size:0.8rem; color:var(--rating-dark-green); font-weight:600; margin-bottom:12px;">
        <i class="fas fa-check-circle"></i> Coupon "${state.appliedCoupon}" applied! You saved ₹${discount}
      </div>
    ` : ''}

    <div class="bill-line">
      <span>Item Total</span>
      <span>₹${itemTotal}</span>
    </div>
    <div class="bill-line">
      <span>Delivery Partner Fee</span>
      <span>${deliveryFee === 0 ? '<span style="color:var(--rating-dark-green); font-weight:600;">FREE</span>' : '₹' + deliveryFee}</span>
    </div>
    <div class="bill-line">
      <span>Platform Fee</span>
      <span>₹${platformFee}</span>
    </div>
    <div class="bill-line">
      <span>Taxes & GST (5%)</span>
      <span>₹${gst}</span>
    </div>
    ${discount > 0 ? `
      <div class="bill-line savings">
        <span>Coupon Discount</span>
        <span>- ₹${discount}</span>
      </div>
    ` : ''}

    <div class="bill-line total">
      <span>To Pay</span>
      <span>₹${grandTotal}</span>
    </div>

    <button class="checkout-btn" onclick="startOrderPlacement(${grandTotal})">
      Proceed to Pay ₹${grandTotal} <i class="fas fa-arrow-right" style="margin-left:6px;"></i>
    </button>
  `;
}

function applyPromoCode() {
  const input = document.getElementById('promo-input');
  if (!input) return;

  if (state.appliedCoupon) {
    state.appliedCoupon = null;
    showToast('Coupon removed');
    renderCartDrawer();
    return;
  }

  const code = input.value.trim().toUpperCase();
  if (code === 'PURPLE50' || code === 'WELCOME100') {
    state.appliedCoupon = code;
    showToast(`Coupon ${code} applied successfully! 🎉`);
    renderCartDrawer();
  } else {
    showToast('Invalid Coupon. Try PURPLE50 or WELCOME100');
  }
}

// Live Order Simulation & Tracker
function startOrderPlacement(amount) {
  toggleCartDrawer();
  const trackerModal = document.getElementById('order-tracker-modal');
  if (!trackerModal) return;

  trackerModal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Step 1
  setTrackingStep(1, 'Order Confirmed', 'Restaurant received your order and is verifying payment.');

  setTimeout(() => {
    setTrackingStep(2, 'Preparing Your Meal', 'Chef is crafting your delicious dishes with care.');
  }, 2200);

  setTimeout(() => {
    setTrackingStep(3, 'Rider Assigned & On The Way', 'Rahul on Purple Electric Scooter is cruising to your location.');
  }, 4500);

  setTimeout(() => {
    setTrackingStep(4, 'Order Arrived', 'Enjoy your hot and fresh meal! Thank you for choosing Purpldine.');
    state.cart = [];
    updateCartBadge();
  }, 7500);
}

function setTrackingStep(stepNum, title, desc) {
  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById(`track-step-${i}`);
    if (stepEl) {
      if (i <= stepNum) {
        stepEl.classList.add('active');
      } else {
        stepEl.classList.remove('active');
      }
    }
  }
  document.getElementById('tracker-status-heading').textContent = title;
  document.getElementById('tracker-status-desc').textContent = desc;
}

function closeOrderTracker() {
  const trackerModal = document.getElementById('order-tracker-modal');
  if (trackerModal) {
    trackerModal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Table Booking System
function handleTableBooking(e) {
  e.preventDefault();
  const date = document.getElementById('book-date').value;
  const time = document.getElementById('book-time').value;
  const guests = document.getElementById('book-guests').value;
  const name = document.getElementById('book-name').value;
  const restName = state.activeModalRestaurant ? state.activeModalRestaurant.name : 'The Purple Bistro';

  showToast(`Table confirmed for ${guests} guests at ${restName} on ${date} at ${time}! 🎉`);
  closeRestaurantModal();
}

// Authentication Modal
function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  const title = document.getElementById('auth-modal-title');
  if (title) title.textContent = mode === 'login' ? 'Log in' : 'Sign up';
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

function handleSendOtp() {
  const phoneInput = document.getElementById('auth-phone-input');
  if (!phoneInput || !phoneInput.value.trim()) {
    showToast('Please enter a valid 10-digit mobile number');
    return;
  }

  showToast(`One Time Password (OTP: 7892) sent to +91 ${phoneInput.value}`);
  const otpContainer = document.getElementById('auth-otp-container');
  if (otpContainer) {
    otpContainer.style.display = 'block';
    document.getElementById('auth-send-otp-btn').style.display = 'none';
  }
}

function handleVerifyOtp() {
  const phoneInput = document.getElementById('auth-phone-input');
  state.user = { phone: phoneInput.value, name: 'Foodie Explorer' };
  localStorage.setItem('purpldine-user', JSON.stringify(state.user));
  showToast('Logged in successfully! Welcome to Purpldine 💜');
  closeAuthModal();

  const userBtn = document.getElementById('nav-auth-btn');
  if (userBtn) {
    userBtn.innerHTML = `<i class="fas fa-user-circle"></i> Hi, Explorer`;
  }
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-sparkles" style="color:var(--purple-400)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Location Picker Toggle
  const locPicker = document.getElementById('location-picker');
  const cityDropdown = document.getElementById('city-dropdown');
  locPicker?.addEventListener('click', (e) => {
    e.stopPropagation();
    locPicker.classList.toggle('active');
    cityDropdown?.classList.toggle('show');
  });

  // Global click outside to close dropdowns
  document.addEventListener('click', (e) => {
    if (!locPicker?.contains(e.target) && !cityDropdown?.contains(e.target)) {
      locPicker?.classList.remove('active');
      cityDropdown?.classList.remove('show');
    }
  });

  // Search Input & Autocomplete
  const searchInput = document.getElementById('main-search-input');
  const searchClear = document.getElementById('search-clear-btn');
  const searchSuggestions = document.getElementById('search-suggestions');

  searchInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.searchQuery = val;
    if (val.length > 0) {
      searchClear?.classList.add('show');
      renderSearchSuggestions(val);
    } else {
      searchClear?.classList.remove('show');
      searchSuggestions?.classList.remove('show');
    }
    renderRestaurants();
  });

  searchClear?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    state.searchQuery = '';
    searchClear?.classList.remove('show');
    searchSuggestions?.classList.remove('show');
    renderRestaurants();
  });

  // Food Carousel Navigation buttons
  const carousel = document.getElementById('food-carousel');
  document.getElementById('carousel-next-btn')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: 320, behavior: 'smooth' });
  });
  document.getElementById('carousel-prev-btn')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: -320, behavior: 'smooth' });
  });

  // Big Category Cards (Delivery, Dining, Nightlife)
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.getAttribute('data-mode');
      switchCategoryTab(mode);
      document.getElementById('restaurant-list-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Sticky Navigation Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-tab');
      switchCategoryTab(mode);
    });
  });

  // Filter Pills
  document.querySelectorAll('.filter-pill[data-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      const filterKey = pill.getAttribute('data-filter');
      state.selectedFilters[filterKey] = !state.selectedFilters[filterKey];
      pill.classList.toggle('active', state.selectedFilters[filterKey]);
      renderRestaurants();
    });
  });

  // Sort Dropdown
  document.getElementById('sort-filter-select')?.addEventListener('change', (e) => {
    state.selectedFilters.sortBy = e.target.value;
    renderRestaurants();
  });

  // Table Booking Form Submit
  document.getElementById('table-booking-form')?.addEventListener('submit', handleTableBooking);

  // Accordion Toggles
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });

  // App link input placeholder toggle
  document.querySelectorAll('input[name="contact-type"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const input = document.getElementById('app-contact-input');
      if (input) {
        input.placeholder = e.target.value === 'phone' ? 'Enter your number' : 'Enter your email address';
      }
    });
  });

  // App link share simulation
  document.getElementById('app-share-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('app-contact-input');
    if (input && input.value.trim()) {
      showToast(`✨ Purpldine app download link sent to ${input.value}!`);
      input.value = '';
    }
  });

  // Drop to Top Button functionality
  window.addEventListener('scroll', () => {
    const dropToTopBtn = document.getElementById('drop-to-top-btn');
    if (dropToTopBtn) {
      if (window.scrollY > 400) {
        dropToTopBtn.classList.add('show');
      } else {
        dropToTopBtn.classList.remove('show');
      }
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation Drawer Toggle Functionality
function setActiveDrawerLink(targetEl) {
  document.querySelectorAll('.nav-drawer-item').forEach(link => {
    link.classList.remove('active');
  });
  if (targetEl) {
    targetEl.classList.add('active');
  }
}
window.setActiveDrawerLink = setActiveDrawerLink;

function toggleNavDrawer(forceState) {
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-drawer-overlay');
  const menuBtn = document.getElementById('floating-menu-btn');
  if (!drawer) return;

  const willOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');
  if (willOpen) {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.innerHTML = '<span>Close</span>';
      menuBtn.title = 'Close Menu';
    }
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '<span>Menu</span>';
      menuBtn.title = 'Menu';
    }
    document.body.style.overflow = '';
  }
}
window.toggleNavDrawer = toggleNavDrawer;

// Close Drawer on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    toggleNavDrawer(false);
  }
});

function switchCategoryTab(mode) {
  state.activeTab = mode;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === mode);
  });
  document.querySelectorAll('.feature-card').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-mode') === mode);
  });
  renderRestaurants();
}

function renderSearchSuggestions(query) {
  const suggestionsBox = document.getElementById('search-suggestions');
  if (!suggestionsBox) return;

  const q = query.toLowerCase();
  const matchedRestaurants = restaurants.filter(r => r.name.toLowerCase().includes(q) || r.cuisines.toLowerCase().includes(q)).slice(0, 4);
  const matchedCategories = foodCategories.filter(c => c.name.toLowerCase().includes(q) && c.id !== 'all').slice(0, 3);

  if (matchedRestaurants.length === 0 && matchedCategories.length === 0) {
    suggestionsBox.classList.remove('show');
    return;
  }

  let html = '';

  if (matchedRestaurants.length > 0) {
    html += `<div class="suggestion-group-title">Restaurants & Cafes</div>`;
    matchedRestaurants.forEach(r => {
      html += `
        <div class="suggestion-item" onclick="openRestaurantModal('${r.id}'); document.getElementById('search-suggestions').classList.remove('show');">
          <img src="${r.image}" class="suggestion-thumb" onerror="this.src='images/image-1.png'">
          <div class="suggestion-info">
            <div class="suggestion-title">${r.name}</div>
            <div class="suggestion-subtitle">${r.cuisines}</div>
          </div>
          <span class="suggestion-badge">${r.rating} ★</span>
        </div>
      `;
    });
  }

  if (matchedCategories.length > 0) {
    html += `<div class="suggestion-group-title">Dishes & Cuisines</div>`;
    matchedCategories.forEach(c => {
      html += `
        <div class="suggestion-item" onclick="state.activeFoodCategory='${c.id}'; renderFoodCarousel(); renderRestaurants(); document.getElementById('search-suggestions').classList.remove('show');">
          <img src="${c.img}" class="suggestion-thumb" onerror="this.src='images/image-5.png'">
          <div class="suggestion-info">
            <div class="suggestion-title">${c.name}</div>
            <div class="suggestion-subtitle">Popular dish in ${state.activeCity}</div>
          </div>
          <span class="suggestion-badge">Dish</span>
        </div>
      `;
    });
  }

  suggestionsBox.innerHTML = html;
  suggestionsBox.classList.add('show');
}
