<template>
  <footer
    class="border-t border-gray-600 mt-20 pt-8 px-4 flex justify-between items-center mb-10"
  >
    <p class="text-white text-sm">
      © <span>{{ year }}</span> James Anquillano.
    </p>
    <p class="text-sm">All rights reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
