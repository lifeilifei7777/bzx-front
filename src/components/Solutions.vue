<template>
  <section id="solutions" class="py-20 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Header with animation -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 relative inline-block">
          <span class="relative z-10">行业解决方案</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-blue-100 opacity-70 z-0 transform -rotate-1"></span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
          针对不同行业的痛点和需求，提供定制化的AI解决方案，助力企业数字化转型和智能化升级
        </p>
      </div>

      <!-- Solutions Tabs with animation -->
      <div class="mb-12 animate-fade-in-up animation-delay-200">
        <div class="flex flex-wrap justify-center border-b">
          <button
            v-for="industry in industries"
            :key="industry.id"
            class="px-6 py-3 font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 whitespace-nowrap transform hover:translate-y-[-2px]"
            :class="{ 'border-b-2 border-blue-600 text-blue-600 font-bold': activeIndustry === industry.id }"
            @click="handleIndustryChange(industry.id)"
          >
            {{ industry.name }}
          </button>
        </div>
      </div>

      <!-- Solution Content with transition -->
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 animate-fade-in-up animation-delay-300">
          <!-- Dynamic content with transition -->
          <transition name="fade-slide" mode="out-in">
            <div :key="activeIndustry" class="space-y-6">
              <div v-if="activeIndustry === 'ecommerce'">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 relative inline-block">
                  电商行业解决方案
                  <span class="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  为电商企业提供智能客服、商品推荐、用户行为分析和智能营销等全方位AI服务，提升用户体验和销售转化
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-blue-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-700"></i>
                    <span class="text-gray-700">智能客服机器人，7×24小时响应客户咨询，处理率达95%以上</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-blue-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-700"></i>
                    <span class="text-gray-700">个性化商品推荐，提升用户点击率和购买转化率</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-blue-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-700"></i>
                    <span class="text-gray-700">智能评价分析，自动提取用户反馈和改进建议</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-blue-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-700"></i>
                    <span class="text-gray-700">营销文案自动生成，提高内容创作效率和质量</span>
                  </li>
                </ul>
              </div>
              
              <div v-else-if="activeIndustry === 'finance'">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 relative inline-block">
                  金融行业解决方案
                  <span class="absolute -bottom-1 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  为金融机构提供智能风控、客户服务、智能投顾和合规审计等AI解决方案，提升运营效率和风险管理能力
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-green-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-700"></i>
                    <span class="text-gray-700">智能风控模型，实时评估交易风险，防范欺诈行为</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-green-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-700"></i>
                    <span class="text-gray-700">金融知识问答，快速解答客户疑问，提升服务体验</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-green-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-700"></i>
                    <span class="text-gray-700">智能投顾服务，提供个性化投资建议和资产配置方案</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-green-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-700"></i>
                    <span class="text-gray-700">合规审计自动化，降低人工审核成本，提高准确性</span>
                  </li>
                </ul>
              </div>
              
              <div v-else-if="activeIndustry === 'medical'">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 relative inline-block">
                  医疗行业解决方案
                  <span class="absolute -bottom-1 left-0 w-1/2 h-1 bg-red-500 rounded-full"></span>
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  为医疗机构提供智能辅助诊断、医疗知识问答、患者服务和医疗数据分析等AI解决方案，提升医疗服务质量
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-red-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-700"></i>
                    <span class="text-gray-700">智能辅助诊断，辅助医生进行疾病识别和诊断决策</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-red-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-700"></i>
                    <span class="text-gray-700">医疗知识问答，为患者提供专业的健康咨询服务</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-red-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-700"></i>
                    <span class="text-gray-700">智能分诊系统，优化医疗资源配置，提高诊疗效率</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-red-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-700"></i>
                    <span class="text-gray-700">医疗数据分析，辅助医院管理和临床研究</span>
                  </li>
                </ul>
              </div>
              
              <div v-else-if="activeIndustry === 'manufacturing'">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 relative inline-block">
                  制造业解决方案
                  <span class="absolute -bottom-1 left-0 w-1/2 h-1 bg-purple-500 rounded-full"></span>
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  为制造企业提供智能质检、设备维护预测、供应链优化和生产管理等AI解决方案，提升生产效率和产品质量
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-purple-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-700"></i>
                    <span class="text-gray-700">智能质检系统，自动检测产品缺陷，提高检测精度和效率</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-purple-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-700"></i>
                    <span class="text-gray-700">设备维护预测，提前识别潜在故障，降低停机损失</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-purple-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-700"></i>
                    <span class="text-gray-700">供应链优化，智能预测需求，优化库存和物流</span>
                  </li>
                  <li class="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                    <i class="fas fa-angle-right text-purple-600 mt-1 mr-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-700"></i>
                    <span class="text-gray-700">生产计划智能调度，提高资源利用率和交付准时率</span>
                  </li>
                </ul>
              </div>
              
              <button class="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center group">
                查看详细方案
                <i class="fas fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-1"></i>
              </button>
            </div>
          </transition>
        </div>
        
        <div class="lg:w-1/2 animate-fade-in-up animation-delay-400">
          <div class="relative">
            <!-- Dynamic image placeholders with transition -->
            <transition name="slide-transform" mode="out-in">
              <div :key="'image-' + activeIndustry" class="transform transition-all duration-500 hover:scale-[1.02]">
                <div v-if="activeIndustry === 'ecommerce'" class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 shadow-lg">
                  <div class="bg-white rounded-2xl p-6">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <span class="text-gray-500 transform transition-transform duration-500 hover:scale-110">电商解决方案展示图</span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-blue-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-blue-600">85%</div>
                        <div class="text-sm text-gray-600">客服效率提升</div>
                      </div>
                      <div class="bg-green-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-green-600">32%</div>
                        <div class="text-sm text-gray-600">转化率提升</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else-if="activeIndustry === 'finance'" class="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-1 shadow-lg">
                  <div class="bg-white rounded-2xl p-6">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <span class="text-gray-500 transform transition-transform duration-500 hover:scale-110">金融解决方案展示图</span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-green-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-green-600">92%</div>
                        <div class="text-sm text-gray-600">风险识别准确率</div>
                      </div>
                      <div class="bg-blue-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-blue-600">68%</div>
                        <div class="text-sm text-gray-600">人工成本降低</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else-if="activeIndustry === 'medical'" class="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-1 shadow-lg">
                  <div class="bg-white rounded-2xl p-6">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <span class="text-gray-500 transform transition-transform duration-500 hover:scale-110">医疗解决方案展示图</span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-red-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-red-600">78%</div>
                        <div class="text-sm text-gray-600">诊断效率提升</div>
                      </div>
                      <div class="bg-orange-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-orange-600">45%</div>
                        <div class="text-sm text-gray-600">患者等待时间减少</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else-if="activeIndustry === 'manufacturing'" class="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-1 shadow-lg">
                  <div class="bg-white rounded-2xl p-6">
                    <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <span class="text-gray-500 transform transition-transform duration-500 hover:scale-110">制造业解决方案展示图</span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-purple-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-purple-600">99%</div>
                        <div class="text-sm text-gray-600">质检准确率</div>
                      </div>
                      <div class="bg-pink-50 p-3 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div class="text-2xl font-bold text-pink-600">55%</div>
                        <div class="text-sm text-gray-600">设备停机时间减少</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            
            <!-- Decorative animated elements -->
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndustry = ref('ecommerce')

const industries = [
  { id: 'ecommerce', name: '电商' },
  { id: 'finance', name: '金融' },
  { id: 'medical', name: '医疗' },
  { id: 'manufacturing', name: '制造' }
]

// Handle industry tab change with animation
const handleIndustryChange = (industryId: string) => {
  // Add a small delay to ensure smooth transition
  setTimeout(() => {
    activeIndustry.value = industryId
  }, 100)
}
</script>

<style scoped>
/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
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

.animation-delay-1000 {
  animation-delay: 1000ms;
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

@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

/* Transition for content switching */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Transition for image switching */
.slide-transform-enter-active,
.slide-transform-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-transform-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}

.slide-transform-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}

/* Button hover effect */
button:active {
  transform: scale(0.98);
}

/* Number stats hover effect */
.text-2xl {
  transition: transform 0.3s ease;
}

.hover\:scale-110:hover .text-2xl {
  transform: scale(1.1);
}
</style>