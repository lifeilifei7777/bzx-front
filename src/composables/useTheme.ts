import { ref, onMounted, watch, computed } from 'vue'

type Theme = 'light' | 'dark'

export function useTheme() {
  const theme = ref<Theme>('light')

  onMounted(() => {
    // 从localStorage读取主题
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      // 使用系统主题偏好
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    
    updateTheme()
  })

  const updateTheme = () => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme.value)
    localStorage.setItem('theme', theme.value)
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // 监听主题变化，自动更新
  watch(theme, updateTheme)

  return {
    theme,
    toggleTheme,
    isDark: computed(() => theme.value === 'dark')
  }
}