<template>
  <NuxtLayout>
    <Chunk>
      <section class="relative flex">
        <div>
          <Headline :size="1">
            Our tribe
            <span
              class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
              >Is ready for a hunt.</span
            >
          </Headline>
        </div>
        <div class="hidden md:flex flex-1 justify-center items-center">
          <!-- <Image :src="'caveman-space-suit.webp'" :expandable="false" /> -->
        </div>
      </section>
    </Chunk>
    <Chunk>
      <div class="grid gap-8">
        <Headline :size="2" :underline="true">Our tribe</Headline>
        <Headline :size="3">Meet the tribe members</Headline>
      </div>
      <List :icon="'lucide:sword'">
        <Card>
          <template v-slot:image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black text-rose-50"
            >
              <Image :src="'caveman-space-suit.webp'" :expandable="false" />
            </div>
          </template>
          <template v-slot:title> Gus </template>
          <p>
            Gus is the leader of the tribe. He is a wise dude. <br />
            At least compared to the others.
          </p>
        </Card>
      </List>
    </Chunk>
  </NuxtLayout>
</template>
