<template>
  <div class="my-5">
    <div class="flex gap-5 justify-between">
      <NuxtLink to="/" class="text-white hover:underline"
        >&larr; Go Back</NuxtLink
      >
      <h1 class="text-white text-xl">All Projects</h1>
    </div>

    <div
      class="sm:my-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-2 flex flex-col gap-3 mt-5"
    >
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.link"
        target="_blank"
        class="bento hover:-translate-y-0.5 transition-all duration-100"
      >
        <h3 class="text-sm font-bold">{{ project.title }}</h3>
        <p class="text-xs my-1">{{ project.description }}</p>
        <p
          class="link text-xs border border-black p-2 bg-black rounded-md mt-2"
        >
          {{ project.displayLink }}
        </p>

        <div class="flex flex-wrap gap-1 mt-2">
          <div
            v-for="(skill, skillIndex) in project.tech.skills"
            :key="skillIndex"
            class="text-xs border border-gray-500 px-2.5 py-1.5 rounded-md hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2 text-white"
          >
            {{ skill }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "#app";

// Set up meta tags for the page
useHead({
  title: "Projects - James", // Set the dynamic page title
  meta: [
    {
      hid: "description", // Use `hid` to ensure meta tags are uniquely identified
      name: "description",
      content:
        "Explore all projects by James, including scheduling apps, e-commerce platforms, and more, built with modern frameworks like Angular, Vue, and Nuxt.", // Add a meaningful description
    },
  ],
});

const projects = [
  {
    title: "Benedicto College Scheduling",
    description: "Online class scheduling",
    link: "https://bc-scheduling-1024.vercel.app/",
    displayLink: "bc-scheduling-1024.vercel.app",
    tech: { skills: ["Angular", "Bootstrap", "Mysql", "Nestjs"] },
  },
  {
    title: "The Greenery",
    description: "Ecommerce",
    link: "https://greenery-ecommerce.vercel.app/",
    displayLink: "greenery-ecommerce.vercel.app",
    tech: {
      skills: ["Vue", "Tailwind"],
    },
  },
  {
    title: "Animal Kingdom",
    description: "Real animal information using api",
    link: "https://wild-kingdom.vercel.app/",
    displayLink: "wild-kingdom.vercel.app",
    tech: {
      skills: ["Nuxt", "Tailwind"],
    },
  },
  {
    title: "CryptoCurrency X",
    description: "Real time crypto updates using api",
    link: "https://crypto-currency-x.vercel.app/",
    displayLink: "crypto-currency-x.vercel.app",
    tech: {
      skills: ["Vue", "Tailwind"],
    },
  },
  {
    title: "Grand Standard",
    description: "Hotel Website",
    link: "https://grand-standard-hotel.vercel.app/",
    displayLink: "grand-standard-hotel.vercel.app",
    tech: {
      skills: ["Vue", "SCSS"],
    },
  },
  {
    title: "Unork Agency",
    description: "Agency Website",
    link: "https://unork-agency-website.vercel.app/",
    displayLink: "unork-agency-website.vercel.app",
    tech: {
      skills: ["Vue", "CSS"],
    },
  },
];
</script>

<style></style>
