<template>
  <NuxtLayout>
    <section>
      <Headline :size="1">
        Creating experiences
        <span class="font-antonio text-5xl md:text-8xl block mb-9"
          >For your stone age brand.</span
        >
        <span class="font-antonio text-3xl md:text-[2.5rem] block">
          Reach out to our
          <NavLink path="/tribe" :active="true">Caveman</NavLink>
          for guidance through space & time.
        </span>
      </Headline>
    </section>

    <section class="grid gap-12">
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Offering</Headline>
        <Headline :size="3"
          >What our brave cavemen can offer you and your tribe</Headline
        >
      </div>
      <List :icon="'lucide:hand-heart'">
        <Card
          v-for="item in offering"
          :key="item.title"
          :link="{ label: 'Read more', path: item.path }"
        >
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

    <section class="grid gap-12 bg-amber-50 -mx-14 p-14">
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Campfire</Headline>
        <Headline :size="3"
          >Some of our breathtaking campfire tales. Told by some old and wise
          cavemen.</Headline
        >
      </div>
      <List :icon="'lucide:flame'">
        <Card
          v-for="item in tales"
          :key="item.title"
          :link="{ label: 'Read more', path: item.path }"
        >
          <template #image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black"
            >
              <Icon :name="item.icon" :class="'text-amber-50'" :size="100" />
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
    path: "/heavy-stuff",
  },
  {
    title: "thought process",
    description: "Let our brilliant cavemen be part of your thought process",
    icon: "lucide:brain",
    path: "/heavy-stuff",
  },
  {
    title: "The heavy lifting",
    description:
      "Some of our cavemens are smart and some are strong. Let them do the heavy work",
    icon: "lucide:biceps-flexed",
    path: "/heavy-stuff",
  },
];

const tales = [
  {
    title: "When we first met fire",
    description: "Our cavemens offer guidance through your ux journey",
    icon: "lucide:fire-extinguisher",
    path: "/heavy-stuff",
  },
  {
    title: "Journey to space",
    description: "Let our brilliant cavemen be part of your thought process",
    icon: "lucide:rocket",
    path: "/heavy-stuff",
  },
  {
    title: "Boxing against sharks",
    description:
      "Some of our cavemens are smart and some are strong. Let them do the heavy work",
    icon: "lucide:fish",
    path: "/heavy-stuff",
  },
];
</script>
