<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { GameEnum } from '../../enums/gameEnum.js'

const cards = ref([
  GameEnum.PLAYSTATION,
  GameEnum.FORTNITE,
  GameEnum.MINECRAFT,
  GameEnum.ROBLOX,
])

const animated = ref(false)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)

  setTimeout(() => {
    animated.value = true
  }, 500)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

// For horizontal layout
function getCardStyle(index) {
  const cardCount = cards.value.length
  const spacing = 'clamp(100px, 20vw, 300px)'
  const totalWidth = `calc(${cardCount} * ${spacing})`
  const baseOffset = `calc(-0.5 * ${totalWidth} + 0.5 * ${spacing})`

  return {
    left: `calc(50% + ${baseOffset} + ${index} * ${spacing})`,
    transform: 'translate(-50%, -50%)',
    zIndex: animated.value ? 1 : 0,
  }
}
</script>
<template>
  <div class="w-full min-h-[500px] flex items-center justify-center">
    <!-- Horizontal layout for desktop -->
    <div v-if="!isMobile" class="relative w-full h-[500px] overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative w-full h-full">
          <div
            v-for="(card, index) in cards"
            :key="card.key"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out-back"
            :style="animated ? getCardStyle(index) : {}"
          >
            <div
              class="absolute inset-0 rounded-xl blur-xl opacity-80 -z-10"
              :style="`box-shadow: 0 0 20px 10px #C8FF45`"
            />
            <img
              :src="card.image"
              :alt="`${card.name} logo`"
              class="w-60 h-84 object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical layout for mobile -->
    <div v-else class="flex flex-col items-center gap-6 w-full px-4 py-6">
      <div
        v-for="(card, index) in cards"
        :key="card.key"
        class="relative w-full max-w-xs"
      >
        <div
          class="absolute inset-0 rounded-xl blur-xl opacity-80 -z-10"
          :style="`box-shadow: 0 0 20px 10px #C8FF45`"
        />
        <img
          :src="card.image"
          :alt="`${card.name} logo`"
          class="w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>