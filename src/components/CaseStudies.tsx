import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface CaseStudyProps {
  title: string;
  background: string;
  problem: string;
  product: string;
  results: string[];
  chartData: any[];
  chartType: 'line' | 'bar' | 'table';
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ 
  title, 
  background, 
  problem, 
  product, 
  results, 
  chartData, 
  chartType 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <div className="space-y-5">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">客户背景</h4>
            <p className="text-gray-600">{background}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">面临问题</h4>
            <p className="text-gray-600">{problem}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">使用产品</h4>
            <p className="text-gray-600">{product}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">达成效果</h4>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-arrow-up text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-600">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="h-60 mt-4">
            {chartType === 'line' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
            
            {chartType === 'bar' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#94A3B8' : '#3B82F6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
            
            {chartType === 'table' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">指标</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">传统方式</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">智能协办</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {chartData.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.metric}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.traditional}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{row.intelligent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center mt-4">
            <span>查看完整案例（含视频演示）</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: '某头部电商平台（日活1000万+）',
      background: '国内知名综合电商，大促期间客服团队需扩招50%，仍无法满足响应需求',
      problem: '客服响应延迟（平均15分钟），客户满意度仅78%，人工成本高',
      product: '智能问答 + 智能报告',
      results: [
        '人工客服成本降低35%（大促无需扩招）',
        '客户响应时间缩短至18秒，满意度提升至92%',
        '运营复盘报告生成时间从8小时→30分钟'
      ],
      chartData: [
        { name: '使用前', value: 78 },
        { name: '使用后', value: 92 }
      ],
      chartType: 'line'
    },
    {
      title: '某城商行（网点50+）',
      background: '区域性商业银行，需服务个人理财、企业贷款两类客户，数据查询依赖IT团队',
      problem: '业务人员查询数据需提交IT工单（平均等待4小时），影响客户沟通效率',
      product: '智能问数 + 智能协办',
      results: [
        '数据查询效率提升95%（4小时→12秒），IT工单量减少80%',
        '贷款审批流程时间从72小时→48小时，客户转化率提升15%'
      ],
      chartData: [
        { name: '传统方式', value: 72 },
        { name: '智能方式', value: 48 }
      ],
      chartType: 'bar'
    },
    {
      title: '某三甲医院（床位1500+）',
      background: '综合性三甲医院，日均门诊量5000+，病历录入占用医护30%工作时间',
      problem: '手动录入病历易出错（错误率8%），医护无法聚焦诊疗',
      product: '智能协办 + 智能问答',
      results: [
        '病历生成时间从20分钟/份→5分钟/份，错误率降至1.2%',
        '医护接待患者数量提升25%，患者候诊时间缩短30%'
      ],
      chartData: [
        { metric: '病历生成时间', traditional: '20分钟/份', intelligent: '5分钟/份' },
        { metric: '错误率', traditional: '8%', intelligent: '1.2%' },
        { metric: '患者接待量', traditional: '基准', intelligent: '提升25%' },
        { metric: '候诊时间', traditional: '基准', intelligent: '缩短30%' }
      ],
      chartType: 'table'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
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
              成功案例 | 来自不同行业的实践验证
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
            博智星智能体已服务于多个行业的领先企业，帮助他们显著提升运营效率，降低成本，改善用户体验。
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;