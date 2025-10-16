import React from 'react';
import { motion } from 'framer-motion';

interface SolutionItemProps {
  industry: string;
  painPoints: string[];
  solutions: string[];
  scenario: string;
  imageUrl: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ industry, painPoints, solutions, scenario, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry}</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-red-500 mb-3 flex items-center">
              <i className="fas fa-exclamation-circle mr-2"></i>核心业务痛点
            </h4>
            <ul className="space-y-2">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-red-100 text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-500 mb-3 flex items-center">
              <i className="fas fa-lightbulb mr-2"></i>博智星产品解决方案
            </h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-500 mb-3 flex items-center">
              <i className="fas fa-check-circle mr-2"></i>场景示例
            </h4>
            <p className="text-gray-700">{scenario}</p>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-6">
          <img 
            src={imageUrl} 
            alt={`${industry}解决方案示意图`} 
            className="rounded-lg shadow-lg max-h-72 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  const solutionItems: SolutionItemProps[] = [
    {
      industry: '电商',
      painPoints: [
        '大促期间客服咨询量暴增，响应延迟',
        '运营需手动整理销售数据，耗时久'
      ],
      solutions: [
        '智能问答：自动响应80%常规咨询（如物流、售后），人工客服聚焦复杂问题',
        '智能报告：自动抓取销售数据，生成大促复盘报告（含销量、转化率、用户画像）'
      ],
      scenario: '示意图："大促客服响应流程对比"（左：传统人工（平均响应10分钟），右：智能问答（平均响应15秒））',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=E-commerce%20customer%20service%20response%20process%20comparison%2C%20traditional%20manual%20vs%20AI%20chatbot%2C%20data%20visualization&sign=2b25dcd93becb021177e745c374cbe9b'
    },
    {
      industry: '金融',
      painPoints: [
        '客户咨询产品信息（如理财、贷款），重复度高',
        '风控需手动分析用户数据，效率低'
      ],
      solutions: [
        '智能问答：7×24小时解答产品疑问，同步推送合规条款',
        '智能问数：自然语言查询用户风险数据（如"近3个月信用卡逾期率"），秒级返回结果'
      ],
      scenario: '示意图："风控数据查询流程"（左：传统SQL查询（30分钟），右：智能问数（5秒））',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Financial%20risk%20control%20data%20query%20process%2C%20traditional%20SQL%20vs%20AI-assisted%20query%2C%20data%20visualization&sign=04f0319a11e184a5274e99f59eb2e628'
    },
    {
      industry: '医疗',
      painPoints: [
        '患者咨询挂号、科室分布，占用医护时间',
        '病历整理需手动录入，易出错'
      ],
      solutions: [
        '智能问答：自动解答就医指引，支持预约挂号跳转',
        '智能协办：语音转文字生成病历，自动匹配ICD编码，减少录入错误'
      ],
      scenario: '示意图："病历生成流程"（左：手动录入（20分钟/份），右：智能协办（5分钟/份））',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Medical%20record%20generation%20process%2C%20manual%20entry%20vs%20AI-assisted%20generation%2C%20data%20visualization&sign=315b136dd943e78d526c21a8a78fa3a1'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
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
              行业解决方案 | 针对性解决业务痛点，适配多场景需求
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
            博智星智能体为不同行业提供定制化解决方案，帮助企业解决核心业务痛点，提升运营效率。
          </motion.p>
        </div>

        {/* Solution Items */}
        <div className="max-w-5xl mx-auto">
          {solutionItems.map((item, index) => (
            <SolutionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;