<!-- pages/index.vue -->
<template>
  <div class="bg-black w-full min-h-screen max-w-4xl mx-auto px-4 py-8">
    <Header />

    <main
      class="sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-2 flex flex-col gap-3"
    >
      <About />
      <Skills />
      <Experience />
      <BeyondCoding />
      <RecentProjects />
      <Certificate />
      <Connect />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup></script>
