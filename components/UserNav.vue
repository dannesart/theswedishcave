<template>
  <nav v-if="isLogedIn" class="flex sticky top-0 z-50 p-4">
    <div
      class="rounded-full w-fit bg-dark-900 shadow-lg text-brand-50 p-2 px-4 flex justify-end gap-6"
    >
      <DropDown icon="lucide:plus">
        <button
          class="p-2 px-4 w-full text-xl hover:bg-brand-900 text-left rounded-md font-semibold flex items-center gap-4"
        >
          <Icon name="lucide:send" />
          New post
        </button>
        <button
          class="p-2 px-4 w-full text-xl hover:bg-brand-900 text-left rounded-md font-semibold flex items-center gap-4"
          @click="newStoryModal.openModal()"
        >
          <Icon name="lucide:flame" />
          New story
        </button>
      </DropDown>
      <DropDown icon="lucide:user">
        <button
          @click="toggleEdit"
          class="p-2 px-4 w-full text-xl hover:bg-brand-900 text-left rounded-md font-semibold flex items-center gap-4"
        >
          <Icon name="lucide:user-pen" />
          Edit profile
        </button>
        <button
          @click="logOut"
          class="p-2 px-4 w-full text-xl hover:bg-brand-900 text-left rounded-md font-semibold flex items-center gap-4"
        >
          <Icon name="lucide:log-out" />
          Log out
        </button>
      </DropDown>
    </div>
  </nav>
  <Modal ref="newStoryModal">
    <template #header> New story </template>
    <div class="grid gap-6">
      <Input
        :type="'text'"
        :label="'Title'"
        :icon="'lucide:text'"
        :required="true"
        :variant="'dark'"
      />
      <Textarea
        :label="'Story'"
        :icon="'lucide:text'"
        :required="false"
        :variant="'dark'"
      />
      <!-- <Input
        :type="'file'"
        :label="'Image'"
        :icon="'lucide:image'"
        :required="false"
      /> -->
    </div>
    <template #footer>
      <Button @click="createStory()" :loading="creatingNewStory"
        >Create story</Button
      >
    </template>
  </Modal>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const isLogedIn = computed(() => !!user.value);
const logOut = async () => {
  await client.auth.signOut();
};
const newStoryModal = ref();
const creatingNewStory = ref(false);

const toggleEdit = async () => {};

const createStory = () => {
  creatingNewStory.value = true;
};
</script>
