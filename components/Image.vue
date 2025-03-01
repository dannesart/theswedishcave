<template>
  <div
    class="rounded-xl overflow-hidden h-full flex justify-center items-center bg-black group cursor-pointer"
  >
    <img
      :src="src"
      class="h-full group-hover:scale-125 transition-transform"
      @click="handleClick"
    />
  </div>
  <div
    v-if="expandable"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    v-show="expanded"
    @click="expanded = false"
  >
    <img :src="src" class="max-h-full max-w-full" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  src: string;
  expandable?: boolean;
};
const { src, expandable = false } = defineProps<Props>();

const expanded = ref(false);

const handleClick = () => {
  if (expandable) {
    expanded.value = !expanded.value;
  }
};
</script>
