<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Product Navigation -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">产品导航</h4>
          <div>
            <h5 class="text-gray-400 mb-3">核心产品</h5>
            <ul class="space-y-2">
              <li><a href="#product" class="text-gray-300 hover:text-blue-400 transition-colors">智能问答</a></li>
              <li><a href="#product" class="text-gray-300 hover:text-blue-400 transition-colors">智能协办</a></li>
              <li><a href="#product" class="text-gray-300 hover:text-blue-400 transition-colors">智能报告</a></li>
              <li><a href="#product" class="text-gray-300 hover:text-blue-400 transition-colors">智能问数</a></li>
            </ul>
          </div>
          <div class="mt-6">
            <h5 class="text-gray-400 mb-3">解决方案</h5>
            <ul class="space-y-2">
              <li><a href="#solutions" class="text-gray-300 hover:text-blue-400 transition-colors">电商</a></li>
              <li><a href="#solutions" class="text-gray-300 hover:text-blue-400 transition-colors">金融</a></li>
              <li><a href="#solutions" class="text-gray-300 hover:text-blue-400 transition-colors">医疗</a></li>
              <li><a href="#solutions" class="text-gray-300 hover:text-blue-400 transition-colors">制造</a></li>
            </ul>
          </div>
        </div>

        <!-- Support & Service -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">支持与服务</h4>
          <div>
            <h5 class="text-gray-400 mb-3">帮助中心</h5>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">常见问题</a></li>
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">操作指南</a></li>
            </ul>
          </div>
          <div class="mt-6">
            <h5 class="text-gray-400 mb-3">联系我们</h5>
            <ul class="space-y-2">
              <li class="text-gray-300">400-XXX-XXXX</li>
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">企业微信客服</a></li>
            </ul>
          </div>
          <div class="mt-6">
            <h5 class="text-gray-400 mb-3">售后服务</h5>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">技术支持</a></li>
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">实施服务</a></li>
            </ul>
          </div>
        </div>

        <!-- Company Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">公司信息</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">关于我们</a></li>
            <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">团队介绍</a></li>
            <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">新闻动态</a></li>
            <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">招贤纳士</a></li>
            <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">合作伙伴</a></li>
          </ul>
          <div class="mt-6">
            <h5 class="text-gray-400 mb-3">法律信息</h5>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">隐私政策</a></li>
              <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        <!-- Contact & Subscribe -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">联系我们</h4>
          <div class="mb-6">
            <p class="text-gray-300 mb-2">关注我们的公众号</p>
            <div class="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span class="text-gray-500">公众号二维码</span>
            </div>
          </div>
          <div>
            <h5 class="text-gray-300 mb-3">订阅最新动态</h5>
            <div class="flex">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                class="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
              <button class="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 mb-4 md:mb-0">
            © 2023 博智星智能科技有限公司. 保留所有权利.
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fab fa-weibo text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fab fa-weixin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer组件逻辑
</script>