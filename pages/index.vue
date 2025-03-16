<template>
  <NuxtLayout>
    <section class="relative flex">
      <Headline :size="1">
        <span> We drag brands out of the Stone Age </span>
        <!-- <span class="text-5xl md:text-8xl block mb-9 font-patua"
          >Stone Age with killer UX and design.</span
        > -->
        <span
          class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
        >
          with killer UX and design.
        </span>
      </Headline>

      <div class="hidden md:flex flex-1 justify-center items-center relative">
        <Icon
          :name="'lucide:stars'"
          :size="30"
          :class="'absolute top-0 blink'"
        />
        <RocketIcon />
        <Icon
          :name="'lucide:stars'"
          :size="50"
          :class="'absolute top-20 left-44 blink'"
        />
        <Icon
          :name="'lucide:stars'"
          :size="25"
          :class="'absolute top-44 right-44 blink'"
        />
        <Icon
          :name="'lucide:earth'"
          :size="25"
          :class="'absolute bottom-0 left-64 rotate'"
        />
      </div>
    </section>

    <section class="grid gap-12">
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Services</Headline>
        <Headline :size="3"
          >Branding, Design, and UX Optimization – because your brand deserves
          more than just a loincloth
        </Headline>
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

    <section
      class="grid gap-12 bg-amber-50 -mx-4 md:-mx-14 px-4 py-24 md:px-14 md:py-44"
    >
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Campfire</Headline>
        <Headline :size="3"
          >Some of our breathtaking campfire tales. Told by some of our oldest
          and wisest.</Headline
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

    <section class="grid gap-12">
      <Headline :size="2" :underline="true"> Call to action </Headline>
      <Headline :size="3">
        Ready to evolve? <NavLink :path="'/tribe'"> Contact Gus </NavLink> and
        let's chisel out your brand's masterpiece!
      </Headline>
    </section>

    <section class="grid gap-12">
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Memes</Headline>
        <Headline :size="3"
          >Just here for the memes aren't ya? We got you.</Headline
        >
      </div>
      <List :icon="'lucide:drama'">
        <Card v-for="item in memes" :key="item.title">
          <template #image>
            <Image :src="item.image" :expandable="true" />
          </template>
          <template #title> {{ item.title }} </template>
          <p>{{ item.description }}</p>
          <div class="flex justify-end">
            <Like />
          </div>
        </Card>
      </List>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const offering = [
  {
    title: "Guidance",
    description: "Our caveman, Gus, will guide you through your ux journey",
    icon: "lucide:milestone",
    path: "/heavy-stuff",
  },
  {
    title: "thought process",
    description: "Let our Gus be part of your thought process",
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
  {
    title: "Holding hands",
    description:
      "Some of our cavemens are smart and some are strong. Let them do the heavy work",
    icon: "lucide:handshake",
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
  {
    title: "Dancing with dinosaurs",
    description: "Dance off with dinosaurs. Our cavemens are the best",
    icon: "lucide:turtle",
    path: "/heavy-stuff",
  },
];

const memes = [
  {
    title: "Rock rock rock",
    description: "",
    image: "rock-rock-rock.jpg",
  },
  {
    title: "This is the way",
    description: "",
    image: "guidance.jpg",
  },
  {
    title: "Damn I'm old",
    description: "",
    image: "ps3.webp",
  },
  {
    title: "Learning the hard way",
    description: "",
    image: "cut-open-head.webp",
  },
];
</script>

<style scoped>
.rotate {
  animation: rotate 20s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.blink {
  animation: blink 3s linear infinite;
  &:nth-of-type(2) {
    animation-delay: 1s;
  }
  &:nth-of-type(3) {
    animation-delay: 1.5s;
  }
}

@keyframes blink {
  0%,
  100% {
    scale: 1;
  }
  50% {
    scale: 0.5;
  }
}
</style>
