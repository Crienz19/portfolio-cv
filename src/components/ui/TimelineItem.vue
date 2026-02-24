<script setup lang="ts">
import type { WorkExperience, Education } from '@/types'

defineProps<{
  item: WorkExperience | Education
  type: 'experience' | 'education'
}>()

function isExperience(item: WorkExperience | Education): item is WorkExperience {
  return 'company' in item
}
</script>

<template>
  <div class="relative pl-8 pb-10 last:pb-0">
    <!-- Timeline line -->
    <div class="absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-700 last:hidden" />
    <!-- Timeline dot -->
    <div class="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border-2 border-accent-500 bg-white dark:bg-slate-950" />

    <div class="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md dark:hover:shadow-slate-900 transition-shadow duration-300">
      <!-- Header -->
      <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">
            {{ isExperience(item) ? item.role : item.degree + ' in ' + item.field }}
          </h3>
          <p class="text-accent-600 dark:text-accent-400 font-semibold text-sm mt-0.5">
            {{ isExperience(item) ? item.company : item.institution }}
          </p>
        </div>
        <div class="flex flex-col items-end gap-1 shrink-0">
          <span class="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">
            {{ item.period }}
          </span>
          <span v-if="isExperience(item) && item.current" class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-0.5 rounded-full">
            Current
          </span>
          <span v-if="!isExperience(item) && (item as Education).honors" class="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-0.5 rounded-full">
            {{ (item as Education).honors }}
          </span>
        </div>
      </div>

      <!-- Location & Type -->
      <p class="text-xs text-slate-400 dark:text-slate-500 mb-3">
        📍 {{ item.location }}
        <span v-if="isExperience(item)" class="ml-2 capitalize">· {{ item.type }}</span>
      </p>

      <!-- Description -->
      <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {{ item.description }}
      </p>

      <!-- Achievements (experience only) -->
      <ul v-if="isExperience(item) && item.achievements.length" class="space-y-1.5 mb-4">
        <li
          v-for="(ach, i) in item.achievements"
          :key="i"
          class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
        >
          <span class="text-accent-500 mt-0.5 shrink-0">▪</span>
          {{ ach }}
        </li>
      </ul>

      <!-- Tech tags (experience only) -->
      <div v-if="isExperience(item) && item.technologies.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tech in item.technologies"
          :key="tech"
          class="text-xs px-2 py-0.5 rounded-md bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 font-medium border border-accent-100 dark:border-accent-800"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
