import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                博智星智能体
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              企业级AI效率中枢，让决策更智能，协作更高效
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              整合"智能问答、智能协办、智能报告、智能问数"四大核心能力，覆盖客户服务、内部协作、数据分析全场景
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
              >
                <i className="fas fa-play-circle mr-2"></i>
                立即体验（在线试用）
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                申请企业演示
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Illustration */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-70 blur-xl"></div>
              
              {/* Abstract AI Hub Illustration */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                      <i className="fas fa-comments text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">智能问答</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                      <i className="fas fa-tasks text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">智能协办</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                      <i className="fas fa-chart-line text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">智能报告</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                      <i className="fas fa-database text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">智能问数</h3>
                  </div>
                </div>
                
                {/* Connecting Lines */}
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-[-1]" viewBox="0 0 400 300">
                  <path d="M100,75 C200,50 300,50 300,75" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <path d="M100,225 C200,200 300,200 300,225" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <path d="M100,75 C100,150 100,225 100,225" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <path d="M300,75 C300,150 300,225 300,225" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="150" r="15" fill="#3B82F6" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;