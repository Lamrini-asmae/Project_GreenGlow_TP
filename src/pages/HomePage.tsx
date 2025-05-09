import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LeafIcon, Sparkles, ShieldCheck, Flame } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'GreenGlow - Natural Skincare Products';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Glow Naturally with <span className="text-primary-600">GreenGlow</span>
              </h1>
              <p className="text-lg text-neutral-700 mb-8 md:pr-12">
                Discover our eco-friendly skincare products made with natural ingredients 
                that nourish your skin and protect the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn btn-primary">
                  Shop Collection
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Natural skincare products" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GreenGlow?</h2>
            <p className="text-neutral-700">
              Our commitment to natural ingredients, sustainable practices, and effective formulas 
              makes GreenGlow the perfect choice for conscious consumers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="card hover:shadow-lg"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <LeafIcon className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
              <p className="text-neutral-700">
                Our products contain only natural ingredients, free from harmful chemicals and toxins.
              </p>
            </motion.div>
            
            <motion.div 
              className="card hover:shadow-lg"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Effective Results</h3>
              <p className="text-neutral-700">
                Clinically proven formulations that deliver visible results for your skin.
              </p>
            </motion.div>
            
            <motion.div 
              className="card hover:shadow-lg"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-neutral-700">
                Sustainable packaging and ethical sourcing that respects our planet.
              </p>
            </motion.div>
            
            <motion.div 
              className="card hover:shadow-lg"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Flame className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cruelty-Free</h3>
              <p className="text-neutral-700">
                We never test on animals and are proudly certified cruelty-free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
              <p className="text-neutral-700">Discover our most popular natural skincare solutions</p>
            </div>
            <Link to="/products" className="hidden md:block text-primary-700 font-medium hover:text-primary-800 transition-colors">
              View All Products →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hydrating Face Serum" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Hydrating Face Serum</h3>
                  <span className="text-primary-700 font-semibold">$34.99</span>
                </div>
                <p className="text-neutral-700 mb-6">
                  Deeply hydrating serum with hyaluronic acid and aloe vera for plump, glowing skin.
                </p>
                <button className="w-full btn btn-primary">Add to Cart</button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Revitalizing Clay Mask" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Revitalizing Clay Mask</h3>
                  <span className="text-primary-700 font-semibold">$28.99</span>
                </div>
                <p className="text-neutral-700 mb-6">
                  Purifying clay mask with green tea and chamomile to detoxify and calm the skin.
                </p>
                <button className="w-full btn btn-primary">Add to Cart</button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.pexels.com/photos/6621409/pexels-photo-6621409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nourishing Night Cream" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">Nourishing Night Cream</h3>
                  <span className="text-primary-700 font-semibold">$39.99</span>
                </div>
                <p className="text-neutral-700 mb-6">
                  Rich overnight moisturizer with shea butter and vitamin E for deep nourishment.
                </p>
                <button className="w-full btn btn-primary">Add to Cart</button>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-neutral-700">
              Read testimonials from our satisfied customers who have experienced the difference 
              with GreenGlow's natural skincare products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah J." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Sarah J.</h3>
                  <p className="text-primary-600 text-sm">Verified Customer</p>
                </div>
              </div>
              <p className="text-neutral-700 italic">
                "I've struggled with sensitive skin for years. GreenGlow's products are the first I've tried that 
                provide effective results without any irritation. My skin has never looked better!"
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael T." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Michael T.</h3>
                  <p className="text-primary-600 text-sm">Verified Customer</p>
                </div>
              </div>
              <p className="text-neutral-700 italic">
                "As someone who cares deeply about the environment, I appreciate that GreenGlow doesn't compromise on 
                sustainability. Their products work amazingly well too - a win-win!"
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Aisha K." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Aisha K.</h3>
                  <p className="text-primary-600 text-sm">Verified Customer</p>
                </div>
              </div>
              <p className="text-neutral-700 italic">
                "The Hydrating Face Serum has completely transformed my skincare routine. My skin is now plump, 
                hydrated, and has a natural glow that I never thought possible!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Green Revolution</h2>
              <p className="text-primary-50 mb-8 md:pr-12">
                Subscribe to our newsletter for exclusive offers, skincare tips, and updates on our 
                latest eco-friendly products. Be part of the change for healthier skin and a healthier planet.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none text-neutral-900 flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Natural ingredients" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;