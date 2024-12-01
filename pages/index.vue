<!-- pages/index.vue -->
<template>
  <div class="bg-black w-full min-h-screen max-w-4xl mx-auto px-4 py-8">
    <Header />

    <main class="grid grid-cols-3 grid-rows-2 gap-2">
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
