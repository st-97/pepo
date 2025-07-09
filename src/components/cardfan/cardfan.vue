<script setup>
import { ref, onMounted } from 'vue'
import playstation from '../../assets/images/playstation.svg'
import fortnite from '../../assets/images/fortnite.svg'
import roblox from '../../assets/images/robolox.svg'
import minecraft from '../../assets/images/minecraft.svg'

// Card data with optional glow colors
const cards = ref([
  { src: playstation, glow: '#C8FF45', name: 'PlayStation' },
  { src: fortnite, glow: '#C8FF45', name: 'Fortnite' },
  { src: minecraft, glow: '#C8FF45', name: 'Minecraft' },
  { src: roblox, glow: '#C8FF45', name: 'Roblox' },
])

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 500)
})

// Responsive card positioning
function getCardStyle(index) {
  const cardCount = cards.value.length
  const spacing = 'clamp(100px, 20vw, 300px)' // Responsive spacing (100px min, 250px max)
  const totalWidth = `calc(${cardCount} * ${spacing})`
  const baseOffset = `calc(-0.5 * ${totalWidth} + 0.5 * ${spacing})` // Center cards

  return {
    left: `calc(50% + ${baseOffset} + ${index} * ${spacing})`,
    transform: 'translate(-50%, -50%)',
    zIndex: animated.value ? 1 : 0, // Ensure cards stack properly pre-animation
  }
}
</script>

<template>
  <div class="relative w-full h-[500px] overflow-hidden">
    <!-- Cards container -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative w-full h-full">
        <!-- Animated cards -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out-back"
          :style="animated ? getCardStyle(index) : {}"
        >
          <!-- Glow effect (dynamic color) -->
          <div
            class="absolute inset-0 rounded-xl blur-xl opacity-80 -z-10"
            :style="`box-shadow: 0 0 20px 10px ${card.glow}`"
          />

          <!-- Card image -->
          <img
            :src="card.src"
            :alt="`${card.name} logo`"
            class="w-60 h-84 object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth easing for the spread animation */
.ease-out-back {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>