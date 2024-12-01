<template>
  <div class="bg-black min-h-screen max-w-screen-lg mx-auto">
    <slot />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<style></style>
