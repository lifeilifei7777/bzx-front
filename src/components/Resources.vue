<template>
  <section id="resources" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">资源中心</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          探索最新的AI技术资讯、行业洞察、技术白皮书和使用指南，助力您更好地了解和应用智能体技术
        </p>
      </div>

      <!-- Resource Categories -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in resourceCategories"
            :key="category.id"
            class="px-6 py-2 rounded-full text-sm font-medium transition-colors"
            :class="activeCategory === category.id 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Resources Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Resource Item 1 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
              <i class="fas fa-file-alt text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">白皮书</span>
              <span class="ml-auto text-gray-500 text-sm">2023-05-15</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              2023年企业级AI应用发展白皮书
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本白皮书深入分析了2023年企业级AI应用的发展趋势、技术演进路径和商业价值实现方式，为企业制定AI战略提供参考。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              下载白皮书
              <i class="fas fa-download ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Resource Item 2 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
              <i class="fas fa-video text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">视频教程</span>
              <span class="ml-auto text-gray-500 text-sm">2023-06-20</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              博智星智能体平台快速上手指南
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本视频教程详细介绍了博智星智能体平台的注册、配置和使用方法，帮助用户在15分钟内快速掌握平台操作。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              观看视频
              <i class="fas fa-play ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Resource Item 3 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <i class="fas fa-newspaper text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">行业资讯</span>
              <span class="ml-auto text-gray-500 text-sm">2023-07-10</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              大语言模型在企业服务领域的应用前景分析
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本文深入探讨了大语言模型技术在企业服务领域的应用场景、价值创造和发展趋势，为企业数字化转型提供新思路。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              阅读文章
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Resource Item 4 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
              <i class="fas fa-book text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">使用指南</span>
              <span class="ml-auto text-gray-500 text-sm">2023-08-05</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              智能问答系统自定义知识库配置手册
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本手册详细介绍了如何为博智星智能问答系统配置自定义知识库，包括数据导入、清洗、标注和优化的完整流程。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              查看手册
              <i class="fas fa-file-alt ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Resource Item 5 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center">
              <i class="fas fa-chart-line text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">研究报告</span>
              <span class="ml-auto text-gray-500 text-sm">2023-09-15</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              AI驱动的企业数字化转型ROI分析报告
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本报告基于对100家实施AI转型企业的调研，分析了AI技术在不同行业的投资回报率、实施周期和价值实现路径。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              下载报告
              <i class="fas fa-download ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Resource Item 6 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <i class="fas fa-users text-white text-3xl"></i>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">活动预告</span>
              <span class="ml-auto text-gray-500 text-sm">2023-10-20</span>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              2023企业AI应用创新峰会报名指南
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 text-sm">
              本指南包含峰会时间、地点、议程安排、演讲嘉宾介绍和报名方式等信息，诚邀您参与这场AI行业盛会。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
              立即报名
              <i class="fas fa-calendar-check ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center mx-auto">
          加载更多
          <i class="fas fa-chevron-down ml-2 text-sm"></i>
        </button>
      </div>

      <!-- Newsletter Subscription -->
      <div class="mt-20">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">订阅我们的技术资讯</h3>
            <p class="text-blue-100 mb-8">
              第一时间获取AI技术前沿资讯、产品更新和行业洞察，助力您的企业智能升级
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="请输入您的邮箱地址" 
                class="px-6 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex-grow"
              >
              <button class="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                立即订阅
              </button>
            </div>
            <p class="text-blue-200 text-sm mt-4">
              我们尊重您的隐私，不会向第三方分享您的信息
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCategory = ref('all')

const resourceCategories = [
  { id: 'all', name: '全部资源' },
  { id: 'whitepaper', name: '白皮书' },
  { id: 'video', name: '视频教程' },
  { id: 'news', name: '行业资讯' },
  { id: 'guide', name: '使用指南' },
  { id: 'report', name: '研究报告' }
]
</script>