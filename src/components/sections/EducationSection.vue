<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { cv } from '@/data/cv'
</script>

<template>
  <section id="education" class="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

        <!-- Sticky label column -->
        <div class="lg:sticky lg:top-24 lg:self-start">
          <SectionTitle eyebrow="Academic background" title="Education" />
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed -mt-8">
            My formal education and professional certifications.
          </p>
        </div>

        <!-- Timeline -->
        <div>
          <TimelineItem
            v-for="edu in cv.education"
            :key="edu.id"
            :item="edu"
            type="education"
          />
        </div>
      </div>
    </div>
  </section>
</template>
