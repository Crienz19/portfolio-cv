<script setup lang="ts">
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'
import { cv } from '@/data/cv'

const year = new Date().getFullYear()

const iconMap: Record<string, any> = { Github, Linkedin, Mail, Twitter }
</script>

<template>
  <footer class="bg-slate-950 dark:bg-slate-950 text-slate-400 mt-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Branding -->
        <div class="flex flex-col items-center md:items-start gap-1">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-md bg-gradient-to-br from-accent-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              RM
            </span>
            <span class="font-bold text-white text-sm">{{ cv.name }}</span>
          </div>
          <p class="text-xs text-slate-500">{{ cv.title }}</p>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in cv.socials"
            :key="social.platform"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="social.platform"
            class="w-9 h-9 rounded-full flex items-center justify-center border border-slate-800 hover:border-accent-500 hover:text-accent-400 transition-all duration-200"
          >
            <component :is="iconMap[social.icon]" :size="15" />
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-xs text-slate-500 text-center">
          &copy; {{ year }} {{ cv.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
