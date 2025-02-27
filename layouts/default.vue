<template>
  <div class="flex flex-col min-h-svh bg-rose-50">
    <header class="px-14 py-9 flex justify-between">
      <div class="text-4xl font-bebas">
        the<br />
        swedish<br />
        cave
      </div>
      <nav>
        <button
          class="md:hidden fixed z-10 right-10"
          @click="showMenu = !showMenu"
          :class="{ 'text-rose-50': showMenu }"
        >
          <Icon
            :name="showMenu ? 'lucide:x' : 'lucide:align-right'"
            :size="60"
          />
        </button>
        <ul
          class="flex flex-col md:flex-row p-20 md:p-0 gap-10 bg-black inset-0 fixed md:bg-transparent md:relative"
          :class="{ 'hidden md:flex': !showMenu }"
        >
          <li v-for="item in menu" :key="item.name">
            <nuxt-link
              :to="item.path"
              :class="'hover:text-rose-50 text-[2.5rem] font-antonio text-rose-50 md:text-black cursor-pointer hover:border-b-4 border-rose-950 relative group'"
              active-class="text-rose-950 border-b-4"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <div
                class="absolute bg-rose-400 inset-0 scale-y-0 transition-all group-hover:scale-y-100 origin-bottom"
              ></div>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="px-14 py-9 grid gap-10">
      <slot />
    </main>
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
