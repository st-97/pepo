<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-purple-700 via-purple-800 to-black flex flex-col items-center justify-center relative">
    <!-- Logout Icon -->
    <img
      :src="logoutIcon"
      alt="Logout"
      class="absolute top-8 left-8 h-12 w-12 cursor-pointer"
      @click="goBack"
    />

    <!-- Center Lesson Image & Lesson Content Card (same container for width) -->
    <div class="w-full max-w-4xl px-4 md:px-8 sm:px-0 mb-10 mt-6 mx-auto">
      <div class="flex items-center justify-center w-full" style="min-height: 200px; max-height: 400px;">
        <img
          :src="currentLesson.image"
          alt="Lesson Image"
          class="object-contain w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <!-- Lesson Content Card -->
      <div class="relative bg-white rounded-3xl shadow-xl w-full mt-20 flex flex-col justify-center items-center min-h-[220px] sm:min-h-[250px] py-4 sm:py-8 px-8 sm:px-16 pl-8 sm:pl-24">
        <!-- Volume Icon inside card, top right -->
        <img
          :src="volumeIcon"
          alt="Volume"
          class="absolute top-2 sm:top-4 right-4 h-8 w-8 sm:h-10 sm:w-10 cursor-pointer z-10"
          @click="toggleVolume"
        />
        <!-- Dragon Icon Left (animated float, half out on mobile, inside on sm+) -->
        <img :src="currentLesson.dragon" alt="Dragon"
          class="absolute z-10 object-contain animate-float
            top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-16 w-16
            sm:top-1/2 sm:left-2 sm:translate-x-0 sm:-translate-y-1/2 sm:h-28 sm:w-28"
        />
        <div class="flex flex-col items-center justify-center w-full gap-1">
          <div class="flex flex-row items-center justify-center w-full">
            <Label class="text-2xl sm:text-3xl font-bold text-black mr-1 sm:mr-2 text-center" :text="currentLesson.title + ':'" />
            <Label class="text-base sm:text-lg text-black text-center" :text="currentLesson.description[0]" />
          </div>
          <Label class="text-base sm:text-lg text-black w-full text-center mt-1" :text="currentLesson.description[1]" />
        </div>
        <!-- Next Icon Button Bottom Right (inside card, with padding) -->
        <button class="absolute bottom-2 sm:bottom-4 right-4 flex items-center justify-center bg-transparent p-0 border-none shadow-none z-10" @click="handleNextLesson">
          <img :src="nextIcon" alt="Next" class="h-14 w-14 sm:h-20 sm:w-20" />
        </button>
      </div>
    </div>
    <!-- Overlay Dialog when finished -->
    <div v-if="showRewardDialog" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      <div class="relative w-full h-full flex flex-col items-center justify-center px-2 py-4">
        <div class="bg-[#7c3aed] rounded-3xl shadow-2xl w-full max-w-5xl min-h-[500px] mx-auto px-8 py-14 flex flex-col items-center justify-center relative">
          <img src="/src/assets/images/pepo.svg" alt="Pepo Icon" class="absolute top-8 left-8 h-16 w-16" />
          <div class="flex flex-row items-center justify-center w-full mt-8 mb-4">
            <span class="text-2xl md:text-3xl font-bold text-white text-center">Give reward after completing courses:</span>
            <div class="flex flex-col items-center ml-4">
            <button @click="increaseCompleted" class="w-6 h-6 rounded-full bg-white text-[#7c3aed] text-base font-bold mb-1 flex items-center justify-center shadow hover:bg-[#C8FF45] transition">&#9650;</button>
              <div class="text-base font-extrabold text-white mb-1">{{ completedCourses }}</div>
              <button @click="decreaseCompleted" class="w-6 h-6 rounded-full bg-white text-[#7c3aed] text-base font-bold mt-1 flex items-center justify-center shadow hover:bg-[#C8FF45] transition">&#9660;</button>
            </div>
          </div>
          <!-- Continue Button -->
          <button @click="handleContinue" class="mt-12 px-10 py-4 rounded-full bg-[#C8FF45] text-black text-2xl font-bold shadow hover:bg-[#C8FF45] transition">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoutIcon from '../../../assets/images/logout.svg'
import nextIcon from '../../../assets/images/next.svg'
import dragonIcon from '../../../assets/images/dragon.svg'
import americanHistory1 from '../../../assets/images/americanHistoryGameImages/americanHistory1.jpg'
import Label from '../../label.vue'
import volumeIcon from '../../../assets/images/volume_on.svg'

// Enum for lessons
const AmericanHistoryLessons = Object.freeze([
  {
    key: 'lesson1',
    game: 'americanhistory',
    image: americanHistory1,
    dragon: dragonIcon,
    title: 'Lesson 1',
    description: [
      'Welcome to the American History adventure!',
      'In this lesson, you will meet the dragon and learn about the first explorers.'
    ]
  }
  // Add more lessons here as needed
])

const router = useRouter()

function goBack() {
  router.back()
}

const currentLessonIndex = ref(0)
const currentLesson = ref(AmericanHistoryLessons[currentLessonIndex.value])
const isVolumeOn = ref(true)
function toggleVolume() {
  isVolumeOn.value = !isVolumeOn.value
}

const showRewardDialog = ref(false)
const completedCourses = ref(1)

function handleNextLesson() {
  if (currentLessonIndex.value < AmericanHistoryLessons.length - 1) {
    currentLessonIndex.value++
    currentLesson.value = AmericanHistoryLessons[currentLessonIndex.value]
  } else {
    showRewardDialog.value = true
    if (completedCourses.value < 3) completedCourses.value++
    localStorage.setItem('completedCourses', completedCourses.value)
  }
}

function increaseCompleted() {
  if (completedCourses.value < 3) {
    completedCourses.value++
    localStorage.setItem('completedCourses', completedCourses.value)
  }
}
function decreaseCompleted() {
  if (completedCourses.value > 1) {
    completedCourses.value--
    localStorage.setItem('completedCourses', completedCourses.value)
  }
}
function handleContinue() {
  showRewardDialog.value = false
}
</script>