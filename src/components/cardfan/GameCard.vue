<script setup>
import CustomButton from '../pepo_button.vue'
const emit = defineEmits(['choose'])

defineProps({
  name: String,
  src: String,
  glow: String
})
</script>

<template>
  <div
    class="w-full h-[400px] bg-white rounded-[19px] shadow-lg flex flex-col overflow-hidden mt-12 lg:card-hover"
    :style="{ boxShadow: `0 0 70px ${glow}` }"
  >
    <!-- Image -->
    <div class="w-full h-[320px] overflow-hidden bg-transparent p-2">
      <img
        :src="src"
        :alt="`${name} image`"
        class="w-full h-full object-contain min-w-full min-h-full"
      />
    </div>

    <!-- Button -->
    <div class="bg-white mt-auto mb-2 mx-4">
<CustomButton
  label="Choose"
  fontSize="text-lg"
  fontClass="font-norwester tracking-wider"
  @click="emit('choose')"
  class="w-full"
/>

    </div>
  </div>
</template>

<style scoped>
/* Base transition for all devices */
.lg\:card-hover {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s;
}

/* Hover effect only on desktop (lg breakpoint and above) */
@media (min-width: 1024px) {
  .lg\:card-hover:hover {
    transform: scale(1.08);
    z-index: 10;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25), 0 0 32px #C8FF45 !important;
  }
}
</style>