<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { cv } from '@/data/cv'
</script>

<template>
  <section id="experience" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

        <!-- Sticky label column -->
        <div class="lg:sticky lg:top-24 lg:self-start">
          <SectionTitle eyebrow="Where I've worked" title="Work Experience" />
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed -mt-8">
            My professional journey building web applications across different industries and roles.
          </p>
        </div>

        <!-- Timeline -->
        <div>
          <TimelineItem
            v-for="job in cv.experience"
            :key="job.id"
            :item="job"
            type="experience"
          />
        </div>
      </div>
    </div>
  </section>
</template>
