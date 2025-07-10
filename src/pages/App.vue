<script setup>
import { ref } from 'vue'
import HomePage from '../pages/HomePage.vue'
import GamesPage from './GamesPage.vue'
import ProgressPage from './progressPage.vue'

const showGames = ref(false)
const showProgress = ref(false)
const selectedGame = ref(null)
const selectedCourse = ref(null)

function handleProgressSelected({ game, course }) {
  selectedGame.value = game
  selectedCourse.value = course
  showProgress.value = true
}
</script>

<template>
  <HomePage v-if="!showGames && !showProgress" @start="showGames = true" />
  <GamesPage v-else-if="showGames && !showProgress" @progressSelected="handleProgressSelected" />
  <ProgressPage v-else :selectedGame="selectedGame" :selectedCourse="selectedCourse" />
</template>
