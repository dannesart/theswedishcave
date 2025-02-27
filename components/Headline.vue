<template>
  <h1 v-if="size === 1">
    <slot />
  </h1>

  <h2 v-if="size === 2" class="font-bebas text-8xl">
    <slot />
  </h2>
</template>

<script setup lang="ts">
type Props = {
  underline?: boolean;
  size?: number;
};

const { underline = false, size = 1 } = defineProps<Props>();
</script>
