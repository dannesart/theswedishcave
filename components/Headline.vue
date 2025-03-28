<template>
  <h1
    v-if="size === 1"
    class="font-bebas text-7xl md:text-[11rem] text-balance"
  >
    <slot />
  </h1>

  <h2 v-if="size === 2" class="font-bebas text-5xl md:text-8xl text-balance">
    <slot />
    <div v-if="underline" class="h-2 w-20 bg-black"></div>
  </h2>

  <h3
    v-if="size === 3"
    class="font-antonio text-3xl md:text-[2.5rem] leading-normal text-balance"
  >
    <slot />
    <div v-if="underline" class="h-1 w-10 bg-black"></div>
  </h3>
  <h4
    v-if="size === 4"
    class="min-w-0 w-full font-bebas text-3xl md:text-4xl truncate"
  >
    <slot />
    <div v-if="underline" class="h-1 w-10 bg-black"></div>
  </h4>
</template>

<script setup lang="ts">
type Props = {
  underline?: boolean;
  size?: number;
};

const { underline = false, size = 1 } = defineProps<Props>();
</script>
