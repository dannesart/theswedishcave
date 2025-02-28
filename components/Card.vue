<template>
  <article class="grid gap-4 w-full flex-1 max-w-xs">
    <div v-if="$slots.image" class="h-48">
      <slot name="image" />
    </div>
    <header v-if="$slots.title">
      <Headline :size="4">
        <slot name="title" />
      </Headline>
    </header>
    <div v-if="$slots.default">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts"></script>
