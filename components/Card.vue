<template>
  <article
    class="grid grid-rows-[1fr_2.5rem_5rem_auto] gap-4 card flex-1 w-full"
    v-gsap.whenVisible.once.from="{
      scale: 0.2,
    }"
  >
    <div v-if="$slots.image" class="aspect-square">
      <slot name="image" />
    </div>
    <header v-if="$slots.title" class="w-full overflow-hidden">
      <Headline :size="4">
        <slot name="title" />
      </Headline>
    </header>
    <Text v-if="$slots.default">
      <slot />
    </Text>
    <NuxtLink
      v-if="link"
      :to="link.path"
      :class="'text-2xl inline-flex max-w-fit flex-col gap-2 font-antonio group'"
    >
      <div class="flex items-center gap-2 group-hover:text-brand-400">
        {{ link.label }}
        <Icon name="lucide:arrow-right" size="30" />
      </div>
      <div
        class="h-1 w-full bg-black scale-x-0 group-hover:scale-100 transition-transform origin-left"
      ></div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
type Props = {
  link?: {
    label: string;
    path: string;
  };
  index?: number;
};

const { link } = defineProps<Props>();
</script>
