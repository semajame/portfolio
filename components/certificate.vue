<template>
  <div class="bento col-span-2">
    <div class="flex justify-between items-center">
      <h3 class="font-bold flex items-center gap-3">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          ></path>
        </svg>
        Certifications
      </h3>
      <!-- <NuxtLink to="/certificate" class="text-gray-300 text-xs">
        View all ->
      </NuxtLink> -->
    </div>
    <div class="flex gap-2 flex-col mt-3">
      <NuxtLink
        v-for="(event, index) in events"
        :key="index"
        :to="event.link"
        target="_blank"
        class="text-xs border border-black p-2 bg-black rounded-md hover:bg-slate-900 transition duration-150 hover:border-slate-900"
      >
        <h5 class="text-md font-bold">{{ event.title }}</h5>
        <p class="text-xs link">
          {{ event.location }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const events = [
  {
    title: "Tour De Tech",
    location: "Bai Hotel",
    link: "https://drive.google.com/file/d/1hoAnJ9YUP2pLwuGZaG8RGVMrluhM5lFJ/view?usp=drive_link",
  },
  {
    title: "Tour De Tech: Talent Caravan",
    location: "Bai Hotel",
    link: "https://drive.google.com/file/d/1-Sk6AQkyXD6Ta0gtr2nYiHRCW5AaBk5k/view?usp=sharing",
  },
  {
    title: "Cebu ICT Student Congress",
    location: "CTU Main Campus Gym",
    link: "https://certificates.psite7.org/storage/templates/diJO48BX5rT7azLHEurXch3KjJGXxMaGGbxjCod4.jpg",
  },
  {
    title: "Cebu Interschool Hackathon",
    location: "Northwinds Hotel",
    link: "https://drive.google.com/file/d/1-Sk6AQkyXD6Ta0gtr2nYiHRCW5AaBk5k/view?usp=sharing",
  },
  {
    title: "Cebu Interschool Hackathon",
    location: "Cebu Provincial Capitol",
    link: "https://drive.google.com/file/d/1-Sk6AQkyXD6Ta0gtr2nYiHRCW5AaBk5k/view?usp=sharing",
  },
];
</script>

<style></style>
