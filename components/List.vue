<template>
  <div class="flex gap-16 min-h-56">
    <div class="relative flex flex-col items-center">
      <div class="w-[1px] flex-1 bg-black"></div>
      <div class="w-auto h-24 flex items-center justify-center" v-if="icon">
        <Icon :name="icon" size="60" />
      </div>
      <div class="w-[1px] flex-1 bg-black"></div>
    </div>
    <div class="flex flex-col md:flex-row gap-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  icon?: string;
};

const { icon } = defineProps<Props>();
</script>
