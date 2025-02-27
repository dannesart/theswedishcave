<template>
  <div class="flex flex-col min-h-svh bg-rose-50">
    <header class="px-14 py-9 flex justify-between">
      <div class="text-4xl font-bebas">
        the<br />
        swedish<br />
        cave
      </div>
      <nav>
        <ul class="flex gap-10 font-antonio text-[2.5rem]">
          <li>
            <nuxt-link
              to="/"
              :class="'hover:text-rose-950 cursor-pointer hover:border-b-4 border-rose-950'"
              >Cave</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/campfire"
              :class="'hover:text-rose-950 cursor-pointer hover:border-b-4 border-rose-950'"
              >Campfire</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/heavy-stuff"
              :class="'hover:text-rose-950 cursor-pointer hover:border-b-4 border-rose-950'"
              >Heavy stuff</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/tribe"
              :class="'hover:text-rose-950 cursor-pointer hover:border-b-4 border-rose-950'"
              >Tribe</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="px-14 py-9 grid gap-10">
      <slot />
    </main>
  </div>
</template>
