<template>
  <NuxtLayout>
    <Chunk>
      <section class="relative flex">
        <Headline :size="1">
          At The Swedish Cave
          <span
            class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
          >
            We catapult brands from the Stone Age into the future with sharp UX
            and jaw-dropping design—because chiseling logos into rock just
            doesn’t cut it anymore.
          </span>
        </Headline>
        <div class="hidden md:flex flex-1 justify-center items-center">
          <div class="md:h-96 md:w-96">
            <!-- <Icon :name="'lucide:biceps-flexed'" :size="200" /> -->
            <Image :src="'dress-in-yellow.png'" />
          </div>
        </div>
      </section>
      <Bento>
        <template #large-1>
          <div class="flex flex-col gap-6 p-6">
            <Headline :size="2" :underline="false">
              <span class="text-accent-300"
                >We are the ones that takes the fight</span
              ></Headline
            >
          </div>
        </template>
        <template #small-1>
          <div
            class="w-full h-full flex flex-col justify-center items-center gap-3"
          >
            <h2 class="text-3xl font-bold text-center">Join the tribe</h2>
            <p class="text-center">
              We’re not just a team; we’re a tribe. <br />
              We’re all about collaboration, creativity, and a sprinkle of
              madness.
            </p>
          </div>
        </template>
        <template #small-2>
          <Image v-if="offering[1]?.image" :src="offering[1].image" />
        </template>
        <template #small-3>
          <Image v-if="offering[3]?.image" :src="offering[3].image" />
        </template>
        <template #small-4>
          <div
            class="w-full h-full flex flex-col justify-between items-end p-4"
          >
            <p class="text-xs">59.334591°, 18.063240°</p>
            <p class="text-3xl">
              {{ now }}
            </p>
          </div>
        </template>
        <template #large-2>
          <Image :src="'cat-walk.png'" />
        </template>
        <template #large-3>
          <div class="absolute inset-0">
            <Image :src="'coffee-sketch.png'" />
          </div>
        </template>
        <template #large-4>
          <div
            class="w-full h-full bg-brand-800 p-6 flex justify-center items-center"
          >
            <Headline :size="1" :underline="false">
              <span class="text-accent-300"
                >Carpe diem or what ever</span
              ></Headline
            >
          </div>
        </template>
      </Bento>
    </Chunk>
  </NuxtLayout>
</template>

<script setup lang="ts">
const offering = [
  {
    title: "UX",
    description:
      "Great UX isn’t just pretty—it’s seamless, intuitive, and makes users want to stay.",
    image: "ux-2.webp",
    path: "/services#ux",
  },
  {
    title: "Story telling",
    description: "Let’s tell your story the way it deserves to be told. ",
    image: "adventure.webp",
    path: "/services#story-telling",
  },
  {
    title: "Branding",
    description: "Ready to evolve? Let’s make your brand legendary. 🔥",
    image: "dress-in-yellow.png",
    path: "/services#branding",
  },
  {
    title: "Implementation",
    description: "Let’s bring your vision to life. 🚀",
    image: "drag.webp",
    path: "/services#implementation",
  },
];
</script>
