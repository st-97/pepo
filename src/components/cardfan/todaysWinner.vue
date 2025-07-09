      <script setup>
      import { ref, onMounted, onBeforeUnmount } from 'vue'
      import playstation from '../../assets/images/playstation.svg'
      import fortnite from '../../assets/images/fortnite.svg'
      import roblox from '../../assets/images/robolox.svg'
      import minecraft from '../../assets/images/minecraft.svg'

      const cards = ref([
        { src: playstation, glow: '#C8FF45', name: 'mofei wang' },
        { src: fortnite, glow: '#C8FF45', name: 'bill chan' },
        { src: minecraft, glow: '#C8FF45', name: 'lara scott' },
        { src: roblox, glow: '#C8FF45', name: 'jake rubin' },
      ])

      const animated = ref(false)
      const containerRef = ref(null)

      let observer

      onMounted(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              animated.value = true
              observer.disconnect()
            }
          },
          {
            threshold: 0.3, // triggers when 30% is visible
          }
        )

        if (containerRef.value) {
          observer.observe(containerRef.value)
        }
      })

      onBeforeUnmount(() => {
        if (observer) observer.disconnect()
      })

      function getCardStyle(index) {
        const cardCount = cards.value.length
        const spacing = 'clamp(100px, 20vw, 300px)'
        const totalWidth = `calc(${cardCount} * ${spacing})`
        const baseOffset = `calc(-0.5 * ${totalWidth} + 0.5 * ${spacing})`

        return {
          left: `calc(50% + ${baseOffset} + ${index} * ${spacing})`,
          transform: 'translate(-50%, -50%)',
          zIndex: animated.value ? 1 : 0,
        }
      }
      </script>

      <template>
        <div ref="containerRef" class="relative w-full h-[500px] overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-full h-full">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="absolute top-1/2 left-1/2 transform transition-all duration-700 ease-out-back"
                :style="animated ? getCardStyle(index) : {}"
              >
                <!-- White card container -->
        <div
    class="w-[200px] h-[300px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6"
    :style="{ boxShadow: `0 0 20px ${card.glow}` }"
  >
    <!-- Title -->
    <label class="text-base font-semibold text-black mb-2 text-center uppercase">
      {{ card.name }}</label>
  
    <!-- Image -->
    <img
      :src="card.src"
      :alt="`${card.name} image`"
      class="w-full h-auto max-h-49 object-contain"
    />
  </div>

            </div>

            </div>
          </div>
        </div>
      </template>

      <style scoped>
      .ease-out-back {
        transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      </style>
