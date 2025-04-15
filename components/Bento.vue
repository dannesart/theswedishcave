<template>
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
    <!-- First Row -->
    <div class="col-span-2 row-span-2 rounded-lg p-4 aspect-square bg-black/25">
      Large 1
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 row-span-2 col-span-2 gap-4">
      <div
        class="col-span-1 row-span-1 rounded-lg p-4 aspect-square bg-black/25"
      >
        Small 1
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg p-4 aspect-square bg-black/25"
      >
        Small 2
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg p-4 aspect-square bg-black/25"
      >
        Small 3
      </div>
      <div
        class="col-span-1 row-span-1 rounded-lg p-4 aspect-square bg-black/25"
      >
        Small 4
      </div>
    </div>
    <div class="col-span-2 row-span-2 rounded-lg p-4 aspect-square bg-black/25">
      Large 2
    </div>

    <!-- Second Row -->
    <div class="col-span-4 rounded-lg p-4 bg-black/25">Large 3</div>
    <div class="col-span-2 rounded-lg p-4 aspect-square bg-black/25">
      Large 4
    </div>
  </div>
</template>
<script setup lang="ts"></script>
