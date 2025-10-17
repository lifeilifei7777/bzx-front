<template>
  <section class="pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Text Content with animation -->
        <div class="md:w-1/2 md:pr-12 mb-12 md:mb-0 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              博智星智能体
            </span>
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            企业级AI效率中枢，让决策更智能，协作更高效
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            整合"智能问答、智能协办、智能报告、智能问数"四大核心能力，覆盖客户服务、内部协作、数据分析全场景
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              class="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              @click="handleExperienceClick"
            >
              <i class="fas fa-play-circle mr-2"></i>
              立即体验（在线试用）
            </button>
            <button
              class="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              @click="handleDemoClick"
            >
              <i class="fas fa-calendar-alt mr-2"></i>
              申请企业演示
            </button>
          </div>
        </div>

        <!-- Visual Illustration with animation -->
        <div class="md:w-1/2 relative animate-fade-in-up animation-delay-300">
          <div class="bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-3xl p-1 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div class="bg-white rounded-3xl p-6 shadow-xl animate-slide-up">
              <div class="flex items-center mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="ml-4 text-gray-500 text-sm">博智星智能工作空间</div>
              </div>
              <div class="bg-gray-100 rounded-xl p-4 mb-4">
                <p class="text-gray-600">欢迎使用博智星智能体，我能如何帮助您？</p>
              </div>
              <div class="space-y-2">
                <div class="flex animate-fade-in animation-delay-500">
                  <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span class="text-blue-600 font-medium">用</span>
                  </div>
                  <div class="bg-gray-100 rounded-xl p-3 rounded-tl-none">
                    <p class="text-gray-700">请帮我生成一份关于Q3销售数据的分析报告</p>
                  </div>
                </div>
                <div class="flex justify-end animate-fade-in animation-delay-700">
                  <div class="bg-blue-50 rounded-xl p-3 rounded-tr-none">
                    <p class="text-gray-700">好的，正在为您生成Q3销售数据分析报告...</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-3">
                    <span class="text-white font-medium">智</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
          <div class="absolute -top-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleExperienceClick = () => {
  // 处理立即体验按钮点击事件
  console.log('体验按钮被点击')
  // Add a subtle click animation to the button
  const btn = event?.target as HTMLElement
  if (btn) {
    btn.classList.add('scale-95')
    setTimeout(() => btn.classList.remove('scale-95'), 150)
  }
}

const handleDemoClick = () => {
  // 处理申请演示按钮点击事件
  console.log('申请演示按钮被点击')
  // Add a subtle click animation to the button
  const btn = event?.target as HTMLElement
  if (btn) {
    btn.classList.add('scale-95')
    setTimeout(() => btn.classList.remove('scale-95'), 150)
  }
}
</script>

<style scoped>
/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
  opacity: 0;
}

/* Animation delays */
.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Button active state */
button:active {
  transform: scale(0.95);
}
</style>