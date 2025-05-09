import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Award, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - GreenGlow';
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-primary-600 py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About GreenGlow</h1>
          <p className="text-primary-50 max-w-2xl">
            Discover our story, mission, and commitment to creating natural skincare products 
            that are good for your skin and the planet.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-6">
                GreenGlow was founded in 2018 by Lisa Chen, a botanist and skincare enthusiast who was frustrated 
                with the harmful chemicals found in most commercial skincare products. After her mother developed 
                skin sensitivities to conventional products, Lisa began researching natural alternatives.
              </p>
              <p className="text-neutral-700 mb-6">
                Using her background in botany and passion for natural wellness, Lisa developed a line of 
                skincare products using only clean, plant-based ingredients. What started as a small operation 
                in her kitchen has grown into a beloved brand trusted by thousands of customers worldwide.
              </p>
              <p className="text-neutral-700">
                Today, GreenGlow remains committed to its founding principles: creating effective, natural 
                skincare that's kind to your skin and the environment. We believe beauty and sustainability 
                go hand in hand, and we're proud to be leading the way in eco-friendly skincare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="GreenGlow founder" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-neutral-700">
              At GreenGlow, we're on a mission to transform the beauty industry by creating skincare 
              products that are effective, natural, and sustainable. We believe you shouldn't have to 
              choose between products that work and products that are good for you and the planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Ingredients</h3>
              <p className="text-neutral-700">
                We use only the highest quality natural ingredients, sourced responsibly and 
                chosen for their proven benefits for the skin.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Recycle className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
              <p className="text-neutral-700">
                From recyclable packaging to carbon-neutral shipping, we strive to minimize 
                our environmental footprint at every step.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Approach</h3>
              <p className="text-neutral-700">
                We never test on animals and ensure fair compensation for everyone involved 
                in creating our products, from farm to bottle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-neutral-700">
              These core principles guide everything we do at GreenGlow, from product development 
              to customer service and business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Award className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-neutral-700">
                We never compromise on quality, using only the finest ingredients and 
                maintaining rigorous standards for all our products.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Leaf className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-neutral-700">
                We are committed to practices that protect and preserve our planet for 
                future generations.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Users className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-neutral-700">
                We value our community of customers, employees, and partners who share our 
                vision for better beauty.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Heart className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-neutral-700">
                We believe in kindness towards all living beings, which is why we're proudly 
                cruelty-free and vegan.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Target className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-neutral-700">
                We constantly research and develop new formulations that harness the power of 
                nature with scientific precision.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Recycle className="text-primary-600 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-neutral-700">
                We believe in being honest about our ingredients, processes, and environmental 
                impact with full transparency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="GreenGlow lab" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <p className="text-neutral-700 mb-8">
                At GreenGlow, we take pride in our carefully crafted process that ensures 
                every product meets our high standards for quality, efficacy, and sustainability.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="font-semibold text-primary-700">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ingredient Sourcing</h3>
                    <p className="text-neutral-700">
                      We carefully select organic, fair-trade ingredients from trusted suppliers who share our values.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="font-semibold text-primary-700">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Formulation</h3>
                    <p className="text-neutral-700">
                      Our team of skincare experts develops formulations that combine traditional botanical 
                      wisdom with modern skincare science.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="font-semibold text-primary-700">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Testing</h3>
                    <p className="text-neutral-700">
                      We rigorously test all products for efficacy and safety, using ethical methods that never involve animals.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="font-semibold text-primary-700">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sustainable Packaging</h3>
                    <p className="text-neutral-700">
                      We package our products in recyclable, biodegradable, or reusable containers to minimize waste.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="font-semibold text-primary-700">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Control</h3>
                    <p className="text-neutral-700">
                      Each batch undergoes strict quality controls to ensure consistency and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-primary-50 max-w-2xl mx-auto mb-8">
            By choosing GreenGlow, you're not just choosing better skincare—you're 
            supporting a movement towards more sustainable, ethical beauty practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Shop Our Products
            </a>
            <a href="/contact" className="btn border border-white text-white hover:bg-primary-700">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;