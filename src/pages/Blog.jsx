import React, { useState } from 'react';
import '../assets/css/blog.css';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaComment, FaSearch, FaTags } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // const getRandomImage = (id) => `https://source.unsplash.com/random/800x600?sig=${id}`;

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Making Perfect Kaju Katli",
      excerpt: "Discover the secrets behind making the perfect Kaju Katli, from selecting the finest cashews to achieving that silky smooth texture.",
      date: "June 15, 2023",
      author: "Sheetal Patel",
      comments: 12,
      image:  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=600&fit=crop",
      category: "recipes",
      featured: true
    },
    {
      id: 2,
      title: "History of Indian Sweets: A Journey Through Time",
      excerpt: "Explore the rich history of Indian sweets, from ancient recipes to modern interpretations, and how they've evolved over centuries.",
      date: "May 28, 2023",
      author: "Raj Sharma",
      comments: 8,
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=450&fit=crop",
      category: "culture"
    },
    {
      id: 3,
      title: "Baking Tips for Perfect Bread Every Time",
      excerpt: "Learn professional baking tips to achieve perfectly baked bread with a crispy crust and soft interior every single time.",
      date: "May 10, 2023",
      author: "Priya Patel",
      comments: 15,
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=450&fit=crop",
      category: "tips",
      featured: true
    },
    {
      id: 4,
      title: "Seasonal Sweets: What to Enjoy This Summer",
      excerpt: "Discover the best sweets and desserts to enjoy during the summer months, featuring seasonal fruits and lighter options.",
      date: "April 22, 2023",
      author: "Sheetal Patel",
      comments: 6,
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=450&fit=crop",
      category: "seasonal"
    },
    {
      id: 5,
      title: "Decorating Cakes Like a Professional",
      excerpt: "Master the art of cake decoration with these step-by-step techniques that will transform your homemade cakes into professional masterpieces.",
      date: "April 5, 2023",
      author: "Anita Desai",
      comments: 20,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=600&fit=crop",
      category: "tips",
      featured: true
    },
    {
      id: 6,
      title: "The Health Benefits of Traditional Indian Sweets",
      excerpt: "Explore the surprising health benefits of traditional Indian sweets when made with authentic ingredients and consumed in moderation.",
      date: "March 18, 2023",
      author: "Dr. Vikram Singh",
      comments: 14,
      image:  "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=450&fit=crop",
      category: "health"
    }
  ];

  const categories = [
    { name: 'all', label: 'All Posts' },
    { name: 'recipes', label: 'Recipes' },
    { name: 'tips', label: 'Baking Tips' },
    { name: 'culture', label: 'Food Culture' },
    { name: 'seasonal', label: 'Seasonal' },
    { name: 'health', label: 'Health & Nutrition' }
  ];

  const tags = [
    "Indian Sweets", "Baking", "Recipes", "Cake Decoration", "Traditional", 
    "Health", "Seasonal", "Tips", "Desserts", "Bread"
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = activeCategory === 'all' || post.category === activeCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">Sweet stories, baking tips, and culinary insights</p>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="featured-posts section">
          <div className="container">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <div className="featured-post" key={post.id}>
                  <div className="featured-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span><FaCalendarAlt /> {post.date}</span>
                      <span><FaUser /> {post.author}</span>
                      <span><FaComment /> {post.comments} Comments</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="btn">Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="blog-content section">
        <div className="container">
          <div className="blog-container">
            <div className="blog-main">
              <div className="blog-filter">
                <div className="category-filter">
                  {categories.map((category) => (
                    <button 
                      key={category.name}
                      className={activeCategory === category.name ? 'active' : ''} 
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="blog-grid">
                  {filteredPosts.map((post) => (
                    <div className="blog-card" key={post.id}>
                      <div className="blog-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="blog-card-content">
                        <div className="post-meta">
                          <span><FaCalendarAlt /> {post.date}</span>
                          <span><FaUser /> {post.author}</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-posts">
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3>Search</h3>
                <div className="search-input">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button><FaSearch /></button>
                </div>
              </div>

              <div className="sidebar-widget newsletter-widget">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter for the latest updates and offers.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" className="btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
