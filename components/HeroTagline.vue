<template>
  <div
    class="text-xl md:text-2xl lg:text-3xl leading-relaxed mt-4 md:mt-6 text-center w-full max-w-full px-4 break-words"
  >
    <slot>
      <template v-if="text">
        {{ text }}
      </template>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
