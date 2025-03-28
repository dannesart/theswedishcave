<template>
  <NuxtLayout>
    <Chunk>
      <Hero>
        <template v-slot:left>
          <Headline :size="1">
            Legends by the Fire
            <span
              class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
              >Epic Tales of Gus & His Fearless Tribe.</span
            >
          </Headline>
        </template>
        <template v-slot:right>
          <div class="hidden md:flex flex-1 justify-center items-center">
            <FireIcon />
          </div>
        </template>
      </Hero>
    </Chunk>
    <Chunk>
      <section class="grid gap-28">
        <article class="grid gap-10" v-for="story in stories">
          <Headline :size="2">{{ story.title }}</Headline>
          <Like />
          <div class="grid gap-24 md:grid-cols-[1fr,auto]">
            <Paragraph>
              <div class="grid gap-5 text-xl">
                <p v-for="segment in story.body">
                  {{ segment }}
                </p>
              </div>
            </Paragraph>
            <div class="md:h-96 md:w-96">
              <Image
                :src="story.image"
                v-if="story.image"
                :expandable="false"
              />
            </div>
          </div>
        </article>
      </section>
    </Chunk>
  </NuxtLayout>
</template>

<script setup>
const storiesStore = useStoriesStore();
const { stories } = storeToRefs(storiesStore);
</script>
