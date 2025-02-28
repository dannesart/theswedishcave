<template>
  <NuxtLayout>
    <h1 class="font-bebas text-6xl md:text-9xl mb-36">
      Creating experiences
      <span class="font-antonio text-5xl md:text-8xl block mb-7"
        >For your stone age brand.</span
      >
      <span class="font-antonio text-[2.5rem] block">
        Reach out to our
        <nuxt-link
          :class="'text-rose-950 cursor-pointer border-b-4 border-rose-950'"
          >caveman</nuxt-link
        >
        for guidance through space & time.
      </span>
    </h1>

    <section class="grid gap-12">
      <div>
        <Headline :size="2" :underline="true">Offering</Headline>
        <Headline :size="3"
          >What our brave cavemen can offer you and your tribe</Headline
        >
      </div>
      <List :icon="'lucide:hand-heart'">
        <Card v-for="item in offering" :key="item.title">
          <template #image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black"
            >
              <Icon :name="item.icon" :class="'text-rose-50'" :size="100" />
            </div>
          </template>
          <template #title> {{ item.title }} </template>
          <p>{{ item.description }}</p>
        </Card>
      </List>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const offering = [
  {
    title: "Guidance",
    description: "Our cavemens offer guidance through your ux journey",
    icon: "lucide:milestone",
  },
  {
    title: "thought process",
    description: "Let our brilliant cavemen be part of your thought process",
    icon: "lucide:brain",
  },
  {
    title: "The heavy lifting",
    description:
      "Some of our cavemens are smart and some are strong. Let them do the heavy work",
    icon: "lucide:biceps-flexed",
  },
];
</script>
