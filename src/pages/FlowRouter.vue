<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import GamesPage from './selectGamesPage.vue'
import ProgressPage from '../pages/progressPage.vue'

const showGames = ref(false)
const showProgress = ref(false)
const selectedGame = ref(null)
const selectedCourse = ref(null)

const router = useRouter()
const route = useRoute()

function handleProgressSelected({ game, course }) {
  selectedGame.value = game
  selectedCourse.value = course
  showProgress.value = true
}

watch([showGames, showProgress], ([games, progress]) => {
  if (!games && !progress) {
    router.replace('/')
  } else if (games && !progress) {
    router.replace('/games')
  } else if (progress) {
    router.replace('/progress')
  }
})

function handleGoToGame() {
  if (selectedGame.value && selectedGame.value.key) {
    router.push({ name: 'GamePage', params: { gameKey: selectedGame.value.key } })
  } else {
    router.push({ name: 'GamePage', params: { gameKey: 'americanhistory' } })
  }
}
</script>

<template>
  <HomePage v-if="!showGames && !showProgress && route.path === '/'" @start="showGames = true" />
  <GamesPage v-else-if="showGames && !showProgress && route.path === '/games'" @progressSelected="handleProgressSelected" />
  <ProgressPage v-else-if="route.path === '/progress'" :selectedGame="selectedGame" :selectedCourse="selectedCourse" @goToGame="handleGoToGame" />
</template>
