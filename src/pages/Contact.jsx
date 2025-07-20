import React, { useState } from 'react';
import '../assets/css/contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';
// import mapImage from '../assets/images/store-map.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const faqs = {
    general: [
      {
        question: "What are your store hours?",
        answer: "We are open Monday to Friday from 8:00 AM to 9:00 PM, Saturday from 8:00 AM to 10:00 PM, Sunday from 9:00 AM to 8:00 PM, and on holidays from 10:00 AM to 6:00 PM."
      },
      {
        question: "Do you offer delivery services?",
        answer: "Yes, we offer delivery within a 10-mile radius of our store. Delivery charges apply based on distance. For orders over $50, delivery is free within 5 miles."
      },
      {
        question: "How can I place a bulk order?",
        answer: "You can place bulk orders by filling out our contact form, calling us directly, or visiting our store. We recommend placing bulk orders at least 48 hours in advance."
      },
      {
        question: "Do you cater for events?",
        answer: "Yes, we offer catering services for various events including weddings, corporate events, and parties. Please contact us for a custom quote."
      }
    ],
    orders: [
      {
        question: "How far in advance should I order a custom cake?",
        answer: "We recommend placing custom cake orders at least 72 hours (3 days) in advance. For wedding cakes or large event orders, we suggest 2-4 weeks notice."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "Yes, modifications can be made to your order up to 48 hours before the pickup or delivery date, subject to availability and feasibility."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Orders can be cancelled with a full refund up to 48 hours before the scheduled pickup or delivery. Cancellations within 48 hours may be subject to a 50% charge."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, we offer eggless, sugar-free, and gluten-free options for many of our products. Please specify your dietary requirements when placing an order."
      }
    ],
    products: [
      {
        question: "Are your sweets vegetarian?",
        answer: "Yes, all our Indian sweets are vegetarian. Many of our bakery products are also vegetarian, and we clearly label all ingredients."
      },
      {
        question: "How long do your sweets stay fresh?",
        answer: "Most of our sweets stay fresh for 3-5 days when stored properly in a cool, dry place. Refrigerated items typically last 2-3 days for optimal freshness."
      },
      {
        question: "Do you use preservatives in your products?",
        answer: "We pride ourselves on using minimal to no preservatives in our products. This is why we recommend consuming them within the specified freshness period."
      },
      {
        question: "Can I get the nutritional information for your products?",
        answer: "Yes, nutritional information for our standard products is available upon request. For custom orders, we can provide approximate nutritional values."
      }
    ]
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>123 Bakery Street</p>
              <p>Sweet City, SC 12345</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone Number</h3>
              <p>Main: (123) 456-7890</p>
              <p>Orders: (123) 456-7891</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email Address</h3>
              <p>info@sheetalsweets.com</p>
              <p>orders@sheetalsweets.com</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <p>Mon-Fri: 8:00 AM - 9:00 PM</p>
              <p>Sat: 8:00 AM - 10:00 PM</p>
              <p>Sun: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section section bg-light">
        <div className="container">
          <div className="contact-grid">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <p>Have questions or want to place an order? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formSubmitted ? (
                <div className="form-success">
                  <FaCheck />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll respond to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Send Message</button>
                </form>
              )}
            </div>
            
            <div className="map-container">
              <h2>Visit Our Store</h2>
              <div className="map">
                {/* <img src={mapImage} alt="Map showing the location of Sheetal Sweets & Bakery" /> */}
                <a 
                  href="https://maps.google.com/?q=123+Bakery+Street+Sweet+City+SC+12345" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  Get Directions
                </a>
              </div>
              <div className="store-info">
                <h3>Store Information</h3>
                <p>Our flagship store is located in the heart of Sweet City, with ample parking available. We're easily accessible by public transportation, with bus stops nearby.</p>
                <p>The store features a comfortable seating area where you can enjoy our sweets and bakery items with a cup of tea or coffee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-tabs">
            <button 
              className={activeTab === 'general' ? 'active' : ''} 
              onClick={() => handleTabChange('general')}
            >
              General
            </button>
            <button 
              className={activeTab === 'orders' ? 'active' : ''} 
              onClick={() => handleTabChange('orders')}
            >
              Orders & Delivery
            </button>
            <button 
              className={activeTab === 'products' ? 'active' : ''} 
              onClick={() => handleTabChange('products')}
            >
              Products & Ingredients
            </button>
          </div>
          
          <div className="faq-content">
            {faqs[activeTab].map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Place an Order?</h2>
            <p>Call us directly or use our online form to place your order for pickup or delivery.</p>
            <div className="cta-buttons">
              <a href="tel:+11234567890" className="btn">Call Now: (123) 456-7890</a>
              <a href="mailto:orders@sheetalsweets.com" className="btn btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;