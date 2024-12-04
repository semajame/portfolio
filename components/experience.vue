<template>
  <div class="bento col-span-2 row-span-2 col-start-3 row-start-1 relative">
    <div class="vertical-line" />
    <h3 class="font-bold flex items-center gap-3">
      <svg
        data-testid="geist-icon"
        height="16"
        stroke-linejoin="round"
        viewBox="0 0 16 16"
        width="16"
        style="color: currentcolor"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z"
          fill="currentColor"
        ></path></svg
      >Experience
    </h3>
    <div class="flex flex-col items-start space-y-8 py-5 text-white">
      <!-- Experience Entry 1 (Latest) -->
      <div
        v-for="(entry, index) in experiences"
        :key="index"
        class="flex items-center space-x-4 w-full group z-10 relative"
      >
        <div class="flex-none">
          <div
            class="w-2.5 h-2.5 bg-black group-hover:bg-gray-300 transition duration-300 border border-gray rounded-full"
          ></div>
          <div
            v-if="!entry.isLast"
            class="h-full border-l-2 border-gray-700 ml-1.5"
          ></div>
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold">{{ entry.title }}</p>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-400">{{ entry.location }}</p>
            <div
              class="border border-gray-500 px-2 py-1 rounded-full flex justify-center items-center gap-1 text-white year"
            >
              {{ entry.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "BS Information Technology",
    location: "Benedicto College",
    year: 2025,
    isLast: false,
  },
  {
    title: "Freelance Front-end Developer",
    location: "Cebu, Mandaue City ",
    year: 2024,
    isLast: false,
  },
  {
    title: "CHED Tour De Tech",
    location: "Bai Hotel",
    year: 2024,
    isLast: false,
  },
  {
    title: "Cebu Interschool Hackathon",
    location: "Cebu Provincial Capitol",
    year: 2024,
    isLast: false,
  },
  {
    title: "Cebu Interschool Hackathon",
    location: "Northwinds Hotel",
    year: 2023,
    isLast: false,
  },
];
</script>
<style lang="scss" scoped></style>
