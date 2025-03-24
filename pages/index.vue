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
              :class="'absolute top-0 star'"
            />
            <RocketIcon />
            <Icon
              :name="'lucide:stars'"
              :size="50"
              :class="'absolute top-20 left-5 star'"
            />
            <Icon
              :name="'lucide:stars'"
              :size="25"
              :class="'absolute top-44 right-0 star'"
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
          >Branding, Design, and UX Optimization – because your brand deserves
          more than just a loincloth
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
              <Icon
                v-if="item.icon"
                :name="item.icon"
                :class="'text-rose-50'"
                :size="100"
              />
              <Image v-if="item.image" :src="item.image" />
            </div>
          </template>
          <template #title> {{ item.title }} </template>
          <Text>{{ item.description }}</Text>
        </Card>
      </List>
    </Chunk>

    <Chunk :bg="'amber'">
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
        <List :icon="'lucide:flame'">
          <Card
            v-for="(item, index) in tales"
            :key="item.title"
            :link="{ label: 'Read more', path: item.path }"
            :index="index"
          >
            <template #image>
              <div
                class="rounded-xl h-full flex justify-center items-center bg-black"
              >
                <Icon :name="item.icon" :class="'text-amber-50'" :size="100" />
              </div>
            </template>
            <template #title> {{ item.title }} </template>
            <Text>{{ item.description }}</Text>
          </Card>
        </List>
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
          >Need a laugh while your brand gets revamped? We got memes and
          madness. Let’s have some fun.</Headline
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
const workingNeon = ref(true);
setTimeout(() => {
  workingNeon.value = false;
}, 4000);

const offering = [
  {
    title: "UX",
    description:
      "Great UX isn’t just pretty—it’s seamless, intuitive, and makes users want to stay.",
    icon: "lucide:arrow-down-to-dot",
    path: "/heavy-stuff",
  },
  {
    title: "Story telling",
    description: "Let’s tell your story the way it deserves to be told. ",
    image: "adventure.webp",
    path: "/heavy-stuff",
  },
  {
    title: "Branding",
    description: "Ready to evolve? Let’s make your brand legendary. 🔥",
    image: "dress-in-pink.png",
    path: "/heavy-stuff",
  },
  {
    title: "Implementation",
    description: "Let’s bring your vision to life. 🚀",
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
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fb7185,
    0 0 82px #fb7185, 0 0 92px #fb7185, 0 0 102px #fb7185, 0 0 151px #fb7185;
}

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
