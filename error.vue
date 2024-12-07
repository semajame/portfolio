<template>
  <div
    class="flex items-center justify-center min-h-screen text-white bg-black gap-5"
  >
    <h1 class="text-lg font-bold link">{{ error.statusCode }}</h1>
    <div class="vl"></div>
    <p class="text-xs font-medium">This page could not be found.</p>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
<style>
.vl {
  border-left: 1px solid gray;
  height: 50px;
}
</style>
