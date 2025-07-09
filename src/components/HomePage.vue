  <script setup>
  import { ref } from 'vue'
  import bgImage from '../assets/images/bg.svg'
  import CustomButton from '../components/pepo_button.vue'
  import CardFan from '../components/cardfan/cardfan.vue'
    import TodaysWinner from '../components/cardfan/todaysWinner.vue'


  defineProps({
    msg: String,
  })

  const count = ref(0)
  </script>

  <template>
    <!-- Fixed full-screen background image -->
    <div
      class="fixed inset-0 bg-cover bg-center -z-10"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>

  <div class="w-full bg-transparent text-white py-16 px-4 relative z-50">

      <!-- Centered Heading -->
      <div class="text-xl font-semibold text-center">
      </div>

      <!-- Bottom left SVG -->
      <img
        src="../assets/images/pepo.svg"
        alt="Left Logo"
        class="h-12 absolute bottom-0 left-10 mb-2"
      />

      <!-- Bottom right Custom Button -->
      <CustomButton
        label="Parents Click Here"
        fontSize="text-2xl"
        fontClass="font-norwester tracking-wider"
        :onClick="handleClick"
        class="absolute bottom-0 right-10 mb-2"
      />
    </div>
  
  <!-- Green section -->
    <div class="w-full bg-transparent text-white relative z-50">
      <!-- Centered text + coin -->
      <div class="flex items-center justify-center m-0 p-0 h-40">
  <label class="text-8xl font-semibold">
    LEARN AND WIN
        </label>
        <img
          src="../assets/images/coin.svg"
          alt="Coin Icon"
          class="h-20 w-20 ml-6"
        />
      </div>

      <!-- Controller icon -->
      <div class="left-1.25rem z-0 absolute top-10">
        <img
          src="../assets/images/controller.svg"
          alt="Controller Icon"
          class="h-30"
        />
      </div>
  


    </div>
          <CardFan />


  <div class="w-full bg-transparent text-white py-16 px-4 relative z-30">
    <!-- 🎯 Centered Button at Top -->
      
  <CustomButton
    label="Start Now"
    fontSize="text-2xl"
    fontClass="font-norwester tracking-wider"
    :onClick="handleClick"
    
  class="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FFFF00] font-bold shadow-lg h-12 w-22 flex items-center justify-center"
      :style="{ borderRadius: '20px' }"/>


    <!-- 🏆 Trophy Image at Top-Right -->
    <img
      src="../assets/images/trophy.svg"
      alt="Top Right Trophy"
      class="h-32 absolute right-0 top-0 -mt-8"
    />
  </div>
    <div class="w-full bg-transparent text-white relative z-50">
      <!-- Centered text + coin -->
      <div class="flex items-center justify-center m-0 p-0 h-40">
        <img
          src="../assets/images/celebration.svg"
          alt="Coin Icon"
          class="h-20 w-20 mr-6"
        />
  <label class="text-7xl font-semibold">
    SEE TODAY'S WINNERS
        </label>
        <img
          src="../assets/images/celebration.svg"
          alt="Coin Icon"
            class="h-20 w-20 ml-6 scale-x-[-1]"

        />
      </div>
    </div>
          <TodaysWinner />


  </template>

  