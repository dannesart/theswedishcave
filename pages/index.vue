<template>
  <NuxtLayout>
    <Chunk>
      <Hero>
        <template v-slot:left>
          <Headline :size="1">
            <span class="block" v-gsap.whenVisible.once.from="{ y: -40 }">
              We drag
            </span>
            <div class="flex gap-6">
              <p
                class="inline-block"
                v-gsap.whenVisible.delay-700.once.from="{ opacity: 0, x: 40 }"
              >
                <template v-if="!workingNeon">
                  <span :class="{ 'broke-neon': !workingNeon }">b</span
                  ><span>r</span
                  ><span :class="{ 'broke-neon': !workingNeon }">ands</span>
                </template>
                <template v-else>
                  <span :class="{ neon: workingNeon }">brands </span>
                </template>
              </p>
              <span
                class="inline-block"
                v-gsap.whenVisible.delay-1400.once.from="{
                  opacity: 0,
                  scale: 0.3,
                }"
              >
                out
              </span>
            </div>
            of the Stone Age
            <span
              class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
            >
              with killer UX and design.
            </span>
          </Headline>
        </template>
        <template v-slot:right>
          <div
            class="hidden md:flex flex-none justify-center items-center relative"
          >
            <Icon
              :name="'lucide:stars'"
              :size="30"
              :class="'absolute top-0 star '"
            />
            <RocketIcon />
            <Icon
              :name="'lucide:stars'"
              :size="50"
              :class="'absolute top-20 left-5 star '"
            />
            <Icon
              :name="'lucide:stars'"
              :size="25"
              :class="'absolute top-44 right-0 star '"
            />
            <Icon
              :name="'lucide:earth'"
              :size="25"
              :class="'absolute bottom-0 left-10 rotate'"
            />
          </div>
        </template>
      </Hero>
    </Chunk>

    <Chunk>
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Services</Headline>
        <Headline :size="3"
          >Branding, Design, and UX Optimization <br />
          — because your brand deserves more than just a loincloth
        </Headline>
      </div>
      <List :icon="'lucide:hand-heart'">
        <Card
          v-for="(item, index) in offering"
          :key="item.title"
          :link="{ label: 'Read more', path: item.path }"
          :index="index"
        >
          <template #image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black"
            >
              <Image v-if="item.image" :src="item.image" />
            </div>
          </template>
          <template #title> {{ item.title }} </template>
          <Text>{{ item.description }}</Text>
        </Card>
      </List>
    </Chunk>

    <Chunk :bg="'brand'">
      <div class="grid gap-12 relative z-10">
        <div class="grid gap-8">
          <Headline :size="2" :underline="true">Campfire</Headline>
          <Headline :size="3"
            >Gather 'round, cavemen and women! <br />
            Our tales are full of wisdom (and just a little bit of madness).
            <br />
            Let us show you what happens when raw creativity meets
            strategy.</Headline
          >
        </div>
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
        <!-- <List :icon="'lucide:flame'">
          <Card
            v-for="(item, index) in stories"
            :key="item.title"
            :link="{ label: 'Read more', path: '/campfire#' + item.title }"
            :index="index"
          >
            <template #image>
              <div
                class="rounded-xl h-full flex justify-center items-center bg-black"
              >
                <Icon
                  name="lucide:flame"
                  v-if="!item.image"
                  :class="'text-amber-50'"
                  :size="100"
                />
                <Image v-if="item.image" :src="item.image" />
              </div>
            </template>
            <template #title> {{ item.title }} </template>
            <Text>{{ item.description }}</Text>
          </Card>
        </List> -->
      </div>
    </Chunk>

    <Chunk>
      <Headline :size="2" :underline="true">
        Evolve your brand with us.
      </Headline>
      <Headline :size="3">
        <span>
          Ready to break out of your cave and into the future? <br />
          Let's build something legendary.
        </span>
      </Headline>
    </Chunk>

    <Chunk>
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Memes</Headline>
        <Headline :size="3"
          >Need a laugh while your brand gets revamped? <br />
          We got memes and madness. Let’s have some fun.</Headline
        >
      </div>
      <List :icon="'lucide:drama'">
        <Card v-for="(item, index) in memes" :key="item.title" :index="index">
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
    </Chunk>
  </NuxtLayout>
</template>

<script setup lang="ts">
const storiesStore = useStoriesStore();
const { stories } = storeToRefs(storiesStore);
const workingNeon = ref(true);
// setTimeout(() => {
//   workingNeon.value = false;
// }, 4000);

const now = computed(() => {
  const date = new Date();
  return date.toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
    hour: "2-digit",
    minute: "2-digit",
  });
});

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
:root {
  --color-brand: #eab308;
}
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
.star {
  animation: blink 3s linear infinite, rotate 100s linear infinite;
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

.broke-neon {
  /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
    0 0 42px rgb(255, 0, 157), 0 0 82px rgb(255, 0, 157),
    0 0 92px rgb(255, 0, 157), 0 0 102px rgb(255, 0, 157),
    0 0 151px rgb(255, 0, 157); */
  animation: flicker 3s infinite alternate;
}

.neon {
  --brand: #fde047;
  @apply relative text-brand-50;
  /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fb7185,
    0 0 82px #fb7185, 0 0 92px #fb7185, 0 0 102px #fb7185, 0 0 151px #fb7185; */
  /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ca8a04,
    0 0 82px #ca8a04, 0 0 92px #ca8a04, 0 0 102px #ca8a04, 0 0 151px #ca8a04; */
  text-shadow: 0px 0px 3px var(--brand), 0px 0px 2px #fff, 0px 0px 10px #fff,
    0px 0px 10px var(--brand), 0px 0px 20px var(--brand),
    0px 0px 50px var(--brand), 0px 0px 100px var(--brand), 0px 0px 500px #fff;
}
/* .neon:after {
  content: "";
  @apply bg-brand-500 absolute inset-x-0 inset-6 -z-10;
} */

@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fb7185,
      0 0 82px #fb7185, 0 0 92px #fb7185, 0 0 102px #fb7185, 0 0 151px #fb7185;
  }
  20%,
  24%,
  55% {
    color: #fff;
    text-shadow: none;
  }
}
</style>
