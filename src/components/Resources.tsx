import React from 'react';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  title: string;
  icon: string;
  items: string[];
  buttonText: string;
  isPrimary: boolean;
  onClick: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  icon, 
  items, 
  buttonText, 
  isPrimary,
  onClick
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg ${isPrimary ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} flex items-center justify-center mb-5`}>
          <i className={`fas ${icon} text-2xl`}></i>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <ul className="mb-6 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-gray-500 mt-1 mr-2"></i>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            isPrimary 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={onClick}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

const Resources: React.FC = () => {
  const resources: ResourceCardProps[] = [
    {
      title: '客户端下载',
      icon: 'fa-download',
      items: ['Windows客户端', 'Mac客户端', '移动端App（iOS/Android）'],
      buttonText: '立即下载',
      isPrimary: true,
      onClick: () => alert('跳转到下载页面')
    },
    {
      title: 'API文档',
      icon: 'fa-code',
      items: ['智能问答API', '智能问数API', '数据对接指南'],
      buttonText: '查看文档',
      isPrimary: false,
      onClick: () => alert('跳转到文档中心')
    },
    {
      title: '产品白皮书',
      icon: 'fa-file-alt',
      items: ['《博智星智能体产品白皮书》', '《行业解决方案手册》'],
      buttonText: '免费领取',
      isPrimary: true,
      onClick: () => alert('弹出表单，填写信息后下载')
    },
    {
      title: '培训资料',
      icon: 'fa-graduation-cap',
      items: ['产品操作教程（视频）', '管理员指南', '常见问题（FAQ）'],
      buttonText: '观看教程',
      isPrimary: false,
      onClick: () => alert('跳转到培训中心')
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              资源与下载 | 获取工具与文档，快速上手
            </span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            获取博智星智能体的相关工具、文档和培训资料，帮助您快速上手并充分利用产品功能。
          </motion.p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;