<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-400"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Transition name="icon-flip" mode="out-in">
      <Sun v-if="isDark" :size="20" class="text-accent-400" />
      <Moon v-else :size="20" class="text-slate-600" />
    </Transition>
  </button>
</template>

<style scoped>
.icon-flip-enter-active,
.icon-flip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.icon-flip-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.icon-flip-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
