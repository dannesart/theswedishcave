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
          <Icon :name="'lucide:biceps-flexed'" :size="200" />
        </div>
      </section>
    </Chunk>
  </NuxtLayout>
</template>
