<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div :class="['mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left']">
    <span
      v-if="eyebrow"
      class="inline-block mb-3 text-xs font-bold tracking-[0.2em] uppercase text-accent-500 dark:text-accent-400"
    >
      {{ eyebrow }}
    </span>

    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
      {{ title }}
    </h2>

    <!-- Animated accent underline -->
    <div :class="['mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-400 to-indigo-400', align === 'center' ? 'mx-auto' : '']" />

    <p
      v-if="subtitle"
      class="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
      :class="{ 'mx-auto': align === 'center' }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
