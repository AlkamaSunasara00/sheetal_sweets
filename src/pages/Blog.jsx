import React, { useState } from 'react';
import '../assets/css/blog.css';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaComment, FaSearch, FaTags } from 'react-icons/fa';

// Import blog images
// import blog1 from '../assets/images/blog-1.jpg';
// import blog2 from '../assets/images/blog-2.jpg';
// import blog3 from '../assets/images/blog-3.jpg';
// import blog4 from '../assets/images/blog-4.jpg';
// import blog5 from '../assets/images/blog-5.jpg';
// import blog6 from '../assets/images/blog-6.jpg';
// import recentPost1 from '../assets/images/recent-post-1.jpg';
// import recentPost2 from '../assets/images/recent-post-2.jpg';
// import recentPost3 from '../assets/images/recent-post-3.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Making Perfect Kaju Katli",
      excerpt: "Discover the secrets behind making the perfect Kaju Katli, from selecting the finest cashews to achieving that silky smooth texture.",
      date: "June 15, 2023",
      author: "Sheetal Patel",
      comments: 12,
      // image: blog1,
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
      // image: blog2,
      category: "culture"
    },
    {
      id: 3,
      title: "Baking Tips for Perfect Bread Every Time",
      excerpt: "Learn professional baking tips to achieve perfectly baked bread with a crispy crust and soft interior every single time.",
      date: "May 10, 2023",
      author: "Priya Patel",
      comments: 15,
      // image: blog3,
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
      // image: blog4,
      category: "seasonal"
    },
    {
      id: 5,
      title: "Decorating Cakes Like a Professional",
      excerpt: "Master the art of cake decoration with these step-by-step techniques that will transform your homemade cakes into professional masterpieces.",
      date: "April 5, 2023",
      author: "Anita Desai",
      comments: 20,
      // image: blog5,
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
      // image: blog6,
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
    // Filter by category
    const categoryMatch = activeCategory === 'all' || post.category === activeCategory;
    
    // Filter by search term
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">Sweet stories, baking tips, and culinary insights</p>
        </div>
      </section>

      {/* Featured Posts */}
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

      {/* Blog Content */}
      <section className="blog-content section">
        <div className="container">
          <div className="blog-container">
            <div className="blog-main">
              {/* Blog Filter */}
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

              {/* Blog Posts */}
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
              {/* Search Widget */}
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

              {/* Recent Posts Widget */}
              <div className="sidebar-widget recent-posts">
                <h3>Recent Posts</h3>
                <div className="recent-posts-list">
                  <div className="recent-post-item">
                    <div className="recent-post-image">
                      {/* <img src={recentPost1} alt="Recent post" /> */}
                    </div>
                    <div className="recent-post-content">
                      <h4>Summer Dessert Recipes</h4>
                      <span>July 5, 2023</span>
                    </div>
                  </div>
                  <div className="recent-post-item">
                    <div className="recent-post-image">
                      {/* <img src={recentPost2} alt="Recent post" /> */}
                    </div>
                    <div className="recent-post-content">
                      <h4>Wedding Cake Trends 2023</h4>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                  <div className="recent-post-item">
                    <div className="recent-post-image">
                      {/* <img src={recentPost3} alt="Recent post" /> */}
                    </div>
                    <div className="recent-post-content">
                      <h4>Gluten-Free Baking Guide</h4>
                      <span>June 20, 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul>
                  {categories.filter(cat => cat.name !== 'all').map((category) => (
                    <li key={category.name} onClick={() => handleCategoryChange(category.name)}>
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        {category.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="sidebar-widget tags-widget">
                <h3>Popular Tags</h3>
                <div className="tags-cloud">
                  {tags.map((tag, index) => (
                    <a href="#!" key={index} onClick={(e) => e.preventDefault()}>
                      <FaTags /> {tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
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