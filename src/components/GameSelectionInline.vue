<script setup>
import { GameEnum } from '../enums/gameEnum.js'
const emit = defineEmits(['gameSelected'])
import GameCard from './cardfan/GameCard.vue'
import pepoIcon from '../assets/images/pepo.svg'
import coinIcon from '../assets/images/coin.svg'
import { ref, onMounted, nextTick } from 'vue'

// Dynamically get all games from the enum
const games = Object.values(GameEnum)

function handleChoose(game) {
  emit('gameSelected', game)
}

const slideInStates = ref([])

onMounted(async () => {
  slideInStates.value = games.map(() => false)
  await nextTick()
  games.forEach((_, i) => {
    setTimeout(() => {
      slideInStates.value[i] = true
    }, 120 * i)
  })
})
</script>

<template>
  <img :src="pepoIcon" alt="Left Logo" class="h-12 absolute top-0 left-10 mt-10" />
  <div class="flex items-center mb-8 mt-4">
    <span class="text-4xl md:text-5xl font-norwester font-bold tracking-wider text-white">
      SELECT YOUR GIFT REWARD
    </span>
    <img :src="coinIcon" alt="Coin Icon" class="h-10 w-10 ml-4 hanging-bounce" />
  </div>
  <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 justify-items-center mt-8">
    <div
      v-for="(game, i) in games"
      :key="game.key"
      :class="['slide-in-card', { 'slide-in': slideInStates[i] }]"
    >
      <GameCard
        :name="game.name"
        :src="game.image"
        :glow="'#C8FF45'"
        @choose="handleChoose(game)"
      />
    </div>
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
.slide-in-card {
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-in-card.slide-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
