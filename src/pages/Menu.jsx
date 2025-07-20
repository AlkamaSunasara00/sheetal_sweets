import React, { useState } from 'react';
import '../assets/css/menu.css';
import { FaSearch } from 'react-icons/fa';

// Menu item images
// import sweet1 from '../assets/images/sweet-1.jpg';
// import sweet2 from '../assets/images/sweet-2.jpg';
// import sweet3 from '../assets/images/sweet-3.jpg';
// import sweet4 from '../assets/images/sweet-4.jpg';
// import bakery1 from '../assets/images/bakery-1.jpg';
// import bakery2 from '../assets/images/bakery-2.jpg';
// import bakery3 from '../assets/images/bakery-3.jpg';
// import bakery4 from '../assets/images/bakery-4.jpg';
// import cake1 from '../assets/images/cake-1.jpg';
// import cake2 from '../assets/images/cake-2.jpg';
// import cake3 from '../assets/images/cake-3.jpg';
// import cake4 from '../assets/images/cake-4.jpg';
// import snack1 from '../assets/images/snack-1.jpg';
// import snack2 from '../assets/images/snack-2.jpg';
// import snack3 from '../assets/images/snack-3.jpg';
// import snack4 from '../assets/images/snack-4.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    // Traditional Sweets
    {
      id: 1,
      name: "Kaju Katli",
      description: "Diamond-shaped cashew fudge with a delicate silver foil topping.",
      price: "$18.99/lb",
      category: "sweets",
      // image: sweet1,
      popular: true,
      veg: true
    },
    {
      id: 2,
      name: "Gulab Jamun",
      description: "Soft, melt-in-your-mouth milk solids dumplings soaked in rose-flavored syrup.",
      price: "$16.99/lb",
      category: "sweets",
      // image: sweet2,
      popular: true,
      veg: true
    },
    {
      id: 3,
      name: "Rasgulla",
      description: "Soft, spongy cheese balls soaked in light sugar syrup.",
      price: "$15.99/lb",
      category: "sweets",
      // image: sweet3,
      veg: true
    },
    {
      id: 4,
      name: "Jalebi",
      description: "Crispy, pretzel-shaped deep-fried batter soaked in saffron syrup.",
      price: "$14.99/lb",
      category: "sweets",
      // image: sweet4,
      veg: true
    },
    
    // Bakery Items
    {
      id: 5,
      name: "Multigrain Bread",
      description: "Freshly baked bread with a blend of nutritious grains and seeds.",
      price: "$5.99",
      category: "bakery",
      // image: bakery1,
      popular: true,
      veg: true
    },
    {
      id: 6,
      name: "Butter Croissant",
      description: "Flaky, buttery layers in a classic crescent shape.",
      price: "$3.99",
      category: "bakery",
      // image: bakery2,
      veg: true
    },
    {
      id: 7,
      name: "Fruit Danish",
      description: "Sweet pastry topped with seasonal fruits and a light glaze.",
      price: "$4.50",
      category: "bakery",
      // image: bakery3,
      veg: true
    },
    {
      id: 8,
      name: "Garlic Naan",
      description: "Traditional Indian flatbread with garlic and butter.",
      price: "$2.99",
      category: "bakery",
      // image: bakery4,
      popular: true,
      veg: true
    },
    
    // Cakes
    {
      id: 9,
      name: "Black Forest Cake",
      description: "Chocolate sponge cake with whipped cream and cherries.",
      price: "$32.99",
      category: "cakes",
      // image: cake1,
      popular: true,
      veg: true
    },
    {
      id: 10,
      name: "Pineapple Cake",
      description: "Light vanilla sponge with fresh pineapple and cream.",
      price: "$28.99",
      category: "cakes",
      // image: cake2,
      veg: true
    },
    {
      id: 11,
      name: "Red Velvet Cake",
      description: "Cocoa-flavored cake with cream cheese frosting.",
      price: "$34.99",
      category: "cakes",
      // image: cake3,
      veg: true
    },
    {
      id: 12,
      name: "Custom Birthday Cake",
      description: "Personalized cake designed for your special occasion.",
      price: "From $39.99",
      category: "cakes",
      // image: cake4,
      veg: true
    },
    
    // Savory Snacks
    {
      id: 13,
      name: "Samosa",
      description: "Crispy pastry filled with spiced potatoes and peas.",
      price: "$2.50 each",
      category: "snacks",
      // image: snack1,
      popular: true,
      veg: true
    },
    {
      id: 14,
      name: "Kachori",
      description: "Deep-fried pastry filled with spiced lentils.",
      price: "$2.75 each",
      category: "snacks",
      // image: snack2,
      veg: true
    },
    {
      id: 15,
      name: "Paneer Puff",
      description: "Flaky pastry filled with spiced cottage cheese.",
      price: "$3.50 each",
      category: "snacks",
      // image: snack3,
      veg: true
    },
    {
      id: 16,
      name: "Dhokla",
      description: "Steamed savory cake made from fermented rice and chickpea flour.",
      price: "$8.99/lb",
      category: "snacks",
      // image: snack4,
      veg: true
    }
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = menuItems.filter(item => {
    // Filter by category
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    
    // Filter by search term
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">Discover our delicious selection of sweets, bakery items, and more</p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="menu-navigation">
        <div className="container">
          <div className="menu-filter">
            <div className="category-filter">
              <button 
                className={activeCategory === 'all' ? 'active' : ''} 
                onClick={() => handleCategoryChange('all')}
              >
                All Items
              </button>
              <button 
                className={activeCategory === 'sweets' ? 'active' : ''} 
                onClick={() => handleCategoryChange('sweets')}
              >
                Traditional Sweets
              </button>
              <button 
                className={activeCategory === 'bakery' ? 'active' : ''} 
                onClick={() => handleCategoryChange('bakery')}
              >
                Bakery Items
              </button>
              <button 
                className={activeCategory === 'cakes' ? 'active' : ''} 
                onClick={() => handleCategoryChange('cakes')}
              >
                Cakes
              </button>
              <button 
                className={activeCategory === 'snacks' ? 'active' : ''} 
                onClick={() => handleCategoryChange('snacks')}
              >
                Savory Snacks
              </button>
            </div>
            <div className="search-filter">
              <div className="search-input">
                <input 
                  type="text" 
                  placeholder="Search our menu..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <span><FaSearch /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items section">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <div className="menu-card" key={item.id}>
                  <div className="menu-image">
                    {/* <img src={item.image} alt={item.name} /> */}
                    {item.popular && <span className="popular-tag">Popular</span>}
                    {item.veg && <span className="veg-tag">Veg</span>}
                  </div>
                  <div className="menu-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="menu-price">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No items found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Orders */}
      <section className="custom-orders section bg-light">
        <div className="container">
          <div className="custom-orders-content">
            <h2>Custom Orders</h2>
            <p>
              Planning a special event? We offer custom sweets and bakery orders for weddings, 
              birthdays, corporate events, and more. Contact us to discuss your requirements.
            </p>
            <div className="custom-info">
              <div className="info-item">
                <h4>Bulk Orders</h4>
                <p>Special pricing available for large quantities. Please allow 48 hours notice.</p>
              </div>
              <div className="info-item">
                <h4>Custom Cakes</h4>
                <p>Personalized designs for any occasion. Please allow 72 hours notice.</p>
              </div>
              <div className="info-item">
                <h4>Dietary Requirements</h4>
                <p>We offer eggless, sugar-free, and gluten-free options upon request.</p>
              </div>
            </div>
            <a href="/contact" className="btn">Contact For Custom Orders</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;