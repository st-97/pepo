<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    default: 'text-base',
  },
  fontColor: {
    type: String,
    default: 'text-black',
  },
  backgroundColor: {
    type: String,
    default: 'bg-[#C8FF45]',
  },
  borderRadius: {
    type: String,
    default: 'rounded-md',
  },
  borderColor: {
    type: String,
    default: 'border-transparent',
  },
  borderWidth: {
    type: String,
    default: 'border',
  },
  width: {
    type: String,
    default: '', // auto by default
  },
  height: {
    type: String,
    default: '', // auto by default
  },
  fontClass: {
    type: String,
    default: 'font-norwester', // Uses Anton by default
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>

<template>
  <button
    :class="[
      fontSize,
      fontColor,
      backgroundColor,
      borderRadius,
      borderWidth,
      borderColor,
      width,
      height,
      fontClass,
      'px-6 py-3 transition hover:opacity-90'  // <- removed 'font-bold'
    ]"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
