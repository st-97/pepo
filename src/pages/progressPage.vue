<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import gameProgressBg from '../assets/images/gameProgress.jpg'
import homeIcon from '../assets/images/home.svg'
import giftIcon from '../assets/images/gift.svg'
import arrowIcon from '../assets/images/arrow.svg'

const props = defineProps({
  selectedGame: Object
})

const router = useRouter()

function goToGamePage() {
  router.push('/games/americanhistory')
}
</script>

<template>
  <!-- Fixed full-screen background image, not scrollable -->
  <div class="fixed inset-0 bg-cover bg-center z-[-10] select-none" :style="{ backgroundImage: `url(${gameProgressBg})` }"></div>

  <div class="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
    <!-- Top bar -->
    <div class="w-full flex items-center justify-between px-4 md:px-8 pt-6 md:pt-10">
      <img :src="homeIcon" alt="Home" class="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 cursor-pointer transition-all duration-200" />
      <div class="flex items-center">
        <img v-if="selectedGame" :src="selectedGame.src" :alt="selectedGame.name" class="h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 mx-2 md:mx-4 rounded-2xl shadow-2xl transition-all duration-200" />
        <img :src="giftIcon" alt="Gift" class="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 transition-all duration-200" />
      </div>
    </div>
    <!-- Arrow icon bottom right -->
    <img :src="arrowIcon" alt="Arrow" class="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 absolute bottom-6 md:bottom-10 right-6 md:right-10 cursor-pointer transition-all duration-200" @click="goToGamePage" />
  </div>
</template>

<style scoped>
body, html, #app {
  overflow: hidden !important;
}
</style>
