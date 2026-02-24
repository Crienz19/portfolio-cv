<script setup lang="ts">
import type { Skill } from '@/types'

defineProps<{ skill: Skill }>()
</script>

<template>
  <div class="flex items-center justify-between gap-3 px-4 py-3 bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-xl hover:border-accent-300 dark:hover:border-accent-700 transition-colors duration-200 group">
    <span class="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
      {{ skill.name }}
    </span>
    <!-- Level dots -->
    <div class="flex items-center gap-1 shrink-0">
      <span
        v-for="n in 5"
        :key="n"
        :class="[
          'w-2 h-2 rounded-full transition-colors',
          n <= skill.level
            ? 'bg-accent-500 dark:bg-accent-400'
            : 'bg-slate-200 dark:bg-slate-600',
        ]"
      />
    </div>
  </div>
</template>
