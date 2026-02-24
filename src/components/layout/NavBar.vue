<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { cv } from '@/data/cv'

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact']

const navLinks = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
]

const { activeSection } = useScrollSpy(SECTION_IDS)

const menuOpen   = ref(false)
const scrolled   = ref(false)
const navVisible = ref(true)
let lastScrollY  = 0

function handleScroll() {
  const y = window.scrollY
  scrolled.value   = y > 20
  navVisible.value = y < lastScrollY || y < 80
  lastScrollY      = y
}

function scrollTo(id: string) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
    :class="[
      navVisible ? 'translate-y-0' : '-translate-y-full',
      scrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">

      <!-- Logo / Name -->
      <button
        @click="scrollTo('hero')"
        class="flex items-center gap-2 group focus:outline-none"
      >
        <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm select-none">
          RM
        </span>
        <span class="hidden sm:block font-bold text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors text-sm">
          {{ cv.name }}
        </span>
      </button>

      <!-- Desktop nav links -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.id">
          <button
            @click="scrollTo(link.id)"
            :class="[
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
              activeSection === link.id
                ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
            ]"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Right side: theme toggle + hire me + hamburger -->
      <div class="flex items-center gap-2">
        <ThemeToggle />

        <a
          :href="'mailto:' + cv.email"
          class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-accent-500 hover:bg-accent-600 text-white transition-colors duration-200 shadow-md shadow-accent-500/20"
        >
          Hire Me
        </a>

        <!-- Hamburger -->
        <button
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        >
          <X v-if="menuOpen" :size="20" class="text-slate-700 dark:text-slate-200" />
          <Menu v-else :size="20" class="text-slate-700 dark:text-slate-200" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-4 py-4 space-y-1"
      >
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          :class="[
            'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all',
            activeSection === link.id
              ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800',
          ]"
        >
          {{ link.label }}
        </button>
        <a
          :href="'mailto:' + cv.email"
          class="block w-full text-center mt-3 px-4 py-3 rounded-xl text-sm font-bold bg-accent-500 hover:bg-accent-600 text-white transition-colors"
        >
          Hire Me
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
