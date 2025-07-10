<script setup>
import { ref } from 'vue'
import GameSelectionInline from '../components/GameSelectionInline.vue'
import CourseSelectionInline from '../components/CourseSelectionInline.vue'

const emit = defineEmits(['progressSelected'])
const selectedGame = ref(null)
const selectedCourse = ref(null)

function handleGameSelected(game) {
  selectedGame.value = game
}
function handleCourseSelected(course) {
  selectedCourse.value = course
  emit('progressSelected', { game: selectedGame.value, course })
}
function handleBack() {
  if (selectedCourse.value) {
    selectedCourse.value = null
  } else {
    selectedGame.value = null
  }
}
</script>

<template>
  <!-- Solid purple background with black overlay -->
  <div class="fixed inset-0 z-[-10]">
    <div class="absolute inset-0 bg-[#7c3aed]"></div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>

  <div class="relative w-full min-h-screen flex flex-col items-center justify-start py-12 px-4">
    <GameSelectionInline v-if="!selectedGame" @gameSelected="handleGameSelected" />
    <CourseSelectionInline v-else-if="!selectedCourse" :selectedGame="selectedGame" @courseSelected="handleCourseSelected" @back="handleBack" />
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
</style>

