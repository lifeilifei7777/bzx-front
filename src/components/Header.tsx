import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            博
          </div>
          <span className="ml-2 text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            博智星智能体
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Product Center Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('product')}
              onMouseEnter={() => toggleDropdown('product')}
              onMouseLeave={closeAllDropdowns}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              产品中心
              <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {activeDropdown === 'product' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => toggleDropdown('product')}
                onMouseLeave={closeAllDropdowns}
              >
                <a href="#product" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">智能问答</a>
                <a href="#product" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">智能协办</a>
                <a href="#product" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">智能报告</a>
                <a href="#product" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">智能问数</a>
              </motion.div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('solutions')}
              onMouseEnter={() => toggleDropdown('solutions')}
              onMouseLeave={closeAllDropdowns}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              解决方案
              <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {activeDropdown === 'solutions' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => toggleDropdown('solutions')}
                onMouseLeave={closeAllDropdowns}
              >
                <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">电商</a>
                <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">金融</a>
                <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">医疗</a>
                <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">制造</a>
              </motion.div>
            )}
          </div>

          <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">案例中心</a>
          <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors">帮助文档</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">登录</button>
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">注册</button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            免费试用
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#product" className="text-gray-700 hover:text-blue-600 py-2">产品中心</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 py-2">解决方案</a>
            <a href="#cases" className="text-gray-700 hover:text-blue-600 py-2">案例中心</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 py-2">帮助文档</a>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
              <button className="px-4 py-2 text-center text-gray-700">登录</button>
              <button className="px-4 py-2 text-center text-gray-700 border border-gray-300 rounded-lg">注册</button>
              <button className="px-4 py-2 text-center bg-blue-600 text-white font-medium rounded-lg">免费试用</button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;