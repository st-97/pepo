<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  font: {
    type: String,
    default: 'font-norwester', // Uses Anton by default
  },
  size: {
    type: String,
    default: 'text-base',
  },
  color: {
    type: String,
    default: 'text-black',
  },
  padding: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p :class="[font, size, color, padding]">
    {{ text }}
  </p>
</template>
