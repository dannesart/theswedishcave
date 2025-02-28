<template>
  <nuxt-link
    :to="path"
    class="hover:text-rose-50 text-[2.5rem] font-antonio text-rose-50 md:text-black cursor-pointer hover:border-b-4 border-rose-950 relative group"
    :class="{
      'text-rose-950 border-b-4': active,
    }"
    active-class="text-rose-950 border-b-4"
  >
    <span class="relative z-10">
      <slot />
    </span>
    <div
      class="absolute bg-rose-400 inset-0 scale-y-0 transition-all group-hover:scale-y-100 origin-bottom"
    ></div>
  </nuxt-link>
</template>

<script setup lang="ts">
type Props = {
  path: string;
  active?: boolean;
};

const { path } = defineProps<Props>();
</script>
