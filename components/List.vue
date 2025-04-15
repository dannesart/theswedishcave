<template>
  <div class="flex flex-col sm:flex-row gap-6 md:gap-16 min-h-56">
    <div class="relative flex flex-col items-center">
      <div class="w-[1px] flex-1 bg-brand-200"></div>
      <div class="w-auto h-24 flex items-center justify-center" v-if="icon">
        <Icon :name="icon" size="60" />
      </div>
      <div class="w-[1px] flex-1 bg-brand-200"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 flex-1 gap-10">
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
