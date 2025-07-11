<script setup>
import CourseCard from './cardfan/CourseCard.vue'
import { defineProps, defineEmits, ref, onMounted, nextTick } from 'vue'
import { CourseEnum } from '../enums/courseEnum.js'

const props = defineProps({
  selectedGame: Object
})
const emit = defineEmits(['back', 'courseSelected'])

// Dynamically get all courses from the enum
const courses = Object.values(CourseEnum)

function handleCourseClick(course) {
  emit('courseSelected', course)
}

const popInStates = ref([])

onMounted(async () => {
  popInStates.value = courses.map(() => false)
  await nextTick()
  courses.forEach((_, i) => {
    setTimeout(() => {
      popInStates.value[i] = true
    }, 120 * i)
  })
})
</script>

<template>
  <div class="w-full max-w-6xl mt-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
      <div
        v-for="(course, i) in courses"
        :key="course.key"
        @click="handleCourseClick(course)"
        class="cursor-pointer w-full flex justify-center"
      >
        <div :class="['pop-in-card', { 'pop-in': popInStates[i] }]">
          <CourseCard
            :name="course.name"
            :src="course.image"
            :glow="course.glow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-norwester {
  font-family: 'norwester', sans-serif;
}
.pop-in-card {
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.pop-in-card.pop-in {
  opacity: 1;
  transform: scale(1);
}
</style>
