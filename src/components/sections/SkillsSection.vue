<script setup lang="ts">
import { Monitor, Server, Database, Settings } from 'lucide-vue-next'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { cv } from '@/data/cv'

const iconMap: Record<string, any> = { Monitor, Server, Database, Settings }
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="What I work with"
        title="Skills & Technologies"
        subtitle="A curated list of the technologies and tools I use to build amazing products."
        align="center"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          v-for="group in cv.skills"
          :key="group.category"
          class="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 shadow-sm"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400/20 to-indigo-400/20 dark:from-accent-400/10 dark:to-indigo-400/10 flex items-center justify-center">
              <component :is="iconMap[group.icon]" :size="17" class="text-accent-600 dark:text-accent-400" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white text-sm tracking-wide">{{ group.category }}</h3>
          </div>

          <!-- Skills -->
          <div class="space-y-2">
            <SkillBadge v-for="skill in group.skills" :key="skill.name" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
