<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
    :class="{
      'bg-white shadow-md py-3': isScrolled,
      'bg-transparent py-5': !isScrolled
    }"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
          博
        </div>
        <span class="ml-2 text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          博智星智能体
        </span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <!-- Product Center Dropdown -->
        <div class="relative group">
          <button 
            @click="toggleDropdown('product')"
            @mouseenter="toggleDropdown('product')"
            class="flex items-center text-gray-700 hover:text-blue-600 transition-colors relative group-dropdown-btn"
            :class="{ 'text-blue-600': activeDropdown === 'product' }"
          >
            产品中心
            <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-300" :class="{ 'transform rotate-180': activeDropdown === 'product' }"></i>
          </button>
          <transition name="dropdown">
            <div 
              v-if="activeDropdown === 'product'"
              class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              @mouseenter="keepDropdownOpen('product')"
              @mouseleave="closeAllDropdowns"
            >
            <a href="#product" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">智能问答</a>
            <a href="#product" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">智能协办</a>
            <a href="#product" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">智能报告</a>
            <a href="#product" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none transition-all duration-300">智能问数</a>
            </div>
          </transition>
        </div>

        <!-- Solutions Dropdown -->
        <div class="relative group">
          <button 
            @click="toggleDropdown('solutions')"
            @mouseenter="toggleDropdown('solutions')"
            class="flex items-center text-gray-700 hover:text-blue-600 transition-colors relative group-dropdown-btn"
            :class="{ 'text-blue-600': activeDropdown === 'solutions' }"
          >
            解决方案
            <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-300" :class="{ 'transform rotate-180': activeDropdown === 'solutions' }"></i>
          </button>
          <transition name="dropdown">
            <div 
              v-if="activeDropdown === 'solutions'"
              class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              @mouseenter="keepDropdownOpen('solutions')"
              @mouseleave="closeAllDropdowns"
            >
            <a href="#solutions" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">电商</a>
            <a href="#solutions" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">金融</a>
            <a href="#solutions" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none">医疗</a>
            <a href="#solutions" @click="closeAllDropdowns" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 outline-none transition-all duration-300">制造</a>
            </div>
          </transition>
        </div>

        <!-- Resources -->
        <a href="#resources" class="text-gray-700 hover:text-blue-600 transition-colors">资源中心</a>
        
        <!-- Case Studies -->
        <a href="#case-studies" class="text-gray-700 hover:text-blue-600 transition-colors">案例研究</a>
        
        <!-- Contact -->
        <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">联系我们</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-gray-700 hover:text-blue-600"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white shadow-lg"
      >
        <div class="container mx-auto px-4 py-3">
          <nav class="flex flex-col space-y-3">
            <div>
              <button 
                @click="toggleMobileDropdown('product')"
                class="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
              >
                <span>产品中心</span>
                <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div v-if="mobileDropdown === 'product'" class="pl-4 mt-2 space-y-2">
                <a href="#product" class="block py-1 text-gray-700 hover:text-blue-600">智能问答</a>
                <a href="#product" class="block py-1 text-gray-700 hover:text-blue-600">智能协办</a>
                <a href="#product" class="block py-1 text-gray-700 hover:text-blue-600">智能报告</a>
                <a href="#product" class="block py-1 text-gray-700 hover:text-blue-600">智能问数</a>
              </div>
            </div>
            
            <div>
              <button 
                @click="toggleMobileDropdown('solutions')"
                class="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
              >
                <span>解决方案</span>
                <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div v-if="mobileDropdown === 'solutions'" class="pl-4 mt-2 space-y-2">
                <a href="#solutions" class="block py-1 text-gray-700 hover:text-blue-600">电商</a>
                <a href="#solutions" class="block py-1 text-gray-700 hover:text-blue-600">金融</a>
                <a href="#solutions" class="block py-1 text-gray-700 hover:text-blue-600">医疗</a>
                <a href="#solutions" class="block py-1 text-gray-700 hover:text-blue-600">制造</a>
              </div>
            </div>
            
            <a href="#resources" class="text-gray-700 hover:text-blue-600 py-1">资源中心</a>
            <a href="#case-studies" class="text-gray-700 hover:text-blue-600 py-1">案例研究</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 py-1">联系我们</a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const mobileDropdown = ref<string | null>(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleDropdown = (dropdown: string) => {
  activeDropdown.value = activeDropdown.value === dropdown ? null : dropdown
}

const closeAllDropdowns = () => {
  activeDropdown.value = null
}

const keepDropdownOpen = (dropdown: string) => {
  // 只保持当前悬停的下拉菜单打开
  activeDropdown.value = dropdown
}

const toggleMobileDropdown = (dropdown: string) => {
  mobileDropdown.value = mobileDropdown.value === dropdown ? null : dropdown
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}

/* Mobile menu animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

/* Dropdown button styles */
.group-dropdown-btn {
  padding: 0.5rem 0;
  position: relative;
}

/* Add a subtle background for dropdown buttons to distinguish them */
.group-dropdown-btn {
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
}

.group-dropdown-btn:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

/* Add a special style for active dropdown buttons */
.group-dropdown-btn.text-blue-600 {
  font-weight: 500;
  background-color: rgba(59, 130, 246, 0.1);
}

/* Navigation item hover effects */
a {
  transition: all 0.3s ease;
  position: relative;
}

nav > a::after,
.group-dropdown-btn::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

nav > a:hover::after,
.group-dropdown-btn:hover::after {
  width: 100%;
}

/* Button hover effects */
button {
  transition: all 0.3s ease;
}

/* Make dropdown items more interactive */
.relative > div > a {
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.relative > div > a:hover,
.relative > div > a:focus {
  border-left-color: #3b82f6;
  transform: translateX(2px);
}

/* Ensure the arrow icon is always visible and distinct */
.group-dropdown-btn i {
  opacity: 0.7;
}

.group-dropdown-btn:hover i,
.group-dropdown-btn.text-blue-600 i {
  opacity: 1;
}
</style>