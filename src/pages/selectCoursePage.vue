<script setup>
import { ref } from 'vue'
import { themeColors } from '../styles/themeColors.js'
import { useRoute, useRouter } from 'vue-router'
import CourseSelectionInline from '../components/CourseSelectionInline.vue'
import { GameEnum } from '../enums/gameEnum.js'
import celebIcon from '/src/assets/images/celebration.svg'

const route = useRoute()
const router = useRouter()
const selectedGame = ref(null)
const showDialog = ref(false)
const parentEmail = ref('')
const parentPhone = ref('')
const consentChecked = ref(false)
const selectedCourse = ref(null)

if (route.query.game) {
  selectedGame.value = Object.values(GameEnum).find(g => g.key === route.query.game) || null
}

function handleCourseSelected(course) {
  if (selectedGame.value && course) {
    selectedCourse.value = course
    showDialog.value = true
  }
}
function handleBack() {
  router.back()
}
function closeDialog() {
  showDialog.value = false
}
function handleNext() {
  if (selectedGame.value && selectedCourse.value) {
    router.push({
      path: '/progress',
      query: {
        game: selectedGame.value.key,
        course: selectedCourse.value.key
      }
    })
    closeDialog()
  }
}
</script>

<template>
  <div class="fixed inset-0 z-[-10]">
    <div class="absolute inset-0 bg-[#7c3aed]"></div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>
  <img src="/src/assets/images/pepo.svg" alt="Pepo Icon" class="h-12 absolute top-0 left-10 mt-10" />
  <div class="relative w-full min-h-screen flex flex-col items-center justify-start py-12 px-4">
    <div v-if="selectedGame" class="flex items-center mb-8 mt-4">
      <span class="text-4xl md:text-5xl font-norwester font-bold tracking-wider text-white">
        Pick a fun course to win
      </span>
      <img
        v-if="selectedGame.image"
        :src="selectedGame.image"
        :alt="selectedGame.name"
        class="h-28 w-28 ml-6 hanging-bounce"
      />
    </div>
    <CourseSelectionInline v-if="selectedGame" :selectedGame="selectedGame" @courseSelected="handleCourseSelected" @back="handleBack" />
    <div v-else class="text-white text-2xl">No game selected.</div>
<!-- Modal Dialog -->
<div v-if="showDialog" class="fixed inset-0 z-50 flex items-center justify-center">
  <!-- Background Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

  <!-- Modal Box -->
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl px-6 py-8 min-h-[400px] md:min-h-[400px] lg:min-h-[450px]">
    <!-- ❌ Close Button (top-right, not centered) -->
    <button
      @click="closeDialog"
      class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow hover:bg-gray-300 transition"
    >
      <span class="text-xl font-bold">&times;</span>
    </button>
    <!-- Centered Content -->
<div class="flex flex-col items-center justify-center w-full h-full">
  <!-- 🎉 Responsive Celeb + Text -->
  <div class="flex flex-wrap items-center justify-center gap-2 mb-6 text-center max-w-full px-4">
    <!-- Left Icon -->
    <img :src="celebIcon" alt="Celebration" class="h-10 w-10 hanging-bounce flex-shrink-0" />

    <!-- Responsive Text -->
    <div class="text-lg md:text-2xl font-bold text-black whitespace-normal text-center max-w-auto sm:max-w-md ">
      Let's invite your parents to send your reward
    </div>

    <!-- Right Icon -->
    <img :src="celebIcon" alt="Celebration" class="h-10 w-10 hanging-bounce flex-shrink-0" />
  </div>
 

      <!-- 📧 Email Input -->
      <input
        v-model="parentEmail"
        type="email"
        placeholder="Parent's email"
        class="w-full max-w-md text-black rounded-xl border border-gray-300 px-4 py-3 mb-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <!-- OR Divider -->
      <div class="w-full max-w-md text-center text-gray-500 font-bold mb-2">OR</div>
      <!-- 📱 Phone Input -->
      <input
        v-model="parentPhone"
        type="tel"
        placeholder="Parent's phone number"
        class="w-full max-w-md text-black rounded-xl border border-gray-300 px-4 py-3 mb-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <!-- ✅ Consent Checkbox -->
      <label class="flex items-start w-full max-w-md gap-2 mt-2 mb-4">
        <input
          type="checkbox"
          v-model="consentChecked"
          class="mt-1 h-5 w-5 rounded border-gray-400 focus:ring-green-400"
        />
        <span class="text-sm text-gray-700 leading-snug">
          I consent to by entering my parent’s email and phone number, I am letting you know who we should contact to get their approval for the gift card.
        </span>
      </label>
      <!-- ⏭️ Next Button -->
      <button
        :disabled="!consentChecked"
        @click="handleNext"
        :style="{
          backgroundColor: consentChecked ? themeColors.secondary : '#d1d5db',
          opacity: consentChecked ? 1 : 0.5
        }"
        class="w-full max-w-md py-3 rounded-full border-2 border-black text-black font-bold text-lg transition disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
    </div>
  </div>
</template>
