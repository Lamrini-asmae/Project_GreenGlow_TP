import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
  new: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    category: "Serums",
    price: 34.99,
    description: "Deeply hydrating serum with hyaluronic acid and aloe vera for plump, glowing skin.",
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    new: false
  },
  {
    id: 2,
    name: "Revitalizing Clay Mask",
    category: "Masks",
    price: 28.99,
    description: "Purifying clay mask with green tea and chamomile to detoxify and calm the skin.",
    image: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    new: false
  },
  {
    id: 3,
    name: "Nourishing Night Cream",
    category: "Moisturizers",
    price: 39.99,
    description: "Rich overnight moisturizer with shea butter and vitamin E for deep nourishment.",
    image: "https://images.pexels.com/photos/6621409/pexels-photo-6621409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    new: false
  },
  {
    id: 4,
    name: "Gentle Foaming Cleanser",
    category: "Cleansers",
    price: 24.99,
    description: "Sulfate-free foaming cleanser that removes impurities without stripping the skin.",
    image: "https://images.pexels.com/photos/6621365/pexels-photo-6621365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: true
  },
  {
    id: 5,
    name: "Vitamin C Brightening Serum",
    category: "Serums",
    price: 44.99,
    description: "Powerful antioxidant serum that brightens skin tone and reduces dark spots.",
    image: "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: true
  },
  {
    id: 6,
    name: "Exfoliating Enzyme Scrub",
    category: "Exfoliators",
    price: 32.99,
    description: "Gentle enzyme exfoliator that removes dead skin cells for a smoother complexion.",
    image: "https://images.pexels.com/photos/6621333/pexels-photo-6621333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: false
  },
  {
    id: 7,
    name: "Calming Rosewater Toner",
    category: "Toners",
    price: 22.99,
    description: "Alcohol-free toner that soothes and balances the skin after cleansing.",
    image: "https://images.pexels.com/photos/6621264/pexels-photo-6621264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: false
  },
  {
    id: 8,
    name: "Restorative Eye Cream",
    category: "Eye Care",
    price: 36.99,
    description: "Targeted treatment that reduces puffiness, dark circles, and fine lines around the eyes.",
    image: "https://images.pexels.com/photos/6621144/pexels-photo-6621144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: false
  },
  {
    id: 9,
    name: "Hydrating Body Lotion",
    category: "Body Care",
    price: 26.99,
    description: "Lightweight, fast-absorbing lotion that hydrates and softens skin all day long.",
    image: "https://images.pexels.com/photos/6621351/pexels-photo-6621351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    new: false
  }
];

const ProductsPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(product => product.category)))];
  
  useEffect(() => {
    document.title = 'Products - GreenGlow';
    
    const filtered = PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);
  
  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary-600 py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-primary-50 max-w-2xl">
            Discover our complete range of eco-friendly, natural skincare products.
            Each formulation is crafted with care to ensure effective results while being gentle on your skin and the planet.
          </p>
        </div>
      </div>
      
      <div className="container-custom">
        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            </div>
            
            <button 
              className="btn btn-secondary md:w-auto w-full flex justify-center items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>
          
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-50 p-6 rounded-lg mb-8"
            >
              <h3 className="font-semibold mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.new && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-primary-900 font-medium text-xs px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                {product.featured && !product.new && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white font-medium text-xs px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-primary-700 font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-primary-600 mb-3">{product.category}</p>
                  <p className="text-neutral-700 mb-6">
                    {product.description}
                  </p>
                  <button className="w-full btn btn-primary">Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-4">No products found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;