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
      // src: gallery1,
      alt: "Assorted Indian sweets display",
      category: "sweets"
    },
    {
      id: 2,
      // src: gallery2,
      alt: "Traditional Kaju Katli",
      category: "sweets"
    },
    {
      id: 3,
      // src: gallery3,
      alt: "Fresh baked bread loaves",
      category: "bakery"
    },
    {
      id: 4,
      // src: gallery4,
      alt: "Decorative wedding cake",
      category: "cakes"
    },
    {
      id: 5,
      // src: gallery5,
      alt: "Colorful Jalebi sweets",
      category: "sweets"
    },
    {
      id: 6,
      // src: gallery6,
      alt: "Freshly baked croissants",
      category: "bakery"
    },
    {
      id: 7,
      // src: gallery7,
      alt: "Birthday cake with decorations",
      category: "cakes"
    },
    {
      id: 8,
      // src: gallery8,
      alt: "Samosa platter",
      category: "snacks"
    },
    {
      id: 9,
      // src: gallery9,
      alt: "Gulab Jamun in syrup",
      category: "sweets"
    },
    {
      id: 10,
      // src: gallery10,
      alt: "Artisan bread selection",
      category: "bakery"
    },
    {
      id: 11,
      // src: gallery11,
      alt: "Custom anniversary cake",
      category: "cakes"
    },
    {
      id: 12,
      // src: gallery12,
      alt: "Assorted savory snacks",
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
                <img src='https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg' alt={image.alt} />
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
            <img src='https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg' alt={currentImage.alt} />
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