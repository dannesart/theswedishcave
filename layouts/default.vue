<template>
  <div class="flex flex-col min-h-svh bg-rose-50">
    <header class="px-4 md:px-14 py-9 flex justify-between">
      <nuxt-link
        :to="'/'"
        class="hover:text-rose-50 text-4xl font-bebas group relative"
      >
        <span class="relative z-10">
          the<br />
          swedish<br />
          cave
        </span>
        <div
          class="absolute bg-rose-400 inset-0 scale-y-0 transition-all group-hover:scale-y-100 origin-bottom"
        ></div>
      </nuxt-link>
      <nav>
        <button
          class="md:hidden fixed z-50 right-3 md:right-10"
          @click="showMenu = !showMenu"
          :class="{ 'text-rose-50': showMenu }"
        >
          <Icon
            :name="showMenu ? 'lucide:x' : 'lucide:align-right'"
            :size="60"
          />
        </button>
        <ul
          class="flex flex-col origin-top-right transition-transform duration-300 md:flex-row p-10 md:p-0 gap-10 bg-black inset-0 z-40 fixed md:bg-transparent md:relative"
          :class="{
            'opacity-0 scale-50 md:scale-100 md:opacity-100': !showMenu,
            'scale-100 opacity-100': showMenu,
          }"
        >
          <li v-for="item in menu" :key="item.name">
            <NavLink :path="item.path">{{ item.name }}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="px-4 md:px-14 py-9 grid gap-20 md:gap-44">
      <slot />
    </main>
    <footer
      class="px-4 md:px-14 py-9 flex justify-between bg-black text-rose-50 mt-20 md:mt-44"
    >
      <div class="flex gap-6 items-center">
        <div
          class="w-24 h-24 pt-4 rounded-xl bg-rose-50 flex justify-center items-center text-black"
        >
          <Headline :size="2">SC</Headline>
        </div>
        <div>
          <Headline :size="4"> Well that's it folks! </Headline>
          <p>hey@sc.rocks</p>
          <p>Call me?</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const menu = [
  { name: "Cave", path: "/" },
  { name: "Campfire", path: "/campfire" },
  { name: "Heavy stuff", path: "/heavy-stuff" },
  { name: "Tribe", path: "/tribe" },
];
</script>
