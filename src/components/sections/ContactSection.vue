<script setup lang="ts">
import { ref } from 'vue'
import { Github, Linkedin, Mail, Twitter, Send, MapPin, Phone } from 'lucide-vue-next'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { cv } from '@/data/cv'

const iconMap: Record<string, any> = { Github, Linkedin, Mail, Twitter }

const form = ref({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const success  = ref(false)

async function submit() {
  sending.value = true
  // Simulate – wire to a real backend / Formspree / EmailJS when ready
  await new Promise((resolve) => setTimeout(resolve, 1000))
  sending.value = false
  success.value  = true
  form.value     = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => (success.value = false), 5000)
}
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Let's talk"
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        align="center"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- Info column -->
        <div class="flex flex-col gap-6">
          <!-- Info cards -->
          <div class="flex items-center gap-4 p-5 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm">
            <div class="w-11 h-11 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
              <Mail :size="18" class="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
              <a :href="'mailto:' + cv.email" class="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                {{ cv.email }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4 p-5 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm">
            <div class="w-11 h-11 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
              <Phone :size="18" class="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Phone</p>
              <a :href="'tel:' + cv.phone" class="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                {{ cv.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4 p-5 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm">
            <div class="w-11 h-11 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center shrink-0">
              <MapPin :size="18" class="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
              <p class="text-sm font-medium text-slate-800 dark:text-slate-200">{{ cv.location }}</p>
            </div>
          </div>

          <!-- Socials -->
          <div class="p-5 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm">
            <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Find me on</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in cv.socials"
                :key="social.platform"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all text-sm font-medium"
              >
                <component :is="iconMap[social.icon]" :size="15" />
                {{ social.platform }}
              </a>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <form
          @submit.prevent="submit"
          class="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm p-6 md:p-8 space-y-4"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide" for="name">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-shadow"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide" for="email-input">Email</label>
              <input
                id="email-input"
                v-model="form.email"
                type="email"
                required
                placeholder="your@email.com"
                class="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-shadow"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide" for="subject">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              placeholder="Project inquiry / Collaboration / etc."
              class="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-shadow"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide" for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Tell me about your project or idea..."
              class="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-shadow resize-none"
            />
          </div>

          <!-- Success message -->
          <Transition name="fade">
            <div v-if="success" class="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl px-4 py-3">
              ✅ Message sent! I'll get back to you soon.
            </div>
          </Transition>

          <button
            type="submit"
            :disabled="sending"
            class="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            <Send :size="15" :class="{ 'animate-pulse': sending }" />
            {{ sending ? 'Sending…' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
