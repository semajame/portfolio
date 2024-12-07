<template>
  <div class="bg-black w-full min-h-screen max-w-4xl mx-auto px-4 py-8">
    <Header />
    <slot />

    <Footer />
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
