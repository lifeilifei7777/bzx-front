<template>
  <div class="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <ProductFeatures />
    <Solutions />
    <CaseStudies />
    <Resources />
    <Footer />
    <BackToTop v-if="showBackToTop" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProductFeatures from '@/components/ProductFeatures.vue'
import Solutions from '@/components/Solutions.vue'
import CaseStudies from '@/components/CaseStudies.vue'
import Resources from '@/components/Resources.vue'
import Footer from '@/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>