<template>
  <NuxtPage />
</template>
<script setup>
const { fetchStories } = useStoriesStore();

fetchStories();
</script>
