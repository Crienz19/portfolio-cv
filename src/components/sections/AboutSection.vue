<script setup lang="ts">
import { MapPin, Mail, Phone, Download } from 'lucide-vue-next'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { cv } from '@/data/cv'
</script>

<template>
  <section id="about" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Get to know me" title="About Me" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Image column -->
        <div class="flex justify-center lg:justify-start">
          <div class="relative max-w-sm w-full">
            <!-- Decorative offset box -->
            <div class="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-accent-400/20 to-indigo-400/20 dark:from-accent-400/10 dark:to-indigo-400/10" />
            <img
              :src="cv.profileImage"
              :alt="cv.name"
              class="relative rounded-2xl w-full aspect-[4/5] object-cover bg-slate-200 dark:bg-slate-700 shadow-xl"
              onerror="this.src='https://placehold.co/400x500/06b6d4/ffffff?text=Renz+Mergenio'"
            />
          </div>
        </div>

        <!-- Content column -->
        <div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            I'm <span class="gradient-text">{{ cv.name }}</span>, a {{ cv.title }}
          </h3>

          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {{ cv.summary }}
          </p>

          <!-- Contact info -->
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
                <MapPin :size="15" class="text-accent-600 dark:text-accent-400" />
              </div>
              <span class="text-slate-600 dark:text-slate-300">{{ cv.location }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
                <Mail :size="15" class="text-accent-600 dark:text-accent-400" />
              </div>
              <a :href="'mailto:' + cv.email" class="text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                {{ cv.email }}
              </a>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <div class="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
                <Phone :size="15" class="text-accent-600 dark:text-accent-400" />
              </div>
              <a :href="'tel:' + cv.phone" class="text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                {{ cv.phone }}
              </a>
            </div>
          </div>

          <!-- CTA -->
          <a
            :href="cv.resumeUrl"
            download
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download :size="15" />
            Download CV
          </a>
        </div>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        <div
          v-for="stat in cv.stats"
          :key="stat.label"
          class="flex flex-col items-center gap-1 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-center"
        >
          <span class="text-3xl font-extrabold text-accent-500 dark:text-accent-400">{{ stat.value }}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
