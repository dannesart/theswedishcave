<template>
  <nav
    v-if="isLogedIn"
    class="rounded-full w-fit bg-white shadow-lg text-brand-50 p-2 px-4 flex justify-end top-5 z-50 gap-6 fixed left-1/2"
  >
    <DropDown icon="lucide:plus">
      <button
        class="p-2 px-4 w-full text-xl hover:bg-brand-50 hover:text-black text-left rounded-md font-semibold flex items-center gap-4"
      >
        <Icon name="lucide:send" />
        New post
      </button>
      <button
        class="p-2 px-4 w-full text-xl hover:bg-brand-50 hover:text-black text-left rounded-md font-semibold flex items-center gap-4"
      >
        <Icon name="lucide:flame" />
        New story
      </button>
    </DropDown>
    <DropDown icon="lucide:user">
      <button
        @click="toggleEdit"
        class="p-2 px-4 w-full text-xl hover:bg-brand-50 hover:text-black text-left rounded-md font-semibold flex items-center gap-4"
      >
        <Icon name="lucide:user-pen" />
        Edit profile
      </button>
      <button
        @click="logOut"
        class="p-2 px-4 w-full text-xl hover:bg-brand-50 hover:text-black text-left rounded-md font-semibold flex items-center gap-4"
      >
        <Icon name="lucide:log-out" />
        Log out
      </button>
    </DropDown>
  </nav>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const isLogedIn = computed(() => !!user.value);
const logOut = async () => {
  await client.auth.signOut();
};
const toggleEdit = async () => {};
</script>
