<template>
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
    <!-- First Row -->
    <div
      class="col-span-2 row-span-2 rounded-lg aspect-square bg-black/25 overflow-hidden"
    >
      <slot name="large-1" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 gap-4">
      <div
        class="col-span-1 row-span-1 rounded-lg aspect-square bg-black/25 overflow-hidden"
      >
        <slot name="small-1" />
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg aspect-square bg-black/25 overflow-hidden"
      >
        <slot name="small-2" />
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg aspect-square bg-black/25 overflow-hidden"
      >
        <slot name="small-3" />
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg aspect-square bg-black/25 overflow-hidden"
      >
        <slot name="small-4" />
      </div>
    </div>
    <div
      class="col-span-2 row-span-2 rounded-lg aspect-square bg-black/25 overflow-hidden"
    >
      <slot name="large-2" />
    </div>

    <!-- Second Row -->
    <div class="col-span-4 rounded-lg bg-black/25 overflow-hidden">
      <slot name="large-3" />
    </div>
    <div
      class="col-span-2 rounded-lg aspect-square bg-black/25 overflow-hidden"
    >
      <slot name="large-4" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
