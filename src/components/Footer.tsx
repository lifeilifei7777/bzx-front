import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Product Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">产品导航</h4>
            <div>
              <h5 className="text-gray-400 mb-3">核心产品</h5>
              <ul className="space-y-2">
                <li><a href="#product" className="text-gray-300 hover:text-blue-400 transition-colors">智能问答</a></li>
                <li><a href="#product" className="text-gray-300 hover:text-blue-400 transition-colors">智能协办</a></li>
                <li><a href="#product" className="text-gray-300 hover:text-blue-400 transition-colors">智能报告</a></li>
                <li><a href="#product" className="text-gray-300 hover:text-blue-400 transition-colors">智能问数</a></li>
              </ul>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-400 mb-3">解决方案</h5>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">电商</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">金融</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">医疗</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">制造</a></li>
              </ul>
            </div>
          </div>

          {/* Support & Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">支持与服务</h4>
            <div>
              <h5 className="text-gray-400 mb-3">帮助中心</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">常见问题</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">操作指南</a></li>
              </ul>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-400 mb-3">联系我们</h5>
              <ul className="space-y-2">
                <li className="text-gray-300">400-XXX-XXXX</li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">企业微信客服</a></li>
              </ul>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-400 mb-3">售后服务</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">技术支持</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">版本更新</a></li>
              </ul>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">公司介绍</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">合作伙伴</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">招贤纳士</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">社交媒体</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-gray-400 mb-3">微信公众号</h5>
                <div className="w-32 h-32 bg-white rounded-md flex items-center justify-center text-gray-800">
                  <span className="text-xs">公众号二维码</span>
                </div>
              </div>
              <div>
                <h5 className="text-gray-400 mb-3">知乎官方账号</h5>
                <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <i className="fab fa-zhihu text-xl mr-2"></i>
                  <span>博智星科技</span>
                </a>
              </div>
              <div>
                <h5 className="text-gray-400 mb-3">行业交流群</h5>
                <div className="w-32 h-32 bg-white rounded-md flex items-center justify-center text-gray-800">
                  <span className="text-xs">交流群二维码</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Information */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              ©2024 博智星科技 版权所有 | 粤公网安备XXXXXXX号 | 粤ICP备XXXXXXX号-1
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">用户协议</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">服务条款</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;