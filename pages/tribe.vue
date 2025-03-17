<template>
  <NuxtLayout>
    <Chunk>
      <section class="relative flex">
        <div>
          <Headline :size="1">
            Get to know us
            <span
              class="font-antonio text-3xl md:text-[2.5rem] block leading-normal"
              >No spears? No problem. We craft ideas sharper than stone
              axes.</span
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
        <Headline :size="2" :underline="true">Cave location</Headline>
        <Headline :size="3">Find us here</Headline>
      </div>
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
              <Image :src="'gus.webp'" :expandable="false" />
            </div>
          </template>
          <template v-slot:title> Gus </template>
          <p>
            Gus, our fearless (and slightly questionable) leader. <br />
            Wise? Maybe.<br />
            Determined? Absolutely
          </p>
        </Card>
        <Card>
          <template v-slot:image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black text-rose-50"
            >
              <Image :src="'melvin.webp'" :expandable="false" />
            </div>
          </template>
          <template v-slot:title> Melvin </template>
          <p>
            Melvin is brave.. not bright. <br />
            But he has a heart of gold
          </p>
        </Card>
        <Card>
          <template v-slot:image>
            <div
              class="rounded-xl h-full flex justify-center items-center bg-black text-rose-50"
            >
              Missing cave painting
            </div>
          </template>
          <template v-slot:title> You? </template>
          <p>Enter your story here..</p>
        </Card>
      </List>
    </Chunk>
  </NuxtLayout>
</template>
