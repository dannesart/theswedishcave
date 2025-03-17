<template>
  <button
    class="min-w-14 h-14 text-2xl rounded-full flex items-center justify-center bg-rose-50 text-black"
    @mouseenter="handleHover"
    ref="dropDownBtn"
    :popovertarget="dropid"
    :id="btnid"
  >
    <Icon v-if="icon" :name="icon" />
    <span v-if="label">{{ label }}</span>
  </button>
  <div
    class="bg-white text-black p-4 rounded-lg w-fit shadow-lg"
    ref="dropDown"
    :id="dropid"
    popover
    :anchor="btnid"
  >
    <div class="grid gap-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label?: string;
  icon?: string;
};

const { label, icon } = defineProps<Props>();
const btnid = crypto.randomUUID();
const dropid = crypto.randomUUID();
const dropDown = ref();
const dropDownBtn = ref();

const handleHover = () => {};
</script>

<style scoped>
[popover] {
  inset: unset;
  top: anchor(bottom);
  left: anchor(left);
  margin-top: 1rem;
  transform-origin: top left;
  animation: show 0.1s ease-in-out forwards;
}

@keyframes show {
  from {
    translate: 0 -1rem;
  }
  to {
    translate: 0 0;
  }
}
</style>
