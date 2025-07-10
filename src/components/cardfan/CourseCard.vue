<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  src: String,
  glow: String,
  selected: Boolean
})

const cardClass = computed(() => [
  'relative w-[320px] h-[200px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center lg:course-hover',
  props.selected ? 'course-selected' : ''
])
</script>

<template>
  <div
    :class="cardClass"
    :style="{ boxShadow: `0 0 24px 0 ${glow}` }"
  >
    <img :src="src" :alt="name" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
    <span class="relative z-20 text-white text-2xl font-extrabold text-center drop-shadow-lg px-2 select-none">
      {{ name }}
    </span>
  </div>
</template>

<style scoped>
/* Base transition for all devices */
.lg\:course-hover {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
}

/* Hover effect only on desktop */
@media (min-width: 1024px) {
  .lg\:course-hover:hover {
    transform: scale(1.12);
    z-index: 10;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 0 32px #C8FF45;
  }
}

/* Selected state works on all devices */
.course-selected {
  transform: scale(1.12);
  z-index: 10;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 0 32px #C8FF45 !important;
}
</style>