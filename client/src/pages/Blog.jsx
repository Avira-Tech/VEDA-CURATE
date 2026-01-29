import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AR/VR in Web Development",
      excerpt: "Explore how augmented and virtual reality technologies are revolutionizing the way we interact with web applications and digital experiences.",
      author: "Vedacurate Team",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Building Immersive 3D Experiences with Three.js",
      excerpt: "A comprehensive guide to creating stunning 3D web experiences using Three.js and modern web technologies.",
      author: "Sarah Chen",
      date: "2024-01-10",
      category: "Tutorial",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "The Art of Digital Branding in 2024",
      excerpt: "Discover the latest trends and strategies for creating compelling digital brand identities that resonate with modern audiences.",
      author: "Mike Johnson",
      date: "2024-01-05",
      category: "Design",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Optimizing Web Performance for Better User Experience",
      excerpt: "Learn essential techniques for improving web application performance and delivering lightning-fast user experiences.",
      author: "Alex Rivera",
      date: "2023-12-28",
      category: "Development",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Social Media Design: Trends and Best Practices",
      excerpt: "Stay ahead of the curve with the latest social media design trends and proven strategies for maximum engagement.",
      author: "Emma Davis",
      date: "2023-12-20",
      category: "Marketing",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "The Rise of Interactive Web Experiences",
      excerpt: "How interactive elements are transforming static websites into engaging, memorable digital experiences.",
      author: "Vedacurate Team",
      date: "2023-12-15",
      category: "Innovation",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Technology", "Tutorial", "Design", "Development", "Marketing", "Innovation"];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Blog</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Insights, tutorials, and industry trends from the world of digital innovation and creative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  index === 0
                    ? 'bg-brand-orange-400 text-white border-brand-orange-400'
                    : 'border-white/20 text-white/60 hover:border-brand-orange-400 hover:text-brand-orange-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-brand-orange-400/20 to-orange-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 text-sm">Blog Image</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-orange-400/20 text-brand-orange-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-sm">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <FaUser className="w-4 h-4" />
                      <span>{post.author}</span>
                      <FaCalendar className="w-4 h-4 ml-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>

                    <button className="text-brand-orange-400 hover:text-orange-300 transition-colors duration-300">
                      <FaArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Stay Updated</h2>
            <p className="text-white/60 mb-8">Subscribe to our newsletter for the latest insights and updates.</p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-orange-400 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
