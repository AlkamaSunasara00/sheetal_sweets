import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';
// import heroImage from '../../public/uploads/1745489708317offer2.jpeg';
// import product1 from '../assets/images/product-1.jpg';
// import product2 from '../assets/images/product-2.jpg';
// import product3 from '../assets/images/product-3.jpg';
// import testimonial1 from '../assets/images/testimonial-1.jpg';
// import testimonial2 from '../assets/images/testimonial-2.jpg';
// import testimonial3 from '../assets/images/testimonial-3.jpg';
import { FaStar, FaLeaf, FaBirthdayCake, FaAward } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Delicious Sweets & Fresh Bakery</h1>
            <p>
              Experience the authentic taste of traditional Indian sweets and freshly baked goods 
              made with love, premium ingredients, and generations of expertise.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn">Explore Our Menu</Link>
              <Link to="/contact" className="btn btn-outline">Order Now</Link>
            </div>
          </div>
          <div className="hero-image">
             <img src="/uploads/1745489708317offer2.jpeg" alt="Assorted sweets and bakery items" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Quality Ingredients</h3>
              <p>We use only the finest and freshest ingredients in all our products.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBirthdayCake />
              </div>
              <h3>Custom Orders</h3>
              <p>Special occasion? We create custom sweets and cakes for any celebration.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaAward />
              </div>
              <h3>Award Winning</h3>
              <p>Recognized for our authentic flavors and exceptional quality since 1995.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="popular-products section">
        <div className="container">
          <h2 className="section-title">Our Popular Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iVnJqFOH_K8WYo2iihRL3CAzwoEIjCfgIg&s' alt="Fresh Bread and Pastries" />
              </div>
              <div className="product-content">
                <h3>Traditional Sweets</h3>
                <p>Handcrafted authentic Indian sweets made with pure ghee and premium ingredients.</p>
                <Link to="/menu" className="btn">View All Sweets</Link>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iVnJqFOH_K8WYo2iihRL3CAzwoEIjCfgIg&s' alt="Fresh Bread and Pastries" />
              </div>
              <div className="product-content">
                <h3>Fresh Bakery</h3>
                <p>Freshly baked bread, pastries, and cakes made daily in our bakery.</p>
                <Link to="/menu" className="btn">View Bakery Items</Link>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iVnJqFOH_K8WYo2iihRL3CAzwoEIjCfgIg&s' alt="Fresh Bread and Pastries" />
              </div>
              <div className="product-content">
                <h3>Celebration Cakes</h3>
                <p>Custom designed cakes for birthdays, weddings, and special occasions.</p>
                <Link to="/contact" className="btn">Order Custom Cake</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "The sweets from Sheetal are absolutely authentic and remind me of my childhood in India. 
                Their Kaju Katli is the best I've had outside of my mother's kitchen!"
              </p>
              <div className="testimonial-author">
                {/* <img src={testimonial1} alt="Priya Sharma" /> */}
                <div>
                  <h4>Priya Sharma</h4>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "I ordered a custom birthday cake for my daughter and it exceeded all expectations. 
                Not only was it beautiful, but it tasted amazing too!"
              </p>
              <div className="testimonial-author">
                {/* <img src={testimonial2} alt="Michael Johnson" /> */}
                <div>
                  <h4>Michael Johnson</h4>
                  <p>Celebration Customer</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "Their fresh bread is a staple in our home. We visit every weekend to stock up. 
                The quality and taste are consistently excellent."
              </p>
              <div className="testimonial-author">
                {/* <img src={testimonial3} alt="Aisha Patel" /> */}
                <div>
                  <h4>Aisha Patel</h4>
                  <p>Weekly Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Our Delicious Treats?</h2>
            <p>Visit our store or place an order online for pickup and local delivery.</p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn">View Our Menu</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;