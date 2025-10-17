<template>
  <section id="case-studies" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header with animation -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 relative inline-block">
          <span class="relative z-10">成功案例</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-blue-100 opacity-70 z-0 transform -rotate-1"></span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
          探索博智星智能体如何帮助各行业客户解决实际问题，提升业务效率，创造商业价值
        </p>
      </div>

      <!-- Case Studies Grid with staggered animation -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Case Study 1 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up animation-delay-100">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
            <div class="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-110">
              <span class="text-white text-lg font-medium">案例图片</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full transform transition-transform duration-300 group-hover:scale-105">电商行业</span>
              <span class="ml-auto text-gray-500 text-sm">阅读时间: 5分钟</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-all duration-300">
              某大型电商平台智能客服升级实践
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
              该电商平台通过部署博智星智能问答系统，实现了客服效率提升85%，客户满意度提高40%，每年节省人力成本超过2000万元。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group">
              查看详情
              <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <!-- Case Study 2 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up animation-delay-200">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
            <div class="w-full h-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-110">
              <span class="text-white text-lg font-medium">案例图片</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full transform transition-transform duration-300 group-hover:scale-105">金融行业</span>
              <span class="ml-auto text-gray-500 text-sm">阅读时间: 6分钟</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-all duration-300">
              某银行智能风控系统实施案例
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
              某国有银行通过引入博智星智能风控解决方案，欺诈检测准确率提升至92%，风险事件处理时间缩短70%，有效保障了资金安全。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group">
              查看详情
              <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <!-- Case Study 3 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up animation-delay-300">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
            <div class="w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-110">
              <span class="text-white text-lg font-medium">案例图片</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full transform transition-transform duration-300 group-hover:scale-105">制造业</span>
              <span class="ml-auto text-gray-500 text-sm">阅读时间: 4分钟</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-all duration-300">
              某汽车制造商智能质检系统应用
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
              该汽车制造商采用博智星智能质检解决方案，实现了99%的缺陷检测准确率，生产线效率提升35%，每年节省成本超过1500万元。
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group">
              查看详情
              <i class="fas fa-arrow-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- More Case Studies Button with animation -->
      <div class="text-center mt-12 animate-fade-in-up animation-delay-400">
        <button class="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center mx-auto group">
          查看更多案例
          <i class="fas fa-chevron-right ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>

      <!-- Customer Testimonials with animation -->
      <div class="mt-24">
        <h3 class="text-2xl font-bold mb-12 text-center text-gray-900 relative inline-block animate-fade-in-up animation-delay-100">
          <span class="relative z-10">客户评价</span>
          <span class="absolute -bottom-2 left-1/4 w-1/2 h-2 bg-blue-100 opacity-70 z-0"></span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-8 relative transform transition-all duration-500 hover:shadow-md hover:-translate-y-1 animate-fade-in-up animation-delay-200">
            <div class="absolute -top-5 left-8 text-4xl text-blue-200 opacity-0 transform scale-50 transition-all duration-500 hover:opacity-100 hover:scale-100">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-6 relative z-10 leading-relaxed transition-all duration-500 hover:pl-4">
              "博智星智能体的解决方案帮助我们显著提升了客户服务效率，降低了运营成本。系统的智能化程度和准确性超出了我们的预期，是我们数字化转型过程中的得力助手。"
            </p>
            <div class="flex items-center transform transition-all duration-500 hover:translate-x-2">
              <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 transform transition-transform duration-500 hover:scale-110">
                <span class="text-blue-600 font-medium">李</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">李明</div>
                <div class="text-gray-500 text-sm">某电商平台客服总监</div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-xl p-8 relative transform transition-all duration-500 hover:shadow-md hover:-translate-y-1 animate-fade-in-up animation-delay-300">
            <div class="absolute -top-5 left-8 text-4xl text-blue-200 opacity-0 transform scale-50 transition-all duration-500 hover:opacity-100 hover:scale-100">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-6 relative z-10 leading-relaxed transition-all duration-500 hover:pl-4">
              "作为一家金融机构，我们对系统的安全性和准确性要求极高。博智星智能体不仅满足了我们的技术要求，还提供了完善的实施支持和售后服务，帮助我们快速实现了业务目标。"
            </p>
            <div class="flex items-center transform transition-all duration-500 hover:translate-x-2">
              <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 transform transition-transform duration-500 hover:scale-110">
                <span class="text-green-600 font-medium">王</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">王强</div>
                <div class="text-gray-500 text-sm">某银行技术部总经理</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 可以添加滚动动画检测逻辑
onMounted(() => {
  // 这里可以添加滚动监听，实现更复杂的滚动触发动画
})
</script>

<style scoped>
/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

/* Animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
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

/* Button active state */
button:active {
  transform: scale(0.98);
}

/* Additional hover effects */
.text-gray-700 {
  transition: color 0.3s ease;
}

/* Card image hover effect */
.aspect-w-16 {
  overflow: hidden;
}

/* Quote animation */
.fas.fa-quote-left {
  filter: blur(0.5px);
  transition: filter 0.3s ease;
}

.hover\:opacity-100:hover .fas.fa-quote-left {
  filter: blur(0);
}
</style>