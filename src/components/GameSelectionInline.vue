<script setup>
const emit = defineEmits(['gameSelected'])
import GameCard from './cardfan/GameCard.vue'
import pepoIcon from '../assets/images/pepo.svg'
import coinIcon from '../assets/images/coin.svg'
import playstation from '../assets/images/games/playstation.svg'
import fortnite from '../assets/images/games/fortnite.svg'
import roblox from '../assets/images/games/robolox.svg'
import minecraft from '../assets/images/games/minecraft.svg'
import amongus from '../assets/images/games/amongus.svg'
import xbox from '../assets/images/games/xbox.svg'
import mario from '../assets/images/games/mario.svg'
import leaguesLegends from '../assets/images/games/leaguesLegends.svg'

const games = [
  { src: playstation, glow: '#C8FF45', name: 'Playstation' },
  { src: fortnite, glow: '#C8FF45', name: 'Fortnite' },
  { src: minecraft, glow: '#C8FF45', name: 'Minecraft' },
  { src: roblox, glow: '#C8FF45', name: 'Roblox' },
  { src: amongus, glow: '#C8FF45', name: 'Among us' },
  { src: xbox, glow: '#C8FF45', name: 'Xbox' },
  { src: mario, glow: '#C8FF45', name: 'Mario' },
  { src: leaguesLegends, glow: '#C8FF45', name: 'leaguesLegends' },
]

function handleChoose(game) {
  emit('gameSelected', game)
}
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
    <GameCard
      v-for="game in games"
      :key="game.name"
      :name="game.name"
      :src="game.src"
      :glow="game.glow"
      @choose="handleChoose(game)"
    />
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
</style>
