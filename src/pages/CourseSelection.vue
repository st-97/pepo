<script setup>
import CourseCard from '../components/cardfan/CourseCard.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  selectedGame: Object
})
const emit = defineEmits(['back'])

import americaHistory from '../assets/images/courses/americaHistory.svg'
import math from '../assets/images/courses/math.svg'
import geography from '../assets/images/courses/geography.svg'
import biology from '../assets/images/courses/biology.svg'
import coding from '../assets/images/courses/coding.svg'
import scienve from '../assets/images/courses/scienve.svg'
import space from '../assets/images/courses/space.svg'
import chess from '../assets/images/courses/chess.svg'
import englishReading from '../assets/images/courses/englishReading.svg'

const courses = [
  { src: americaHistory, glow: '#C8FF45', name: 'America History' },
  { src: math, glow: '#C8FF45', name: 'Math' },
  { src: geography, glow: '#C8FF45', name: 'Geography' },
  { src: biology, glow: '#C8FF45', name: 'Biology' },
  { src: coding, glow: '#C8FF45', name: 'Coding' },
  { src: scienve, glow: '#C8FF45', name: 'Science' },
  { src: space, glow: '#C8FF45', name: 'Space' },
  { src: chess, glow: '#C8FF45', name: 'Chess' },
  { src: englishReading, glow: '#C8FF45', name: 'English Reading' },
]
</script>

<template>
      <!-- Solid purple background with black overlay -->
  <div class="fixed inset-0 z-[-10]">
    <div class="absolute inset-0 bg-[#7c3aed]"></div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>

  <div class="relative w-full min-h-screen flex flex-col items-center justify-start py-12 px-4">
    <div class="flex items-center mb-8 mt-4">
      <span class="text-4xl md:text-5xl font-norwester font-bold tracking-wider text-white">
        Choose course to redeem
      </span>
      <img
        v-if="selectedGame"
        :src="selectedGame.src"
        :alt="selectedGame.name"
        class="h-16 w-16 ml-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hanging-bounce"
        :style="{ boxShadow: `0 0 16px 0 ${selectedGame.glow}` }"
        @click="$emit('back')"
      />
    </div>
    <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mt-8">
      <CourseCard
        v-for="course in courses"
        :key="course.name"
        :name="course.name"
        :src="course.src"
        :glow="course.glow"
      />
    </div>
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
</style>
