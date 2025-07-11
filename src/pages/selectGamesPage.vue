<script setup>
import { useRouter } from 'vue-router'
import GameSelectionInline from '../components/GameSelectionInline.vue'

const emit = defineEmits(['progressSelected'])
const router = useRouter()

function handleGameSelected(game) {
  router.push({ name: 'SelectCoursePage', query: { game: game.key } })
}
</script>

<template>
  <!-- Solid purple background with black overlay -->
  <div class="fixed inset-0 z-[-10]">
    <div class="absolute inset-0 bg-[#7c3aed]"></div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>

  <div class="relative w-full min-h-screen flex flex-col items-center justify-start py-12 px-4">
    <GameSelectionInline @gameSelected="handleGameSelected" />
    <!-- CourseSelectionInline removed: course selection is now handled in selectCoursePage -->
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
</style>

