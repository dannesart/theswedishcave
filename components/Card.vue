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
    <NuxtLink
      v-if="link"
      :to="link.path"
      :class="'text-xl flex items-center gap-2 font-antonio'"
      >{{ link.label }}
      <Icon name="lucide:arrow-right" size="30" />
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
type Props = {
  link?: {
    label: string;
    path: string;
  };
};

const { link } = defineProps<Props>();
</script>
