<template>
  <section
    class="px-4 md:px-14 py-10 md:py-20"
    :class="{
      'bg-amber-950': bg === 'amber',
      'bg-brand-950': bg === 'brand',
      'bg-brand-50': bg === 'rose',
      'bg-black': bg === 'black',
    }"
  >
    <div class="grid gap-12 2xl:w-5/6 mx-auto">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  bg?: "amber" | "rose" | "black" | "brand";
};

const { bg } = defineProps<Props>();
</script>
