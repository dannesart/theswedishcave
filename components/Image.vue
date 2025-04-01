<template>
  <div
    class="rounded-xl overflow-hidden h-full w-full flex justify-center items-center bg-black group cursor-pointer"
  >
    <img
      :src="src"
      class="object-cover group-hover:scale-125 transition-transform"
      @click="handleClick"
    />
  </div>
  <Modal v-if="expandable" ref="modal">
    <img :src="src" class="max-h-full max-w-full" />
  </Modal>
</template>

<script setup lang="ts">
type Props = {
  src: string;
  expandable?: boolean;
};
const { src, expandable = false } = defineProps<Props>();

const expanded = ref(false);
const modal = ref();

const handleClick = () => {
  if (expandable) {
    modal.value.openModal();
    // expanded.value = !expanded.value;
  }
};
</script>
