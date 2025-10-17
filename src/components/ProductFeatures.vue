<template>
  <section id="product" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 relative inline-block">
          <span class="relative z-10">核心产品</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-blue-100 opacity-70 z-0 transform -rotate-1"></span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
          博智星智能体提供四大核心产品能力，助力企业实现智能化升级，提升运营效率和决策质量
        </p>
      </div>

      <!-- Product Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 智能问答 -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-200 group">
          <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
            <i class="fas fa-robot text-blue-600 text-2xl transform transition-all duration-300 group-hover:text-white"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">智能问答</h3>
          <p class="text-gray-600 mb-4 transition-all duration-300">
            基于大语言模型的智能问答系统，快速响应客户咨询，提供精准解答，支持多轮对话和复杂问题处理
          </p>
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
            了解更多
            <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <!-- 智能协办 -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-300 group">
          <div class="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:bg-green-600 group-hover:scale-110">
            <i class="fas fa-tasks text-green-600 text-2xl transform transition-all duration-300 group-hover:text-white"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-green-600">智能协办</h3>
          <p class="text-gray-600 mb-4 transition-all duration-300">
            AI驱动的任务协作助手，自动化处理日常工作，智能调度资源，提升团队协作效率和执行力
          </p>
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
            了解更多
            <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <!-- 智能报告 -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400 group">
          <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:bg-purple-600 group-hover:scale-110">
            <i class="fas fa-chart-line text-purple-600 text-2xl transform transition-all duration-300 group-hover:text-white"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-purple-600">智能报告</h3>
          <p class="text-gray-600 mb-4 transition-all duration-300">
            自动数据收集、分析和报告生成，支持多维度数据可视化，助力企业快速洞察业务趋势和决策优化
          </p>
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
            了解更多
            <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <!-- 智能问数 -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-500 group">
          <div class="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:bg-amber-600 group-hover:scale-110">
            <i class="fas fa-database text-amber-600 text-2xl transform transition-all duration-300 group-hover:text-white"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-amber-600">智能问数</h3>
          <p class="text-gray-600 mb-4 transition-all duration-300">
            自然语言查询数据分析工具，无需编写SQL，通过对话式交互快速获取数据洞察，降低数据分析门槛
          </p>
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
            了解更多
            <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>

      <!-- Feature Highlights -->
      <div class="mt-20">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">企业级AI解决方案，一站式满足多元需求</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i class="fas fa-check text-blue-600 text-sm"></i>
                </div>
                <div>
                  <span class="font-medium text-gray-900">多模型支持：</span>
                  <span class="text-gray-600">集成主流大语言模型，灵活切换，满足不同场景需求</span>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i class="fas fa-check text-blue-600 text-sm"></i>
                </div>
                <div>
                  <span class="font-medium text-gray-900">私有化部署：</span>
                  <span class="text-gray-600">支持企业内部私有化部署，保障数据安全和合规性</span>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i class="fas fa-check text-blue-600 text-sm"></i>
                </div>
                <div>
                  <span class="font-medium text-gray-900">行业适配：</span>
                  <span class="text-gray-600">针对不同行业定制化训练，提供更专业的智能服务</span>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <i class="fas fa-check text-blue-600 text-sm"></i>
                </div>
                <div>
                  <span class="font-medium text-gray-900">持续学习：</span>
                  <span class="text-gray-600">系统自动学习用户反馈，不断优化服务质量和准确性</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <i class="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">安全与合规</h4>
                  <p class="text-gray-600">企业级数据安全保障</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-lock text-blue-600 mr-2"></i>
                    <h5 class="font-medium text-gray-900">数据加密</h5>
                  </div>
                  <p class="text-sm text-gray-600">全链路数据加密，保障数据传输和存储安全</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-user-shield text-blue-600 mr-2"></i>
                    <h5 class="font-medium text-gray-900">权限管理</h5>
                  </div>
                  <p class="text-sm text-gray-600">精细化权限控制，确保数据访问安全合规</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-history text-blue-600 mr-2"></i>
                    <h5 class="font-medium text-gray-900">审计追踪</h5>
                  </div>
                  <p class="text-sm text-gray-600">完整操作日志记录，支持审计和追溯</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="flex items-center mb-2">
                    <i class="fas fa-certificate text-blue-600 mr-2"></i>
                    <h5 class="font-medium text-gray-900">合规认证</h5>
                  </div>
                  <p class="text-sm text-gray-600">符合多项行业标准和数据保护法规要求</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ProductFeatures组件逻辑
</script>

<style scoped>
/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

/* Animation delays */
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

/* Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Group hover effects */
.group:hover h3 {
  transform: translateX(5px);
}

/* Link hover effect */
a:hover {
  text-decoration: underline;
}
</style>