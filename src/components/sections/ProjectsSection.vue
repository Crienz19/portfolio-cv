<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { cv } from '@/data/cv'

// Collect all unique tags
const allTags = ['All', ...new Set(cv.projects.flatMap((p) => p.tags))]

const activeTag = ref('All')

const filtered = computed(() =>
  activeTag.value === 'All'
    ? cv.projects
    : cv.projects.filter((p) => p.tags.includes(activeTag.value))
)
</script>

<template>
  <section id="projects" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="My work"
        title="Featured Projects"
        subtitle="A selection of web applications I've built - from concept to deployment."
        align="center"
      />

      <!-- Filter tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-10 -mt-6">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="activeTag = tag"
          :class="[
            'px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
            activeTag === tag
              ? 'bg-accent-500 text-white shadow-md shadow-accent-500/25'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700',
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Grid -->
      <Transition name="fade" mode="out-in">
        <div
          :key="activeTag"
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <ProjectCard
            v-for="project in filtered"
            :key="project.id"
            :project="project"
          />
        </div>
      </Transition>

      <!-- Empty state -->
      <div v-if="filtered.length === 0" class="text-center py-16 text-slate-400 dark:text-slate-500">
        <p class="text-4xl mb-3">🔍</p>
        <p class="font-medium">No projects found for "{{ activeTag }}"</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
