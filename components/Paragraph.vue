<template>
  <div class="flex flex-col sm:flex-row gap-6 md:gap-16 min-h-56">
    <div class="relative flex flex-col items-center">
      <div class="w-[1px] flex-1 bg-brand-200"></div>
      <div class="w-auto h-24 flex items-center justify-center">
        <Icon :name="'lucide:book-open-text'" size="60" />
      </div>
      <div class="w-[1px] flex-1 bg-brand-200"></div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
