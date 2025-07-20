import React, { useState } from 'react';
import '../assets/css/gallery.css';
import { FaTimes } from 'react-icons/fa';

// Import gallery images
// import gallery1 from '../assets/images/gallery-1.jpg';
// import gallery2 from '../assets/images/gallery-2.jpg';
// import gallery3 from '../assets/images/gallery-3.jpg';
// import gallery4 from '../assets/images/gallery-4.jpg';
// import gallery5 from '../assets/images/gallery-5.jpg';
// import gallery6 from '../assets/images/gallery-6.jpg';
// import gallery7 from '../assets/images/gallery-7.jpg';
// import gallery8 from '../assets/images/gallery-8.jpg';
// import gallery9 from '../assets/images/gallery-9.jpg';
// import gallery10 from '../assets/images/gallery-10.jpg';
// import gallery11 from '../assets/images/gallery-11.jpg';
// import gallery12 from '../assets/images/gallery-12.jpg';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=600&fit=crop",
      alt: "Assorted Indian sweets display",
      category: "sweets"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop",
      alt: "Traditional Kaju Katli",
      category: "sweets"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=500&fit=crop",
      alt: "Fresh baked bread loaves",
      category: "bakery"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=600&fit=crop",
      alt: "Decorative wedding cake",
      category: "cakes"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=450&fit=crop",
      alt: "Colorful Jalebi sweets",
      category: "sweets"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1555507036-ab794f77665a?w=400&h=500&fit=crop",
      alt: "Freshly baked croissants",
      category: "bakery"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop",
      alt: "Birthday cake with decorations",
      category: "cakes"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
      alt: "Samosa platter",
      category: "snacks"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=600&fit=crop",
      alt: "Gulab Jamun in syrup",
      category: "sweets"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=450&fit=crop",
      alt: "Artisan bread selection",
      category: "bakery"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=500&fit=crop",
      alt: "Custom anniversary cake",
      category: "cakes"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=550&fit=crop",
      alt: "Assorted savory snacks",
      category: "snacks"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
      alt: "Traditional sweets platter",
      category: "sweets"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop",
      alt: "Chocolate pastries",
      category: "bakery"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=450&fit=crop",
      alt: "Elegant tiered cake",
      category: "cakes"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1604147495798-57beb5cf6908?w=400&h=500&fit=crop",
      alt: "Spicy street snacks",
      category: "snacks"
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="page-title">Our Gallery</h1>
          <p className="page-subtitle">Visual feast of our delicious creations</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="gallery-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => handleFilterChange('all')}
            >
              All Photos
            </button>
            <button 
              className={filter === 'sweets' ? 'active' : ''} 
              onClick={() => handleFilterChange('sweets')}
            >
              Traditional Sweets
            </button>
            <button 
              className={filter === 'bakery' ? 'active' : ''} 
              onClick={() => handleFilterChange('bakery')}
            >
              Bakery Items
            </button>
            <button 
              className={filter === 'cakes' ? 'active' : ''} 
              onClick={() => handleFilterChange('cakes')}
            >
              Cakes
            </button>
            <button 
              className={filter === 'snacks' ? 'active' : ''} 
              onClick={() => handleFilterChange('snacks')}
            >
              Savory Snacks
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid section">
        <div className="container">
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div className="gallery-item" key={image.id} onClick={() => openLightbox(image)}>
                 <img src={image.src} alt={image.alt} />
                <div className="overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-images">
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close-lightbox" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img
                src={currentImage.src}
              />
            <p className="lightbox-caption">{currentImage.alt}</p>
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="instagram-section section bg-light">
        <div className="container">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="instagram-text">
            Tag us in your photos with <strong>#SheetalSweets</strong> for a chance to be featured!
          </p>
          <a 
            href="https://instagram.com/sheetalsweets" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Follow @sheetalsweets
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;