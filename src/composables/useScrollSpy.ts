import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0] ?? '')

  function onScroll() {
    const scrollY = window.scrollY + 80 // offset for nav height

    // Walk backwards so the last section that has passed the threshold wins
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const id = sectionIds[i]
      if (!id) continue
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollY) {
        activeSection.value = id
        return
      }
    }
    activeSection.value = sectionIds[0] ?? ''
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { activeSection }
}
