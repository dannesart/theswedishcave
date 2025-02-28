<template>
  <div class="flex items-center gap-3">
    <button
      @click="like"
      class="flex justify-center items-center p-5 rounded-full"
      v-wave
      :class="{
        'text-rose-950': liked,
        'text-black': !liked,
      }"
    >
      <Icon :name="'lucide:hand-metal'" size="30" />
    </button>
    <span class="text-xl font-bebas w-3 flex justify-center">
      {{ sum }}
    </span>
    <button
      @click="dislike"
      v-wave
      class="flex justify-center items-center p-5 rounded-full"
      :class="{
        'text-rose-950': disliked,
        'text-black': !disliked,
      }"
    >
      <Icon :name="'lucide:fish'" size="30" />
    </button>
  </div>
</template>

<script setup lang="ts">
const likes = ref(0);
const myValue = computed(() => (liked.value ? 1 : disliked.value ? -1 : 0));
const sum = computed(() => likes.value + myValue.value);
const liked = ref(false);
const disliked = ref(false);
const like = () => {
  if (liked.value) return;
  liked.value = true;
  disliked.value = false;
};
const dislike = () => {
  if (disliked.value) return;
  liked.value = false;
  disliked.value = true;
};
</script>
