<script setup>
import { ref, defineEmits } from 'vue'
import bgImage from '../assets/images/bg.svg'
import CustomButton from '../components/pepo_button.vue'
import CardFan from '../components/cardfan/cardfan.vue'
import TodaysWinner from '../components/cardfan/todaysWinner.vue'

defineProps({ msg: String })

const count = ref(0)
const emit = defineEmits(['start'])

function handleStartNow() {
  emit('start')
}
</script>

<template>
  <!-- Background -->
  <div class="fixed inset-0 bg-cover bg-center -z-10" :style="{ backgroundImage: `url(${bgImage})` }"></div>

  <!-- Top Section -->
  <div class="w-full text-white py-16 px-4 md:px-12 relative z-50">
    <!-- Bottom left SVG -->
    <img
      src="../assets/images/pepo.svg"
      alt="Left Logo"
      class="h-10 md:h-12 absolute bottom-0 left-6 md:left-10 mb-2"
    />

    <!-- Bottom right Button -->
      <CustomButton
        label="Parents Click Here"
        fontSize="text-2xl"
        fontClass="font-norwester tracking-wider"
        :onClick="() => {/* TODO: Add parent click logic */}"
        class="absolute bottom-0 right-10 mb-2"
      />
  </div>

  <!-- Green Section -->
  <div class="w-full text-white relative z-50">
    <!-- Coins & Text Row -->
<div class="flex items-center justify-center gap-3 md:gap-6 px-4 flex-nowrap mt-8">
  <img src="../assets/images/coin.svg" alt="Coin" class="h-14 w-14 md:h-20 md:w-20 hanging-bounce" />
  <span class="text-4xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap">LEARN AND WIN</span>
  <img src="../assets/images/coin.svg" alt="Coin" class="h-14 w-14 md:h-20 md:w-20 scale-x-[-1] hanging-bounce" />
</div>

    <!-- Controller Icon -->
    <div class="absolute top-40 left-6 z-0">
      <img src="../assets/images/controller.svg" alt="Controller" class="h-20 md:h-28 hanging-bounce" />
    </div>
  </div>

  <!-- Card Fan Animation -->
  <CardFan />

  <!-- Center Start Button & Trophy -->
<div class="w-full text-white py-12 px-4 sm:px-8 md:px-16 relative z-30">
  <CustomButton
    label="Start Now"
    fontSize="text-base sm:text-2xl md:text-xl lg:text-2xl"
    fontClass="font-norwester tracking-wider"
    :onClick="handleStartNow"
    class="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-300 font-bold shadow-lg flex items-center justify-center text-base sm:text-lg md:text-xl h-14 sm:h-16 md:h-16 w-48 sm:w-52 md:w-60"
    :style="{ borderRadius: '20px' }"
  />


    <img
      src="../assets/images/trophy.svg"
      alt="Top Right Trophy"
      class="h-24 md:h-32 absolute right-4 top-0 -mt-8 hanging-bounce"
    />
  </div>

  <!-- Today's Winners Section -->
   
<div class="flex items-center justify-center gap-3 md:gap-6 px-4 flex-nowrap mt-20">
  <img src="../assets/images/celebration.svg" alt="Celebrate" class="h-14 w-14 md:h-20 md:w-20 hanging-bounce" />
  <span class="text-3xl md:text-5xl lg:text-7xl font-bold whitespace-nowrap">SEE TODAY'S WINNERS</span>
  <img src="../assets/images/celebration.svg" alt="Celebrate" class="h-14 w-14 md:h-20 md:w-20 scale-x-[-1] hanging-bounce" />
</div>


  <!-- Winners List -->
  <TodaysWinner />
</template>


