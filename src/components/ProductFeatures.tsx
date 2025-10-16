import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  icon: string;
  title: string;
  features: string[];
  scenarios: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, features, scenarios }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)' }}
      className="bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:border-blue-200 transition-all"
    >
      <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="mb-5 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-2">业务场景支撑:</h4>
        <p className="text-gray-600">{scenarios}</p>
      </div>
    </motion.div>
  );
};

const ProductFeatures: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      icon: 'fa-comments',
      title: '智能问答',
      features: [
        '多轮对话：支持上下文理解，避免重复提问',
        '多语种：覆盖中、英、日等8种语言',
        '知识库联动：自动对接企业知识库，精准引用数据',
        '智能转人工：复杂问题一键转接人工，保留对话记录'
      ],
      scenarios: '客户服务（自动响应咨询）、内部培训（员工答疑）、售后支持（故障排查）'
    },
    {
      icon: 'fa-tasks',
      title: '智能协办',
      features: [
        '任务自动化：自动分配任务、发送提醒（如项目节点通知）',
        '流程优化：识别协作瓶颈，推荐最优流程',
        '文档协同：支持多人实时编辑，自动生成修订记录',
        '跨部门联动：打破数据壁垒，同步信息'
      ],
      scenarios: '项目管理（进度跟踪）、跨部门协作（需求同步）、行政事务（考勤/报销提醒）'
    },
    {
      icon: 'fa-chart-line',
      title: '智能报告',
      features: [
        '自动生成：接入业务数据，一键生成可视化报告（折线图/柱状图/饼图）',
        '自定义模板：支持企业自定义报告格式（如周报/月报）',
        '智能解读：用自然语言解读数据结论，降低理解门槛',
        '多端导出：支持PDF/Excel/PPT格式导出'
      ],
      scenarios: '数据分析（业务复盘）、管理层汇报（决策支持）、市场调研（趋势总结）'
    },
    {
      icon: 'fa-database',
      title: '智能问数',
      features: [
        '自然语言查询：用日常语言提问（如"本月电商销售额Top3品类"），无需SQL',
        '实时计算：对接实时数据，秒级返回查询结果',
        '数据钻取：支持多层级拆解数据（如"销售额→地区→门店"）',
        '异常预警：自动识别数据异常（如销量骤降），推送提醒'
      ],
      scenarios: '运营分析（实时监控）、财务核算（数据查询）、供应链管理（库存预警）'
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
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
              核心产品 | 四大AI能力，支撑全业务场景
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
            博智星智能体整合四大核心AI能力，为企业提供全方位的智能解决方案，提升业务效率与决策质量。
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;