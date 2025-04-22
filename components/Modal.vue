<template>
  <dialog
    ref="modal"
    class="modal bg-dark-950 rounded-lg shadow-lg w-11/12 max-w-2xl"
    @click="handleClick"
  >
    <div class="flex flex-col">
      <header class="flex justify-between items-center p-4">
        <Headline :size="3" v-if="$slots.header">
          <slot name="header"></slot>
        </Headline>
        <button
          class="text-xl font-bold text-gray-500 hover:text-gray-700"
          @click="closeModal"
        >
          <Icon name="lucide:x" :size="40" />
        </button>
      </header>
      <main class="p-4">
        <slot> Modal content goes here. </slot>
      </main>
      <footer class="p-4 flex justify-end gap-6">
        <Button @click="closeModal" :variant="'transparent'"> Close </Button>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const modal = ref(null);
const body = () => document.getElementsByTagName("body")[0];

function openModal() {
  modal.value.showModal();
  body().classList.add("overflow-hidden");
}

function closeModal() {
  modal.value.close();
  body().classList.remove("overflow-hidden");
}

const handleClick = (e) => {
  const dialog = modal.value;
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeModal();
  }
};

defineExpose({
  openModal,
});
</script>

<style scoped>
.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}
</style>
