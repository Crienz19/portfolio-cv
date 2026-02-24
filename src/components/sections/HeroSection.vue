<script setup lang="ts">
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-vue-next'
import { cv } from '@/data/cv'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const iconMap: Record<string, any> = { Github, Linkedin, Mail }
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-[68px]"
  >
    <!-- Background gradient blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-400/10 dark:bg-accent-400/5 blur-3xl" />
      <div class="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-400/5 blur-3xl" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-300/5 blur-3xl" />
    </div>

    <!-- Dot grid pattern -->
    <div
      class="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none"
      style="background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px); background-size: 28px 28px;"
      aria-hidden="true"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        <!-- Text content -->
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {{ cv.availability }}
          </div>

          <!-- Name & Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
            Hi, I'm <span class="gradient-text">{{ cv.name.split(' ')[0] }}</span> 👋
          </h1>

          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">
            {{ cv.title }}
          </h2>

          <p class="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mb-8">
            {{ cv.subtitle }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-3 mb-10 justify-center lg:justify-start">
            <button
              @click="scrollTo('projects')"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <a
              :href="cv.resumeUrl"
              download
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-accent-500 dark:hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download :size="15" />
              Download CV
            </a>
          </div>

          <!-- Quick social links -->
          <div class="flex items-center gap-2">
            <a
              v-for="social in cv.socials.slice(0, 3)"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :title="social.platform"
              class="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-accent-400 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-200"
            >
              <component :is="iconMap[social.icon] ?? Mail" :size="16" />
            </a>
            <span class="text-xs text-slate-400 dark:text-slate-500 ml-2">Find me on social</span>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative">
            <!-- Glow ring -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-indigo-500 blur-2xl opacity-20 scale-110" />

            <!-- Outer ring -->
            <div class="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-accent-400 via-indigo-400 to-accent-600">
              <!-- Inner ring -->
              <div class="w-full h-full rounded-full p-1 bg-slate-50 dark:bg-slate-950">
                <img
                  :src="cv.profileImage"
                  :alt="cv.name"
                  class="w-full h-full rounded-full object-cover bg-slate-200 dark:bg-slate-700"
                  onerror="this.src='https://placehold.co/320x320/06b6d4/ffffff?text=RM'"
                />
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -bottom-2 -left-4 sm:-left-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 border border-slate-100 dark:border-slate-700">
              <span class="text-xl">💼</span>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">{{ cv.stats[0]?.value }}</p>
                <p class="text-[10px] text-slate-400">{{ cv.stats[0]?.label }}</p>
              </div>
            </div>

            <div class="absolute -top-2 -right-4 sm:-right-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 border border-slate-100 dark:border-slate-700">
              <span class="text-xl">🚀</span>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">{{ cv.stats[1]?.value }}</p>
                <p class="text-[10px] text-slate-400">{{ cv.stats[1]?.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button
      @click="scrollTo('about')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors focus:outline-none group"
    >
      <span class="text-xs font-medium">Scroll down</span>
      <ArrowDown :size="16" class="animate-bounce" />
    </button>
  </section>
</template>
