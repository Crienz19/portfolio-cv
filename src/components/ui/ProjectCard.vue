<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'
import type { Project } from '@/types'

defineProps<{ project: Project }>()

const base = import.meta.env.BASE_URL
</script>

<template>
  <article class="group flex flex-col bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-1">
    <!-- Project image -->
    <div class="relative overflow-hidden h-44 bg-slate-100 dark:bg-slate-700">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        @error="(e) => ((e.target as HTMLImageElement).src = `${base}images/project-placeholder.jpg`)"
      />
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 transition-colors text-white"
          title="Live demo"
        >
          <ExternalLink :size="16" />
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 transition-colors text-white"
          title="View source"
        >
          <Github :size="16" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">{{ project.title }}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mt-auto">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Footer links -->
    <div v-if="project.hasFooter" class="flex items-center gap-3 px-5 py-3 border-t border-slate-100 dark:border-slate-700">
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
      >
        <ExternalLink :size="12" /> Live Demo
      </a>
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
      >
        <Github :size="12" /> Source Code
      </a>
    </div>
  </article>
</template>
