import React from 'react';
import '../assets/css/about.css';
// import aboutImage from '../assets/images/about-main.jpg';
// import founderImage from '../assets/images/founder.jpg';
// import storyImage from '../assets/images/story-image.jpg';
import { FaHeart, FaLeaf, FaHandshake, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Our story, our passion, our commitment to quality</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-main section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Welcome to Sheetal Sweets & Bakery</h2>
              <p>
                Established in 1995, Sheetal Sweets & Bakery has been serving the community with authentic 
                Indian sweets and freshly baked goods for over 25 years. What started as a small family 
                business has grown into a beloved establishment known for quality, tradition, and innovation.
              </p>
              <p>
                Our commitment to using only the finest ingredients and traditional recipes passed down 
                through generations has made us a trusted name in authentic sweets and bakery products.
              </p>
              <p>
                At Sheetal, we believe that food brings people together. Whether it's a box of sweets for 
                Diwali, a birthday cake for a special celebration, or fresh bread for your family table, 
                we take pride in being part of your precious moments.
              </p>
            </div>
            <div className="about-image">
              {/* <img src={aboutImage} alt="Sheetal Sweets & Bakery storefront" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story section bg-light">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-grid">
            <div className="story-image">
              <img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg' />
            </div>
            <div className="story-content">
              <h3>From Humble Beginnings</h3>
              <p>
                The journey of Sheetal Sweets & Bakery began when Mrs. Sheetal Patel, armed with her 
                family's treasured recipes and a passion for authentic sweets, opened a small shop in 
                the heart of the city.
              </p>
              <p>
                Her dedication to quality and authentic flavors quickly earned a loyal following. As word 
                spread about the exceptional taste and quality of her sweets, the business expanded to 
                include a bakery section, offering fresh bread, pastries, and custom cakes.
              </p>
              <p>
                Today, the second generation of the Patel family continues the legacy, blending traditional 
                methods with modern techniques to create sweets and baked goods that honor our heritage 
                while meeting contemporary tastes and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="founder section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-content">
              <h2>Meet Our Founder</h2>
              <h3>Mrs. Sheetal Patel</h3>
              <p>
                With over 40 years of experience in sweet making, Mrs. Sheetal Patel is the heart and soul 
                of our establishment. Her journey began in her mother's kitchen in Gujarat, India, where 
                she learned the art of traditional sweet making.
              </p>
              <p>
                "My philosophy has always been simple – use the best ingredients, follow traditional 
                methods, and put love into everything you make. That's the secret to creating sweets 
                that not only taste good but also bring joy to people's lives."
              </p>
              <p>
                Though semi-retired now, Mrs. Patel still oversees the quality control and trains new 
                sweet makers, ensuring that every product meets her exacting standards.
              </p>
            </div>
            <div className="founder-image">
              <img src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' alt="Mrs. Sheetal Patel, Founder" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values section bg-light">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Passion</h3>
              <p>
                We are passionate about preserving traditional recipes while embracing innovation 
                to create products that delight our customers.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3>Quality</h3>
              <p>
                We never compromise on ingredients or processes, ensuring that every product 
                meets our high standards of excellence.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and respect for our 
                customers, employees, and community.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Community</h3>
              <p>
                We believe in giving back to the community that has supported us through 
                charitable initiatives and local partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;